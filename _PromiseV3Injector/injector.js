(function() {
  const JSLoader = Java.type('com.chattriggers.ctjs.engine.langs.js.JSLoader');
  const requireF = JSLoader.class.getDeclaredField('require');
  requireF.setAccessible(true);

  const StrongCachingModuleScriptProvider = Java.type('org.mozilla.javascript.commonjs.module.provider.StrongCachingModuleScriptProvider');
  const UrlModuleSourceProvider = Java.type('org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider');
  const ModuleManager = Java.type('com.chattriggers.ctjs.engine.module.ModuleManager');
  const ModuleSource = Java.type('org.mozilla.javascript.commonjs.module.provider.ModuleSource');
  const StringReader = Java.type('java.io.StringReader');
  const StringWriter = Java.type('java.io.StringWriter');
  const JArray = Java.type('java.lang.reflect.Array');
  const Character = Java.type('java.lang.Character');
  const ArrayList = Java.type('java.util.ArrayList');
  const Paths = Java.type('java.nio.file.Paths');
  const Files = Java.type('java.nio.file.Files');
  // const StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
  const Collectors = Java.type('java.util.stream.Collectors');
  const BufferedWriter = Java.type('java.io.BufferedWriter');
  const FileWriter = Java.type('java.io.FileWriter');

  const ScriptEngineManager = Java.type('javax.script.ScriptEngineManager');
  const ClassLoader = Java.type('java.lang.ClassLoader');
  const nashorn = new ScriptEngineManager(ClassLoader.getSystemClassLoader()).getEngineByName('nashorn');
  if (!nashorn) throw 'cannot find nashorn';

  // nashorn fails on the minified version and frankly idc enough
  const transformCode = Files.lines(Paths.get('./config/ChatTriggers/modules/_PromiseV3Injector/dist.js')).collect(Collectors.joining('\n'));
  nashorn.eval('var exports = {};');
  nashorn.eval('var BigInt = {};');
  nashorn.eval(transformCode);

  const l1 = new ArrayList();
  l1.add(ModuleManager.INSTANCE.getModulesFolder().toURI());
  const l2 = new ArrayList();
  const sourceProvider = new JavaAdapter(UrlModuleSourceProvider, {
    loadFromActualUri(uri, base, validator) {
      const src = this.super$loadFromActualUri(uri, base, validator);
      if (!src || src === this.super$NOT_MODIFIED) return src;

      const moduleData = uri.getPath().match(/config\/ChatTriggers\/modules\/([^/]+)\/(.+?)$/i);
      if (!moduleData) return src;
      const moduleName = moduleData[1];
      const filePath = moduleData[2];
      if (!ModuleManager.INSTANCE.getCachedModules().find(v => v.getName().toLowerCase() === moduleName)?.getMetadata()?.getRequires()?.some(v => v.toLowerCase() === 'promisev3')) return src;

      const reader = src.getReader();
      const writer = new StringWriter();
      const buffer = JArray.newInstance(Character.TYPE, 2048);
      let n;
      while ((n = reader.read(buffer)) !== -1) {
        writer.write(buffer, 0, n);
      }

      const str = writer.toString();
      const modified = nashorn.invokeFunction('transform', str);

      // has to be on same "level" otherwise fucks up relative resolves e.g. `require('../PromiseV3')`
      // const outPath = Paths.get(`./config/ChatTriggers/modules/PromiseV3_Output/${moduleName}/${filePath}`);
      const outPath = Paths.get(`./config/ChatTriggers/modules/${moduleName}_PromiseV3_Output/${filePath}`);

      Files.createDirectories(outPath.getParent());
      try {
        var bufWriter = new BufferedWriter(new FileWriter(outPath));
        bufWriter.write(modified);
      } finally {
        bufWriter.close();
      }
      // rhino is bitching
      // Files.write(outPath, modified, StandardCharsets.UTF_8);

      return new ModuleSource(
        new StringReader(modified),
        src.getSecurityDomain(),
        outPath.toUri(),
        null,
        src.getValidator()
      );
    }
  }, l1, l2);

  const moduleProvider = new StrongCachingModuleScriptProvider(sourceProvider);
  const newRequire = new JSLoader.CTRequire(moduleProvider);

  requireF.set(null, newRequire);
})();
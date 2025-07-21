import transform from './dist.js';

export default function() {
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

  const l1 = new ArrayList();
  l1.add(ModuleManager.INSTANCE.getModulesFolder().toURI());
  const l2 = new ArrayList();
  const sourceProvider = new JavaAdapter(UrlModuleSourceProvider, {
    loadFromActualUri(uri, base, validator) {
      const src = this.super$loadFromActualUri(uri, base, validator);
      if (!src || src === this.super$NOT_MODIFIED) return src;

      const moduleName = uri.getPath().match(/config\/ChatTriggers\/modules\/([^/]+)\//i)?.[1]?.toLowerCase();
      if (!moduleName) return src;
      if (!ModuleManager.INSTANCE.getCachedModules().find(v => v.getName().toLowerCase() === moduleName)?.getMetadata()?.getRequires()?.some(v => v.toLowerCase() === 'promisev3')) return src;

      const reader = src.getReader();
      const writer = new StringWriter();
      const buffer = new JArray.newInstance(Character.TYPE, 2048);
      let n;
      while ((n = reader.read(buffer)) !== -1) {
        writer.write(buffer, 0, n);
      }

      const str = writer.toString();
      const modified = transform(str);

      return new ModuleSource(new StringReader(modified), src.getSecurityDomain(), src.getUri(), src.getBase(), src.getValidator());
    }
  }, l1, l2);

  const moduleProvider = new StrongCachingModuleScriptProvider(sourceProvider);
  const newRequire = new JSLoader.CTRequire(moduleProvider);

  requireF.set(null, newRequire);
}
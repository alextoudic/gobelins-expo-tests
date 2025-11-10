// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.includes("zustand")) {
    const result = require.resolve(moduleName); // gets CommonJS version
    return context.resolveRequest(context, result, platform);
  }
  // otherwise chain to the standard Metro resolver.
  return context.resolveRequest(context, moduleName, platform);
};



module.exports = config;

const fs = require('fs');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  serializer: {
    createModuleIdFactory: function () {
      // map of module paths to their Ids
      const fileToIdMap = {};

      const projectRootPath = __dirname;
      let nextId = 0;

      // create fileToIdMap file so that it can be used in metro.business.config
      const MAP_FILE = 'fileToIdMap.txt';
      if (fs.existsSync(MAP_FILE)) {
        // delete file if exists
        fs.unlinkSync(MAP_FILE);
      }
      return function (path) {
        // Based on the relative path of the file
        const modulePath = path.substr(projectRootPath.length + 1);

        let moduleId = fileToIdMap[modulePath];
        if (typeof moduleId !== 'number') {
          moduleId = nextId++;
          fileToIdMap[modulePath] = moduleId;
          fs.appendFileSync(MAP_FILE, `${modulePath}:${moduleId}\n`);
        }
        return moduleId;
      };
    },
  },
};
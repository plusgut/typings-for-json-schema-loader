const compile = require('json-schema-to-typescript').compile;
const fs = require('fs');

module.exports = function(content) {
  const schema = JSON.parse(content);

  compile(schema).then((typing) => {
    fs.writeFileSync(this.resourcePath + '.d.ts' , typing);
  });
  return content;
};

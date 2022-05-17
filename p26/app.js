const cypher = require('./cypher.js');

module.exports = {
  encrpyt: cypher.encrypt,
  decrypt: cypher.decrypt,
};

const fs = require("fs");
const {encryptedCredentialsPath} = require("./configs");

module.exports = () => {
  let credentials = {};
  const rawData = fs.readFileSync(encryptedCredentialsPath);
  credentials = JSON.parse(rawData);
  return credentials;
}

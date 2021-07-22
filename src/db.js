//Simple JSON file storage
"use strict";
const Conf = require('conf');
const path = require("path");

//todo prompt user
const secret = "fakesecret";

const db = new Conf({
  encryptionKey: secret + "ZE7sdmpNWjRRIqCc7rvxs12lwHzfr4",
  cwd: path.resolve(process.env.invokedFrom || "C:\\Users\\Alex\\Desktop\\Sage50 fake\\Client1\\Autres"),
  configName: "encrypted",
  fileExtension: "json",
  clearInvalidConfig: false,
});

module.exports = {

  getCredentials: () => {
    return db.get("credentials");
  },

  saveCredentials: (credentials) => {
    if (!credentials || typeof credentials !== "object") {
      throw new Error("(credentials) param must be of type object got: " + typeof credentials);
    }
    db.set("credentials", credentials);
  },

};

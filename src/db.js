"use strict";
const Conf = require('conf');
const path = require("path");

//todo prompt user
const secret = "test-secret";

const db = new Conf({
  encryptionKey: secret + "ZE7sdmpNWjRRIqCc7rvxs12lwHzfr4",
  cwd: path.resolve(process.env.invokedFrom || "C:\\Users\\Alex\\Desktop\\Sage50 fake\\Client1\\Autres"),
  configName: "encrypted",
  clearInvalidConfig: false,
})

module.exports = {

  getCredentials: () => {
    return db.get("credentials");
  },

  saveCredentials: (credentials, encryptSecret) => {
    if (!credentials || typeof credentials !== "object") {
      throw new Error("(credentials) param must be of type object got: " + typeof credentials);
    }
    db.set("credentials", credentials);
  },

};
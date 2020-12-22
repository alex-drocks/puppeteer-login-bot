"use strict";
module.exports = {
  gouvQc: {
    clicSequr: {
      entreprises: {
        url: "https://entreprises.revenuquebec.ca/EntPres/SX/SX00/sx00.Portail.PIU/SX00A01/?CLNG=F",
        selector: {
          username: "#AuthUtilisateur1_Authentificationidpwd1_txtCodeUtils",
          password: "#AuthUtilisateur1_Authentificationidpwd1_txtMotPasse",
          loginBtn: "#AuthUtilisateur1_rubBouton_btnContinuer",
        },
      },
      express: {
        url: "https://entreprises.revenuquebec.ca/EntPresCSX/SX/SX00/SX00.ChoixServices.CSX.PIU/SX00H07?CLNG=F",
        selector: {
          username: "#ctl00_PagePrincipale_AuthUtilisateur1_txtNEQ",
          password: "#ctl00_PagePrincipale_AuthUtilisateur1_txtCodeAccesNEQ",
          loginBtn: "#ctl00_PagePrincipale_AuthUtilisateur1_btnDebuterAvecNEQ",
        },
      },
    },
  },
};

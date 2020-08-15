var getFirebase = require("./../firebaseConfig.js");

var database = getFirebase()

const checkLogin = (req, res) => {
  const credenciais = req.body;
  return database.ref('/logins/' + credenciais.login).once('value').then(function (snapshot) {
    var usuarioEncontrado = snapshot.exists() ? true : false;
    if (!usuarioEncontrado) return res.json({ result: false });
    if (snapshot.val() !== credenciais.senha) {
      return res.json({ result: false });
    } else {
      return res.json({ result: usuarioEncontrado });
    }
  })
}

module.exports = (checkLogin);
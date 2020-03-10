const bcrypt = require('bcrypt');

const auth = require('../../../auth');
const TABLA = 'auth'

module.exports = function(injectredStore) {
  let store = injectredStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  async function login(username, password) {
    const data = await store.query(TABLA, {username: username});
    return bcrypt.compare(password, data.password)
        .then(equals => {
          if (equals) {
            //Generar token;
            console.log("generando token");
            const token = auth.sign({...data})
            console.log(token);
            return token;
          } else {
            throw new Error('Información inválida');
          }
        })
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    }

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
    login,
  }
}

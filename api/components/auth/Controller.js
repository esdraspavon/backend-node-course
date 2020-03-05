const TABLA = 'auth'

module.exports = function(injectredStore) {
  let store = injectredStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  async function login(username, password) {
    const data = await store.query(TABLA, {username: username});
    if (data.password === password) {
      //Generar token;
      return 'TOKEN';
    } else {
      throw new Error('Información inválida');
    }
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    }

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
    login,
  }
}

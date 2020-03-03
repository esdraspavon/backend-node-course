const TABLA = 'user';

module.exports = function (injectredStore){
  let store = injectredStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  function list() {
    return store.list(TABLA);
  }
  function get(id) {
    return store.get(TABLA, id);
  }
  
  return {
    list,
    get,
  }
}
// module.exports = {
//   list,
// }



const TABLA = "post";

module.exports = function(injectredStore) {
    let store = injectredStore;
    if (!store) {
    store = require("../../../store/dummy");
    }
    function list() {
        return store.list(TABLA);
    }

    return {
        list,
    }
}
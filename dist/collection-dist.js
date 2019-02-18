var Collection = function () {
  var items = []

  function add (item) {
    items.push(item)
  }

  function clear () {
    items.length = 0
  }

  function get (index) {
    return items[index]
  }

  function getCount () {
    return items.length
  }

  var exports = {
    add: add,
    clear: clear,
    get: get
  }

  Object.defineProperty(exports, 'count', {
    get: getCount,
    enumerable: true,
    configurable: false
  })

  return exports
}
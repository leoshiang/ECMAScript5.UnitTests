function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function defineProperty (target, name, getter, setter) {
  var descriptor = {
    enumerable: true,
    configurable: false
  }

  if (getType(getter) === 'Function') {
    descriptor.get = getter
  }

  if (getType(setter) === 'Function') {
    descriptor.set = setter
  }

  Object.defineProperty(target, name, descriptor)
}

/* global defineProperty */
var Collection = function (initItems) {
  var items = initItems || []

  function add (item) {
    items.push(item)
    return this
  }

  function clear () {
    items.length = 0
    return this
  }

  function forEach (callback) {
    items.forEach(callback)
    return this
  }

  function get (index) {
    if ((index < 0) || (index > items.length)) {
      throw new Error(
        'Index (' + index + ') out of range(0,' + items.length + ').')
    }

    return items[index]
  }

  function join (separator) {
    return items.join(separator || ',')
  }

  function getCount () {
    return items.length
  }

  var exports = {
    add: add,
    clear: clear,
    forEach: forEach,
    get: get,
    join: join
  }

  defineProperty(exports, 'count', getCount)

  return exports
}
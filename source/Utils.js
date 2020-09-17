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

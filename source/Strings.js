/* global Collection */
var Strings = function () {
  var lines = Collection()

  function parse (source, separator) {
    var lines = Collection()
    source.split(separator || ',').forEach(function (line) {
      lines.add(line)
    })

    return lines
  }

  function toString (separator) {
    return lines.join(separator || ',')
  }

  var exports = {
    parse: parse,
    lines: lines,
    toString: toString
  }

  return exports
}

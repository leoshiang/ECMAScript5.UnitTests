QUnit.module('Collection', function () {
  QUnit.module('constructor', function () {
    QUnit.test(
      '建立兩個不同的 Collection，加入不同數量的資料，兩個 Collection 應該不相同', function (assert) {
        var collection1 = Collection()
        collection1.add(1).add(2).add(3)

        var collection2 = Collection()
        collection2.add(4).add(5)

        assert.equal(collection1.count, 3)
        assert.equal(collection1.get(0), 1)
        assert.equal(collection1.get(1), 2)
        assert.equal(collection1.get(2), 3)

        assert.equal(collection2.count, 2)
        assert.equal(collection2.get(0), 4)
        assert.equal(collection2.get(1), 5)
      })
  })

  QUnit.module('add', function () {
    QUnit.test('加入 1 個項目，第 0 個項目應為加入的項目', function (assert) {
      var collection = Collection()

      var expected = 'something'
      collection.add(expected)

      assert.equal(collection.count, 1)
      assert.equal(collection.get(0), expected)
    })
  })

  QUnit.module('clear', function () {
    QUnit.test('無資料，清除之後長度應等於 0', function (assert) {
      var collection = Collection()
      collection.clear()

      assert.equal(collection.count, 0)
    })

    QUnit.test('加入 1 個項目，清除之後長度應等於 0', function (assert) {
      var collection = Collection()
      collection.add('something')
      collection.clear()

      assert.equal(collection.count, 0)
    })
  })

  QUnit.module('get', function () {
    QUnit.module('無資料', function () {

      QUnit.test('索引值小於 0，應拋出例外', function (assert) {
        var collection = Collection()
        assert.throws(function () {
          var item = collection.get(-1)
        }, function (error) {
          return error instanceof Error
        })
      })

      QUnit.test('索引值大於 0，應拋出例外', function (assert) {
        var collection = Collection()
        assert.throws(function () {
          var item = collection.get(1)
        }, function (error) {
          return error instanceof Error
        })
      })
    })

    QUnit.module('有資料', function () {
      QUnit.test('索引值小於 0，應拋出例外', function (assert) {
        var collection = Collection()
        collection.add(123)
        assert.throws(function () {
          var item = collection.get(-1)
        }, function (error) {
          return error instanceof Error
        })
      })

      QUnit.test('索引值大於 1，應拋出例外', function (assert) {
        var collection = Collection()
        collection.add(123)
        assert.throws(function () {
          var item = collection.get(2)
        }, function (error) {
          return error instanceof Error
        })
      })
    })
  })
})
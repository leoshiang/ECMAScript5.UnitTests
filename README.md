# ECMAScript5.UnitTests
ES5 樣板專案，包含單元測試 QUnit、覆蓋率 Karma

# 必備軟體

[yarn](https://yarnpkg.com/zh-Hans/ )

# 安裝

將專案複製到本機

> git clone https://github.com/leoshiang/ECMAScript5.UnitTests

開啟命令列模式，切換到本機的專案案目錄，輸入以下指令

> yarn install

# 建置

>  yarn build

# 單元測試

單元測試有兩種方式

## QUnit 網頁

開啟 tests\index.htm 即可顯示 QUnit 測試結果。

## 指令模式

在專案根目錄輸入指令 `yarn test`

> 注意：QUnit 網頁模式是使用 dist 目錄的檔案，如果 source 有修改，一定要先執行 yarn build 才能跑單元測試

# 覆蓋率

執行過單元測試之後，覆蓋率資料會產生在`reports\coverage-lcov\PhantomJS 2.1.1 (Windows 8.0.0)\lcov-report`，請開啟 index.htm
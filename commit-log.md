#### 01. feat(init): ng new wangduorourou

#### 02. feat(init): config file

#### 03. feat(first-test): ng g c first-test --prefix kjf
    ng g m test-module
    ng g c test-module/first-test --prefix kjf

#### 04. feat(ng-packagr): npm install -D ng-packagr
    npm install -D ng-packagr

#### 05. feat(build): package first ng lib
    ng g library @kjf/first-ng-lib --prefix kjf

    // 1. 编译Lib库
    // 说明: @kjf/first-ng-lib 是你的Lib库的名字
    // 编译的结果会放到dist/kjf/first-ng-lib目录下(在package.json文件中配置)
        "build-first-ng-lib": "ng build @kjf/first-ng-lib",
    // 2. 将编译之后的Lib库打包
    // 说明: `npm pack`会将你编译之后的代码打包成.tgz文件
        "pack-first-ng-lib": "cd dist/kjf/first-ng-lib && npm pack",
    // 3. 在宿主工程中安装刚刚打包好的Lib库
    // 说明: 宿主工程作为测试用的工程, 本地安装刚打包好的Lib库即可
        "install-first-ng-lib": "npm i ./dist/kjf/first-ng-lib/kjf-first-ng-lib-0.0.1.tgz",
    
    // 整合之后的命令: 最终只需要执行这一个命令即可
    // 说明: 每次Lib库有修改, 都需要重新执行这个命令
        "package-first-ng-lib": "npm run build-first-ng-lib && npm run pack-first-ng-lib && npm run install-first-ng-lib",

#### 06. feat(@kjf/first-ng-lib): done with first ng lib

#### 07. feat(@kjf/first-ng-lib): static resource
                    "assets": [
                      "src/favicon.ico",
                      "src/assets",
                      {
                        "glob": "**/*",
                        "input": "node_modules/@kjf/first-ng-lib/assets",
                        "output": "assets"
                      }
                    ],
                    "styles": [
                      "src/styles.scss",
                      "node_modules/@kjf/first-ng-lib/theme/first-ng-lib.theme.scss"
                    ],
    angular.json 中需要添加

#### 07. feat(@kjf/first-ng-lib): static resource
        设置淘x,宝的是：
        npm config set registry https://registry.npm.taobao.org
        不想用他们的，再设置回原来的就可以了：
        npm config set registry https://registry.npmjs.org

    >npm config list
    >npm adduser

# Lerna 的使用

[lerna 官网](https://github.com/lerna/lerna)

## 创建 lerna 包

`yarn lerna create <name>`

[lerna create 命令参考](https://github.com/lerna/lerna/tree/master/commands/create#readme)

## 为 lerna 包添加依赖

`yarn lerna add <package>`

[lerna add 命令参考](https://github.com/lerna/lerna/tree/master/commands/add#readme)

## 自定义版本号并发布该版本

1. 指定需要发布包的版本号，该命令`<version>`可以改成所需要版本号，`<package>`改成需要的发布的包名

`yarn lerna version <version> --force-publish=<package> --no-git-tag-version`

2. 发布到 npm 仓库

`yarn lerna publish from-package --force-publish`

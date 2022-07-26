# 资产类型

## 关于资产类型

资产类型是 Unreal 中一个非常重要的概念。通过自定义资产类型，可以实现以下需求：

- 优化开发流程和工程结构
- 自定义便于与中间件或其他外部软件通信的格式
- 优化游戏运行时资源加载和卸载

本文暂不讨论资产的高级用法。

得益于 Unreal 较为优秀的接口设计，开发者可以自由地通过插件为引擎添加自定义资产类型。

## 资产类型的定义与实现

Unreal 资产类型实现一般涉及以下接口和类：

- `UObject`：用于存储资产类型实际内容的容器
- `UFactory`：实现资产类型在编辑器中实例化的类
- `IAssetTypeActions`：描述资产类型在编辑器中名称、缩略图等各种属性的接口
- `FAssetEditorToolkit`: 资产编辑器的基类，继承该类可实现自定义的资产属性编辑器

## 本章介绍

本章将从以上 4 个接口和类出发，介绍如何在 Unreal 中自定义一个简单的资产类型。

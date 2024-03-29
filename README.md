<p align="center">
<img src="//mars3d.cn/logo.png" width="300px" />
</p>
 
<p align="center">基于uni-app技术栈的 Mars3D🌎最简项目模板</p>

<p align="center">
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
    <img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=版本号" />
  </a>
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
    <img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm&label=下载量" />
  </a>
  <a target="_black" href="https://github.com/marsgis/mars3d">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github" />
  </a>
  <a target="_black" href="https://gitee.com/marsgis/mars3d">
    <img src="https://gitee.com/marsgis/mars3d/badge/star.svg?theme=dark" alt="star" />
  </a>
</p>

 
 
## 如何使用？
使用` HBuilder X`打开项目即可。【特别说明：暂不支持APP，只支持H5或webviewx】

> 如果您使用vue3技术栈，也可以使用vue技术栈[mars3d-vue-app](https://gitee.com/marsgis/mars3d-vue-app)开源项目模版进行开发，并使用HBuilderX打包安卓app或苹果APP


 
## 常见问题

### 1. HbuilderX运行到手机上的就可以看到地图(自定义基座), 如果是打包后的apk安装到手机上的地图就是白屏

可能的原因：
- 资源用了本地file:协议的文件，Cesium不支持加载或加载出问题了；
- 选择云打包中的快速打包可能造成部分JS丢失的问题，选择传统打包可以出现地图(有用户反馈此方式解决的)；
- 需要改下lib.5plus.base-release.aar 基座代码，在WebviewActivity.java 中设置webView时加下允许跨域；




## 视频讲解

建议先看一遍视频讲解，再实际操作，您可以[新页面查看高清视频](https://www.bilibili.com/video/BV18F41157qR/)


 
## Mars3D 是什么 
>  `Mars3D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

 > Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站 
- Mars3D官网：[http://mars3d.cn](http://mars3d.cn)  

- Mars3D开源项目列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)


## 版权说明
1. Mars3D平台由[火星科技](http://marsgis.cn/)自主研发，拥有所有权利。
2. 任何个人或组织可以在遵守相关要求下可以免费无限制使用。

# mars3d
  Mars3D ( MarsGIS for Cesium ) 地图平台核心SDK类库


## Mars3D介绍
  `Mars3D三维地球平台软件` 是一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

## 相关网站
[产品介绍手册](http://mars3d.cn/docs/file/cpjs.pdf)  
[Mars3D官网](http://mars3d.cn)  
[GitHub开源](https://github.com/marsgis/mars3d)

 

## 版本信息
   具体版本号及版本日期等信息，请在浏览器 F12控制台 查看打印值 
 

## 相关依赖
 核心依赖库： Cesium   
 部分依赖库（非必须）： 
    turf（仅部分功能中使用以下6个方法：`area 求面积, rhumbBearing 求角度,  bezierSpline 计算曲线,buffer 缓冲分析,centerOfMass 计算中心点, booleanPointInPolygon 判断点在面内`）  
 

子目录说明： plugins 所有基于ceisum或mars3d的一些扩展功能插件或类(每个子目录都有readme进行说明)。

## 📄 版权说明 / License

Mars3D SDK采用 **“社区免费版 + 商业授权版” 双重授权**。

[![License](https://img.shields.io/badge/license-Apache--2.0%20%2B%20Mars3D%20Additional%20Terms-blue)](./LICENSE)

- **社区免费版**：基于 **Apache License 2.0**，并附加《Mars3D 免费版
  附加条款》。您可以免费用于学习、开发与商业项目，但**必须保留**
  软件运行时页面周边的 **Mars3D Logo** 及浏览器 **F12 控制台**输出的
  版权信息，**不得移除、遮挡、修改或通过任何技术手段规避**。
- **商业授权版**：付费后可**去除页面 Logo**，F12 控制台信息替换为
  贵单位 / 项目名称，并提供盖章授权文件、专属技术支持与缺陷修复
  服务；**不限制项目数、节点数、用户数和使用期限**，按 SDK 大版本
  授权。

| | 社区免费版 | 商业授权版 |
| --- | --- | --- |
| 页面 Logo | ✅ 必须保留 | ❌ 已移除 |
| F12 控制台信息 | 通用版权信息（须保留） | 显示贵单位名称 |
| 授权费用 | 免费 | 按大版本一次性付费 |
| 数量 / 期限限制 | 无 | 无 |
| 商业交付 / 招投标 | 须保留署名 | 提供盖章授权，合规无忧 |

📘 完整协议：[`LICENSE`](./LICENSE) ｜ [购买授权](https://mall.marsgis.cn)

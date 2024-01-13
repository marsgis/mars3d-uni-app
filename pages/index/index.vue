<template>
  <view class="content">
    <!-- #ifdef APP-PLUS || H5 -->
    <div id="mars3dContainer" class="mars3d-container"></div>
    <!-- #endif -->
    <!-- #ifndef APP-PLUS || H5 -->
    <web-view :src="url"></web-view>
    <!-- #endif -->
  </view>
</template>

<script module="mars3d" lang="renderjs">
import { mapOptions } from './config.js'
// 添加 replaceAll 的 polyfill 有些安卓机的 js 引擎没有这个 api
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {

    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);

  };
}
export default {
	data() {
		return {
			url: 'http://mars3d.cn/project/app/'
		}
	},
	mounted() {
		this.loadSource([
			//用本地地址，并可以官网下载最新包，手动覆盖下，http://mars3d.cn/download.html
			// "static/lib/Cesium/Widgets/widgets.css",
			// "static/lib/Cesium/Cesium.js",
			// "static/lib/mars3d/mars3d.css",
			// "static/lib/mars3d/mars3d.js",
			//用在线地址
			"http://mars3d.cn/lib/Cesium/Widgets/widgets.css",
			"http://mars3d.cn/lib/Cesium/Cesium.js",
			"http://mars3d.cn/lib/mars3d/mars3d.css",
			"http://mars3d.cn/lib/mars3d/mars3d.js", 
		]).then(() => {
			this.createMap()
		})
	},
	methods: {
		//创建地图
		createMap() {
			var map = new mars3d.Map('mars3dContainer', mapOptions);
			console.log("map构造完成", map)
		},

		// 加载资源
		loadSource(loadQueen) {
			const stepOne = (resolve) => {
				if (loadQueen.length) {
					const dep = loadQueen.shift()

					let loader
					if (dep.endsWith(".css")) {
						loader = this.loadLink(dep)
					} else {
						loader = this.loadScript(dep)
					}

					loader.then(() => {
						stepOne(resolve)
					})
				} else {
					resolve(true)
				}
			}

			return new Promise((resolve) => {
				stepOne(resolve)
			})
		},

		// 加载scrpit
		loadScript(src, async = true) {
			const $script = document.createElement("script")
			$script.async = async
			$script.src = src
			document.body.appendChild($script)
			return new Promise((resolve, reject) => {
				$script.onload = () => {
					resolve(true)
				}
			})
		},

		// 加载scrpit
		loadLink(src) {
			const $link = document.createElement("link")
			$link.rel = "stylesheet"
			$link.href = src
			document.head.appendChild($link)
			return new Promise((resolve, reject) => {
				$link.onload = () => {
					resolve(true)
				}
			})
		}

	}
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

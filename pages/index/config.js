export const mapOptions = {
  scene: {
    center: {
      lat: 31.686288,
      lng: 117.229619,
      alt: 11333.9,
      heading: 359.2,
      pitch: -39.5
    },
    scene3DOnly: false,
    shadows: false,
    removeDblClick: true,
    sceneMode: 3,
    showSun: true,
    showMoon: true,
    showSkyBox: true,
    showSkyAtmosphere: false,
    fog: false,
    fxaa: true,
    requestRenderMode: false,
    globe: {
      depthTestAgainstTerrain: false,
      baseColor: "#546a53",
      showGroundAtmosphere: false,
      enableLighting: false
    },
    contextOptions: {
      requestWebgl1: true
    },
    cameraController: {
      zoomFactor: 4.0,
      minimumZoomDistance: 1,
      maximumZoomDistance: 50000000,
      enableRotate: true,
      enableTranslate: true,
      enableTilt: true,
      enableZoom: true,
      enableCollisionDetection: true,
      minimumCollisionTerrainHeight: 15000
    }
  },
  control: {
    homeButton: true,
    baseLayerPicker: false,
    sceneModePicker: true,
    vrButton: false,
    fullscreenButton: true,
    navigationHelpButton: true,
    animation: false,
    timeline: false,
    infoBox: false,
    geocoder: false,
    selectionIndicator: false,
    zoom: {
      insertIndex: 1
    },
    locationBar: {
      crs: "CGCS2000_GK_Zone_3",
      crsDecimal: 0,
      template:
        "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div class='hide1000'>横{crsx}  纵{crsy}</div> <div>海拔：{alt}米</div> <div class='hide700'>层级：{level}</div><div>方向：{heading}°</div> <div>俯仰角：{pitch}°</div><div class='hide700'>视高：{cameraHeight}米</div>"
    }
  },
  templateValues: {
    dataServer: "http://data.mars3d.cn",
    gltfServerUrl: "http://data.mars3d.cn/gltf"
  },
  terrain: {
    url: "http://data.mars3d.cn/terrain",
    show: true
  },
  basemaps: [
    {
      id: 10,
      name: "地图底图",
      type: "group"
    },
    {
      id: 2021,
      pid: 10,
      name: "天地图影像",
      icon: "img/basemaps/tdt_img.png",
      type: "group",
      layers: [
        {
          name: "底图",
          type: "tdt",
          layer: "img_d"
        },
        {
          name: "注记",
          type: "tdt",
          layer: "img_z"
        }
      ],
      show: true
    },
    {
      pid: 10,
      name: "天地图电子",
      icon: "img/basemaps/tdt_vec.png",
      type: "group",
      layers: [
        {
          name: "底图",
          type: "tdt",
          layer: "vec_d"
        },
        {
          name: "注记",
          type: "tdt",
          layer: "vec_z"
        }
      ]
    },
    {
      pid: 10,
      name: "高德影像",
      type: "group",
      icon: "img/basemaps/gaode_img.png",
      layers: [
        {
          name: "底图",
          type: "gaode",
          layer: "img_d"
        },
        {
          name: "注记",
          type: "gaode",
          layer: "img_z"
        }
      ]
    },
    {
      pid: 10,
      name: "高德电子",
      type: "gaode",
      icon: "img/basemaps/gaode_vec.png",
      layer: "vec"
    },
    {
      pid: 10,
      name: "百度影像",
      type: "group",
      icon: "img/basemaps/bd-img.png",
      layers: [
        {
          name: "底图",
          type: "baidu",
          layer: "img_d"
        },
        {
          name: "注记",
          type: "baidu",
          layer: "img_z"
        }
      ]
    },
    {
      pid: 10,
      name: "百度电子",
      icon: "img/basemaps/bd-vec.png",
      type: "baidu",
      layer: "vec"
    },
    {
      pid: 10,
      name: "腾讯影像",
      icon: "img/basemaps/tencent_img.png",
      type: "group",
      layers: [
        {
          name: "底图",
          type: "tencent",
          layer: "img_d"
        },
        {
          name: "注记",
          type: "tencent",
          layer: "img_z"
        }
      ]
    },
    {
      pid: 10,
      name: "腾讯电子",
      icon: "img/basemaps/tencent_vec.png",
      type: "tencent",
      layer: "vec"
    },
    {
      pid: 10,
      name: "ArcGIS影像",
      icon: "img/basemaps/esriWorldImagery.png",
      type: "xyz",
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      enablePickFeatures: false
    },
    {
      pid: 10,
      name: "微软影像",
      icon: "img/basemaps/bingAerial.png",
      type: "bing",
      layer: "Aerial"
    },
    {
      id: 2017,
      pid: 10,
      name: "蓝色底图",
      icon: "/img/basemaps/bd-c-midnight.png",
      type: "gaode",
      layer: "vec",
      chinaCRS: "GCJ02",
      invertColor: true,
      filterColor: "#4e70a6",
      brightness: 0.6,
      contrast: 1.8,
      gamma: 0.3,
      hue: 1,
      saturation: 0
    },
    {
      pid: 10,
      name: "黑色底图",
      icon: "/img/basemaps/bd-c-dark.png",
      type: "gaode",
      layer: "vec",
      chinaCRS: "GCJ02",
      invertColor: true,
      filterColor: "#909090",
      brightness: 0.6,
      contrast: 1.8,
      gamma: 0.3,
      hue: 1,
      saturation: 0
    },
    {
      pid: 10,
      name: "离线影像地图 (供参考)",
      icon: "/img/basemaps/google_img.png",
      type: "xyz",
      url: "{dataServer}/tile/img/{z}/{x}/{y}.jpg",
      chinaCRS: "GCJ02",
      maximumLevel: 13
    },
    {
      pid: 10,
      name: "单张图片 (本地离线)",
      icon: "img/basemaps/offline.png",
      type: "image",
      url: "http://data.mars3d.cn/file/img/world/world.jpg"
    }
  ],
  layers: [
    {
      id: 99,
      name: "数据图层",
      type: "group"
    }
  ]
}

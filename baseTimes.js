// Data from http://www.fina.org/content/fina-points
// Json data created with https://shancarter.github.io/mr-data-converter/ - JSON Properties
var baseTimes = [{"course":"SCM","gender":"M","relay":1,"distance":50,"stroke":"FREE","basetime":20.26},
{"course":"SCM","gender":"M","relay":1,"distance":100,"stroke":"FREE","basetime":44.94},
{"course":"SCM","gender":"M","relay":1,"distance":200,"stroke":"FREE","basetime":99.37},
{"course":"SCM","gender":"M","relay":1,"distance":400,"stroke":"FREE","basetime":212.25},
{"course":"SCM","gender":"M","relay":1,"distance":800,"stroke":"FREE","basetime":443.42},
{"course":"SCM","gender":"M","relay":1,"distance":1500,"stroke":"FREE","basetime":850.1},
{"course":"SCM","gender":"M","relay":1,"distance":50,"stroke":"BACK","basetime":22.22},
{"course":"SCM","gender":"M","relay":1,"distance":100,"stroke":"BACK","basetime":48.94},
{"course":"SCM","gender":"M","relay":1,"distance":200,"stroke":"BACK","basetime":106.11},
{"course":"SCM","gender":"M","relay":1,"distance":50,"stroke":"BREAST","basetime":25.25},
{"course":"SCM","gender":"M","relay":1,"distance":100,"stroke":"BREAST","basetime":55.61},
{"course":"SCM","gender":"M","relay":1,"distance":200,"stroke":"BREAST","basetime":120.48},
{"course":"SCM","gender":"M","relay":1,"distance":50,"stroke":"FLY","basetime":21.8},
{"course":"SCM","gender":"M","relay":1,"distance":100,"stroke":"FLY","basetime":48.44},
{"course":"SCM","gender":"M","relay":1,"distance":200,"stroke":"FLY","basetime":108.56},
{"course":"SCM","gender":"M","relay":1,"distance":200,"stroke":"MEDLEY","basetime":109.63},
{"course":"SCM","gender":"M","relay":1,"distance":400,"stroke":"MEDLEY","basetime":235.5},
{"course":"SCM","gender":"M","relay":1,"distance":100,"stroke":"MEDLEY","basetime":50.66},
{"course":"SCM","gender":"M","relay":4,"distance":50,"stroke":"FREE","basetime":82.6},
{"course":"SCM","gender":"M","relay":4,"distance":100,"stroke":"FREE","basetime":183.3},
{"course":"SCM","gender":"M","relay":4,"distance":200,"stroke":"FREE","basetime":409.04},
{"course":"SCM","gender":"M","relay":4,"distance":50,"stroke":"MEDLEY","basetime":90.51},
{"course":"SCM","gender":"M","relay":4,"distance":100,"stroke":"MEDLEY","basetime":199.16},
{"course":"SCM","gender":"F","relay":1,"distance":50,"stroke":"FREE","basetime":23.24},
{"course":"SCM","gender":"F","relay":1,"distance":100,"stroke":"FREE","basetime":51.01},
{"course":"SCM","gender":"F","relay":1,"distance":200,"stroke":"FREE","basetime":110.78},
{"course":"SCM","gender":"F","relay":1,"distance":400,"stroke":"FREE","basetime":234.52},
{"course":"SCM","gender":"F","relay":1,"distance":800,"stroke":"FREE","basetime":479.34},
{"course":"SCM","gender":"F","relay":1,"distance":1500,"stroke":"FREE","basetime":919.71},
{"course":"SCM","gender":"F","relay":1,"distance":50,"stroke":"BACK","basetime":25.67},
{"course":"SCM","gender":"F","relay":1,"distance":100,"stroke":"BACK","basetime":55.03},
{"course":"SCM","gender":"F","relay":1,"distance":200,"stroke":"BACK","basetime":119.23},
{"course":"SCM","gender":"F","relay":1,"distance":50,"stroke":"BREAST","basetime":28.8},
{"course":"SCM","gender":"F","relay":1,"distance":100,"stroke":"BREAST","basetime":62.36},
{"course":"SCM","gender":"F","relay":1,"distance":200,"stroke":"BREAST","basetime":134.57},
{"course":"SCM","gender":"F","relay":1,"distance":50,"stroke":"FLY","basetime":24.38},
{"course":"SCM","gender":"F","relay":1,"distance":100,"stroke":"FLY","basetime":54.61},
{"course":"SCM","gender":"F","relay":1,"distance":200,"stroke":"FLY","basetime":119.61},
{"course":"SCM","gender":"F","relay":1,"distance":200,"stroke":"MEDLEY","basetime":121.86},
{"course":"SCM","gender":"F","relay":1,"distance":400,"stroke":"MEDLEY","basetime":259.86},
{"course":"SCM","gender":"F","relay":1,"distance":100,"stroke":"MEDLEY","basetime":56.7},
{"course":"SCM","gender":"F","relay":4,"distance":50,"stroke":"FREE","basetime":94.24},
{"course":"SCM","gender":"F","relay":4,"distance":100,"stroke":"FREE","basetime":206.53},
{"course":"SCM","gender":"F","relay":4,"distance":200,"stroke":"FREE","basetime":452.85},
{"course":"SCM","gender":"F","relay":4,"distance":50,"stroke":"MEDLEY","basetime":104.04},
{"course":"SCM","gender":"F","relay":4,"distance":100,"stroke":"MEDLEY","basetime":225.56},
{"course":"LCM","gender":"M","relay":1,"distance":50,"stroke":"FREE","basetime":20.91},
{"course":"LCM","gender":"M","relay":1,"distance":100,"stroke":"FREE","basetime":46.91},
{"course":"LCM","gender":"M","relay":1,"distance":200,"stroke":"FREE","basetime":102},
{"course":"LCM","gender":"M","relay":1,"distance":400,"stroke":"FREE","basetime":220.07},
{"course":"LCM","gender":"M","relay":1,"distance":800,"stroke":"FREE","basetime":452.12},
{"course":"LCM","gender":"M","relay":1,"distance":1500,"stroke":"FREE","basetime":871.02},
{"course":"LCM","gender":"M","relay":1,"distance":50,"stroke":"BACK","basetime":24.04},
{"course":"LCM","gender":"M","relay":1,"distance":100,"stroke":"BACK","basetime":51.94},
{"course":"LCM","gender":"M","relay":1,"distance":200,"stroke":"BACK","basetime":111.92},
{"course":"LCM","gender":"M","relay":1,"distance":50,"stroke":"BREAST","basetime":26.67},
{"course":"LCM","gender":"M","relay":1,"distance":100,"stroke":"BREAST","basetime":58.46},
{"course":"LCM","gender":"M","relay":1,"distance":200,"stroke":"BREAST","basetime":127.01},
{"course":"LCM","gender":"M","relay":1,"distance":50,"stroke":"FLY","basetime":22.43},
{"course":"LCM","gender":"M","relay":1,"distance":100,"stroke":"FLY","basetime":49.82},
{"course":"LCM","gender":"M","relay":1,"distance":200,"stroke":"FLY","basetime":111.51},
{"course":"LCM","gender":"M","relay":1,"distance":200,"stroke":"MEDLEY","basetime":114},
{"course":"LCM","gender":"M","relay":1,"distance":400,"stroke":"MEDLEY","basetime":243.84},
{"course":"LCM","gender":"M","relay":4,"distance":100,"stroke":"FREE","basetime":188.24},
{"course":"LCM","gender":"M","relay":4,"distance":200,"stroke":"FREE","basetime":418.55},
{"course":"LCM","gender":"M","relay":4,"distance":100,"stroke":"MEDLEY","basetime":207.28},
{"course":"LCM","gender":"M","relay":4,"distance":50,"stroke":"FREE","basetime":84.85},
{"course":"LCM","gender":"M","relay":4,"distance":50,"stroke":"MEDLEY","basetime":93.43},
{"course":"LCM","gender":"F","relay":1,"distance":50,"stroke":"FREE","basetime":23.73},
{"course":"LCM","gender":"F","relay":1,"distance":100,"stroke":"FREE","basetime":52.07},
{"course":"LCM","gender":"F","relay":1,"distance":200,"stroke":"FREE","basetime":112.98},
{"course":"LCM","gender":"F","relay":1,"distance":400,"stroke":"FREE","basetime":238.37},
{"course":"LCM","gender":"F","relay":1,"distance":800,"stroke":"FREE","basetime":491},
{"course":"LCM","gender":"F","relay":1,"distance":1500,"stroke":"FREE","basetime":928.36},
{"course":"LCM","gender":"F","relay":1,"distance":50,"stroke":"BACK","basetime":27.06},
{"course":"LCM","gender":"F","relay":1,"distance":100,"stroke":"BACK","basetime":58.12},
{"course":"LCM","gender":"F","relay":1,"distance":200,"stroke":"BACK","basetime":124.06},
{"course":"LCM","gender":"F","relay":1,"distance":50,"stroke":"BREAST","basetime":29.48},
{"course":"LCM","gender":"F","relay":1,"distance":100,"stroke":"BREAST","basetime":64.35},
{"course":"LCM","gender":"F","relay":1,"distance":200,"stroke":"BREAST","basetime":139.11},
{"course":"LCM","gender":"F","relay":1,"distance":50,"stroke":"FLY","basetime":24.43},
{"course":"LCM","gender":"F","relay":1,"distance":100,"stroke":"FLY","basetime":55.98},
{"course":"LCM","gender":"F","relay":1,"distance":200,"stroke":"FLY","basetime":121.81},
{"course":"LCM","gender":"F","relay":1,"distance":200,"stroke":"MEDLEY","basetime":126.15},
{"course":"LCM","gender":"F","relay":1,"distance":400,"stroke":"MEDLEY","basetime":268.43},
{"course":"LCM","gender":"F","relay":4,"distance":100,"stroke":"FREE","basetime":210.98},
{"course":"LCM","gender":"F","relay":4,"distance":200,"stroke":"FREE","basetime":462.08},
{"course":"LCM","gender":"F","relay":4,"distance":100,"stroke":"MEDLEY","basetime":232.05},
{"course":"LCM","gender":"F","relay":4,"distance":50,"stroke":"FREE","basetime":96.6},
{"course":"LCM","gender":"F","relay":4,"distance":50,"stroke":"MEDLEY","basetime":106.24}]
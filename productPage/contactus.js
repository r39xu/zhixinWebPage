var map = new BMap.Map("containerMap");          // 创建地图实例  
var point = new BMap.Point(115.861057,28.75113);  // 创建点坐标  
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
var marker = new BMap.Marker(point); 
map.addOverlay(marker);   
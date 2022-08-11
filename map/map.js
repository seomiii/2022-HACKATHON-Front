/*현재위치 코드*/


var markers = [];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 


if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치 받음
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, 
            lon = position.coords.longitude; 
        
        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
            
        displayMarker(locPosition);
            
    });
    
        
    displayMarker(locPosition);
}

// 지도에 마커 표시
function displayMarker(locPosition) {

    // 마커를 생성
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    

    // 지도 중심좌표를 접속위치
    map.setCenter(locPosition);      
}    

// navbar
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1) {
        $('#navbar').css('padding', '0 20px')
    } else {
        $('#navbar').css('padding', '20px')
    }
})

function initMap() {
    // The location of Uluru
    var uluru = {lat: 13.688276, lng: 100.535824};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), 
        {
            zoom: 15, 
            center: uluru
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map
    });
  }

  13.688276, 100.535824 //ค่าละติจูด ลองที่ติจูด

 // AIzaSyBEMsadlezXG6IXRqAnmWnIqUJmtv8J8PQ ***API Key
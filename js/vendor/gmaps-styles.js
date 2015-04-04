/*

All styles from http://snazzymaps.com/
"All styles are licensed under creative commons and are completely free to use."
You can copy more from http://snazzymaps.com/

just copy variable name and in app.js replace 'nature' variable

*/

var shift_worker = [{
    "stylers": [{
        "saturation": - 100
    }, {
        "gamma": 1
    }
    ]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "poi.business",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "water",
    "stylers": [{
        "visibility": "on"
    }, {
        "saturation": 50
    }, {
        "gamma": 0
    }, {
        "hue": "#50a5d1"
    }
    ]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#333333"
    }
    ]
}, {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{
        "weight": 0.5
    }, {
        "color": "#333333"
    }
    ]
}, {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [{
        "gamma": 1
    }, {
        "saturation": 50
    }
    ]
}
],
blue_water = [{
    "featureType": "water",
    "stylers": [{
        "color": "#46bcec"
    }, {
        "visibility": "on"
    }
    ]
}, {
    "featureType": "landscape",
    "stylers": [{
        "color": "#f2f2f2"
    }
    ]
}, {
    "featureType": "road",
    "stylers": [{
        "saturation": - 100
    }, {
        "lightness": 45
    }
    ]
}, {
    "featureType": "road.highway",
    "stylers": [{
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#444444"
    }
    ]
}, {
    "featureType": "transit",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "poi",
    "stylers": [{
        "visibility": "off"
    }
    ]
}
],
pale_dawn = [{
    "featureType": "water",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#acbcc9"
    }
    ]
}, {
    "featureType": "landscape",
    "stylers": [{
        "color": "#f2e5d4"
    }
    ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#c5c6c6"
    }
    ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#e4d7c6"
    }
    ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fbfaf7"
    }
    ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#c5dac6"
    }
    ]
}, {
    "featureType": "administrative",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": 33
    }
    ]
}, {
    "featureType": "road"
}, {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": 20
    }
    ]
}, {}, {
    "featureType": "road",
    "stylers": [{
        "lightness": 20
    }
    ]
}
],
subtle_grayscale = [{
    "featureType": "landscape",
    "stylers": [{
        "saturation": - 100
    }, {
        "lightness": 65
    }, {
        "visibility": "on"
    }
    ]
}, {
    "featureType": "poi",
    "stylers": [{
        "saturation": - 100
    }, {
        "lightness": 51
    }, {
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "road.highway",
    "stylers": [{
        "saturation": - 100
    }, {
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "road.arterial",
    "stylers": [{
        "saturation": - 100
    }, {
        "lightness": 30
    }, {
        "visibility": "on"
    }
    ]
}, {
    "featureType": "road.local",
    "stylers": [{
        "saturation": - 100
    }, {
        "lightness": 40
    }, {
        "visibility": "on"
    }
    ]
}, {
    "featureType": "transit",
    "stylers": [{
        "saturation": - 100
    }, {
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "administrative.province",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": - 25
    }, {
        "saturation": - 100
    }
    ]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "hue": "#ffff00"
    }, {
        "lightness": - 25
    }, {
        "saturation": - 97
    }
    ]
}
],
avocado_world = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#aee2e0"
    }
    ]
}, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#abce83"
    }
    ]
}, {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#769E72"
    }
    ]
}, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#7B8758"
    }
    ]
}, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#EBF4A4"
    }
    ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "simplified"
    }, {
        "color": "#8dab68"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#5B5B3F"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ABCE83"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#A4C67D"
    }
    ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#9BBF72"
    }
    ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#EBF4A4"
    }
    ]
}, {
    "featureType": "transit",
    "stylers": [{
        "visibility": "off"
    }
    ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#87ae79"
    }
    ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#7f2200"
    }, {
        "visibility": "off"
    }
    ]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ffffff"
    }, {
        "visibility": "on"
    }, {
        "weight": 4.1
    }
    ]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#495421"
    }
    ]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }
    ]
}
],
nature = [{
    "featureType": "landscape",
    "stylers": [{
        "hue": "#FFA800"
    }, {
        "saturation": 0
    }, {
        "lightness": 0
    }, {
        "gamma": 1
    }
    ]
}, {
    "featureType": "road.highway",
    "stylers": [{
        "hue": "#53FF00"
    }, {
        "saturation": - 73
    }, {
        "lightness": 40
    }, {
        "gamma": 1
    }
    ]
}, {
    "featureType": "road.arterial",
    "stylers": [{
        "hue": "#FBFF00"
    }, {
        "saturation": 0
    }, {
        "lightness": 0
    }, {
        "gamma": 1
    }
    ]
}, {
    "featureType": "road.local",
    "stylers": [{
        "hue": "#00FFFD"
    }, {
        "saturation": 0
    }, {
        "lightness": 30
    }, {
        "gamma": 1
    }
    ]
}, {
    "featureType": "water",
    "stylers": [{
        "hue": "#00BFFF"
    }, {
        "saturation": 6
    }, {
        "lightness": 8
    }, {
        "gamma": 1
    }
    ]
}, {
    "featureType": "poi",
    "stylers": [{
        "hue": "#679714"
    }, {
        "saturation": 33.4
    }, {
        "lightness": - 25.4
    }, {
        "gamma": 1
    }
    ]
}
],
icy_blue = [{
    "stylers": [{
        "hue": "#2c3e50"
    }, {
        "saturation": 250
    }
    ]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "lightness": 50
    }, {
        "visibility": "simplified"
    }
    ]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }
    ]
}
];


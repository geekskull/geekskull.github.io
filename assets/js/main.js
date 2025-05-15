'use strict'

$(document).ready(function() {
    var modalButon = document.getElementById('modalButon')
    var overlay = document.getElementById('overlay')
    var modal = document.getElementById('modal')
    var content = document.getElementById('content')
    var closeModalButton = document.getElementById('closeModalButton')
    var body = document.getElementsByTagName('body')
    var slideShow = document.getElementById('slideShow')

    $(modalButon).on('click', function() {
        $(overlay).addClass('on')
        $(modal).addClass('open')
        $(content).addClass('modal-opened')
    })

    $(overlay).on('click', function() {
        if ($(modal).hasClass('open')) {
            $(modal).removeClass('open')
            $(overlay).removeClass('on')
            $(content).removeClass('modal-opened')
        }
    })

    $(closeModalButton).on('click', function() {
        if ($(modal).hasClass('open')) {
            $(modal).removeClass('open')
            $(overlay).removeClass('on')
            $(content).removeClass('modal-opened')
        }
    })

    if (slideShow) {
        if ($(body).hasClass('dark')) {
            $(slideShow).backstretch([
                '../assets/images/bg001.jpg',
                '../assets/images/bg002.jpg',
                '../assets/images/bg003.jpg',
                '../assets/images/bg004.jpg'
            ], {
                duration: 4000,
                fade: 2500
            })
        } else {
            $(slideShow).backstretch([
                '../assets/images/bg006.jpg',
                '../assets/images/bg007.jpg',
                '../assets/images/bg008.jpg',
                '../assets/images/bg009.jpg',
                '../assets/images/bg010.jpg'
            ], {
                duration: 4000,
                fade: 2500
            })
        }
    }

    if ($(body).hasClass('dark')) {
        particlesJS.load('particles-js', '../assets/js/dark_particles.json')
    } else {
        particlesJS.load('particles-js', '../assets/js/light_particles.json')
    }

    $(body).mCustomScrollbar({
        scrollInertia: 200
    })

    $(modal).mCustomScrollbar({
        scrollInertia: 200
    })

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
                'featureType': 'administrative',
                'elementType': 'all',
                'stylers': [{
                    'saturation': '-100'
                }]
            },
            {
                'featureType': 'administrative.province',
                'elementType': 'all',
                'stylers': [{
                    'visibility': 'off'
                }]
            },
            {
                'featureType': 'landscape',
                'elementType': 'all',
                'stylers': [{
                        'saturation': -100
                    },
                    {
                        'lightness': 65
                    },
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': [{
                        'saturation': -100
                    },
                    {
                        'lightness': '50'
                    },
                    {
                        'visibility': 'simplified'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'all',
                'stylers': [{
                    'saturation': '-100'
                }]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'all',
                'stylers': [{
                    'visibility': 'simplified'
                }]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'all',
                'stylers': [{
                    'lightness': '30'
                }]
            },
            {
                'featureType': 'road.local',
                'elementType': 'all',
                'stylers': [{
                    'lightness': '40'
                }]
            },
            {
                'featureType': 'transit',
                'elementType': 'all',
                'stylers': [{
                        'saturation': -100
                    },
                    {
                        'visibility': 'simplified'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [{
                        'hue': '#ffff00'
                    },
                    {
                        'lightness': -25
                    },
                    {
                        'saturation': -97
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'visibility': 'on'
                    },
                    {
                        'color': '#202e3c'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels',
                'stylers': [{
                        'lightness': -25
                    },
                    {
                        'saturation': -100
                    }
                ]
            }
        ]
    }

    var mapElement = document.getElementById('map')

    var map = new google.maps.Map(mapElement, mapOptions)

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        visible: false,
        title: 'Snazzy!'
    })
})
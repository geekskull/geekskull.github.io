'use strict'

$(document).ready(function() {
    var customizing_button = $('#customizing_button')
    var customizing_menu = $('#customizing_menu')
    var close_customizing_menu = $('.customizing_menu #close_customizing_menu')
    var variant = $('.customizing_menu .variants div')
    var shape = $('.customizing_menu .shape')
    var color = $('.customizing_menu .color')
    var theme = $('.customizing_menu .theme')
    var animation = $('.customizing_menu .animation')

    customizing_button.on('click', function() {
        customizing_button.addClass('opened')
        customizing_menu.addClass('opened')
    })

    close_customizing_menu.on('click', function() {
        customizing_button.removeClass('opened')
        customizing_menu.removeClass('opened')
    })

    variant.on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
            $(this).siblings('div').removeClass('active')
        }
    })

    shape.on('click', function() {
        if ($(this).hasClass('rounded')) {
            $('.button').addClass('rounded')
            $('.button').removeClass('full-rounded')
        } else if ($(this).hasClass('full-rounded')) {
            $('.button').addClass('full-rounded')
            $('.button').removeClass('rounded')
        } else {
            $('.button').removeClass('rounded full-rounded')
        }
    })

    color.on('click', function() {
        if ($(this).hasClass('red')) {
            $('.button').addClass('red')
            $('.button').removeClass('blue green orange')
        } else if ($(this).hasClass('blue')) {
            $('.button').addClass('blue')
            $('.button').removeClass('red green orange')
        } else if ($(this).hasClass('orange')) {
            $('.button').addClass('orange')
            $('.button').removeClass('blue green red')
        } else if ($(this).hasClass('green')) {
            $('.button').addClass('green')
            $('.button').removeClass('blue red orange')
        } else {
            $('.button').removeClass('blue red orange green')
        }
    })

    animation.on('click', function() {
        if ($(this).hasClass('active')) {
            $('#particles-js').removeClass('hide')
            if ($('body').hasClass('dark')) {
                particlesJS.load('particles-js', '../assets/js/dark_particles.json')
            } else {
                particlesJS.load('particles-js', '../assets/js/light_particles.json')
            }
        } else {
            $(this).removeClass('active')
            $('#particles-js').addClass('hide')
        }
    })

    theme.on('click', function() {
        if ($(this).hasClass('dark')) {
            $('body').addClass('dark')
            $('body').removeClass('light')
            particlesJS.load('particles-js', '../assets/js/dark_particles.json')
        } else {
            $('body').addClass('light')
            $('body').removeClass('dark')
            particlesJS.load('particles-js', '../assets/js/light_particles.json')
        }
    })
})
<?php
add_action('wp_enqueue_scripts', function() {
    // Enqueue the child theme's stylesheet
    wp_enqueue_style('twentytwentyfive-child-style', get_stylesheet_uri());

    // Enqueue touch-active.js to enable :active styles on iOS devices
    wp_enqueue_script('twentytwentyfive-child-touch-active', get_stylesheet_directory_uri() . '/js/touch-active.js', [], false, true);

    // Conditionally enqueue scripts for specific pages
    if (is_front_page()) {
        wp_enqueue_script('twentytwentyfive-child-home-script', get_stylesheet_directory_uri() . '/js/home.js', [], false, true);
    }
    if (is_page('contatti')) {
        wp_enqueue_script('twentytwentyfive-child-contacts-script', get_stylesheet_directory_uri() . '/js/contacts.js', [], false, true);
    }
});
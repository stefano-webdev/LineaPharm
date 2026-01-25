<?php
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('twentytwentyfive-child-style', get_stylesheet_uri());
    if (is_front_page()) {
        wp_enqueue_script('twentytwentyfive-child-home-script', get_stylesheet_directory_uri() . '/js/home.js', [], false, true);
    }
    if (is_page('contatti')) {
        wp_enqueue_script('twentytwentyfive-child-contacts-script', get_stylesheet_directory_uri() . '/js/contacts.js', [], false, true);
    }
});
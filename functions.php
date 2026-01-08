<?php
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('twentytwentyfive-child-style', get_stylesheet_uri());
    wp_enqueue_script('twentytwentyfive-child-script', get_stylesheet_directory_uri() . '/js/script.js', [], false, true);
});
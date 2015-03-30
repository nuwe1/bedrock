/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($, _gaq, site) {
    'use strict';

    var $html = $(document.documentElement);
    var $downloadbar = $('#conditional-download-bar');

    // Open external links in new window/tab
    $('.product a[rel="external"]').attr('target', '_blank');

    // Dismiss the conditional download bar
    $downloadbar.on('click', '.btn-close', function() {
        $downloadbar.animate({
            top: '-' + ($downloadbar.height() + 10)
        }, 350, function() {
            $downloadbar.fadeOut().remove();
        });
    });

    if (isFirefox()) {
        // data-latest-firefox includes point release information
        var latestFirefoxVersionFull = $html.attr('data-latest-firefox');

        // get latest full version (no point release info) for initial check
        var latestFirefoxVersion = parseInt(latestFirefoxVersionFull.split('.')[0], 10);

        if (isFirefoxUpToDate(latestFirefoxVersion + '')) {
            $html.addClass('firefox-latest');
        } else {
            $html.addClass('firefox-old');
        }
    }

})(window.jQuery, window._gaq, window.site);

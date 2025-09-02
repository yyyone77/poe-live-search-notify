// ==UserScript==
// @name         PoE Live Search Notify
// @version      1.0
// @namespace    http://tampermonkey.net/
// @description  Sends the tab title to ntfy, removing the " - Path of Exile" or " - [Path of Exile]" suffix.
// @match        https://www.pathofexile.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Please set your own ntfy topic URL below
    const ntfyUrl = "https://ntfy.sh/your-ntfy-topic";
    const OldNotify = window.Notification;

    function NewNotify(title, options) {
        try {
            let tabTitle = document.title.trim();

            // Remove the suffix " - Path of Exile" or " - [Path of Exile]"
            tabTitle = tabTitle.replace(/\s*-\s*(\[?Path of Exile\]?)\s*$/, "");

            // Send to ntfy
            fetch(ntfyUrl, {
                method: "POST",
                body: tabTitle,
                headers: {
                    "Content-Type": "text/plain"
                }
            });
        } catch (e) {
            console.error("Failed to send to ntfy:", e);
        }

        return new OldNotify(title, options);
    }

    NewNotify.requestPermission = OldNotify.requestPermission.bind(OldNotify);
    Object.defineProperty(NewNotify, 'permission', {
        get: () => OldNotify.permission
    });

    window.Notification = NewNotify;
})();
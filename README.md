# PoE Live Search Notify

This userscript sends the current Path of Exile tab title to ntfy.sh whenever a browser notification is triggered. The script removes the " - Path of Exile" or " - [Path of Exile]" suffix from the title before sending.

## How to Use

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Copy the code from `poe-live-search-notify.js` and create a new userscript in Tampermonkey.
3. Replace `your-ntfy-topic` in the script with your own [ntfy.sh](https://ntfy.sh/) topic URL.
4. Open [Path of Exile](https://www.pathofexile.com/) in your browser.

## Notes

- Notifications are sent via ntfy.sh using the tab title.
- Only works on the Path of Exile web client.
- You must be logged in for the script to function.

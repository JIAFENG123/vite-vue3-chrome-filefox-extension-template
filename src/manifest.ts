export const chromeManifest = {
  "manifest_version": 3,
  "name": "Quick API Reference",
  "description": "Quick API can speed up the building of Chrome extensions.",
  "version": "1.0.0",
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "permissions": [
    "alarms",
    "storage"
  ],
  "host_permissions": [
    "https://*/*"
  ],
  "content_scripts": [
    {
      "matches": [
        "https://developer.chrome.com/docs/extensions/reference/*",
        "https://*/*"
      ],
      "js": [
        "content.js"
      ]
    }
  ]
}

export const firefoxManifest = {
  "manifest_version": 2,
  "name": "Quick API Reference",
  "description": "Quick API can speed up the building of Chrome extensions.",
  "version": "1.0.0",
  "background": {
    "scripts": [
      "background.js"
    ],
    "type": "module"
  },
  "permissions": [
    "alarms",
    "storage"
  ],
  "host_permissions": [
    "https://*/*"
  ],
  "content_scripts": [
    {
      "matches": [
        "https://developer.chrome.com/docs/extensions/reference/*",
        "https://*/*"
      ],
      "js": [
        "content.js"
      ]
    }
  ]
}
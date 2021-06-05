/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/data': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            },
            '/assets/playerheads': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            },
            '/live': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            }
        }
    },
    pwa: {
        workboxOptions: {
            runtimeCaching: [
                {
                    urlPattern: /\/data\/world\/.+/,
                    handler: 'cacheFirst',
                    options: {
                        cacheName: 'world',
                        expiration: {
                            maxAgeSeconds: 60 * 60 * 24
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }, {
                    urlPattern: /\/data\/settings\.json/,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'world-setting',
                        expiration: {
                            maxAgeSeconds: 60 * 60 * 24 * 7
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }, {
                    urlPattern: /\/data\/textures\.json/,
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'texture',
                        expiration: {
                            maxAgeSeconds: 60 * 60 * 24 * 7
            },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        },
        name: 'BlueMap',
        themeColor: '#006EDE',
        manifestOptions: {
            background_color: '#181818',
            icons: [
                {
                    src: 'assets/icons/icon-16x16.png',
                    sizes: '16x16',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-32x32.png',
                    sizes: '32x32',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-256x256.png',
                    sizes: '256x256',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        }
    }
}
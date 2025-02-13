export default {
    components: true,
    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks: false,
    },
    plugins:[ 
        '~/plugins/maps.client', 
        '~/plugins/dataApi', 
        '~/plugins/auth.client', 
        '~/plugins/vCalendar.client'
    ],
    modules:['~/modules/auth', '~/modules/algolia', '~/modules/cloudinary', '@nuxtjs/cloudinary'],
    buildModules:['@nuxtjs/tailwindcss', '@nuxt/image'],
    cloudinary:{
        cloudName: 'dzxztzdg4',
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dzxztzdg4/image/upload/'
        }
    },
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    publicRuntimeConfig:{
        auth:{
            cookieName: 'idToken',
            clientId: '537712074419-0pao3sshf84cqqtaie3aumvmobmlseji.apps.googleusercontent.com',
        },
        algolia:{
            appId: 'QXGX8RCAML',
            key:'f0ecada6cb5d32e6496eb1e42c3d7bbd',
        },
        cloudinary:{
            apiKey: '751854148899179',
        }
    },
    privateRuntimeConfig:{
        algolia:{
            appId: 'QXGX8RCAML',
            key: '739175c49753db77b422766b417678b1',
        },
        cloudinary:{
            apiSecret: 'Hner5MurgYTJLMQQ9F36P8msRN0',
        }
    },

}
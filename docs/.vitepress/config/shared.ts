import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Introxd',

  base: '/components/',
  sitemap: {
    hostname: 'https://introxd.github.io/components/'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'images/favicon.png' }],

    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Introxd Components' }],
    ['meta', { property: 'og:site_name', content: 'Introxd' }],
    ['meta', { property: 'og:image', content: 'images/favicon.png' }],
    ['meta', { property: 'og:url', content: 'https://imba97.github.io/smserialport/' }]
  ],

  themeConfig: {
    logo: { src: '/images/favicon.png' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/introxd/components' }
    ],

    search: {
      provider: 'local'
    }
  }
})

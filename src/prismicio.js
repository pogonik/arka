import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import Home from './pages/Home'

export const repositoryName = prismic.getRepositoryName(process.env.REACT_APP_PRISMIC_API)

// export const routes = [
//   { type: 'naslovna', path: '/:lang?/:uid', uid: 'index', url: '/index' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'o-nama', url: 'o-nama' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'stanovi', url: 'stanovi'},
//   { type: 'strana', path: '/:lang?/:uid', uid: 'materijali', url: 'materijali' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'projekti', url: 'projekti' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'kontakt', url: 'kontakt' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'about-us' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'real-estate' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'materials' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'projects' },
//   { type: 'strana', path: '/:lang?/:uid', uid: 'contact' }
// ]

export const routes = [
  { type: 'naslovna', path: '/', uid: 'index', url: '/', lang: 'sr-rs' },
  { type: 'naslovna', path: '/:lang?', uid: 'index', url: '/sr-rs', lang: 'sr-rs' },
  { type: 'naslovna', path: '/:lang?/:uid', uid: 'index', url: '/index' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'o-nama', url: '/o-nama' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'stanovi', url: '/stanovi'},
  { type: 'strana', path: '/:lang?/:uid', uid: 'materijali', url: '/materijali' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'projekti', url: '/projekti' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'kontakt', url: '/kontakt' },

  { type: 'naslovna', path: '/en-us/:uid', uid: 'index', url: '/en-us/index' },
  { type: 'strana', path: '/:lang/:uid', uid: 'about-us', url: '/en-us/about-us' },
  { type: 'strana', path: '/:lang/:uid', uid: 'real-estate', url: '/en-us/real-estate' },
  { type: 'strana', path: '/:lang/:uid', uid: 'materials', url: '/en-us/materials' },
  { type: 'strana', path: '/:lang/:uid', uid: 'projects', url: '/en-us/projects' },
  { type: 'strana', path: '/:lang/:uid', uid: 'contact', url: '/en-us/contact' }
]

// export const createClient = (config = {}) => {
//   config.accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

//   const client = prismic.createClient(repositoryName, {
//     routes,
//     ...config,
//   })

//   return client
// }

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,
  routes
})

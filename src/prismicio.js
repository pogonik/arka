import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
// import sm from '../sm.json'
import Home from './pages/Home'

export const repositoryName = prismic.getRepositoryName(process.env.REACT_APP_PRISMIC_API)

export const routes = [
  { type: 'naslovna', path: '/:lang?/:uid', uid: 'index', url: '/index' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'o-nama', url: 'o-nama' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'stanovi', url: 'stanovi'},
  { type: 'strana', path: '/:lang?/:uid', uid: 'materijali', url: 'materijali' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'projekti', url: 'projekti' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'kontakt', url: 'kontakt' },
  // { type: 'naslovna', path: '/:lang?/:uid', uid: 'index', url: '/index' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'about-us' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'real-estate' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'materials' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'projects' },
  { type: 'strana', path: '/:lang?/:uid', uid: 'contact' }
]

export const createClient = (config = {}) => {
  config.accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  })

  return client
}

export const client = prismic.createClient(repositoryName, {
  accessToken: 'MC5aRTNNOGhFQUFDc0FxbGNX.77-9Wu-_vU3vv73vv73vv73vv73vv71e77-9Pe-_ve-_ve-_ve-_vUx177-977-9EC3vv73vv73vv73vv73vv73vv70uOH8U',
  routes
})

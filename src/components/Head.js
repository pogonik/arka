
import { base_url, siteName, langs } from "../utils/lib"
import { Helmet } from 'react-helmet-async'

const Head = props => {

  const pageTitle = `${props.pageTitle} | ${siteName[props.lang]}`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="twitter:title" content={pageTitle} />
      <meta property="og:title" content={pageTitle} />
      
      <meta name="keywords" content={props.meta_keywords || ''} />

      <meta name="description" content={props.meta_description || ''} />
      <meta name="twitter:description" content={props.meta_description || ''} />
      <meta property="og:description" content={props.meta_description || ''} />

      <meta name="twitter:image" content={props.meta_image.url || ''} />
      <meta property="og:image" content={props.meta_image.url || ''} />

      <meta name="twitter:url" content={base_url+props.page.url || ''} />
      <meta property="og:url" content={base_url+props.page.url || ''} />
      <link rel="canonical" href={base_url+props.page.url || ''} />

      <meta property="og:locale" content={langs[props.lang].locale} />
      <meta property="og:site_name" content={siteName[props.lang]} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Helmet>
  )
}


Head.defaultProps = {
  pageTitle: '',
  meta_keywords: '',
  meta_description: '',
  meta_image: { url: '' },
  page: { url: '' },
  site_name: 'ARKA Izgradnja i adaptacija',
  locale: 'sr_RS',
  lang: 'sr-rs'
}

export default Head

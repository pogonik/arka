import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => {

  let classMain = 'page-wrapper ';
  classMain += props.lang === 'en-us' ? props.prevod.uid : props.uid;
  classMain += '-wrapper';

  return (
    <>
      <main id="content" className={classMain}>

        <Navbar winWidth={props.winWidth} url={props.url} uid={props.uid} lang={props.lang} prevod={props.prevod} allPages={props.allPages} />

        {props.children}

        <Footer url={props.url} uid={props.uid} lang={props.lang} allPages={props.allPages} />

      </main>
    </>
  )
}

Layout.defaultProps = {
  url: '/',
  uid: 'home',
  lang: 'sr-rs',
  winWidth: 0,
  meta: {
    title: 'ARKA Izgradnja i adaptacija',
    keywords: '',
    desc: '',
    image: { url: '' },
    site_name: '',
    locale: 'sr_RS'
  }
}

export default Layout
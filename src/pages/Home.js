import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import TrioBanner from '../components/TrioBanner'
import ContactForm from '../components/ContactForm'

import '../styles/styles.scss'

const Home = props => {

  return (
    <div>Home page...</div>
    // <Layout winWidth={props.winWidth} url={props.url} uid={props.uid} lang={props.lang} meta={props.meta} base_url prevod={props.alternate_languages}>


    //   <Slider url={props.page.url} uid={props.page.uid} lang={props.page.lang} />
      
    //     <div className="banner skew light-blue">
    //       <div className="container">
    //         <div className='row'>
              
    //           <div className="col-12 col-md-6 col-sm-12 tekst">
    //             <h3 className='subtitle'>Novogradnja - Finalni radovi</h3>
    //             <h2>Keramičarski radovi <br/>i ostala galanterija</h2>
    //             <ul>
    //               <li>U izgradnji koristimo sanitarnu galanteriju visokog kvaliteta i pouzdanih proizvođača</li>
    //               <li>Posebnu pažnju stavljamo na kvalitet popločavanja i keramičarskih radova</li>
    //               <li>U potpunosti opremljena kupatila i radne površine savremenog i lepog dizajna</li>
    //             </ul>
    //           </div>

    //           <div className="col-12 col-md-6 col-sm-12 slika">
    //             <div className="image">
    //               <img src='kupatilo-1.jpg' className='banner-img' />
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>

    //     <TrioBanner url={props.page.url} uid={props.page.uid} lang={props.page.lang} winWidth={props.winWidth} />

    //     <div className="banner skew dark-blue">
    //       <div className="container">
    //         <div className='row'>
              
    //           <div className="col-12 col-md-6 col-sm-12 tekst">
    //             <h3 className='subtitle'>Novogradnja - Finalni radovi</h3>
    //             <h2>Keramičarski radovi <br/>i ostala galanterija</h2>
    //             <ul>
    //               <li>U izgradnji koristimo sanitarnu galanteriju visokog kvaliteta i pouzdanih proizvođača</li>
    //               <li>Posebnu pažnju stavljamo na kvalitet popločavanja i keramičarskih radova</li>
    //               <li>U potpunosti opremljena kupatila i radne površine savremenog i lepog dizajna</li>
    //             </ul>
    //             <a href="#" className="btn arrow">Stanovi / Novogradnja</a>
    //           </div>

    //           <div className="col-12 col-md-6 col-sm-12 slika">
    //             <div className="image">
    //               <img src='kupatilo-1.jpg' className='banner-img' />
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>

    //     <div className="banner light-blue stanovi">
    //       <div className="container">
    //         <div className='row'>
              
    //           <div className="col-12 col-md-6 tekst">
    //             <h2>Zainteresovani ste za <br/>kupovinu <strong>stana u novogradnji?</strong></h2>
    //             <p>Pogledajte našu stranicu <a href="#" className="btn-link">Stanovi - Novogradnja</a> ili nas pozovite za informacije i novosti u našoj ponudi.</p>
    //             <a href="#" className="btn arrow">Stanovi / Novogradnja</a>
    //           </div>

    //         </div>
    //       </div>
    //     </div>

    //     <ContactForm url={props.page.url} uid={props.page.uid} lang={props.page.lang} />

    //   <SliceZone slices={props.lices} components={components} className={props.uid} lang={props.lang} />

    // </Layout>
  )
}

export default Home
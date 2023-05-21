import React from 'react'
import { PrismicRichText, PrismicImage } from '@prismicio/react'

// /**
//  * @typedef {import("@prismicio/client").Content.Banner1Slice} Banner1Slice
//  * @typedef {import("@prismicio/react").SliceComponentProps<Banner1Slice>} Banner1Props
//  * @param { Banner1Props }
//  */
const Banner1 = ({ slice }) => {
  // const [test, useTest] = useContext()
  let bannerStyle = {
    'background': slice.primary.boja,
    'color': slice.primary.boja
  };

  let textFilter = {filter: 'invert() grayscale(.5) contrast() brightness(300%) opacity(0.875)'}

  return (
    <div className="banner skew" style={bannerStyle}>
      <div className="container">
        <div className='row'>
          
          <div className="col-12 col-md-6 col-sm-12 tekst">
            <h3 className='subtitle'>{slice.primary.podnaslov}</h3>
            <span style={textFilter}><PrismicRichText field={slice.primary.naslov} /></span>
            <span style={textFilter}><PrismicRichText field={slice.primary.tekst} /></span>
            <span className='btn arrow'>{Object.keys(slice.primary.link) ? <PrismicRichText field={slice.primary.link} /> : null}</span>
          </div>

          <div className="col-12 col-md-6 col-sm-12 slika">
            <div className="image">
              <PrismicImage className='banner-img' field={slice.primary.slika} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner1
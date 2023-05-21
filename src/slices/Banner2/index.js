import React from 'react'
import { PrismicRichText, PrismicImage } from '@prismicio/react'

// /**
//  * @typedef {import("@prismicio/client").Content.Banner2Slice} Banner2Slice
//  * @typedef {import("@prismicio/react").SliceComponentProps<Banner2Slice>} Banner2Props
//  * @param { Banner2Props }
//  */
const Banner2 = ({ slice }) => {

  let bannerStyle = {
    'background': slice.primary.boja,
    'color': slice.primary.boja
  };

  let textFilter = {filter: 'invert() grayscale(0.5) contrast() brightness(300%) opacity(0.875) hue-rotate(200deg)'}

  return (
    <div className="banner light-blue stanovi" style={bannerStyle}>
      <PrismicImage field={slice.primary.slika} className='img-fluid bg-img' />
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-6 tekst">
            <span style={textFilter}><PrismicRichText field={slice.primary.naslov} /></span>
            <span style={textFilter}><PrismicRichText field={slice.primary.tekst} /></span>
            <span className='btn arrow'>{Object.keys(slice.primary.link) ? <PrismicRichText field={slice.primary.link} /> : null}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
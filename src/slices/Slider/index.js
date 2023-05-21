import React from 'react'
import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/react'
import SlickSlider from "react-slick";
import { Svg, ArrowIcon } from "../../components/Icons";

// /**
//  * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
//  * @param { SliderProps }
//  */
const Slider = props => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500
  }

  const buildItems = () => {
    return props.slice.items.map((itm, i) => {
      return <div className="slide" key={`slide-${i}`}>
        <PrismicImage field={itm.slika} className='slideItm' />
        <div className="slide-text">
          <h4>{itm.podnaslov}</h4>
          <PrismicRichText field={itm.naslov} />
          <hr/>
          <PrismicRichText field={itm.opis} />
          <PrismicLink className="read-more" field={itm.link}>
            {itm.dugme_tekst} <Svg><ArrowIcon fill="#fff" /></Svg>
          </PrismicLink>
        </div>
      </div>
    })
  }

  return (
  <SlickSlider className="homepage-slider" {...settings}>{buildItems()}</SlickSlider>
  )
}

export default Slider
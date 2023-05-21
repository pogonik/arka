import React from 'react'
import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/react'
import useResize from '../../components/useResize'
import SlickSlider from "react-slick";

// /**
//  * @typedef {import("@prismicio/client").Content.BannerTriptihSlice} BannerTriptihSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<BannerTriptihSlice>} BannerTriptihProps
//  * @param { BannerTriptihProps }
//  */
const BannerTriptih = ({ slice }) => {

  let winWidth = useResize();

  let settings = {
    dots: false,
    infinite: true,
    speed: 500
  }

  const buildCards = () => {
    return slice.items.map((itm,i) => {
      return (
        <div className='col-12 col-md-4' key={`card-${i}`}>
          <PrismicLink field={itm.link} className="card">
            <PrismicImage field={itm.slika} className='card-img-top' />
            <div className="card-body">
              <div className='card-text'>
                <div className='icon'>
                  <PrismicImage field={itm.ikonica} />
                </div>
                <PrismicRichText field={itm.naslov} />
              </div>
            </div>
          </PrismicLink>
        </div>
      )
    })
  }

  if(winWidth >= 768) {
    return (
      <div className='container banner trio'>
        <div className='row'>
          {buildCards()}
        </div>
      </div>
    )
  }

  return (
    <div className='container banner trio trio-slider'>
      <SlickSlider className='row' {...settings}>{buildCards()}</SlickSlider>
    </div>
  )
}

export default BannerTriptih
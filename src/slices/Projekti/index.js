import React from 'react'
import { PrismicRichText, PrismicImage } from '@prismicio/react'
import SlickSlider from "react-slick";

/**
 * @typedef {import("@prismicio/client").Content.ProjektiSlice} ProjektiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjektiSlice>} ProjektiProps
 * @param { ProjektiProps }
 */

const Projekti = ({ slice }) => {

  let settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true
  }

  const Slajder = () => {

    let slides = slice.items.map((itm,i) => {
      return (<div className="slide" key={`slide-${i}`} style={{width:'100%'}}>
        <PrismicImage imgixParams={{w:1200,h:900}} className="img-fluid slide-img" field={itm.slike} style={{width:'100%'}} />
      </div>)
    })
    return <SlickSlider className="" {...settings} style={{width:'100%'}}>{slides}</SlickSlider>
  }

  return (
    <div className='row projekat'>
      <div className='card'>
        <div className='col col-12 col-md-12'>
          <div className="card-body">
            <h3 className='podnaslov'>{slice.primary.podnaslov}</h3>
            <PrismicRichText field={slice.primary.naslov}/>
            <PrismicRichText field={slice.primary.opis}/>
          </div>
        </div>
        <div className='col col-12 col-md-12'><Slajder /></div>
      </div>
    </div>
  )
}

export default Projekti
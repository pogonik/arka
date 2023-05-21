import React from 'react'
import { PrismicRichText, PrismicImage } from '@prismicio/react'

import SlickSlider from "react-slick";

/**
 * @typedef {import("@prismicio/client").Content.MaterijaliSlice} MaterijaliSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MaterijaliSlice>} MaterijaliProps
 * @param { MaterijaliProps }
 */
const Materijali = ({ slice }) => {

  // const sliderRef = useRef(null)

  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   sliderRef.current.slickGoTo(currentSlide);
  // }, [currentSlide])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    dotsClass: "slick-dots slick-thumbs",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: function(i) {
      return <img className="img-thumbnail rounded mx-auto slide-thumb" src={slice.items[i].slike.url} />;
    }
  }

  const Slajder = () => {

    let slajds = slice.items.map((itm,i) => {
      return (<div className="slide" key={`slide-${i}`}>
        <PrismicImage className="img-fluid slide-img" field={itm.slike} />
        {/* <img className="img-fluid slide-img" src={itm.slike.url} /> */}
      </div>)
    })

    return <SlickSlider className="" {...settings}>{slajds}</SlickSlider>
  }

  return (
    <div className='row materijal'>
      <div className='card'>
        <div className='col col-12 col-md-6'>
          <div className="card-body">
            <h3 className='podnaslov'>{slice.primary.podnaslov}</h3>
            <PrismicRichText field={slice.primary.naslov}/>
            <PrismicRichText field={slice.primary.opis}/>
          </div>
        </div>
        <div className='col col-12 col-md-6'><Slajder /></div>
      </div>
    </div>
  )
}

export default Materijali
import SlickSlider from "react-slick";
import { Svg, ArrowIcon, NextArrowIcon, PrevArrowIcon } from "./Icons";

const TrioBanner = props => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500
  }

  if(props.winWidth >= 768) {
    return (
      <div className='container banner trio'>
        <div className='row'>

          <div className='col-12 col-md-4'>
            <div className="card">
              <img src='/baner-planiranje.jpg' className='card-img-top' />
              <div className="card-body">
                <div className='card-text'>
                  <div className='icon'><img src='/icons/pen-outline.svg' /></div>
                  <h3>Planiranje i Projektovanje</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-4'>
            <div className="card">
              <img src='/baner-moleraj.jpg' className='card-img-top' />
              <div className="card-body">
                <div className='card-text'>
                  <div className='icon'><img src='/icons/paint-outline.svg' /></div>
                  <h3>Molerski radovi</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-4'>
            <div className="card">
              <img src='/baner-zidanje.jpg' className='card-img-top' />
              <div className="card-body">
                <div className='card-text'>
                  <div className='icon'><img src='/icons/trowel-outline.svg' /></div>
                  <h3>Zidarski radovi</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
  
  return (
    <div className='container banner trio trio-slider'>
      <SlickSlider className='row' {...settings}>

        <div className='col-12 col-md-4 slide'>
          <div className="card">
            <img src='/baner-planiranje.jpg' className='card-img-top' />
            <div className="card-body">
              <div className='card-text'>
                <div className='icon'><img src='/icons/pen-outline.svg' /></div>
                <h3>Planiranje i Projektovanje</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-4 slide'>
          <div className="card">
            <img src='/baner-moleraj.jpg' className='card-img-top' />
            <div className="card-body">
              <div className='card-text'>
                <div className='icon'><img src='/icons/paint-outline.svg' /></div>
                <h3>Molerski radovi</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-4 slide'>
          <div className="card">
            <img src='/baner-zidanje.jpg' className='card-img-top' />
            <div className="card-body">
              <div className='card-text'>
                <div className='icon'><img src='/icons/trowel-outline.svg' /></div>
                <h3>Zidarski radovi</h3>
              </div>
            </div>
          </div>
        </div>

      </SlickSlider>
    </div>
  )
}

export default TrioBanner
import React, { useState, useEffect, useRef } from 'react'
import { PrismicRichText, PrismicImage } from '@prismicio/react'
import SlickSlider from "react-slick";
import { Modal } from 'bootstrap';
import Spinner from '../../components/Spinner'

const Stanovi = ({ slice }) => {

  const modalRef = useRef(null)
  const [showSlider, setShowSlider] = useState(slice.items.length);

  let modalID = slice.id.replaceAll('#', '').replaceAll('$', '');

  const showModal = () => {
    const myModal = new Modal(`#${modalID}`);
    myModal.show();
    setShowSlider(true)
  };

  useEffect(() => {
    if(showSlider)
      modalRef.current.addEventListener('hidden.bs.modal', e => { setShowSlider(false) })

    return () => {
      // modalRef.current.removeEventListener('hidden.bs.modal', e => { setShowSlider(false) })
    }
  }, [showSlider]);


  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const Slajder = () => {

    let slides = [];

    if(slice.items.length) {
      slides = slice.items.map((itm,i) => {
        return (<div className="slide" key={`slide-${i}`}>
          <PrismicImage imgixParams={{w:1200,h:900}} className="img-fluid slide-img" field={itm.slika} />
        </div>)
      })
    }
    return <SlickSlider className="" {...settings}>{slides}</SlickSlider>
  }

  const fotoText = {'sr-rs': 'Fotografije', 'en-us': 'Photo Gallery'}

  return <div className="row stan">
    <div className='card'>
      <div className='col col-12 col-md-3'>
        <div className='slika'>
          <div className='ratio'>
            {slice.items.length ? <PrismicImage imgixParams={{w:600,h:400}} className="img-fluid" field={slice.items[0].slika} /> : <img src="/no-img.svg" className="img-fluid" />}
          </div>
        </div>
      </div>
      <div className='col col-12 col-md-9'>
        <div className="card-body">
          <div className='body-top'>
            <PrismicRichText field={slice.primary.naslov}/>
            <PrismicRichText field={slice.primary.opis}/>
          </div>

          {slice.items.length ? <div className='text-end'>
            <button className='btn btn-primary' onClick={showModal}>{fotoText[slice.lang]}</button>
          </div> : null}

        </div>
      </div>
    </div>

    {slice.items.length ? <div className="modal fade" id={modalID} ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {showSlider ? <Slajder /> : <Spinner />}
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
      </div>
    </div> : null}

  </div>
}

export default Stanovi
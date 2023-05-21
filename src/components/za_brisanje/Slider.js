import {useEffect} from "react";
import SlickSlider from "react-slick";
import { Svg, ArrowIcon, NextArrowIcon, PrevArrowIcon } from "./Icons";

const Slider = props => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500
  }

  return <SlickSlider className="homepage-slider" {...settings}>
    <div className="slide">
      <img className="slideItm" src="/slide-1.jpg" />
      <div className="slide-text">
        <h4>Stanovi u novogradnji!</h4>
        <h2>Mi smo <strong>lideri</strong> <br/>u brzini i kvalitetu <br/><strong>novogradnje</strong> u regiji!</h2>
        <hr/>
        <p>Vršimo kompletnu uslugu <strong><u>renoviranja, adaptacije <br/>i opremanja</u></strong> stambenog ili poslovnog prostora.</p>
        <a href="#" className="read-more">Pogledajte naše dosadašnje projekte <Svg><ArrowIcon fill="#fff" /></Svg></a>
      </div>
    </div>
    <div className="slide">
      <img className="slideItm" src="/slide-2.jpg" />
      <div className="slide-text">
        <h4>Stanovi u novogradnji!</h4>
        <h2>Mi smo <strong>lideri</strong> <br/>u brzini i kvalitetu <br/><strong>novogradnje</strong> u regiji!</h2>
        <hr/>
        <p>Vršimo kompletnu uslugu <strong><u>renoviranja, adaptacije <br/>i opremanja</u></strong> stambenog ili poslovnog prostora.</p>
        <a href="#" className="read-more">Pogledajte naše dosadašnje projekte <Svg><ArrowIcon fill="#fff" /></Svg></a>
      </div>
    </div>
    <div className="slide">
      <img className="slideItm" src="/slide-3.jpg" />
      <div className="slide-text">
        <h4>Stanovi u novogradnji!</h4>
        <h2>Mi smo <strong>lideri</strong> <br/>u brzini i kvalitetu <br/><strong>novogradnje</strong> u regiji!</h2>
        <hr/>
        <p>Vršimo kompletnu uslugu <strong><u>renoviranja, adaptacije <br/>i opremanja</u></strong> stambenog ili poslovnog prostora.</p>
        <a href="#" className="read-more">Pogledajte naše dosadašnje projekte <Svg><ArrowIcon fill="#fff" /></Svg></a>
      </div>
    </div>
  </SlickSlider>
}

export default Slider
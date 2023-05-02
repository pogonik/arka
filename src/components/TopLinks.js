import { useRef } from "react"

import {
  Svg,
  HouseSolidIcon,
  PhoneSolidIcon,
  MailSolidIcon,
  GlobeIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon
} from './Icons'

import useOutsideClick from "./useOutsideClick";

import { Dropdown } from 'bootstrap';

import { encodeHTMLEntities, decodeHTMLEntities } from "../utils/lib";

const TopLinks = props => {

  const toggleDropdown = () => {
    const myDropdown = Dropdown.getOrCreateInstance("#infoDropDown");
    myDropdown.toggle()
  };

  const closeDropdown = () => {
    const myDropdown = Dropdown.getOrCreateInstance("#infoDropDown");
    myDropdown.hide()
  };

  const ref = useOutsideClick(closeDropdown);

  let langLinkTekst = {
    'sr-rs': 'English',
    'en-us': 'Srpski'
  };

  let prevodLang = {
    'sr-rs': 'en-us',
    'en-us': 'sr-rs'
  };
  
  let prevodLink = '/';

  if(Object.keys(props).includes('prevod')) {
    prevodLink = props.prevod.type === 'naslovna'
      ? `/${prevodLang[props.lang]}/index`
      : `/${props.prevod.lang}/${props.prevod.uid}`;
  }

  let infoBar = props.winWidth >= 768 
    ? (<div className='row'>
        <div className='block'>
          <span className='icon'><Svg><HouseSolidIcon fill="#fff" /></Svg></span>
          <span className='info'>21 Oktobra br. 35, 25000 Sombor</span>
        </div>
        <div className='block'>
          <span className='icon'><Svg><PhoneSolidIcon fill="#fff" /></Svg></span>
          <span className='info'>tel: +381 60 123 456</span>
        </div>
        <div className='block'>
          <span className='icon'><Svg><MailSolidIcon fill="#fff" /></Svg></span>
          <span className='info'>office@arkaizgradnja.com</span>
        </div>
        <a className='block' href={prevodLink}>
          <span className='icon'><Svg><GlobeIcon fill="#fff" /></Svg></span>
          <span className='info'>{langLinkTekst[props.lang]}</span>
        </a>
      </div>)
    : (<div className="row">
        <div className="btn-group block info-dropdown" id="infoDropDown">

          <button className="btn dropdown-toggle" onClick={toggleDropdown} ref={ref}>
            <span className='icon'><Svg><HouseSolidIcon fill="#fff" /></Svg></span>
            <span className='info'>21 Oktobra br. 35, 25000 Sombor</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-lg-start">
            <li>
              <a className="dropdown-item" href="#">
                <span className='icon'><Svg><PhoneSolidIcon fill="#fff" /></Svg></span>
                <span className='info'>tel: +381 60 123 456</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span className='icon'><Svg><MailSolidIcon fill="#fff" /></Svg></span>
                <span className='info'>office@arkaizgradnja.com</span>
              </a>
            </li>
          </ul>

        </div>

        <a className='block' href={prevodLink}>
          <span className='icon'><Svg><GlobeIcon fill="#fff" /></Svg></span>
          <span className='info'>{langLinkTekst[props.lang]}</span>
        </a>

      </div>);
  
  return (
    <div className="top-links">
      <div className='container-fluid'>

        <div className='row'>
          <div className='col left'>

            {infoBar}

          </div>

          <div className='col-2 right'>
            <a href='#'><Svg fill="#fff" viewBox="0 0 44 36"><TwitterIcon /></Svg></a>
            <a href='#'><Svg fill="#fff" viewBox="0 0 42 42"><FacebookIcon /></Svg></a>
            <a href='#'><Svg fill="#fff" viewBox="0 0 42 42"><InstagramIcon /></Svg></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopLinks
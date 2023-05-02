import { useState, useEffect } from "react";
import {
  Svg,
  LogoTop,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  ZgradaIcon
} from './Icons'

import TopLinks from "./TopLinks";
import MainNav from "./MainNav";

import { Offcanvas } from 'bootstrap';

const Navbar = props => {

  const [offcanvaState, setOffcanvaState] = useState(false);

  const toggleOffCanvas = () => {
    const myOffcanvas = Offcanvas.getOrCreateInstance("#offCanvas");
    myOffcanvas.toggle()

    setOffcanvaState(!offcanvaState);
  };

  let navbarClasses = props.winWidth < 768
    ? 'col navbar-links offcanvas offcanvas-start'
    : 'col navbar-links';

  let navbarHeader = props.winWidth < 768 
    ? <header className="navbar-header"><div className="logo"><LogoTop /></div><button className="btn-close" onClick={toggleOffCanvas}></button></header> 
    : null;
  
  useEffect(() => {
    if(offcanvaState) toggleOffCanvas();
  }, [props.uid])
  
  return (
    <header className="navbar-wrapper">

      <TopLinks winWidth={props.winWidth} prevod={props.prevod} lang={props.lang} />

      <nav className="navbar navbar-expand-lg p-3">
        <div className="container">
          <div className='row'>
            <div className='col navbar-brand-holder'>
              <a className="navbar-brand" href={`/${props.lang}/index`}>
                <div className="logo-icon">
                  <Svg viewBox="0 0 120 120" fill="#254260"><ZgradaIcon /></Svg>
                </div>
                <div className="logo">
                  <LogoTop />
                </div>
              </a>

              {props.winWidth < 768 
                ? <button type="button" className="navbar-toggler" onClick={toggleOffCanvas}><span className="navbar-toggler-icon"></span></button> 
                : ''}
            
            </div>
            <div className={navbarClasses} id="offCanvas">

              {navbarHeader}

              
              <MainNav className='navbar-nav nav' lang={props.lang} url={props.url} uid={props.uid} />

              <footer className='navbar-footer soc-links'>
                <a href='#'><Svg fill="#254260" viewBox="0 0 44 36"><TwitterIcon /></Svg></a>
                <a href='#'><Svg fill="#254260" viewBox="0 0 42 42"><FacebookIcon /></Svg></a>
                <a href='#'><Svg fill="#254260" viewBox="0 0 42 42"><InstagramIcon /></Svg></a>
              </footer>

            </div>
          </div>
          
        </div>
      </nav>

    </header>
  )
}

Navbar.defaultProps = {
  lang: 'sr-rs',
  uid: 'index',
  url: '/'
}


export default Navbar
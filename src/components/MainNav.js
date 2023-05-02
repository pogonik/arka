import { useState, useEffect } from "react";
import { base_url, langs, lang } from '../utils/lib'
import { client } from '../prismicio'
import * as prismicT from "@prismicio/types";
import {PrismicLink} from "@prismicio/react";

import RouterLink from '../components/RouterLink'
import Spinner from '../components/Spinner'

import { NavLink, Link } from "react-router-dom";

const MainNav = props => {

  const [navData, setNavData] = useState([])

  useEffect(() => {
      getNavData();
  }, [props.uid, props.lang]);

  const getNavData = async () => {
    const mainNavData = await client.getSingle('main_navigation', { lang: props.lang });
    let nav = await mainNavData.data.nav.map((itm,i) => {
      itm.link.naslov = itm.naslov;
      itm.link.to = `${itm.link.url}`;
      itm.link.className = itm.link.uid === props.uid ? 'nav-link active' : 'nav-link'
      return itm.link;
    })
    setNavData(nav);
  };

  const buildNavData = () => {
    return navData.map((itm,i) => <NavLink className={itm.className} to={`${itm.to}`} key={itm.id}>{itm.naslov}</NavLink>)
  }

  if(!navData.length) {
    return <div className="d-flex align-items-center"><Spinner /></div>
  }

  return <nav className='navbar-nav nav'>{buildNavData()}</nav>
}

MainNav.defaultProps = {
  winWidth: 0,
  url: '/',
  uid: '/',
  lang: 'sr-rs'
}

export default MainNav
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mainNavSlice, { fetchNavByLang } from './mainNavSlice';
import { langs, lang } from './utils/lib'

const MainNav = props => {
  const links = useSelector(state => state);
  const dispatch = useDispatch();
  // const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
    dispatch(fetchNavByLang(lang))
  }, [])

  const navLinks = links.map((itm,i) => {
    let linkClass = itm.link.url === props.url ? 'nav-link active' : 'nav-link';
    return <a className={linkClass} href={itm.link.url} key={`key-${i}`}>{itm.naslov}</a>
  })
  return (
    <nav>
      
    </nav>
  );
}

export default MainNav
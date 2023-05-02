import { useState, useEffect } from 'react';
import { client } from '../prismicio'
import { useParams } from "react-router-dom";
import { SliceZone, PrismicRichText } from '@prismicio/react'
import { components } from '../slices'

import '../styles/styles.scss'

const Page = props => {


  let uzglavljeHeight = {height:`${props.winWidth / 5}px`};

  let slices = props.pageData.data.slices.map((itm) => {
    itm.lang = props.lang;
    return itm
  })

  if(!Object.keys(props.pageData).length) return <div>...loading</div>

  return (
    <>
      <header className='page-header' style={uzglavljeHeight}>

        <img src='/uzglavlje-1.jpg' className='header-img' />

        <div className="d-flex align-items-center">
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-9'>
                <PrismicRichText field={props.pageData.data.naslov} />
              </div>
            </div>
          </div>
        </div>

      </header>

      <article className={`article container ${props.uid}`}>
        {props.pageData.data.slika_uzglavlje.length ? <div className='row'>
          <div className='col article-image'>
            <picture className='ratio article-pic'>
              <img src={props.pageData.data.slika_uzglavlje.url} alt={props.pageData.data.slika_uzglavlje.alt} className='img-fluid' />
            </picture>
          </div>
        </div> : null}

        <SliceZone slices={slices} components={components} className={props.uid} lang={props.lang} />

      </article>
    </>
  )
}

export default Page
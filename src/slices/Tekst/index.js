import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TekstSlice} TekstSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TekstSlice>} TekstProps
 * @param { TekstProps }
 */
const Tekst = ({ slice }) => (
  <div className='tekst'>
    <div className='row'>
      <div className='col'>
        {slice.items.map((itm, i) => <PrismicRichText field={itm.sadrzaj} key={`sadrzaj-${i}`} />)}
      </div>
    </div>
  </div>
)

export default Tekst
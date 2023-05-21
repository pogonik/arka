import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import ContactForm from '../../components/ContactForm'

/**
 * @typedef {import("@prismicio/client").Content.KontaktFormaSlice} KontaktFormaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KontaktFormaSlice>} KontaktFormaProps
 * @param { KontaktFormaProps }
 */
const KontaktForma = ({ slice }) => (
  <ContactForm lang={slice.lang} />
)

export default KontaktForma
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import ContactForm from '../components/ContactForm'

import '../styles/styles.scss'

const Home = props => {

  if(!Object.keys(props.pageData).length) return <div>...loading</div>

  return (
    <>
      <SliceZone slices={props.pageData.data.slices} components={components} className={props.uid} lang={props.lang} />

      <ContactForm url={props.pageData.url} uid={props.uid} lang={props.lang} />
    </>
  )
}

export default Home
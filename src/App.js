import { useState, useEffect, Suspense } from 'react'
import { useParams } from "react-router-dom";
import { client } from './prismicio'
import { langs, base_url } from './utils/lib'
import Layout from './components/Layout'; 
import useResize from './components/useResize'; 
import MainNav from './components/MainNav'; 
import Head from './components/Head'
import Spinner from './components/Spinner'
import Home from './pages/Home'
import Page from './pages/Page'

const App = props => {

  const [pageData, setPageData] = useState({});
  const [metaData, setMetaData] = useState({});

  let winWidth = useResize();
  let {lang, uid} = useParams();

  useEffect(() => {
    getPageData();
  }, [uid])

  const getPageData = async () => {
    let res;
    if(['index','home'].includes(uid) || typeof(uid) === undefined || uid === null) {
      res = await client.getSingle('naslovna', { lang });
    } else {
      res = await client.getByUID('strana', uid, { lang });
    }

    await setPageData(res);

    let meta = {
      pageTitle: res.data.page_title,
      meta_keywords: res.data.meta_keywords,
      meta_description: res.data.meta_description,
      meta_image: res.data.meta_image.url || '',
      page: res.url,
      lang: res.lang,
      locale: langs[res.lang].locale
    }
    await setMetaData(meta)
  };

  if(!Object.keys(pageData).length) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col py-5 d-flex align-items-center justify-content-center'>
            <Spinner />
          </div>
        </div>
      </div>
    )
  }

  return (
    
    <>
      <Head {...metaData} />
      <Layout winWidth={winWidth} url={pageData.url} uid={pageData.uid} lang={pageData.lang} meta={metaData} base_url prevod={pageData.alternate_languages[0]}>
      
      <Suspense fallback={<Spinner />}>
      {pageData.type === 'naslovna'
        ? <Home />
        : <Page winWidth={winWidth} pageData={pageData} uid={pageData.uid} lang={pageData.lang} />}
      </Suspense>
      </Layout>
    </>
  );
}

App.defaultProps = {
  winWidth: 0,
  url: '/',
  uid: 'index',
  lang: 'sr-rs',
  base_url: '',
  prevod: {
    url: '/',
    uid: 'index',
    lang: 'en-us',
  }
}

export default App;

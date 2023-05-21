import MainNav from "./MainNav"

export default function Footer(props) {
  return (
    <footer id="footer">
      <div className="container py-4">
        <div className="row justify-content-between">
          <div className="col col-5 col-md-3">
            <MainNav className='nav flex-column' lang={props.lang} url={props.url} allPages={props.allPages} />
          </div>
          <div className="col col-7 col-md-5 info d-flex flex-column justify-content-evenly">
            <div className="row">
              <div className="col-4 icon">
                <div className="ratio ratio-1x1 house">
                  <img src="/icons/info-footer.svg" />
                </div>
              </div>
              <div className="col-8 tekst">21 Oktobra br. 35 <br/>25000 Sombor</div>
            </div>
            <div className="row my-4">
              <div className="col-4 icon">
                <div className="ratio ratio-1x1 phone">
                  <img src="/icons/info-footer.svg" />
                </div>
              </div>
              <div className="col-8 tekst">tel: +381 25 123 456 <br/>mob: +381 60 123 456</div>
            </div>
            <div className="row">
              <div className="col-4 icon">
                <div className="ratio ratio-1x1 email">
                  <img src="/icons/info-footer.svg" />
                </div>
              </div>
              <div className="col-8 tekst">office@arkaizgradnja.com <br/>info@arkaizgradnja.com</div>
            </div>
          </div>
          <div className="col col-12 col-md-3 logo-wrapper">
            <div className="row my-4 me-2 py-3">
              <div className="col logo">
                <a href="/"><img src="/icons/logo-footer.svg" /></a>
              </div>
            </div>
            <div className="row mt-4 me-2">
              <div className="col soc-icons d-flex justify-content-between">
                <a href="https://www.instagram.com/arkaizgradnja" className="ratio ratio-1x1 instagram">
                  <img src="/icons/soc-icons-footer.svg" />
                </a>
                <a href="https://www.youtube.com/@ARKAIzgradnja" className="ratio ratio-1x1 youtube">
                  <img src="/icons/soc-icons-footer.svg" />
                </a>
                <a href="/" className="ratio ratio-1x1 facebook">
                  <img src="/icons/soc-icons-footer.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-info py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center">Copyright 2023. ARKA Izgradnja i adaptacija. Sva prava zadržana.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
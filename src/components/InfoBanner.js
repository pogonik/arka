import {Svg, MailOutlineIcon, PhoneOutlineIcon, HouseOutlineIcon} from './Icons';

const InfoBanner = props => {
  return (
    <div className="container info-banner-cont">
      <div className="banner row info">
        <div className="col-12 col-sm-4 adresa">
          <div className="ikona levo">
            <Svg fill="#fff"><HouseOutlineIcon /></Svg>
          </div>
          <div className="tekst desno">
            <h4>Adresa</h4>
            <p>21 Oktobra br. 35, <br/>25000 Sombor</p>
          </div>
        </div>
        <div className="col-12 col-sm-4 telefon">
          <div className="ikona levo">
            <Svg fill="#fff"><PhoneOutlineIcon /></Svg>
          </div>
          <div className="tekst desno">
            <h4>Telefon</h4>
            <p>025 123 456, <br/>061 123 456</p>
          </div>
        </div>
        <div className="col-12 col-sm-4 email">
          <div className="ikona levo">
            <Svg fill="#fff"><MailOutlineIcon /></Svg>
          </div>
          <div className="tekst desno">
            <h4>E-mail</h4>
            <p>office@arkaizgradnja.com, <br/>info@arkaizgradnja.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner

import InfoBanner from './InfoBanner'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = props => {

  const [submit, handleSubmit] = useForm("mayzadaz");
  
  if (submit.succeeded) {
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <p>Hvala Vam što ste nas kontaktirali!</p>
            <p>Uskoro će vam stići odgovor na vaš email.</p>
            <p>ARKA - Izgradnja i adaptacija</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="banner light-blue kontakt-form-wrapper">

      <h3 className="p-2">Kontakt forma</h3>

      <form className="kontakt-form" onSubmit={handleSubmit}>

        {props.title !== null ? <h2 className="text-center mb-5">{props.title || `Za sve informacije i ponude <br/>slobodno nam se obratite`}</h2> : null}

        <div className="container">

          <div className="row mb-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="Ime i prezime" name="ime" id="ime" />
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="E-mail" name="email" id="email" />
            </div>
            <ValidationError prefix="Email" field="email" errors={submit.errors}/>
          </div>

          <div className="row mb-5">
            <div className="col">
              <div className="form-floating">
                <textarea className="form-control poruka" placeholder="Tekst poruke" id="message" name="message"></textarea>
                <label htmlFor="message">Tekst poruke</label>
              </div>
            </div>
            <ValidationError prefix="Message" field="message" errors={submit.errors}/>
          </div>

          <div className="row">
            <div className="col text-center">
              <button type="submit" id="form-submit" className="btn btn-primary btn-submit" disabled={submit.submitting}>Pošalji poruku</button>
            </div>
          </div>

        </div>
      </form>

      <div className="google-map">
        <iframe className="mapaFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7760806055169!2d19.121303369626016!3d45.769099498192546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cb568ed4dae8d%3A0x54096acb12f1fcd9!2sArka%20izgradnja%20i%20adaptacija!5e0!3m2!1sen!2srs!4v1681321436443!5m2!1sen!2srs" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <InfoBanner />
      </div>
{/* 
https://maps.googleapis.com/maps/api/staticmap?45.7690995,19.1213034,19&zoom=14&key=AIzaSyCIPHvVT6zOeb7dg3K6dfaxdOqjU-wJhkI
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly" defer></script> */}
    </div>
  );
};

ContactForm.defaultProps = {
  title: null
}

export default ContactForm
import React from 'react';

function Contact() {
  return (
    <section className="contact-crev section-padding" data-scroll-index="7">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head md-mb80">
              <h6 className="dot-titl-non mb-10 fz-18">
              Contactez-nous</h6>
              <h2 className="fz-50">Pledge and Grow  Blockchain!</h2>
              <p className="fz-15 mt-10"> Contactez-nous dès aujourd'hui pour en savoir plus sur nos services blockchain et découvrez comment nous pouvons vous accompagner dans vos projets.
              </p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a className='main-color2'href="tel:+33 7 53 69 58 40">+33 7 53 69 58 40</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                  <a target='_blank' href="https://www.tiktok.com/@pledgeandgrow">Tiktok</a>
                </li>
                <li className="mr-30">
                  <a target='_blank' href="https://www.linkedin.com/company/pledge-and-grow">LinkedIn</a>
                </li>
                <li>
                  <a target='_blank' href="https://www.instagram.com/pledgeandgrow">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">

                <div className="messages"></div>

                <div className="controls row">

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name"
                        required="required" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email"
                        required="required" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4"
                        required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30">
                        <span className="text">Parlons!</span>
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
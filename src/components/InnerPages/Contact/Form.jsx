import React from 'react';

function Form() {
  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10 fz-14">
              CONTACTEZ-NOUS</h6>
              <h2 className="fz-50">Entrons<br />en contact</h2>
              <p className="fz-18 mt-10">Que vous souhaitiez collaborer avec nous ou simplement dire bonjour, nous serions ravis de vous entendre !
              </p>
              <div className="phone fz-30 fw-600 mt-30 ">

              <a className='underlined main-color2 text-xl' href="tel:+33 7 53 69 58 40">+33 7 53 69 58 40</a>

              <a className='my-2 text-xl'  href="mailto:contact@pledgeandgrow.com">contact@pledgeandgrow.com</a>

                <a>Paris-Ile de France-FRANCE</a>
                
                
              </div>
              <ul className="rest social-text d-flex mt-60">
                {/* <li className="mr-30">
                  <a href="">Facebook</a>
                </li> */}
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
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30">
                        <span className="text">
                        Discutons.</span>
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

export default Form
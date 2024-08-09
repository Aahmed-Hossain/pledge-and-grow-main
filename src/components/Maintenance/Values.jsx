import React, { useEffect } from 'react';
//= Scripts
import isInView from '@/common/isInView';

function Values() {
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);

  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      }
    });
  }

  return (
    <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    className="row lg-marg mt-80">
      <div className="col-lg-6 valign">
        <div className="md-mb50">
          <div className="item-flex d-flex align-items-center mb-40">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Expertise Technique</h6>
              <p className="fz-15">Notre équipe est composée d'experts qualifiés dans la maintenance de sites CMS, applications full-stack et solutions SaaS.
              </p>
            </div>
          </div>



          <div className="item-flex d-flex align-items-center mb-40">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Réactivité et Proactivité</h6>
              <p className="fz-15"> Nous offrons un support réactif et une surveillance proactive pour anticiper et résoudre les problèmes avant qu'ils n'affectent vos utilisateurs.
              </p>
            </div>
          </div>


          <div className="item-flex d-flex align-items-center mb-40">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Personnalisation</h6>
              <p className="fz-15"> Nous adaptons nos services de maintenance pour répondre aux besoins spécifiques de votre entreprise.
              </p>
            </div>
          </div>


          <div className="item-flex d-flex align-items-center mb-40">
            <div>
              <div className="icon-img-60">
                <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
              </div>
            </div>
            <div className="cont ml-50">
              <h6>Fiabilité et Sécurité</h6>
              <p className="fz-15">Nous assurons une maintenance fiable et sécurisée pour garantir la continuité de vos opérations.
              </p>
            </div>
          </div>



        </div>
      </div>
      <div className="col-lg-6">
        <div className="cont">
          {/* <h6 className="sub-title mb-15">Our Value</h6> */}
          <h3 className="mb-15">Pourquoi Choisir <span className="stroke fw-700 opacity-7"> Pledge and Grow</span>?</h3>
          <div className="skills mt-50">
            <div className="skills-box">
              <div className="skill-item mb-40">
                <h5 className="fz-14 mb-15">UI / UX Design</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="90%"></div>
                </div>
              </div>

              <div className="skill-item mb-40 ">
                <h5 className="fz-14 mb-15">Apps Development</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="80%"></div>
                </div>
              </div>


              <div className="skill-item mb-40 ">
                <h5 className="fz-14 mb-15">Application web</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="96%"></div>
                </div>
              </div>

              <div className="skill-item mb-40 ">
                <h5 className="fz-14 mb-15">Application mobile</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="88%"></div>
                </div>
              </div>

              <div className="skill-item mb-40 ">
                <h5 className="fz-14 mb-15">SAAS</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="80%"></div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
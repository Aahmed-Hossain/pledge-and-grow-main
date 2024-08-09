import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/sq1.jpg" alt="" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/sq2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Pourquoi la Cybersécurité est Cruciale ?   </span>
                  </span>
                  {/* <span className="sideup-text">
                    <span className="up-text">et Technologies</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"><span className="sub-font">Utilisés</span>.</span>
                  </span> */}
                </h2>
                {/* <p className='sub-title mb-15'> 
                Pour assurer une maintenance efficace et optimale de vos systèmes IA, nous utilisons des outils et technologies avancés :
                </p> */}
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Prévention des Attaques</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">TÉvitez les interruptions de service et les pertes financières dues aux cyberattaques.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Protection des Données</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Assurez la confidentialité et l'intégrité des données sensibles.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Confiance des Clients</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Renforcez la confiance de vos clients en montrant que vous prenez la sécurité au sérieux.</p>
                  </div>
                </div>


                {/* <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Optimisation des Modèles</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">AutoML, techniques de hyperparameter tuning</p>
                  </div>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
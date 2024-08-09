import React from 'react';

function About() {
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
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1">
                <img src="/dark/assets/imgs/arch/intro/sq1.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/dark/assets/imgs/arch/intro/sq2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="cont">
              <div className="text">
                <h3>Nos valeurs</h3>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Pragmatisme</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Nous restons concentrés sur nos objectifs et savons ajuster nos priorités ou trouver des solutions alternatives pour les atteindre.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Dynamisme </h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Nous sommes énergiques et apprécions la rapidité dans notre travail.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Excellence</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Nous visons à être fiers de ce que nous accomplissons et à délivrer des résultats de haute qualité.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
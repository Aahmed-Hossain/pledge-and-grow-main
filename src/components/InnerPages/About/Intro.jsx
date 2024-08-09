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
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/sq1.jpg" alt="" className="radius-10" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/sq2.jpg" alt="" className="radius-10" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Watch the creative</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">process behind our</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">digital marketing.</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Sécurité et Fiabilité</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Nous utilisons des technologies de pointe et des infrastructures sécurisées pour protéger vos données sensibles et garantir la fiabilité de vos systèmes informatiques. Vous pouvez compter sur nous pour une sécurité maximale et une protection contre les cybermenaces.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Intégration et Compatibilité</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Notre expertise en intégration de systèmes complexes assure une parfaite compatibilité entre vos différents outils et plateformes. Nous veillons à ce que toutes vos solutions fonctionnent ensemble de manière harmonieuse, optimisant ainsi votre efficacité opérationnelle.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Agilité et Rapidité</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Grâce à notre approche de développement agile, nous livrons rapidement des solutions de haute qualité et nous adaptons facilement à vos besoins changeants. Notre réactivité vous offre un avantage concurrentiel en vous permettant de rester à jour avec les évolutions du marché.</p>
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

export default Intro
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
                    <span className="up-text">Outils et Technologies</span>
                  </span>
                  {/* <span className="sideup-text">
                    <span className="up-text">et Technologies</span>
                  </span> */}
                  <span className="sideup-text">
                    <span className="up-text"><span className="sub-font">Utilisés</span>.</span>
                  </span>
                </h2>
                <p className='sub-title mb-15'>Pour garantir des solutions blockchain performantes et sécurisées, nous utilisons les outils et technologies suivants
                </p>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Plateformes Blockchain </h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Ethereum, Hyperledger Fabric, Polkadot, Binance Smart Chain</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Outils de Développement</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Solidity, Truffle, Remix, Hardhat</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18"> Outils de Sécurité</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">MythX, CertiK, Slither</p>
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

import React from 'react';


function About({ lightMode }) {
  return (
    <section className="intro-corp section-padding sub-bg">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6 md-mb50">
            <div className="imgs mb-80">
              <div className="img1 main-color3">
                <img src="/dark/assets/imgs/about/sq1.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/dark/assets/imgs/about/sq2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h6 className="sub-title mb-15">Outils et Technologies Utilisés</h6>
              <h3 className="mb-15">
              Pour garantir une maintenance efficace et optimale, nous utilisons les outils et <span className="stroke fw-700 opacity-7">technologies les plus avancés</span>
              </h3>
              {/* <p>We craft premium digital work for web, mobile and experiential with creative agencies and
                global brands alike – putting passion.</p> */}
              <div className="mt-50 pt-30 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="rest list-arrow">
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Surveillance et Monitoring</span>
                        <p className='fz-15' style={{color:'gray'}}>New Relic,Datadog,Nagios</p>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Gestion de Contenu</span>
                        <p className='fz-15' style={{color:'gray'}}>WordPress, Joomla, Drupal</p>
                      </li>


                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>QuaNos Engagementslité</span>
                        <p className='fz-15' style={{color:'gray'}}>Maintenance de haute qualité pour garantir la performance et la satisfaction utilisateur.</p>
                      </li>


                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Disponibilité</span>
                        <p className='fz-15' style={{color:'gray'}}>Garantie de haute disponibilité et de temps de réponse rapide pour les incidents critiques.</p>
                      </li>


                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="rest list-arrow">
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                        </span>
                        <span>Développement Full-Stack</span>
                        <p className='fz-15' style={{color:'gray'}}>Node.js, React, Angular, Vue.js</p>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                    
                    
                        </span>
                        <span>Infrastructure Cloud</span>
                        <p className='fz-15' style={{color:'gray'}}>AWS, Azure, Google Cloud Platform</p>
                      </li>


                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                    
                    
                        </span>
                        <span>Sécurité</span>
                        <p className='fz-15' style={{color:'gray'}}>OWASP, SSL, pare-feu d'application web (WAF)</p>
                      </li>


                      <li className="mt-20">
                        <span className="icon">
                          <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill={lightMode ? '#000' : '#fff'}></path>
                          </svg>
                    
                    
                        </span>
                        <span>Transparence</span>
                        <p className='fz-15' style={{color:'gray'}}>Rapports réguliers sur les activités de maintenance et les améliorations apportées.</p>
                      </li>



                  
                    </ul>
                  </div>
                </div>
              </div>
              {/* <Link href="/dark/page-about" className="butn butn-md butn-bord radius-30 mt-50">
                <span>Explore More</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


{/* 
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
                    <span className="up-text"></span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"></span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"><span className="sub-font fz-40">Un site web est comme une vitrine numérique ouverte 24h/24 et 7j/7, accessible à tous via Internet. Imaginez-le comme un magasin ou une bibliothèque virtuelle où vous pouvez partager des informations, vendre des produits, ou offrir des services à un public mondial.</span></span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Formulaire interactif (Compose ton application)</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Avez-vous une idée des technologies nécessaire pour votre projet ?
    • Oui
    • Je préfère vous faire confiance</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Si oui</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
    • Choix du Framework : Next.js, Django, Ruby on Rails, Laravel
    • Choix du Back end : Python, JavaScript, Node.js, PHP
    • Choix du Back end : MongoDB, PostgreSQL SQL</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Avez-vous un cahier des charges : Oui/Non</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Avez-vous un deadline spécifique : 
                    Urgent (2 mois) - Normal (3-6 mois) – Détente (+6 mois)</p>
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

export default About */}
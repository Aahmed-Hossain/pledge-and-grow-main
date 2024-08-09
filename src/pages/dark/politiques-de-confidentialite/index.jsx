import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';

function PolitiqueConfidentialite() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Politique de Confidentialité</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <div className="container mb-20">
          <div className="container mt-60 mb-100">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="caption">
                  <div className="sub-title fz-12">
                    <a href="#0"><span>Politique</span></a>
                    <span> , </span>
                    <a href="#0"><span>Confidentialite</span></a>
                  </div>
                  <h1 className="fz-55 mt-30 text-center">Politique de Confidentialité</h1>
                </div>
                <div className="info d-flex mt-40 justify-content-between">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Auteur</span>
                        <h6 className="fz-16">Pledge & Grow</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date">
                    <a href="#0">
                      <span className="opacity-7">Dernière mise à jour :</span>
                      <h6 className="fz-16">06/03/2024</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background bg-img parallaxie" data-background="/dark/assets/imgs/blog/b2.jpg"></div>
          <div className="main-post">
            <div className="item pb-60">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="text">
                    <div className="d-flex align-items-start">
                      <span className="fz-60 fw-600 white mr-10" style={{ color: 'white', lineHeight: '1' }}>B</span>
                      <p>
                        ienvenue sur la page de la politique de confidentialité de Pledge & Grow. Nous nous engageons à protéger la confidentialité et la sécurité des informations personnelles de nos clients et visiteurs de notre site web. Cette Politique de Confidentialité explique comment nous recueillons, utilisons, divulguons, et protégeons vos informations personnelles, conformément à la législation française et au RGPD.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">1. Collecte des Informations Personnelles</h5>
                      <p>
                        Nous recueillons des informations personnelles lorsque vous utilisez nos services de conseil en informatique et marketing, visitez notre site web, ou communiquez avec nous. Les types d’informations que nous pouvons recueillir incluent votre nom, adresse e-mail, numéro de téléphone, informations professionnelles, et toute autre information que vous choisissez de nous fournir.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">2. Utilisation des Informations</h5>
                      <p>
                        Vos informations personnelles sont utilisées pour :
                      </p>
                      <ul className="ml-4">
                        <li className="mt-3">- Fournir, gérer, et améliorer nos services</li>
                        <li className="mt-3">- Communiquer avec vous concernant nos services ou répondre à vos demandes</li>
                        <li className="mt-3">- Respecter nos obligations légales et réglementaires</li>
                        <li className="mt-3">- Analyser l’utilisation de nos services pour améliorer l’expérience utilisateur</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">3. Partage des informations</h5>
                      <p>
                        Nous ne partageons vos informations personnelles avec des tiers que dans les cas suivants :
                      </p>
                      <ul className="ml-4">
                        <li className="mt-3">- Avec votre consentement</li>
                        <li className="mt-3">- Pour fournir un service que vous avez demandé</li>
                        <li className="mt-3">- Lorsqu’il est requis par la loi ou pour répondre à des procédures judiciaires</li>
                        <li className="mt-3">- Pour protéger les droits, la propriété ou la sécurité de Pledge and Grow, de nos clients ou du public</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">4. Sécurité des Données</h5>
                      <p>
                        Nous prenons des mesures de sécurité techniques et organisationnelles pour protéger vos informations personnelles contre l’accès non autorisé, la modification, la divulgation, ou la destruction.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">5. Vos Droits</h5>
                      <p>
                        Conformément au RGPD, vous avez le droit d’accéder, rectifier, transférer, restreindre le traitement, ou supprimer vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à <a href="mailto:contact@pledgeandgrow.com">contact@pledgeandgrow.com</a>.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">6. Cookies et Technologies Similaires</h5>
                      <p>
                        Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site Web. Vous pouvez ajuster vos préférences de cookies dans les paramètres de votre navigateur. Pour plus d’informations, consultez notre politique d’utilisation des cookies.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">7. Modifications de la Politique de Confidentialité</h5>
                      <p>
                        Nous pouvons mettre à jour notre Politique de Confidentialité pour refléter les changements dans nos pratiques d’information. Si nous apportons des modifications significatives, nous vous en informerons par email ou via notre site web avant que les changements ne prennent effet.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">8. Nous Contacter</h5>
                      <p>
                        Pour toute question ou préoccupation concernant cette politique ou vos informations personnelles, veuillez contacter Pledge and Grow à <a href="mailto:contact@pledgeandgrow.com">contact@pledgeandgrow.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

PolitiqueConfidentialite.getLayout = page => <Layout>{page}</Layout>

export default PolitiqueConfidentialite;

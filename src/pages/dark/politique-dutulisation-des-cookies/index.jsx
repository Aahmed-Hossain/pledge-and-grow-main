import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';

function PolitiqueCookie() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Politique de Cookies</title>
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
                    <a href="#0"><span>Cookies</span></a>
                  </div>
                  <h1 className="fz-55 mt-30 text-center">Politique de Cookies</h1>
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
                      <h6 className="fz-16">27/02/2024</h6>
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
                        ienvenue sur la page de la politique de cookies de Pledge & Grow. Chez Pledge & Grow, respecter votre vie privée est une priorité absolue, en accord avec notre statut de micro-entreprise basée en France. Conformément au RGPD et à la loi « Informatique et Libertés », cette politique vise à vous informer de manière transparente sur l’utilisation des cookies par notre site.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">1. Qu'est-ce qu'un cookie ?</h5>
                      <p>
                        Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, tablette, smartphone…) par le navigateur lors de la visite d’un site internet. Ces cookies permettent de garantir le bon fonctionnement du site, d’améliorer votre expérience de navigation, de mesurer l’audience et peuvent aussi servir à vous présenter des publicités ciblées en fonction de vos habitudes de navigation.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">2. Comment utilisons-nous les cookies ?</h5>
                      <p>
                        Sur le site de Pledge & Grow, nous utilisons des cookies pour :
                      </p>
                      <ul className="ml-4">
                        <li className="mt-3">- Assurer le bon fonctionnement et la sécurité de notre site.</li>
                        <li className="mt-3">- Mémoriser vos préférences de navigation et personnaliser votre expérience.</li>
                        <li className="mt-3">- Analyser l’utilisation de notre site et améliorer nos services.</li>
                        <li className="mt-3">- Proposer du contenu marketing adapté à vos intérêts.</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">3. Consentement</h5>
                      <p>
                        Nous ne vendons pas vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations personnelles dans les circonstances suivantes :
                      </p>
                      <ul className="ml-4">
                        <li className="mt-3">- Avec des prestataires de services tiers qui nous aident à fournir nos services.</li>
                        <li className="mt-3">- Avec des partenaires commerciaux lorsque cela est nécessaire pour fournir des services conjoints.</li>
                        <li className="mt-3">- Lorsque nous sommes tenus de le faire par la loi, une autorité gouvernementale ou pour protéger nos droits légaux.</li>
                        <li className="mt-3">- Dans le cadre de fusions, d’acquisitions ou de ventes d’actifs de l’entreprise, vos informations personnelles peuvent être transférées à un tiers.</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">4. Liste de cookies</h5>
                      <ul className="ml-4">
                        <li className="mt-3">- cookieyes-consent</li>
                        <li className="mt-3">- _wpfuj</li>
                        <li className="mt-3">- chatyWidget_0</li>
                        <li className="mt-3">- activechatyWidgets</li>
                        <li className="mt-3">- elementor</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">5. Sécurité et confidentialité</h5>
                      <p>
                        Nous nous engageons à utiliser les cookies de manière responsable, dans le respect de votre vie privée et conformément à la législation en vigueur. Les données collectées via les cookies sont sécurisées et ne sont pas partagées avec des tiers non autorisés.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">6. Mise à jour de la politique de cookies</h5>
                      <p>
                        Cette politique peut être mise à jour en fonction des évolutions législatives ou des modifications apportées à nos pratiques. Nous vous invitons à consulter régulièrement cette page pour rester informé.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">7. Nous Contacter</h5>
                      <p>
                        Pour toute question relative à notre utilisation des cookies, vous pouvez nous contacter directement sur <a href="mailto:contact@pledgeandgrow.com">contact@pledgeandgrow.com</a>.
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

PolitiqueCookie.getLayout = page => <Layout>{page}</Layout>

export default PolitiqueCookie;

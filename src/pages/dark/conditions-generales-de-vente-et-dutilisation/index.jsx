import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';

function ConditionsGenerales() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Conditions Générales</title>
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
                    <a href="#0"><span>Termes</span></a>
                    <span> , </span>
                    <a href="#0"><span>Conditions</span></a>
                  </div>
                  <h1 className="fz-55 mt-30 text-center">Conditions Générales de Vente et D'utulisation</h1>
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
                        ienvenue sur la page des conditions générales de Pledge & Grow. En utilisant nos services, vous acceptez sans réserve les présentes conditions générales de vente et d’utilisation. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">1. Acceptation des CGV/CGU</h5>
                      <p>
                        L’utilisation des services de Pledge and Grow implique l’acceptation pleine et entière des présentes CGV/CGU par les Clients. Ces conditions prévalent sur tout autre document.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">2. Services</h5>
                      <p>
                        Les services proposés par Pledge and Grow sont décrits sur le site internet de la Société. Ils comprennent, sans limitation, du conseil en informatique et marketing. Pledge and Grow se réserve le droit de modifier ses offres de services à tout moment.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">3. Tarifs et Paiement</h5>
                      <p>
                        Les tarifs applicables aux produits standard sont clairement indiqués sur notre site internet. Pour les solutions personnalisées, nous proposons des devis sur mesure incluant toutes les charges et services, garantissant une transparence totale. Pledge and Grow se réserve le droit de modifier ses prix à tout moment, toutefois, les tarifs indiqués au moment de la commande resteront applicables à cette commande. Le paiement intégral est requis au moment de la validation de la commande.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">4. Données Personnelles</h5>
                      <p>
                        Conformément au RGPD et à la loi française, Pledge and Grow s’engage à protéger les données personnelles des Clients. Les informations recueillies sont nécessaires pour la gestion des commandes et la relation commerciale. Les Clients disposent d’un droit d’accès, de rectification, de suppression, et de portabilité des données les concernant, qu’ils peuvent exercer en contactant la Société.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">5. Propriété Intellectuelle</h5>
                      <p>
                        Les contenus du site internet de Pledge and Grow (textes, images, schémas, logos, etc.) sont protégés par le droit d’auteur. Toute reproduction ou représentation totale ou partielle sans l’autorisation expresse de Pledge and Grow est interdite.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">6. Responsabilité</h5>
                      <p>
                        Pledge and Grow s’engage à fournir ses services avec diligence et selon les règles de l’art. Toutefois, sa responsabilité ne pourra être engagée en cas de retard ou d’inexécution lorsque la cause est due à un cas de force majeure.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">7. Résiliation</h5>
                      <p>
                        Vous pouvez mettre fin à nos services à tout moment en respectant les modalités du contrat. Pledge & Grow se réserve le droit de résilier les services en cas de violation des présentes conditions générales.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">8. Offre Web Grow</h5>
                      <p>
                        Les droits de propriété intellectuelle du site web seront maintenus par Pledge and Grow pendant un an avant d’être transférés au client. Nous sommes dans l’obligation de couvrir les coûts élevés qui nous permettent de vous proposer cette opportunité. Une migration gratuite sera offerte après un an si vous désirez résilier l’abonnement.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">9. Modification des CGV/CGU</h5>
                      <p>
                        Pledge and Grow se réserve le droit de modifier les présentes CGV/CGU à tout moment. La version applicable est celle en vigueur sur le site au moment de l’utilisation des services par le Client.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">10. Droit Applicable et Litiges</h5>
                      <p>
                        Ces conditions générales sont régies par les lois en vigueur dans votre pays de résidence. Tout litige découlant de ces conditions sera soumis à la juridiction compétente de votre région.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">11. Contact</h5>
                      <p>
                        Pour toute question ou préoccupation concernant ces conditions générales, veuillez nous contacter à l’adresse suivante : contact@pledgeandgrow.com.
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

ConditionsGenerales.getLayout = page => <Layout>{page}</Layout>

export default ConditionsGenerales;

import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';

function PolitiqueRemboursement() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Politique de Remboursement</title>
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
                    <a href="#0"><span>Conditions</span></a>
                    <span> , </span>
                    <a href="#0"><span>Remboursement</span></a>
                  </div>
                  <h1 className="fz-55 mt-30 text-center">Politique de Remboursement</h1>
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
                      <h6 className="fz-16">05/03/2024</h6>
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
                      <h5 className="fw-600">1. Droit de Rétractation</h5>
                      <p>
                        En utilisant les services de Pledge & Grow, vous acceptez sans réserve les présentes conditions générales de vente et d’utilisation. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">2. Annulations et Modifications</h5>
                      <p className='mt-5'><strong>2.1 Annulation par le Client après 14 jours</strong></p>
                      <p>
                        Si vous souhaitez annuler nos services après l’expiration du délai de rétractation de 14 jours, veuillez nous contacter dès que possible. Toute demande d’annulation sera évaluée au cas par cas. Notez que selon l’avancement des travaux, des frais proportionnels aux services déjà fournis pourront être retenus.
                      </p>
                      <br />
                      <p><strong>2.2 Modifications des Services</strong></p>
                      <p>
                        Les demandes de modification des services en cours doivent être soumises par écrit. Nous ferons de notre mieux pour accommoder les modifications sans frais supplémentaires, mais cela peut dépendre de l’ampleur des changements requis et de l’avancement du projet.
                      </p>
                      <br />
                      <p><strong>2.3 Annulation par Pledge and Grow</strong></p>
                      <p>
                        Dans le rare cas où nous serions contraints d’annuler vos services en raison de circonstances indépendantes de notre volonté (par exemple, indisponibilité critique de l’équipe), vous serez intégralement remboursé.
                      </p>
                      <br />
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">3. Exceptions</h5>
                      <p>
                        Certains services peuvent être non-remboursables, notamment ceux impliquant des frais de tiers déjà engagés (par exemple, achats de logiciels, frais de sous-traitance) pour lesquels Pledge and Grow ne peut récupérer les coûts. Ces exceptions seront clairement indiquées dans le contrat de service.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">4. Procédure de Remboursement</h5>
                      <p>
                        Tous les droits de propriété intellectuelle sur le contenu créé dans le cadre de nos services appartiennent à Pledge & Grow, sauf indication contraire conclue dans un contrat. Vous ne pouvez pas utiliser ce contenu à des fins commerciales sans notre autorisation préalable.
                      </p>
                    </div>
                    <hr />
                    <div className="mt-40">
                      <h5 className="fw-600">5. Contact</h5>
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

PolitiqueRemboursement.getLayout = page => <Layout>{page}</Layout>

export default PolitiqueRemboursement;

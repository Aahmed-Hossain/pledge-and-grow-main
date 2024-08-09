import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';


function MentionsLegales() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
        <Head>
            <title>Mentions Légales</title>
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
                            <a href="#0"><span>Legal </span></a>
                            <span> , </span>
                            <a href="#0"><span>Justice</span></a>
                        </div>
                        <h1 className="fz-55 mt-30 text-center">Mentions Légales.</h1>
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
                            ienvenue sur la page des mentions légales de Pledge and Grow. Chez Pledge and Grow, notre engagement envers la transparence et le respect de la réglementation est primordial. Cette section vous informe sur notre structure légale, nos pratiques de gestion, ainsi que sur les conditions générales d’utilisation de notre site et services. Votre visite et utilisation de nos services impliquent votre acceptation des termes énoncés dans ces mentions légales.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40">
                            <h5 className="fw-600">1. Identification de l'éditeur et de l'hébergeur du site</h5>
                            <p>
                            Le site pledge and grow est édité par Mehdi BEREL, auto-entrepreneur, dont l’activité est enregistrée sous le numéro SIREN 92069181 au RCS de Meaux.
                            </p>
                            <ul>
                            <li className='mt-3'>Raison sociale : Mehdi BEREL EI</li>
                            <li className='mt-3'>Adresse : 4Bis Rue Alfred Nobel – Champs-sur-Marne – France</li>
                            <li className='mt-3'>Téléphone : +33 7 53 69 58 40</li>
                            <li className='mt-3'>Site Web : pledgeandgrow.com</li>
                            <li className='mt-3'>Email : contact@pledgeandgrow.com</li>
                            </ul>
                            <p>
                            Le site est hébergé par OVH, situé au 2 rue Kellermann, ROUBAIX – France. Ils peuvent être contactés au 09 72 10 10 10 ou au 1007.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40">
                            <h5 className="fw-600">2. Conditions générales d’utilisation</h5>
                            <p>
                            L’utilisation du site pledge and grow implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40">
                            <h5 className="fw-600">3. Données personnelles</h5>
                            <p>
                            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Européen 2016/679 (RGPD), vous disposez des droits d’accès, de rectification, de limitation, d’opposition, d’effacement, et de portabilité des données vous concernant. Pour exercer ces droits, vous pouvez adresser votre demande à Pledge and Grow.
                            </p>
                            <p>
                            Les données collectées sont destinées à l’usage exclusif de Mehdi BEREL ou les éventuels sous-traitants, et ne seront pas communiquées à des tiers.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40">
                            <h5 className="fw-600">4. Propriété intellectuelle</h5>
                            <p>
                            Les contenus de ce site (logos, textes, images, etc.) sont protégés par le droit d’auteur et toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et poursuivie.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40">
                            <h5 className="fw-600">5. Limitations de responsabilité</h5>
                            <p>
                            Mehdi BEREL ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur, lors de l’accès au site pledgeandgrow.com. De même, Mehdi BEREL ne saurait être tenu responsable des dommages indirects (tels que perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="https://pledgeandgrow.com">pledgeandgrow.com</a>.
                            </p>
                        </div>
                        <hr />
                        <div className="mt-40 mb-20">
                            <h5 className="fw-600">6. Droit applicable et attribution de juridiction</h5>
                            <p>
                            Tout litige en relation avec l’utilisation du site pledgeandgrow.com est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

MentionsLegales.getLayout = page => <Layout>{page}</Layout>

export default MentionsLegales;
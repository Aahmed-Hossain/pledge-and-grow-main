// import React from 'react';
// //= Data
// import data from '@/data/app-data.json';

// function Footer({ lightMode }) {
//   return (
//     <footer className="sub-bg">
//       <div className="footer-container">
//         <div className="container pb-80 pt-80 ontop">
//           <div className="call-box text-center mb-80">
//             <h2>
//               <a href="page-contact.html">Let's <span className="stroke"> Discuss</span></a>
//               <span className="arrow">
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                     fill="currentColor"></path>
//                 </svg>
//               </span>
//             </h2>
//           </div>
//           <div className="row">
//             <div className="col-lg-3">
//               <div className="colum md-mb50">
//                 <div className="tit mb-20">
//                   <h6>Address</h6>
//                 </div>
//                 <div className="text">
//                   <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 offset-lg-1">
//               <div className="colum md-mb50">
//                 <div className="tit mb-20">
//                   <h6>Say Hello</h6>
//                 </div>
//                 <div className="text">
//                   <p className="mb-10">
//                     <a href="#0">hello@design.com</a>
//                   </p>
//                   <h5>
//                     <a href="#">+1 840 841 25 69</a>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-2 md-mb50">
//               <div className="tit mb-20">
//                 <h6>Social</h6>
//               </div>
//               <ul className="rest social-text">
//                 <li>
//                   <a href="#0">Facebook</a>
//                 </li>
//                 <li>
//                   <a href="#0">Twitter</a>
//                 </li>
//                 <li>
//                   <a href="#0">LinkedIn</a>
//                 </li>
//                 <li>
//                   <a href="#0">Instagram</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-lg-3">
//               <div className="tit mb-20">
//                 <h6>Newsletter</h6>
//               </div>
//               <div className="subscribe">
//                 <form action="contact.php">
//                   <div className="form-group rest">
//                     <input type="email" placeholder="Type Your Email" />
//                     <button type="submit">
//                       <i className="fas fa-arrow-right"></i>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="logo">
//                   <a href="#">
//                     <img src={`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`} alt="" />
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-8">
//                 <div className="copyright d-flex">
//                   <div className="ml-auto">
//                     <p className="fz-13">
//                       © 2023 Geekfolio is Proudly Powered by <span className="underline"> <a href={data.author_link} target="_blank">{data.author}</a></span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer





import React from 'react';
//= Data
import data from '@/data/app-data.json';

function Footer({ lightMode }) {
  return (
    <footer className="pt-80 sub-bg">
      <div className="container pb-80">
        <div className="row">
          <div className="col-lg-3">
            <div className="colum md-mb50">
              <div className="tit mb-20">
                <a className="logo icon-img-100" href="#">
          {
            lightMode ?
              <img src="/dark/assets/imgs/logo-light.jpg" alt="logo" />
              :
              <img src="/dark/assets/imgs/logo-dark.png" alt="logo" />
          }
        </a>
                {/* <h6>Address</h6> */}
              </div>
              <div className="text">
                <p>Avec un engagement indéfectible envers l’excellence, l’intégrité et la satisfaction du client, nous nous efforçons de dépasser les attentes à chaque engagement. Découvrez la puissance du partenariat avec Pledge and Grow et façonnons ensemble un avenir meilleur.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="colum md-mb50">
              <div className="tit mb-20">
                <h6>Contacts</h6>
              </div>
              <div className="text">
                <p className="mb-10">
                  <a>Disponible du Lundi au Dimanche de 8h à 20h.</a>
                </p>
                <h5>
                <a href="#" className="main-color1">+33 7 53 69 58 40</a>
                </h5>
                <p className="mb-10">
                  <a href="#0">contact@pledgeandgrow.com</a>
                </p>


              </div>
            </div>
          </div>
          <div className="col-lg-2 md-mb50">
            <div className="tit mb-20">
              <h6>Domaines d'Expertises</h6>
            </div>
            <ul className="rest social-text">
              <li>
                <a href="#0">Site web</a>
              </li>
              <li>
                <a href="#0">Référencement</a>
              </li>
              <li>
                <a href="#0">Application</a>
              </li>
              <li>
                <a href="#0">Automatisation</a>
              </li>
              <li>
                <a href="#0">Grow web</a>
              </li>
            </ul>
          </div>


          <div className="col-lg-2 md-mb50">
            <div className="tit mb-20">
              <h6>Autres</h6>
            </div>
            <ul className="rest social-text">
              <li>
                <a href="/dark/mentions-legales">Mentions Légales</a>
              </li>
              <li>
                <a href="/dark/politique-de-confidentialite">Politiques de confidentialité</a>
              </li>
              <li>
                <a href="/dark/politique-dutulisation-des-cookies">Politique d'utilisation des cookies</a>
              </li>
              <li>
                <a href="/dark/conditions-generales-de-vente-et-dutilisation">Conditions générales de vente et d'utilisation</a>
              </li>
              <li>
                <a href="/dark/politique-de-remboursement">Politique de remboursement</a>
              </li>
            </ul>
          </div>










          {/* <div className="col-lg-3">
            <div className="tit mb-20">
              <h6>Newsletter</h6>
            </div>
            <div className="subscribe">
              <form action="contact.php">
                <div className="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div> */}





        </div>
      </div>
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <a href="#0">
                  <img src={`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  {/* <p className="fz-13">
                    © 2023 Geekfolio is Proudly Powered by <span className="underline"> <a href={data.author_link} target="_blank">{data.author}</a></span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// //= Modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination, Parallax } from 'swiper';
// //= Scripts
// import loadBackgroudImages from '@/common/loadBackgroudImages';
// //= Data
// import data from '@/data/Corporate/header.json';

// const swiperOptions = {
//   modules: [Navigation, Autoplay, Pagination, Parallax],
//   speed: 1500,
//   autoplay: {
//     delay: 5000,
//   },
//   parallax: true,
//   loop: true,
//   onSwiper: function (swiper) {
//     for (var i = 0; i < swiper.slides.length; i++) {
//       swiper.slides[i].querySelector('.bg-img').setAttribute('data-swiper-parallax', 0.75 * swiper.width);
//     }
//   },
//   onResize: function (swiper) {
//     swiper.update();
//   },
//   pagination: {
//     el: '.slider-prlx .parallax-slider .swiper-pagination',
//     type: 'fraction',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.slider-prlx .parallax-slider .next-ctrl',
//     prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
//   }
// }

// function Header() {
//   const [loadSwiper, setLoadSwiper] = useState(false);

//   useEffect(() => {
//     setLoadSwiper(true);
//   }, []);

//   useEffect(() => {
//     if (loadSwiper) loadBackgroudImages();
//   }, [loadSwiper]);

//   return (
//     <header className="slider slider-prlx o-hidden">
//       <div className="lines two"></div>
//       {
//         loadSwiper &&
//         <Swiper className="parallax-slider" {...swiperOptions}>
//           {
//             data.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <div className="bg-img valign" data-background={item.background}
//                   data-overlay-dark="7">
//                   <div className="container">
//                     <div className="row justify-content-center">
//                       <div className="col-lg-10">
//                         <div className="caption text-center">
//                           <h6 className="sub-title mb-15">
//                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
//                               xmlns="http://www.w3.org/2000/svg">
//                               <path
//                                 d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                                 fill="currentColor"></path>
//                             </svg>
//                             <span className="ml-10">{item.title}</span>
//                           </h6>
//                           <h1 className="fz-60">{item.text}</h1>
//                           <Link href={item.button.link} className="butn butn-md butn-bg main-colorbg3 text-dark mt-30">
//                             {item.button.text}
//                             <i className="ml-5"><svg width="18" height="18" viewBox="0 0 18 18"
//                               fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path
//                                 d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                                 fill="currentColor"></path>
//                             </svg></i>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           }
//         </Swiper>
//       }
//     </header>
//   )
// }

// export default Header;





import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-creative">
      <div className="container ontop">
        <div className="row justify-content-center full-height">
          <div className="col-lg-3 d-flex align-items-end">
            <div className="img md-hide">
              <div className="img-assets1 parallax" data-speed="-0.01">
                <img src="/dark/assets/imgs/svg-assets/claw.svg" alt="" />
              </div>
              <img src="/dark/assets/imgs/header/c1.jpg" alt="" data-speed="0.01" className="parallax" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="caption text-center full-width md-mb50">
              <div className="mb-30">
                <svg className="svg-animation star" width="100" height="100" viewBox="0 0 100 100"
                  fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 1, "--transform": '30deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 2, "--transform": '60deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 3, "--transform": '90deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 4, "--transform": '120deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 5, "--transform": '150deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 6, "--transform": '180deg' }}></line>
                </svg>
              </div>
              <h4 className="fw-300 mb-15">Site Web</h4>
              <h1 className="fw-600 d-rotate wow">
                <span className="rotate-text">Développement</span>
                <span className="rotate-text">de Sites Web</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img parallax" data-speed="0.01">
              <img src="/dark/assets/imgs/header/c2.jpg" alt="" />
            </div>
            <div className="mt-30 md-hide">
              <div className="text-center hover-this">
                <div className="circle-button hover-anim">
                  <div className="rotate-circle fz-30 text-u">
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path id="textcircle1"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                        </path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle1" textLength="900">
                          Pledge - And - Grow -
                          {/* Creative - Agency - Winner - */}
                          </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="in-circle text-center">
                    <h3>A <span className="fw-300 fz-30">+</span></h3>
                  </div>
                </div>
              </div>
              {/* <div className="text-center">
                <h6>500k <span className="fz-14">Customers</span></h6>
                <p className="fz-13">Avg rating 4.8 makes us world best.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header
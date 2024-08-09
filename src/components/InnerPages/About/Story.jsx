import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">A PROPOS DE NOUS</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>Nous sommes une équipe d'entrepreneurs passionnés issus de différents parcours, unis par un objectif commun : démocratiser l'informatique à l'échelle nationale. Depuis plus de deux ans, nous nous consacrons à l'innovation en interne tout en accompagnant nos clients avec dévouement et expertise. Ensemble, nous repoussons les limites de la technologie pour créer un avenir où l'informatique est accessible à tous. </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
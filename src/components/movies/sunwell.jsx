import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const Sunwell = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text">
          The Sunwell
        </h3>
      </Col>
    </Row>
    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Brutallus.wmv">
              Illumination vs. Brutallus (160MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Eredar Twins.wmv">
              Illumination vs. Eredar Twins (154MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Felmyst.wmv">
              Illumination vs. Felmyst (222MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Kalecgos.wmv">
              Illumination vs. Kalecgos (144MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. KilJaeden.wmv">
              Illumination vs. KilJaeden (379MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Muru.wmv">
              Illumination vs. Muru (178MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </div>
);

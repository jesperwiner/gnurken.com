import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const BurningCrusade = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text">
          Other
        </h3>
      </Col>
    </Row>
    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/Doomwalker.avi">
              Doomwalker (185MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/Illumination vs. Gruul.wmv">
              Illumination vs. Gruul (98MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/Illumination vs. Magtheridon.wmv">
              Illumination vs. Magtheridon (102MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/NoPain Presents Illumination.wmv">
              NoPain Presents Illumination (54MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/Ruul solo.avi">
              Ruul solo (61MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

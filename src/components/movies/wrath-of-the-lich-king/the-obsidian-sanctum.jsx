import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const TheObsidianSanctum = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text2">
          Other
        </h3>
      </Col>
    </Row>
    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Illumination vs. Sartharion.wmv">
              Illumination vs. Sartharion (213MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Sallskapsraiden.wmv">
              Sallskapsraiden (779MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

import React from 'react';
import { Row, Col } from 'react-bem-grid';

export const Other = () => (
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
            <a href="http://www.gnurken.com/movies/wow-movies/other/11_Years_of_WoW_Raiding.m2t">
              11 Years of WoW Raiding (1.49GB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/other/Illumination_Raiding.wmv">
              Illumination Raiding (275MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

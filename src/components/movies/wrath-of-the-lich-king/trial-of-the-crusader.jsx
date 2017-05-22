import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const TrialOfTheCrusader = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text2">
          Trial Of The Crusader
        </h3>
      </Col>
    </Row>
    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Illumination vs. NorthrendBeasts(Heroic).wmv">
              Illumination vs. NorthrendBeasts(Heroic) (504MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Sallskapsraiden Tribute to Insanity.wmv">
              Sallskapsraiden Tribute to Insanity (690MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

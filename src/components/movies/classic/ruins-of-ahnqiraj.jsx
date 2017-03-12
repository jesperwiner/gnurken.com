import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const RuinsOfAhnqiraj = () => (
  <div className="wow-movies">
    <Row xs >
      <Col xs>
        <h3 className="entry__text">
          Ruins of Ahnqiraj
        </h3>
      </Col>
    </Row>

    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ayamiss - 2006-05-02.avi">
              Axis vs. Ayamiss - 2006-05-02 (189MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ossirian - 2006-07-09.wmv">
              Axis vs. Ossirian - 2006-07-09 (181MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

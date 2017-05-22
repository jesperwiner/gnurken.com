import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const OnyxiasLair = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text2">
          Onyxia's Lair
        </h3>
      </Col>
    </Row>

    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.avi">
              Axis vs. Onyxia - Doit doit downed (14MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.avi">
              Axis vs. Onyxia - Headplanting - 2006-02-23 (16MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.avi">
              Axis vs. Onyxia - Redcomet Speech (13MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const AhnqirajTemple = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text">
          Ahnqiraj Temple
        </h3>
      </Col>
    </Row>

    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Axis vs. Sartura.wmv">
              Axis vs. Sartura (72MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Cthun - Instant Wipe.avi">
              Mayhem vs. Cthun - Instant Wipe (43MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Huhuran.mpg">
              Mayhem vs. Huhuran (398MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

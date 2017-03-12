import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const Classic = () => (
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
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Argent Dawn vs. Emeriss - Soulja lead PUG.avi">
              Argent Dawn vs. Emeriss - Soulja lead PUG (225MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man with Teamspeak.avi">
              Axis vs. Drakkisath - 5 man with Teamspeak (125MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man.avi">
              Axis vs. Drakkisath - 5 man.avi (125MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Kazzak.avi">
              Axis vs. Kazzak (138MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Taerar.avi">
              Axis vs. Taerar (304MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 1.avi">
              Axis vs. Thunderaan - Egbert kill 1 (78MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 2.avi">
              Axis vs. Thunderaan - Egbert kill 2 (89MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Gnurken.avi">
              Axis vs. Thunderaan - Gnurken (64MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

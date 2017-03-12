import React from 'react';
import { Row, Col } from 'react-bem-grid';
import './other.scss';

export const MountHyjal = () => (
  <div className="wow-movies">

    <Row xs >
      <Col xs>
        <h3 className="entry__text">
          The Battle for Mount Hyjal
        </h3>
      </Col>
    </Row>
    <Row xs >
      <Col xs>
        <ul className="movies-list" id="double">
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Anetheron.wmv">
              Illumination vs. Anetheron (179MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Archimonde.wmv">
              Illumination vs. Archimonde (279MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Azgalor.wmv">
              Illumination vs. Azgalor (192MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Kazrogal.wmv">
              Illumination vs. Kazrogal (144MB)
            </a>
          </li>
          <li>
            <a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Rage Winterchill.wmv">
              Illumination vs. Rage Winterchill (194MB)
            </a>
          </li>
        </ul>
      </Col>
    </Row>

  </div>
);

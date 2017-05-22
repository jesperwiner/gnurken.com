import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import './recent.scss';

export const Recent = () => (
  <div className="recent">
    <Grid fluid className="main-grid">
      <Row xs >
        <Col xs>
          <h3 className="entry__text entry__text--shorter">
            Recent projects
          </h3>
        </Col>
      </Row>

      <Row xs className="recent__row">
        <Col  xs={12} sm={12} md={12} lg={6} className="entry__col first_col">
          <Link to="/projects/amiga1200">
            <div className="recent__rowimage">
              <img src="../../images/amiga1200/amiga_0.png" className="cover" alt="Amiga" />
              <h4>Amiga 1200 Classic WB / WHDLoad and upgrade project</h4>
            </div>
          </Link>
        </Col>
        <Col  xs={12} sm={12} md={12} lg={6} className="entry__col second_col">
          <Link to="/projects/xbox">
            <div className="recent__rowimage">
              <img src="../../images/xbox/Xbox_logo_2.png" className="xbox__logo" alt="xbox" />
              <h4>Original Xbox renovation</h4>
            </div>
          </Link>
        </Col>
      </Row>

      <Row xs className="recent__row">
        <Col  xs={12} sm={12} md={12} lg={6} className="entry__col first_col">
          <Link to="/projects/amiga1200-2">
            <div className="recent__rowimage">
              <img src="../../images/amiga1200-2/0.jpg" className="cover" alt="Amiga" />
              <h4>Another Amiga 1200 Renovation</h4>
            </div>
          </Link>
        </Col>
        <Col  xs={12} sm={12} md={12} lg={6} className="entry__col second_col">
        </Col>
      </Row>

      <Row xs className="recent__row">

      </Row>



      <Row xs >
        <Col xs>
          <h3></h3>
        </Col>
      </Row>

      <Row xs >
        <Col xs>
          <h3></h3>
        </Col>
      </Row>

    </Grid>
  </div>
);

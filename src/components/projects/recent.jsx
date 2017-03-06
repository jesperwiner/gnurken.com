import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import { LinkContainer } from 'react-router-bootstrap';
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
        <Col xs className="entry__col">
          <LinkContainer to="/projects/amiga1200">
            <div className="recent__rowimage">
              <img src="../../images/amiga1200/amiga_0.png" className="cover" alt="Amiga" />
              <h4>Amiga 1200 Classic WB / WHDLoad and upgrade project</h4>
            </div>
          </LinkContainer>
        </Col>
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

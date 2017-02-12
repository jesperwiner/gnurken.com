import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './rig.scss';

export const Rig = ({ children, location: { pathname } }) => (
  <div className="mainBody">
    <Grid fluid className="main-grid">
      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            The gaming rig
          </h3>

          <div className="player__box player__col">
            <img src="../../images/overkill/dator-1.JPG" className="cover" alt="computer" />
            <h4>Case-Labs Mercury S8</h4>
          </div>

        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <h3 className="entry__text entry__text--shorter">
            The setup
          </h3>

          <div className="player__box player__col">
            <img src="../../images/overkill/setup-1.JPG" className="cover" alt="computer" />
            <h4>Ikea countertop desk</h4>
          </div>

        </Col>
      </Row>
    </Grid>
  </div>
);

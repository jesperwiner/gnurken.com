import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './other.scss';

export const OtherMovies = () => (
  <div className="about">
    <Grid fluid className="main-grid">

      <Row xs >
        <Col xs>
          <h3 className="entry__text">
            Other movies
          </h3>
        </Col>
      </Row>

    </Grid>
  </div>
);

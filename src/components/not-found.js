import React from 'react';
import { Row, Col } from 'react-bem-grid';
import 'react-bem-grid/dist/Grid.css';
import './not-found.scss';

export const NotFound = () => (
  <Row>
    <Col xs={2} className="side" />
    <Col xs={8}>
      <div className="notFound">
        <h1>{'404.. This is not the page you\'re looking for'}</h1>
        <img src="../images/custom404.jpg" alt="Error 404"></img>
        <h5 className="text"><a href="http://www.gnurken.com">gnurken.com</a></h5>
      </div>
    </Col>
    <Col xs={2} className="side" />
  </Row>
);

import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './xbox.scss';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const Xbox = () => (
  <div className="xbox">
    <Grid fluid className="main-grid">

      <Row xs>
        <Col xs className="entry__col">
          <h3 className="entry__text entry__text">
            Origial Xbox renovation
          </h3>
        </Col>
      </Row>

      <Row xs>
        <Col xs={3} sm={2} lg={1} className="entry__col">
          <img src="../../images/xbox/xboxlogo.svg" className="xbox__logo" alt="xbox" />
        </Col>
        <Col xs={9} sm={10} lg={11} className="entry__col">
          <h4 className="normal-text">
              March 14, 2002 I took a day off work to sit at home waiting for the delivery van to come with my pre-ordered Xbox. It got to me early, already at 9am.
              I unpacked it and immediately hooked it up and loaded in Halo. Still get chills when I hear the Halo theme music. It was soo good! The first really playable FPS on a console.
              <br/><br/>
              But after some years in the basement it needed to get cleaned up. So I decided to bring it up and replace the fans. Installed a new 80mm exhaust fan, it's too big so
              had to remove some plastic to get it in. However the temperatures were still too high, approaching 90 degrees celcius and the noise were really loud.
              <br/><br/>
              More had to be done. Removed the small noisy fan on the GPU and installed a large 120mm fan with a fan controller to adjust the rpm. No more room for the harddrive (250GB) so
              messed around with having it on the outside, a bit of cutting with a dremel and some hot glue later it was stuck on the side and works great.

          </h4>
        </Col>
      </Row>

      <Row xs >
        <Col xs>
          <h3></h3>
        </Col>
      </Row>

      <Row xs>
        <Carousel showArrows autoPlay infiniteLoop stopOnHover={false} interval={10000}>
          <div>
              <img src="../../images/xbox/1.jpg" />
              <p className="legend">Removed DVD and harddrive, that small fan on the GPU had bad bearings and was really noisy.</p>
          </div>
          <div>
              <img src="../../images/xbox/2.jpg" />
              <p className="legend">Removed heatsink and cleaned up the old thermal paste. Put in some new from Noctua.</p>
          </div>
          <div>
              <img src="../../images/xbox/3.jpg" />
              <p className="legend">New 80mm exhaust fan.</p>
          </div>
          <div>
              <img src="../../images/xbox/4.jpg" />
              <p className="legend">New 120mm system/CPU/GPU fan. Now it's very quiet and hovers around 55 degrees celcius.</p>
          </div>
          <div>
              <img src="../../images/xbox/5.jpg" />
              <p className="legend">Fan controller for the 120mm fan. It's usually in lowest position but allows for playing during summer.</p>
          </div>
          <div>
              <img src="../../images/xbox/6.jpg" />
              <p className="legend">All mounted, fiddling with the harddrive cables a bit.</p>
          </div>
        </Carousel>
      </Row>

      <Row xs >
        <Col xs>
          <h3></h3>
        </Col>
      </Row>


      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <div className="amiga1200__image">
            <img src="../../images/xbox/7.jpg" className="cover" alt="xbox" />
            <h4>Put into shelf</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <div className="amiga1200__image">
            <img src="../../images/xbox/8.jpg" className="cover" alt="shelf" />
            <h4>Superdisc Installed</h4>
          </div>

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

import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './amiga1200.scss';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const Amiga1200_2 = () => (
  <div className="amiga1200">
    <Grid fluid className="main-grid">
      <Row xs >
        <Col xs>
          <h3 className="entry__text">
            Amiga 1200 Renovation
          </h3>
        </Col>
      </Row>

      <Row xs>
        <Col xs className="entry__col">
          <h4 className="normal-text">
            Got a second Amiga 1200 from a very good friend. The case was damaged and a bit yellow so I looked around for a replacement.<br />
            Found a new case signed by <a href="https://en.wikipedia.org/wiki/Petro_Tyschtschenko">Petro Tyschtschenko</a> on ebay and I also sent
            the motherboard off to get re-capped.
            <br /><br />
            It also got the same treatment as the other with new Kickstart 3.1 chips and a Compact Flash drive. In the expansion slot there
            was a 68030 accelerator with 16MB memory.
            <br /><br />
            Gave it the same install of <a href="http://classicwb.abime.net/">Classic WB </a>
            and WHDLoad with all games.
            <br /><br />
            It shares space under the TV with a Commodore 64, Atari STE (with 4MB memory), Amiga 600 all hooked up and ready to go.
            <br /><br />
          </h4>
        </Col>
      </Row>

      <Row xs>
        <Col xs className="entry__col">
        <Carousel showArrows={true} autoPlay={true}>
          <div>
              <img src="../../images/amiga1200-2/1.jpg" />
              <p className="legend">Board mounted in new case.</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/2.jpg" />
              <p className="legend">Exchanged the ROM chips with new Kickstart 3.1</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/3.jpg" />
              <p className="legend">Replaced the badge from the Escom version with a custom engraved one.</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/4.jpg" />
              <p className="legend">Compact Flash installed.</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/5.jpg" />
              <p className="legend">Closeup of the accelerator board.</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/6.jpg" />
              <p className="legend">All put together..</p>
          </div>
          <div>
              <img src="../../images/amiga1200-2/7.jpg" />
              <p className="legend">Ready to go hooked into the TV via a SCART Switch.</p>
          </div>
        </Carousel>
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

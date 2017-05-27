import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './amiga1200.scss';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const Amiga1200 = () => (
  <div className="amiga1200">
    <Grid fluid className="main-grid">
      <Row xs >
        <Col xs>
          <h3 className="entry__text">
            Amiga 1200 Upgrade project
          </h3>
        </Col>
      </Row>

      <Row xs>
        <Col xs className="entry__col">
          <h4 className="normal-text">
            A very well presevered Amiga 1200 (rev 2B). Capacitors are replaced (not by me). Floppy cleaned and working perfectly.
            <br /><br />
            Harddrive replaced with a 8GB Compact Flash with a fresh install of <a href="http://classicwb.abime.net/">Classic WB </a>
            and WHDLoad with all games. The expansion slot is occupied with a brand new 8MB Analogic card.
            <br /><br />
            Boots really fast to Workbench from the flash card. Having extra memory makes it a lot faster to open directories.
            The Amiga OS wasn't really designed with such big hard drives in mind. The normal HDD at the time were 120MB not 4GB.
            <br /><br />
            Added in a scan-doubler card with DVI port and the Amiga is now sharing the 3rd monitor on my desk with a PC.
            <br /><br />
          </h4>
        </Col>
      </Row>

      <Row xs>
        <Carousel showArrows autoPlay infiniteLoop stopOnHover={false} interval={10000}>
          <div>
              <img src="../../images/amiga1200/amiga_1.jpg" />
              <p className="legend">Nice and white Amiga 1200.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_3.jpg" />
              <p className="legend">Exchanged the ROM chips with new Kickstart 3.1</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_5.jpg" />
              <p className="legend">Confirming version after Kickstart install.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_2.jpg" />
              <p className="legend">Testing Lemmings.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_4.jpg" />
              <p className="legend">Indiana Jones and the Last Crusade.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_6.jpg" />
              <p className="legend">Installed scan-doubler card from Individual Computers.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_7.jpg" />
              <p className="legend">Using the empty port on the back for the DVI.</p>
          </div>
          <div>
              <img src="../../images/amiga1200/amiga_8.jpg" />
              <p className="legend">Really good image quality now.</p>
          </div>
        </Carousel>
      </Row>

      <Row xs >
        <Col xs>
          <h3></h3>
        </Col>
      </Row>

    </Grid>
  </div>
);

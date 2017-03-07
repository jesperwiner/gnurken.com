import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './amiga1200.scss';

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
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="amiga1200__image">
            <img src="../../images/amiga1200/amiga_1.jpg" className="cover" alt="amiga1200" />
            <h4>Amiga 1200</h4>
          </div>

          <h4>
            A very well presevered Amiga 1200 (rev 2B). Capacitors are replaced (not by me). Floppy cleaned and working perfectly.
            Harddrive is replaced with a 8GB Compact Flash with a fresh install of <a href="http://classicwb.abime.net/">Classic WB </a>
             and WHDLoad with all games. The expansion slot is occupied with a brand new 8MB Analogic card.
          </h4>

        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="amiga1200__image">
            <img src="../../images/amiga1200/amiga_3.jpg" className="cover" alt="kickstart31" />
            <h4>Kickstart 3.1 chips installed</h4>
          </div>

          <h4>
            Kickstart have been upgraded to 3.1 from <a href="http://amigakit.eu">amigakit.eu</a>
          </h4>

        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <div className="amiga1200__image">
            <img src="../../images/amiga1200/amiga_6.jpg" className="cover" alt="aboutamiga" />
            <h4>Classic Workbench</h4>
          </div>

          <h4>
            Boots really fast to Workbench from the flash card. Having extra memory makes it a lot faster to open directories.
            The Amiga OS wasn't really designed with such big hard drives in mind. The normal HDD at the time were 120MB not 4GB.
          </h4>

        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <div className="amiga1200__image">
            <img src="../../images/amiga1200/amiga_2.jpg" className="cover" alt="lemmings" />
            <h4>Christmas Lemmings 94</h4>
          </div>

          <h4>
            Hooked the Amiga up to my pc monitor using a SCART->HDMI converter.
            The image is really good and I get sound from the monitor too.
          </h4>

        </Col>
      </Row>


      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <div className="amiga1200__image">
            <img src="../../images/amiga1200/amiga_5.jpg" className="cover" alt="indy" />
            <h4>Indiana Jones and the Last Crusade</h4>
          </div>

          <h4>
            Indy is using a different graphics mode with more colors. Sacrificing half the screen though. Havn't played this
            since my dads IBM Ps/2 with MCGA graphics.
          </h4>

        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h4>
            I really like playing the old games from time to time and having the Amiga here on the desk hooked up and ready makes it
            so much easier to just play for a little while and don't have to set things up.
<br></br><br></br>
            Have a working Commodore 64, Atari STE (upgraded to 4MB), another Amiga 1200 (with a 68030 accelerator). A broken Amiga 600 and 500+.
            The 500+ is kinda ok. Just the DF0 is refusing to load diskettes. The 600 turns on sometimes. It may need a capacitor replacement but that's for
            another time.
        </h4>
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

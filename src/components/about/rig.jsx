import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './rig.scss';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const Rig = () => (
  <div className="rig">
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

      <Row xs>
        <Col xs className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            Current specs
          </h3>
          <Row xs>
            <Col xs className="entry__col">
              <ul>
                <li>Case-Labs Mercury S8 chassi.</li>
                <li>Asus X99 ROG RAMPAGE V EDITION 10 motherboard.</li>
                <li>Intel 6850K CPU.</li>
                <li>2x MSI GTX 1080 OC graphic cards.</li>
                <li>Samsung 950 PRO pci-E nvme SSD.</li>
                <li>Samsung 850 EVO and Intel 730 SSD, total 1.5GB SSDs.</li>
              </ul>
            </Col>

            <Col xs className="entry__col">
              <ul>
                <li>Corsair 1000W PSU with custom CableMod green cables.</li>
                <li>12 Corsair fans, 9 with White LEDs.</li>
                <li>3x EK-CoolStream PE 360 Radiators.</li>
                <li>EK Supremacy EVO and EK GTX 1080 Waterblocks.</li>
                <li>2x D5 Pumps with 2x EK-RES X3 150 Reservoirs.</li>
                <li>PrimoChill tubing and Green Pastell coloring.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row xs>
        <Col xs className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            To-Do
          </h3>
          <Row xs>
            <Col xs className="entry__col">
              <ul>
                <li>Hardline tubing.</li>
                <li>Replace side intake filter.</li>
                  <li>Add more harddrive space, actually not easy even with such a big case.</li>
              </ul>
            </Col>

            <Col xs className="entry__col">
              <ul>
                <li>Replace acrylic windows with tempered glass.</li>
                <li>Wait for 1180 Ti cards to upgrade in a few years.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text">
            Tube between cards since new mb
          </h3>
          <div className="player__box player__col">
            <img src="../../images/overkill2/1.jpg" className="cover" alt="computer" />
            <h4>Couldn't use EK block between cards due to distance change</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            Other side
          </h3>
          <div className="player__box player__col">
            <img src="../../images/overkill2/2.jpg" className="cover" alt="computer" />
            <h4>Lots of green now with the cables too</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text">
            Without sidepanel
          </h3>
          <div className="player__box player__col">
            <img src="../../images/overkill2/3.jpg" className="cover" alt="computer" />
            <h4>All ready again</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text">
            All panels back on
          </h3>
          <div className="player__box player__col">
            <img src="../../images/overkill2/4.jpg" className="cover" alt="computer" />
            <h4>Time to game!</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs className="entry__col">
          <h3 className="entry__text">
            Build progression
          </h3>

          <Carousel showArrows autoPlay infiniteLoop stopOnHover={false} interval={10000} showThumbs={false}>
            <div>
                <img src="../../images/overkill/001.JPG" />
                <p className="legend">Testing motherboard and cpu.</p>
            </div>
            <div>
                <img src="../../images/overkill/002.JPG" />
                <p className="legend">Case-Labs Mercury S8 assembled.</p>
            </div>
            <div>
                <img src="../../images/overkill/003.JPG" />
                <p className="legend">Testfit with old XFX 7970 videocard and Noctua cooling tower.</p>
            </div>
            <div>
                <img src="../../images/overkill/041.JPG" />
                <p className="legend">Fans arrived.</p>
            </div>
            <div>
                <img src="../../images/overkill/043.JPG" />
                <p className="legend">White!</p>
            </div>
            <div>
                <img src="../../images/overkill/042.JPG" />
                <p className="legend">First graphics card.</p>
            </div>
            <div>
                <img src="../../images/overkill/044.JPG" />
                <p className="legend">Mouting SSDs at bottom of motherboard tray.</p>
            </div>
            <div>
                <img src="../../images/overkill/045.JPG" />
                <p className="legend">Bootdrive, Samsung 950 PRO, m.2 nvme.</p>
            </div>
            <div>
                <img src="../../images/overkill/049.JPG" />
                <p className="legend">Watercooling parts finally came in.</p>
            </div>
            <div>
                <img src="../../images/overkill/050.JPG" />
                <p className="legend">EK Waterblocks GTX 1080 block mounted.</p>
            </div>
            <div>
                <img src="../../images/overkill/051.JPG" />
                <p className="legend">EK Supremacy EVO for Intel 2011-3.</p>
            </div>
            <div>
                <img src="../../images/overkill/037.JPG" />
                <p className="legend">Finsihed but I wasn't happy with the color. Too opaque.</p>
            </div>
            <div>
                <img src="../../images/overkill/061.JPG" />
                <p className="legend">Added 2nd GTX 1080 and changed to new fluid. Pastells lime green.</p>
            </div>
            <div>
                <img src="../../images/overkill/060.JPG" />
                <p className="legend">Also split up the loop into 2 different ones.</p>
            </div>
            <div>
                <img src="../../images/overkill/050.JPG" />
                <p className="legend">EK Waterblocks GTX 1080 block mounted.</p>
            </div>
          </Carousel>
        </Col>
      </Row>

    </Grid>
  </div>
);

import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './rig.scss';

export const Rig = () => (
  <div className="about">
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
                <li>Asus X99-Deluxe II motherboard.</li>
                <li>Intel 6850K CPU.</li>
                <li>2x MSI GTX 1080 OC graphic cards.</li>
                <li>Samsung 950 PRO pci-E nvme SSD.</li>
                <li>Samsung 850 EVO and Intel 730 SSD, total 1.5GB SSDs.</li>
              </ul>
            </Col>

            <Col xs className="entry__col">
              <ul>
                <li>BeQuiet 1000W PSU.</li>
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
                <li>Cabelmod extensions.</li>
                <li>Replace side intake filter.</li>
              </ul>
            </Col>

            <Col xs className="entry__col">
              <ul>
                <li>Add more harddrive space, actually not easy even with such a big case.</li>
                <li>Replace acrylic windows with tempered glass.</li>
                <li>Wait for 1180 Ti cards to upgrade in a few years.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            Build progression
          </h3>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/001.JPG" className="cover" alt="computer" />
            <h4>Testing motherboard and cpu</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <a href="/src/images/overkill/002.JPG">
              <img src="../../images/overkill/002.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            </a>
            <h4>Case-Labs Mercury S8 assembled</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/003.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Testfit with old XFX 7970 videocard and Noctua cooling tower</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/041.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Fans arrived</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/043.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>White</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/042.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>First graphics card</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/044.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Mouting SSDs at bottom of motherboard tray</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/045.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Bootdrive, Samsung 950 PRO, m.2 nvme</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/049.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Watercooling parts finally came in</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/050.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>EK Waterblocks GTX 1080 block mounted</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/051.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>EK Supremacy EVO for Intel 2011-3</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/overkill/037.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            <h4>Finsihed but I wasn't happy with the color. Too opaque.</h4>
          </div>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <a href="/src/images/overkill/061.JPG">
              <img src="../../images/overkill/061.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            </a>
            <h4>Added 2nd GTX 1080 and changed to new fluid. Pastells lime green.</h4>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
          <div className="player__box player__col">
            <a href="/src/images/overkill/060.JPG">
              <img src="../../images/overkill/060.JPG" style={{ height: '465px' }} className="cover" alt="computer" />
            </a>
            <h4>Also split up the loop into 2 different ones.</h4>
          </div>
        </Col>
      </Row>

    </Grid>
  </div>
);

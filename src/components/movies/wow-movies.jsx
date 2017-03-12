import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import './wow-movies.scss';

export const WoWMovies = ({ children, routing }) => {
  const path = routing.locationBeforeTransitions.pathname.split('/')[3];
  const subPath = routing.locationBeforeTransitions.pathname.split('/')[4];

  return (
    <div className="wow-movies">
      <Grid fluid className="main-grid">
        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text">
              World of Warcraft Movies
            </h3>
          </Col>
        </Row>


    <Row xs>
      <Col xs={6} sm={9} md={9} lg={9} className="entry__col">



        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text entry__text--shorter">
              Classic
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/molten-core">
                <img src="../../images/wow/classic/molten-core.jpg" className="cover" alt="molten-core" />
                <h4>Molten Core</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/onyxias-lair">
                <img src="../../images/wow/classic/onyxias-lair.jpg" className="cover" alt="onyxias-lair" />
                <h4>Onyxia's Lair</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/zulgurub">
                <img src="../../images/wow/classic/zulgurub.jpg" className="cover" alt="zulgurub" />
                <h4>Zul'Gurub</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/blackwing-lair">
                <img src="../../images/wow/classic/blackwing-lair.jpg" className="cover" alt="blackwing-lair" />
                <h4>Blackwing Lair</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/ruins-of-ahnqiraj">
                <img src="../../images/wow/classic/ruins-of-ahnqiraj.jpg" className="cover" alt="ruins-of-ahnqiraj" />
                <h4>Ruins of Ahn'Qiraj</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/ahnqiraj-temple">
                <img src="../../images/wow/classic/ahnqiraj-temple.jpg" className="cover" alt="ahnqiraj-temple" />
                <h4>Ahn'Qiraj Temple</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/classic/classic">
                <img src="../../images/wow/classic/classic.jpg" className="cover" alt="classic" />
                <h4>Other</h4>
              </Link>
            </div>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text entry__text--shorter">
              Burning Crusade
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/karazhan">
                <img src="../../images/wow/burning-crusade/karazhan.jpg" className="cover" alt="molten-core" />
                <h4>Karazhan</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/serpentshrine-cavern">
                <img src="../../images/wow/burning-crusade/serpentshrine-cavern.jpg" className="cover" alt="molten-core" />
                <h4>Serpentshrine Cavern</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/tempest-keep">
                <img src="../../images/wow/burning-crusade/tempest-keep.jpg" className="cover" alt="molten-core" />
                <h4>Tempest Keep</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/black-temple">
                <img src="../../images/wow/burning-crusade/black-temple.jpg" className="cover" alt="molten-core" />
                <h4>Black Temple</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/mount-hyjal">
                <img src="../../images/wow/burning-crusade/mount-hyjal.jpg" className="cover" alt="molten-core" />
                <h4>The Battle for Mount Hyjal</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/sunwell">
                <img src="../../images/wow/burning-crusade/the-sunwell.jpg" className="cover" alt="molten-core" />
                <h4>The Sunwell</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade">
                <img src="../../images/wow/burning-crusade/gruuls-lair.jpg" className="cover" alt="molten-core" />
                <h4>Other</h4>
              </Link>
            </div>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text">
              Wrath Of The Lich King
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/ulduar">
                <img src="../../images/wow/wrath-of-the-lich-king/ulduar.jpg" className="cover" alt="molten-core" />
                <h4>Ulduar</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/serpentshrine-cavern">
                <img src="../../images/wow/wrath-of-the-lich-king/trial-of-the-crusader.jpg" className="cover" alt="molten-core" />
                <h4>Trial of the Crusader</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/tempest-keep">
                <img src="../../images/wow/wrath-of-the-lich-king/icecrown-citadel.jpg" className="cover" alt="molten-core" />
                <h4>Icecrown Citadel</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/black-temple">
                <img src="../../images/wow/wrath-of-the-lich-king/the-obsidian-sanctum.jpg" className="cover" alt="molten-core" />
                <h4>Other</h4>
              </Link>
            </div>
          </Col>
        </Row>

      </Col>

      <Col xs={6} sm={3} md={3} lg={3} className="entry__col">
        <div className="movie-listing">
          <ReactCSSTransitionGroup
            component="div" transitionName="movie-listing"
            transitionEnterTimeout={300} transitionLeaveTimeout={300}
          >
            {children}
          </ReactCSSTransitionGroup>
        </div>
      </Col>
    </Row>


      </Grid>
    </div>
  );
}

WoWMovies.propTypes = {
  children: PropTypes.node,
};

export default WoWMovies;

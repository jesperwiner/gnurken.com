import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import './wow-movies.scss';

export const WoWMovies = ({ children, routing }) => {
  const path = routing.locationBeforeTransitions.pathname.split('/')[3];
  const subPath = routing.locationBeforeTransitions.pathname.split('/')[4];

  // <Row xs>
  //   <Col xs className="entry__col">
  //     <div className="movie-listing">
  //       <ReactCSSTransitionGroup
  //         component="div" transitionName="movie-listing"
  //         transitionEnterTimeout={300} transitionLeaveTimeout={300}
  //       >
  //         {path === 'classic' ? children : null}
  //       </ReactCSSTransitionGroup>
  //     </div>
  //   </Col>
  // </Row>


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
      <Col xs={6} sm={8} md={8} lg={8} className="entry__col">

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
              <Link to="/movies/wow-movies/burning-crusade/karazhan">
                <img src="../../images/wow/burning-crusade/karazhan.jpg" className="cover" alt="karazhan" />
                <h4>Karazhan</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/serpentshrine-cavern">
                <img src="../../images/wow/burning-crusade/serpentshrine-cavern.jpg" className="cover" alt="serpentshrine-cavern" />
                <h4>Serpentshrine Cavern</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/tempest-keep">
                <img src="../../images/wow/burning-crusade/tempest-keep.jpg" className="cover" alt="tempest-keep" />
                <h4>Tempest Keep</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/black-temple">
                <img src="../../images/wow/burning-crusade/black-temple.jpg" className="cover" alt="black-temple" />
                <h4>Black Temple</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/mount-hyjal">
                <img src="../../images/wow/burning-crusade/mount-hyjal.jpg" className="cover" alt="mount-hyjal" />
                <h4>The Battle for Mount Hyjal</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/sunwell">
                <img src="../../images/wow/burning-crusade/the-sunwell.jpg" className="cover" alt="the-sunwell" />
                <h4>The Sunwell</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/burning-crusade/burning-crusade">
                <img src="../../images/wow/burning-crusade/gruuls-lair.jpg" className="cover" alt="gruuls-lair" />
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
              <Link to="/movies/wow-movies/wrath-of-the-lich-king/ulduar">
                <img src="../../images/wow/wrath-of-the-lich-king/ulduar.jpg" className="cover" alt="ulduar" />
                <h4>Ulduar</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader">
                <img src="../../images/wow/wrath-of-the-lich-king/trial-of-the-crusader.jpg" className="cover" alt="trial-of-the-crusader" />
                <h4>Trial of the Crusader</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel">
                <img src="../../images/wow/wrath-of-the-lich-king/icecrown-citadel.jpg" className="cover" alt="icecrown-citadel" />
                <h4>Icecrown Citadel</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/wrath-of-the-lich-king/the-obsidian-sanctum">
                <img src="../../images/wow/wrath-of-the-lich-king/the-obsidian-sanctum.jpg" className="cover" alt="the-obsidian-sanctum" />
                <h4>Other</h4>
              </Link>
            </div>
          </Col>
        </Row>



        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text">
              Warlords of Draenor
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/warlords-of-draenor/blackrock-foundry">
                <img src="../../images/wow/warlords-of-draenor/blackrock-foundry.jpg" className="cover" alt="blackrock-foundry" />
                <h4>Blackrock Foundry</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/warlords-of-draenor/hellfire-citadel">
                <img src="../../images/wow/warlords-of-draenor/hellfire-citadel.jpg" className="cover" alt="hellfire-citadel" />
                <h4>Hellfire Citadel</h4>
              </Link>
            </div>
          </Col>
        </Row>



        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text">
              Legion
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/legion/emerald-nightmare">
                <img src="../../images/wow/legion/emerald-nightmare.jpg" className="cover" alt="emerald-nightmare" />
                <h4>Emerald Nightmare</h4>
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/legion/nighthold">
                <img src="../../images/wow/legion/nighthold.jpg" className="cover" alt="nighthold" />
                <h4>Nighthold</h4>
              </Link>
            </div>
          </Col>
        </Row>



        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="entry__col">
            <h3 className="entry__text">
              Other movies
            </h3>
          </Col>
        </Row>

        <Row xs>
          <Col xs={12} sm={6} md={3} className="entry__col">
            <div className="player__box player__col">
              <Link to="/movies/wow-movies/other/other">
                <img src="../../images/wow/other.jpg" className="cover" alt="other" />
                <h4>Other</h4>
              </Link>
            </div>
          </Col>
        </Row>

      </Col>

      <Col xs={6} sm={4} md={4} lg={4} className="entry__col">
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

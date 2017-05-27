import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';
import MovieListing from './movieListing';
import './wow-movies.scss';

export const WoWMovies = ({ children, routing, movie, showMovie }) => {
  const path = routing.locationBeforeTransitions.pathname.split('/')[3];
  const subPath = routing.locationBeforeTransitions.pathname.split('/')[4];

  return (
    <div className="wow-movies">
      <Grid fluid className="main-grid">
        <Row xs className="standardHeadline">
          World of Warcraft Movies
        </Row>

        <Row xs>
          <Col xs={12} sm={12} md={12} lg={6} className="movieColumn">
            <div className="movie-listing">
              <MovieListing path={subPath} movie={movie} showMovie={showMovie} />
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className="movieColumn rightColumn">
            <Row xs>

              {/******************************************************/}
              {/********************** CLASSIC ***********************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/classic">
                    <img src="../../images/wow/classic/classic.jpg" className="cover" alt="classic" />
                    <h4>Classic</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/molten-core">
                    <img src="../../images/wow/classic/molten-core.jpg" className="cover" alt="molten-core" />
                    <h4>Molten Core</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/onyxias-lair">
                    <img src="../../images/wow/classic/onyxias-lair.jpg" className="cover" alt="onyxias-lair" />
                    <h4>Onyxia's Lair</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/zulgurub">
                    <img src="../../images/wow/classic/zulgurub.jpg" className="cover" alt="zulgurub" />
                    <h4>Zul'Gurub</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/blackwing-lair">
                    <img src="../../images/wow/classic/blackwing-lair.jpg" className="cover" alt="blackwing-lair" />
                    <h4>Blackwing Lair</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/ruins-of-ahnqiraj">
                    <img src="../../images/wow/classic/ruins-of-ahnqiraj.jpg" className="cover" alt="ruins-of-ahnqiraj" />
                    <h4>Ruins of Ahn'Qiraj</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/classic/ahnqiraj-temple">
                    <img src="../../images/wow/classic/ahnqiraj-temple.jpg" className="cover" alt="ahnqiraj-temple" />
                    <h4>Ahn'Qiraj Temple</h4>
                  </Link>
                </div>
              </Col>


              {/******************************************************/}
              {/****************** BURNING CRUSADE *******************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/burning-crusade">
                    <img src="../../images/wow/burning-crusade/gruuls-lair.jpg" className="cover" alt="gruuls-lair" />
                    <h4>Burning Crusade</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/karazhan">
                    <img src="../../images/wow/burning-crusade/karazhan.jpg" className="cover" alt="karazhan" />
                    <h4>Karazhan</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/serpentshrine-cavern">
                    <img src="../../images/wow/burning-crusade/serpentshrine-cavern.jpg" className="cover" alt="serpentshrine-cavern" />
                    <h4>Serpentshrine Cavern</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/tempest-keep">
                    <img src="../../images/wow/burning-crusade/tempest-keep.jpg" className="cover" alt="tempest-keep" />
                    <h4>Tempest Keep</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/black-temple">
                    <img src="../../images/wow/burning-crusade/black-temple.jpg" className="cover" alt="black-temple" />
                    <h4>Black Temple</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/mount-hyjal">
                    <img src="../../images/wow/burning-crusade/mount-hyjal.jpg" className="cover" alt="mount-hyjal" />
                    <h4>The Battle for Mount Hyjal</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/burning-crusade/sunwell">
                    <img src="../../images/wow/burning-crusade/the-sunwell.jpg" className="cover" alt="the-sunwell" />
                    <h4>The Sunwell</h4>
                  </Link>
                </div>
              </Col>


              {/******************************************************/}
              {/*************** WRATH OF THE LICH KING ***************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/wrath-of-the-lich-king/wrath-of-the-lich-king">
                    <img src="../../images/wow/wrath-of-the-lich-king/wrath-of-the-lich-king.jpg" className="cover" alt="wrath-of-the-lich-king" />
                    <h4>Wrath Of The Lich King</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/wrath-of-the-lich-king/ulduar">
                    <img src="../../images/wow/wrath-of-the-lich-king/ulduar.jpg" className="cover" alt="ulduar" />
                    <h4>Ulduar</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader">
                    <img src="../../images/wow/wrath-of-the-lich-king/trial-of-the-crusader.jpg" className="cover" alt="trial-of-the-crusader" />
                    <h4>Trial of the Crusader</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel">
                    <img src="../../images/wow/wrath-of-the-lich-king/icecrown-citadel.jpg" className="cover" alt="icecrown-citadel" />
                    <h4>Icecrown Citadel</h4>
                  </Link>
                </div>
              </Col>


              {/******************************************************/}
              {/***************** WARLORDS OF DRAENOR ****************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/warlords-of-draenor/blackrock-foundry">
                    <img src="../../images/wow/warlords-of-draenor/blackrock-foundry.jpg" className="cover" alt="blackrock-foundry" />
                    <h4>Blackrock Foundry</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/warlords-of-draenor/hellfire-citadel">
                    <img src="../../images/wow/warlords-of-draenor/hellfire-citadel.jpg" className="cover" alt="hellfire-citadel" />
                    <h4>Hellfire Citadel</h4>
                  </Link>
                </div>
              </Col>


              {/******************************************************/}
              {/************************ LEGION **********************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/legion/emerald-nightmare">
                    <img src="../../images/wow/legion/emerald-nightmare.jpg" className="cover" alt="emerald-nightmare" />
                    <h4>Emerald Nightmare</h4>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/legion/nighthold">
                    <img src="../../images/wow/legion/nighthold.jpg" className="cover" alt="nighthold" />
                    <h4>Nighthold</h4>
                  </Link>
                </div>
              </Col>

              {/******************************************************/}
              {/************************ OTHER ***********************/}
              {/******************************************************/}
              <Col xs={6} sm={3} md={3} lg={4} className="movieColumn">
                <div className="categoryLink">
                  <Link to="/movies/wow-movies/other/other">
                    <img src="../../images/wow/other.jpg" className="cover" alt="other" />
                    <h4>Other</h4>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
      </Grid>
    </div>
  );
}


WoWMovies.defaultProps = {
  movie: {
    url: 'http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man with Teamspeak.mp4',
  }
};

WoWMovies.propTypes = {
  children: PropTypes.node,
  movie: PropTypes.object,
};

export default WoWMovies;

import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './about.scss';

export const About = () => (
  <div className="about">
    <Grid fluid className="main-grid">
      <Row xs>
        <Col xs={12} sm={12} md={6} lg={6} className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            Me
          </h3>
          <h4 className="normal-text">
            My name is Jesper Winér, aka "Gnurken" online. Currently 41 years old and work
            with web development and related applications at Nordnet Bank in Alvik/Stockholm.
            Mostly with javascript (react, es6, css3) but some Java and C# and Perl.
            <br />
            <br />
            Spare time is centered around gaming in all forms. Stopped with World of Warcraft
            for now but who knows, maybe I get dragged in again. Was playing WoW for over 11 years
            since 2005. But I also enjoy working on other projects, like this webpage. Using it as
            training ground for new techniques. Also trying to learn
            Adobe Premiere but I'm making all videos in an old Sony Vegas version for now.
            Premiere is quite hard to use.
            <br />
            <br />
            Here you will find all my WoW-Movies (and a few some others that friends made that I'm hosting),
            C# projects and galleries of my retro gaming collection and new builds.
          </h4>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} className="entry__col">
          <h3 className="entry__text entry__text--shorter">
            Top 3 favorite movies
          </h3>

          <h4 className="normal-text">
            <a className="normal-text" href="http://www.imdb.com/title/tt0109830/?ref_=nv_sr_1">
              <img src="../../images/gump.png" className="image" alt="Forrest Gump" />
              Watched Forrest Gump many times and will do many more. It's my all time favorite movie
              and I don't see it getting bumped down any time soon. Tom Hanks is perfect as Gump
              and the supporting cast is awesome, especially Gary Sinise as Lt. Dan. I guess the effects
              will be dated eventually but I think they still hold up.
              <br />
              <br />
            </a>
          </h4>

          <h4 className="normal-text">
            <a className="normal-text" href="http://www.imdb.com/title/tt0080684/?ref_=nv_sr_3">
              <img src="../../images/empire.png" className="image" alt="Empire Striked Back" />
              No surprise that a computer geek likes fantasy and sci-fi. The Empire Strikes Back is the
              best of them and proves that George Lucas is a better storyteller than a director. Some of the
              special edition additions are ok, the Wampa on Hoth didn't need to be changed,
              but the Cloud City extensions are great.
              <br />
              <br />
            </a>
          </h4>

          <h4 className="normal-text">
            <a className="normal-text" href="http://www.imdb.com/title/tt0434409/?ref_=fn_al_tt_1">
              <img src="../../images/vendetta.png" className="image" alt="V for Vendetta" />
              This future dystopian society doesn't seem as far fetched as it did in 2005. Hugo Weaving
              is playing the shadowy vigilante perfectly despite being masked the entire movie. This also is Natalie Portmans
              best performance ever as the orphan Evey. I watch this movie every year on 5th Nov.
              <br />
              <br />
            </a>
          </h4>

          <h4 className="normal-text normal-text--mini">
            Honorable mentions:
            <a href="http://www.imdb.com/title/tt0111161/"> The Shawshank Redemption</a>,
            <a href="http://www.imdb.com/title/tt0103064/"> Terminator 2</a>,
            <a href="http://www.imdb.com/title/tt0133093/"> The Matrix</a>,
            <a href="http://www.imdb.com/title/tt0081590/"> Sällskapsresan</a>,
            <a href="http://www.imdb.com/title/tt0090605/"> Aliens</a>,
            <a href="http://www.imdb.com/title/tt0095016/"> Die Hard</a>,
            <a href="http://www.imdb.com/title/tt0468569/"> The Dark Knight</a>.
            <br />
            <br />
          </h4>
        </Col>

      </Row>

      <Row xs >
        <Col xs>
          <h3 className="entry__text entry__text--shorter">
            Social Media
          </h3>
        </Col>
      </Row>

      <Row xs>
        <Col xs={12} sm={6} md={4} lg={3} className="entry__col">
          <a href="https://www.linkedin.com/in/jesper-win%C3%A9r-4b6a7981/">
            <div className="player__box player__col">
              <img src="../../images/jesper.png" className="cover" alt="Jesper" />
              <h4>Linked-In</h4>
            </div>
          </a>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/jesper.png" className="cover" alt="Jesper" />
            <h4>Linked-In</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="entry__col">
          <div className="player__box player__col">
            <img src="../../images/jesper.png" className="cover" alt="Jesper" />
            <h4>Linked-In</h4>
          </div>
        </Col>
      </Row>

    </Grid>
  </div>
);

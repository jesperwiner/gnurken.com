import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col } from 'react-bem-grid';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';




const Off  = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
    console.log(this.props.showMovie);

		return (
      <Row xs >
        <Col xs>
          <ul className="movies-list" id="double">
            <li>
              <button onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.mp4')} />
              <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.avi">
                Axis vs. Onyxia - Doit doit downed (14MB)
              </a>
            </li>
            <li>
              <button onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.mp4')} />
              <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.avi">
                Axis vs. Onyxia - Headplanting - 2006-02-23 (16MB)
              </a>
            </li>
            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.avi">
                Axis vs. Onyxia - Redcomet Speech (13MB)
              </a>
            </li>
          </ul>
        </Col>
      </Row>
		)
	}
});

const On  = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <ul className="movies-list" id="double">
            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Garr - 2006-04-06.avi">
                Axis vs. Garr - 2006-04-06 (149MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Geddon - 2006-04-06.avi">
                Axis vs. Geddon - 2006-04-06 (85MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-02-26.avi">
                Axis vs. Ragnaros - 2006-02-26 (19MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part I.avi">
                Axis vs. Ragnaros   - 2006-04-07, Part I (135MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part II.avi">
                Axis vs. Ragnaros -   2006-04-07, Part II (69MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-07-11.wmv">
                Axis vs. Ragnaros - 2006-07-11 (150MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - Party - 2006-02-26.avi">
                Axis vs. Ragnaros   - Party - 2006-02-26 (9MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Rangaros - Try - 2006-02-13.avi">
                Axis vs. Rangaros - Try - 2006-02-13 (82MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Golemagg at level 70.avi">
                Golemagg at level 70 (56MB)
              </a>
            </li>

            <li>
              <a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Ragnaros at level 70.avi">
                Ragnaros at level 70 (53MB)
              </a>
            </li>

          </ul>
        </Col>
      </Row>
		)
	}
});

var MovieListing = React.createClass({
    getInitialState: function() {
        return {
            path: this.props.path || '',
            transitionEnd: true
        };
    },

   componentWillReceiveProps: function(nextProps) {
      if (this.props.path !== nextProps.path) {
        this.setState({
          transitionEnd: false
        });
      }
   },

   handleTransitionEnd() {
	    this.setState({transitionEnd: true});
   },



  renderOff() {
		if (this.props.path === 'onyxias-lair' && this.state.transitionEnd) {
			return (
				<Off key="off" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />
			)
		}
	},

	renderOn() {
		if (this.props.path === 'molten-core' && this.state.transitionEnd) {
			return (
				<On key="on" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />
			)
		}
	},

  render: function() {
    return (
      <div>
        <Row xs>
          <Col xs className="movieColumn">

            <ReactPlayer
              url={this.props.movie.url}
              width={'100%'}
              height={533}
              controls
            />
          </Col>
        </Row>
        <ReactCSSTransitionGroup transitionName="switch" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {this.renderOff()}
          {this.renderOn()}
        </ReactCSSTransitionGroup>
      </div>
      );
    }
});

export default MovieListing;

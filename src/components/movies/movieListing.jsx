import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col } from 'react-bem-grid';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';

import OnyxiasLair from './classic/onyxias-lair';
import Classic from './classic/classic';

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

   renderClassic() {
     if (this.props.path === 'classic' && this.state.transitionEnd) {
       return (
         <Classic key="classic" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />
       )
     }
   },

   renderOnyxiasLair() {
		 if (this.props.path === 'onyxias-lair' && this.state.transitionEnd) {
			 return (
				 <OnyxiasLair key="onyxias-lair" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />
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
              width={'98%'}
              height={'490'}
              controls
            />
          </Col>
        </Row>
        <ReactCSSTransitionGroup transitionName="switch" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {this.renderClassic()}
          {this.renderOnyxiasLair()}
        </ReactCSSTransitionGroup>
      </div>
      );
    }
});

export default MovieListing;

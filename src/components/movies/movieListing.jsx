import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col } from 'react-bem-grid';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';

import Classic from './classic/classic';
import MoltenCore from './classic/molten-core';
import OnyxiasLair from './classic/onyxias-lair';
import ZulGurub from './classic/zulgurub';
import BlackwingLair from './classic/blackwing-lair';
import RuinsOfAhnqiraj from './classic/ruins-of-ahnqiraj';
import AhnQirajTemple from './classic/ahnqiraj-temple';

import BurningCrusade from './burning-crusade/burning-crusade';
import Karazhan from './burning-crusade/karazhan';
import SerpentshrineCavern from './burning-crusade/serpentshrine-cavern';
import TempestKeep from './burning-crusade/tempest-keep';
import BlackTemple from './burning-crusade/black-temple';
import MountHyjal from './burning-crusade/mount-hyjal';
import Sunwell from './burning-crusade/sunwell';

import WrathOfTheLichKing from './wrath-of-the-lich-king/wrath-of-the-lich-king';
import Ulduar from './wrath-of-the-lich-king/ulduar';
import TrialOfTheCrusader from './wrath-of-the-lich-king/trial-of-the-crusader';
import IcecrownCitadel from './wrath-of-the-lich-king/icecrown-citadel';

import BlackrockFoundry from './warlords-of-draenor/blackrock-foundry';
import HellfireCitadel from './warlords-of-draenor/hellfire-citadel';

import EmeraldNightmare from './legion/emerald-nightmare';
import Nighthold from './legion/nighthold';

import Other from './other/other';

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
       return (<Classic key="classic" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderMoltenCore() {
     if (this.props.path === 'molten-core' && this.state.transitionEnd) {
       return (<MoltenCore key="molten-core" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderOnyxiasLair() {
		 if (this.props.path === 'onyxias-lair' && this.state.transitionEnd) {
			 return (<OnyxiasLair key="onyxias-lair" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderZulGurub() {
		 if (this.props.path === 'zulgurub' && this.state.transitionEnd) {
			 return (<ZulGurub key="zulgurub" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderBlackwingLair() {
		 if (this.props.path === 'blackwing-lair' && this.state.transitionEnd) {
			 return (<BlackwingLair key="blackwing-lair" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderRuinsOfAhnQiraj() {
		 if (this.props.path === 'ruins-of-ahnqiraj' && this.state.transitionEnd) {
			 return (<RuinsOfAhnqiraj key="ruins-of-ahnqiraj" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderAhnQirajTemple() {
		 if (this.props.path === 'ahnqiraj-temple' && this.state.transitionEnd) {
			 return (<AhnQirajTemple key="ahnqiraj-temple" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderBurningCrusade() {
		 if (this.props.path === 'burning-crusade' && this.state.transitionEnd) {
			 return (<BurningCrusade key="burning-crusade" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderKarazhan() {
		 if (this.props.path === 'karazhan' && this.state.transitionEnd) {
			 return (<Karazhan key="karazhan" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderSerpertshrineCavern() {
		 if (this.props.path === 'serpentshrine-cavern' && this.state.transitionEnd) {
			 return (<SerpentshrineCavern key="serpentshrine-cavern" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
		 }
	 },

   renderTempestKeep() {
     if (this.props.path === 'tempest-keep' && this.state.transitionEnd) {
       return (<TempestKeep key="tempest-keep" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderBlackTemple() {
     if (this.props.path === 'black-temple' && this.state.transitionEnd) {
       return (<BlackTemple key="black-temple" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderMountHyjal() {
     if (this.props.path === 'mount-hyjal' && this.state.transitionEnd) {
       return (<MountHyjal key="mount-hyjal" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderSunwell() {
     if (this.props.path === 'sunwell' && this.state.transitionEnd) {
       return (<Sunwell key="sunwell" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderWrathOfTheLichKing() {
     if (this.props.path === 'wrath-of-the-lich-king' && this.state.transitionEnd) {
       return (<WrathOfTheLichKing key="wrath-of-the-lich-king" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderUlduar() {
     if (this.props.path === 'ulduar' && this.state.transitionEnd) {
       return (<Ulduar key="ulduar" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderTrialOfTheCrusader() {
     if (this.props.path === 'trial-of-the-crusader' && this.state.transitionEnd) {
       return (<TrialOfTheCrusader key="trial-of-the-crusader" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderIcecrownCitadel() {
     if (this.props.path === 'icecrown-citadel' && this.state.transitionEnd) {
       return (<IcecrownCitadel key="icecrown-citadel" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderBlackrockFoundry() {
     if (this.props.path === 'blackrock-foundry' && this.state.transitionEnd) {
       return (<BlackrockFoundry key="blackrock-foundry" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderHellfireCitadel() {
     if (this.props.path === 'hellfire-citadel' && this.state.transitionEnd) {
       return (<HellfireCitadel key="hellfire-citadel" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderEmeraldNightmare() {
     if (this.props.path === 'emerald-nightmare' && this.state.transitionEnd) {
       return (<EmeraldNightmare key="emerald-nightmare" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderNighthold() {
     if (this.props.path === 'nighthold' && this.state.transitionEnd) {
       return (<Nighthold key="nighthold" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

   renderOther() {
     if (this.props.path === 'other' && this.state.transitionEnd) {
       return (<Other key="other" showMovie={this.props.showMovie} handleTransitionEnd={this.handleTransitionEnd} />)
     }
   },

  render: function() {
    return (
      <div>
        <Row xs>
          <Col xs className="moviePlayer">
            <ReactPlayer
              url={this.props.movie.url}
              width={'100%'}
              height={'417'}
              controls
            />
          </Col>
        </Row>
        <ReactCSSTransitionGroup transitionName="switch" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          {this.renderClassic()}
          {this.renderMoltenCore()}
          {this.renderOnyxiasLair()}
          {this.renderZulGurub()}
          {this.renderBlackwingLair()}
          {this.renderRuinsOfAhnQiraj()}
          {this.renderAhnQirajTemple()}

          {this.renderBurningCrusade()}
          {this.renderKarazhan()}
          {this.renderSerpertshrineCavern()}
          {this.renderTempestKeep()}
          {this.renderBlackTemple()}
          {this.renderMountHyjal()}
          {this.renderSunwell()}

          {this.renderWrathOfTheLichKing()}
          {this.renderUlduar()}
          {this.renderTrialOfTheCrusader()}
          {this.renderIcecrownCitadel()}

          {this.renderBlackrockFoundry()}
          {this.renderHellfireCitadel()}

          {this.renderEmeraldNightmare()}
          {this.renderNighthold()}

          {this.renderOther()}
        </ReactCSSTransitionGroup>
      </div>
      );
    }
});

export default MovieListing;

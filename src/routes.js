import React, { PropTypes } from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import { Home } from './components/home';
import { About } from './components/about/about';
import { Rig } from './components/about/rig';
import { Recent } from './components/projects/recent';
import { Amiga1200 } from './components/projects/amiga1200';
import { OtherProjects } from './components/projects/other';

import MoviesContainer from './containers/movies-container';
import { MoltenCore } from './components/movies/classic/molten-core';
import { OnyxiasLair } from './components/movies/classic/onyxias-lair';
import { ZulGurub } from './components/movies/classic/zulgurub';
import { BlackwingLair } from './components/movies/classic/blackwing-lair';
import { RuinsOfAhnqiraj } from './components/movies/classic/ruins-of-ahnqiraj';
import { AhnqirajTemple } from './components/movies/classic/ahnqiraj-temple';
import { Classic } from './components/movies/classic/classic';

import { Karazhan } from './components/movies/karazhan';
import { SerpentshrineCavern } from './components/movies/serpentshrine-cavern';
import { TempestKeep } from './components/movies/tempest-keep';
import { BlackTemple } from './components/movies/black-temple';
import { MountHyjal } from './components/movies/mount-hyjal';
import { Sunwell } from './components/movies/sunwell';
import { BurningCrusade } from './components/movies/burning-crusade';

import { IcecrownCitadel } from './components/movies/icecrown-citadel';
import { TrialOfTheCrusader } from './components/movies/trial-of-the-crusader';
import { Ulduar } from './components/movies/ulduar';
import { WrathOfTheLichKing } from './components/movies/wrath-of-the-lich-king';

import { OtherMovies } from './components/movies/other';
import { NotFound } from './components/not-found';

export default function Routes({ store }) {
  const history = syncHistoryWithStore(hashHistory, store);
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about/rig" component={Rig} />
        <Route path="/projects" component={Recent} />
        <Route path="/projects/amiga1200" component={Amiga1200} />
        <Route path="/projects/other" component={OtherProjects} />
        <Route path="/movies/wow-movies" component={MoviesContainer}>
          <Route path="/movies/wow-movies/classic/molten-core" component={MoltenCore} />
          <Route path="/movies/wow-movies/classic/onyxias-lair" component={OnyxiasLair} />
          <Route path="/movies/wow-movies/classic/zulgurub" component={ZulGurub} />
          <Route path="/movies/wow-movies/classic/blackwing-lair" component={BlackwingLair} />
          <Route path="/movies/wow-movies/classic/ruins-of-ahnqiraj" component={RuinsOfAhnqiraj} />
          <Route path="/movies/wow-movies/classic/ahnqiraj-temple" component={AhnqirajTemple} />
          <Route path="/movies/wow-movies/classic/classic" component={Classic} />

          <Route path="/movies/wow-movies/karazhan" component={Karazhan} />
          <Route path="/movies/wow-movies/serpentshrine-cavern" component={SerpentshrineCavern} />
          <Route path="/movies/wow-movies/tempest-keep" component={TempestKeep} />
          <Route path="/movies/wow-movies/black-temple" component={BlackTemple} />
          <Route path="/movies/wow-movies/mount-hyjal" component={MountHyjal} />
          <Route path="/movies/wow-movies/sunwell" component={Sunwell} />
          <Route path="/movies/wow-movies/burning-crusade" component={BurningCrusade} />

          <Route path="/movies/wow-movies/icecrown-citadel" component={IcecrownCitadel} />
          <Route path="/movies/wow-movies/trial-of-the-crusader" component={TrialOfTheCrusader} />
          <Route path="/movies/wow-movies/ulduar" component={Ulduar} />
          <Route path="/movies/wow-movies/wrath-of-the-lich-king" component={WrathOfTheLichKing} />

        </Route>
        <Route path="/movies/other" component={OtherMovies} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
}

Routes.propTypes = {
  store: PropTypes.object,
};

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Menu from './menu';
import Footer from './footer';
import './app.scss';


const App = ({ children, location: { pathname } }) => {
  // Only take the first-level part of the path as key, instead of the whole path.
  const key = pathname.split('/')[1] || 'root'
console.log('rendered');
  return (
    <div>
      <ul>
        <li><Link to="/about">Page 1</Link></li>
        <li><Link to="/games">Page 2</Link></li>
      </ul>
      <ReactCSSTransitionGroup
        component="div" transitionName="example"
        transitionEnterTimeout={500} transitionLeaveTimeout={500}
      >
        {React.cloneElement(children || <div />, { key })}
      </ReactCSSTransitionGroup>
    </div>
  )
}
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <header className="primary-header"></header>
//         <aside className="primary-aside">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//
//           </ul>
//         </aside>
//         <main>
//           {this.props.children}
//         </main>
//       </div>
//     );
//   }
// }

const aApp = (props) => (
  <div id="root2">
    <div className="app">
      <header className="primary-header">
        <div className="logo">
          <img src="../images/gnurken_logo.png" alt="Gnurken"></img>
          <div>The real Gnurken, not that other dude that took my name</div>
        </div>
        <Menu />
      </header>
      <aside className="primary-aside"></aside>
      <main>
        <WowMoviesContainer />
        <Footer />
        <div className="search">
          <header className="search-header"></header>
          <div className="results">
            {props.children}
          </div>
          <div className="search-footer pagination"></div>
        </div>
      </main>
    </div>
  </div>
);

export default App;

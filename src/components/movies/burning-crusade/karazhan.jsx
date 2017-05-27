import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Karazhan = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Karazhan</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/Echo vs. Netherspite.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/Echo vs. Netherspite.mp4')}>Echo vs. Netherspite</td>
                <td className="tableCell--size">276MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/Echo vs. Netherspite.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Chess.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Chess.mp4')}>GeeksRus vs. Chess</td>
                <td className="tableCell--size">265MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Chess.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Huntsman.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Huntsman.mp4')}>GeeksRus vs. Huntsman</td>
                <td className="tableCell--size">132MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Huntsman.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Illhoof.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Illhoof.mp4')}>GeeksRus vs. Illhoof</td>
                <td className="tableCell--size">379MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Illhoof.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Maiden.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Maiden.mp4')}>GeeksRus vs. Maiden</td>
                <td className="tableCell--size">111MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Maiden.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Moroes.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Moroes.mp4')}>GeeksRus vs. Moroes</td>
                <td className="tableCell--size">122MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Moroes.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Netherspite.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Netherspite.mp4')}>GeeksRus vs. Netherspite</td>
                <td className="tableCell--size">454MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Netherspite.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Nightbane.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Nightbane.mp4')}>GeeksRus vs. Nightbane</td>
                <td className="tableCell--size">765MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. Nightbane.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. PrinceMalchezaar.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. PrinceMalchezaar.mp4')}>GeeksRus vs. PrinceMalchezaar</td>
                <td className="tableCell--size">322MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. PrinceMalchezaar.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. ShadeOfAran.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. ShadeOfAran.mp4')}>GeeksRus vs. ShadeOfAran</td>
                <td className="tableCell--size">146MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. ShadeOfAran.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. WizardOfOz.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. WizardOfOz.mp4')}>GeeksRus vs. WizardOfOz</td>
                <td className="tableCell--size">287MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/karazhan/GeeksRus vs. WizardOfOz.avi"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Karazhan;

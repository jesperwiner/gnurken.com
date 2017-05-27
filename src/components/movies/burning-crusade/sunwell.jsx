import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Sunwell = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Sunwell</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Brutallus.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Brutallus.mp4')}>Illumination vs. Brutallus</td>
                <td className="tableCell--size">160MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Brutallus.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Eredar Twins.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Eredar Twins.mp4')}>Illumination vs. Eredar Twins</td>
                <td className="tableCell--size">154MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Eredar Twins.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Felmyst.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Felmyst.mp4')}>Illumination vs. Felmyst</td>
                <td className="tableCell--size">222MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Felmyst.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Kalecgos.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Kalecgos.mp4')}>Illumination vs. Kalecgos</td>
                <td className="tableCell--size">144MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Kalecgos.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. KilJaeden.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. KilJaeden.mp4')}>Illumination vs. KilJaeden</td>
                <td className="tableCell--size">379MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. KilJaeden.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Muru.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Muru.mp4')}>Illumination vs. Muru</td>
                <td className="tableCell--size">178MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/sunwell/Illumination vs. Muru.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Sunwell;

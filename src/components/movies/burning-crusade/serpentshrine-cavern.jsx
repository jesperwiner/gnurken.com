import React from 'react';
import { Row, Col } from 'react-bem-grid';

const SerpentshrineCavern = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Serpentshrine Cavern</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Hydross.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Hydross.mp4')}>Illumination vs. Hydross</td>
                <td className="tableCell--size">117MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Hydross.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Karathress.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Karathress.mp4')}>Illumination vs. Karathress</td>
                <td className="tableCell--size">82MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Karathress.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lady Vashj.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lady Vashj.mp4')}>Illumination vs. Lady Vashj</td>
                <td className="tableCell--size">342MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lady Vashj.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Leotheras.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Leotheras.mp4')}>Illumination vs. Leotheras</td>
                <td className="tableCell--size">123MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Leotheras.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lurker.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lurker.mp4')}>Illumination vs. Lurker</td>
                <td className="tableCell--size">202MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Lurker.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Morogrim.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Morogrim.mp4')}>Illumination vs. Morogrim</td>
                <td className="tableCell--size">113MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/serpentshrine-cavern/Illumination vs. Morogrim.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default SerpentshrineCavern;

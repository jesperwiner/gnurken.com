import React from 'react';
import { Row, Col } from 'react-bem-grid';

const MountHyjal = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>The Battle for Mount Hyjal</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Anetheron.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Anetheron.mp4')}>Illumination vs. Anetheron</td>
                <td className="tableCell--size">179MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Anetheron.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Archimonde.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Archimonde.mp4')}>Illumination vs. Archimonde</td>
                <td className="tableCell--size">279MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Archimonde.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Azgalor.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Azgalor.mp4')}>Illumination vs. Azgalor</td>
                <td className="tableCell--size">192MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Azgalor.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Kazrogal.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Kazrogal.mp4')}>Illumination vs. Kazrogal</td>
                <td className="tableCell--size">144MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Kazrogal.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Rage Winterchill.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Rage Winterchill.mp4')}>Illumination vs. Rage Winterchill</td>
                <td className="tableCell--size">194MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/mount-hyjal/Illumination vs. Rage Winterchill.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default MountHyjal;

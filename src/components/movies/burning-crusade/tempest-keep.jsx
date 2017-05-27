import React from 'react';
import { Row, Col } from 'react-bem-grid';

const TempestKeep = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Tempest Keep</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Alar.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Alar.mp4')}>Illumination vs. Alar</td>
                <td className="tableCell--size">333MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Alar.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Kaelthas.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Kaelthas.mp4')}>Illumination vs. Kaelthas</td>
                <td className="tableCell--size">295MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Kaelthas.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian.mp4')}>Illumination vs. Solarian</td>
                <td className="tableCell--size">217MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian - Wipe.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian - Wipe.mp4')}>Illumination vs. Solarian - Wipe</td>
                <td className="tableCell--size">302MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. Solarian - Wipe.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. VoidReaver.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. VoidReaver.mp4')}>Illumination vs. VoidReaver</td>
                <td className="tableCell--size">291MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. VoidReaver.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow--no-hover">
                <td className="tableCell--watch"></td>
                <td className="tableCell">Illumination vs. VoidReaver - 1st kill</td>
                <td className="tableCell--size">524MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/tempest-keep/Illumination vs. VoidReaver - 1st kill.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default TempestKeep;

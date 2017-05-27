import React from 'react';
import { Row, Col } from 'react-bem-grid';

const BlackTemple = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Black Temple</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Bloodboil.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Bloodboil.mp4')}>Illumination vs. Bloodboil</td>
                <td className="tableCell--size">181MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Bloodboil.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. HWN.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. HWN.mp4')}>Illumination vs. HWN</td>
                <td className="tableCell--size">153MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. HWN.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidan Stormrage.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidan Stormrage.mp4')}>Illumination vs. Illidan Stormrage</td>
                <td className="tableCell--size">364MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidan Stormrage.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidari Council.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidari Council.mp4')}>Illumination vs. Illidari Council</td>
                <td className="tableCell--size">246MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Illidari Council.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Mother Shahraz.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Mother Shahraz.mp4')}>Illumination vs. Mother Shahraz</td>
                <td className="tableCell--size">169MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Mother Shahraz.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS.mp4')}>Illumination vs. RoS</td>
                <td className="tableCell--size">181MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS - Hidrasactum.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS - Hidrasactum.mp4')}>Illumination vs. RoS - Hidrasactum</td>
                <td className="tableCell--size">158MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. RoS - Hidrasactum.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Shade of Akama.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Shade of Akama.mp4')}>Illumination vs. Shade of Akama</td>
                <td className="tableCell--size">123MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Shade of Akama.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Supremus.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Supremus.mp4')}>Illumination vs. Supremus</td>
                <td className="tableCell--size">203MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Supremus.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Teron.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Teron.mp4')}>Illumination vs. Teron</td>
                <td className="tableCell--size">147MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/burning-crusade/black-temple/Illumination vs. Teron.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default BlackTemple;

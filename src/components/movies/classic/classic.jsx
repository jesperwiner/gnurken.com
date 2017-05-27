import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Classic = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Classic</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Argent Dawn vs. Emeriss - Soulja lead PUG.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Argent Dawn vs. Emeriss - Soulja lead PUG.mp4')}>Argent Dawn vs. Emeriss - Soulja lead PUG</td>
                <td className="tableCell--size">225MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Argent Dawn vs. Emeriss - Soulja lead PUG.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man.mp4')}>Axis vs. Drakkisath - 5 man</td>
                <td className="tableCell--size">125MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man with Teamspeak.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man with Teamspeak.mp4')}>Axis vs. Drakkisath - 5 man with Teamspeak</td>
                <td className="tableCell--size">125MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Drakkisath - 5 man with Teamspeak.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow--no-hover">
                <td className="tableCell--watch"></td>
                <td className="tableCell" >Axis vs. Kazzak</td>
                <td className="tableCell--size">138MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Kazzak.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Taerar.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Taerar.mp4')}>Axis vs. Taerar</td>
                <td className="tableCell--size">304MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Taerar.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 1.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 1.mp4')}>Axis vs. Thunderaan - Egbert kill 1</td>
                <td className="tableCell--size">78MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 1.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 2.mp4')}>Axis vs. Thunderaan - Egbert kill 2</td>
                <td className="tableCell--size">88MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Egbert kill 2.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Gnurken.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Gnurken.mp4')}>Axis vs. Thunderaan - Gnurken</td>
                <td className="tableCell--size">64MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/Axis vs. Thunderaan - Gnurken.avi"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Classic;

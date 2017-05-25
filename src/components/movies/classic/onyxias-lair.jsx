import React from 'react';
import { Row, Col } from 'react-bem-grid';

const OnyxiasLair = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Onyxia's Lair</th></tr></thead>
            <tbody>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.mp4')}>Axis vs. Onyxia - Doit doit downed</td>
              <td className="tableCell--size">14MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.avi"><button className="downloadButton" /></a></td>
            </tr>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.mp4')}>Axis vs. Onyxia - Headplanting - 2006-02-23</td>
              <td className="tableCell--size">16MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.avi"><button className="downloadButton" /></a></td>
            </tr>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.mp4')}>Axis vs. Onyxia - Redcomet speech</td>
              <td className="tableCell--size">13MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.avi"><button className="downloadButton" /></a></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default OnyxiasLair;

import React from 'react';
import { Row, Col } from 'react-bem-grid';

const AhnqirajTemple = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Ahnqiraj Temple</th></tr></thead>
            <tbody>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Axis vs. Sartura.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Axis vs. Sartura.mp4')}>Axis vs. Sartura</td>
              <td className="tableCell--size">71MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Axis vs. Sartura.wmv"><button className="downloadButton" /></a></td>
            </tr>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Cthun - Instant Wipe.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Cthun - Instant Wipe.mp4')}>Mayhem vs. Cthun - Instant Wipe</td>
              <td className="tableCell--size">43MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Cthun - Instant Wipe.avi"><button className="downloadButton" /></a></td>
            </tr>
            <tr className="tableRow">
              <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Huhuran.mpgMayhem vs. Huhuran.mp4')} /></td>
              <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Huhuran.mp4')}>Mayhem vs. Huhuran</td>
              <td className="tableCell--size">13MB</td>
              <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/ahnqiraj-temple/Mayhem vs. Huhuran.mpg"><button className="downloadButton" /></a></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default AhnqirajTemple;

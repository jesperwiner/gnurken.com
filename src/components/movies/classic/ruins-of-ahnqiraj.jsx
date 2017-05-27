import React from 'react';
import { Row, Col } from 'react-bem-grid';

const RuinsOfAhnqiraj = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Ruins of Ahnqiraj</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ayamiss - 2006-05-02.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ayamiss - 2006-05-02.mp4')}>Axis vs. Ayamiss - 2006-05-02</td>
                <td className="tableCell--size">189MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ayamiss - 2006-05-02.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ossirian - 2006-07-09.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ossirian - 2006-07-09.mp4')}>Axis vs. Ossirian - 2006-07-09</td>
                <td className="tableCell--size">181MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/ruins-of-ahnqiraj/Axis vs. Ossirian - 2006-07-09.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default RuinsOfAhnqiraj;

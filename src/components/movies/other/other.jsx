import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Other = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Other</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/other/11_Years_of_WoW_Raiding.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/other/11_Years_of_WoW_Raiding.mp4')}>11 Years of WoW Raiding</td>
                <td className="tableCell--size">1.49GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/other/11_Years_of_WoW_Raiding.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/other/Illumination_Raiding.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/other/Illumination_Raiding.mp4')}>Illumination Raiding</td>
                <td className="tableCell--size">275MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/other/Illumination_Raiding.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Other;

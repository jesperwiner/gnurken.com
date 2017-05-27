import React from 'react';
import { Row, Col } from 'react-bem-grid';

const WrathOfTheLichKing = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Wrath Of The Lich King</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Illumination vs. Sartharion.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Illumination vs. Sartharion.mp4')}>Illumination vs. Sartharion</td>
                <td className="tableCell--size">213MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Illumination vs. Sartharion.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Sallskapsraiden.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Sallskapsraiden.mp4')}>Sällskapsraiden</td>
                <td className="tableCell--size">779MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/Sallskapsraiden.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default WrathOfTheLichKing;

import React from 'react';
import { Row, Col } from 'react-bem-grid';

const TrialOfTheCrusader = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Trial Of The Crusader</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Illumination vs. NorthrendBeasts(Heroic).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Illumination vs. NorthrendBeasts(Heroic).mp4')}>Illumination vs. NorthrendBeasts(Heroic)</td>
                <td className="tableCell--size">504MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Illumination vs. NorthrendBeasts(Heroic).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Sallskapsraiden Tribute to Insanity.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Sallskapsraiden Tribute to Insanity.mp4')}>Sällskapsraiden Tribute to Insanity</td>
                <td className="tableCell--size">690MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/trial-of-the-crusader/Sallskapsraiden Tribute to Insanity.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default TrialOfTheCrusader;

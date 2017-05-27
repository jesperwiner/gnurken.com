import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Nighthold = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Nighthold</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Chronomatic Anomaly Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Chronomatic Anomaly Mythic.mp4')}>Undecided vs. Chronomatic Anomaly Mythic</td>
                <td className="tableCell--size">2.72GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Chronomatic Anomaly Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Skorpyron Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Skorpyron Mythic.mp4')}>Undecided vs. Skorpyron Mythic</td>
                <td className="tableCell--size">3.53GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Skorpyron Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Trilliax Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Trilliax Mythic.mp4')}>Undecided vs. Trilliax Mythic</td>
                <td className="tableCell--size">1.15GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided vs. Trilliax Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_High_Botanist_Telarn_Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_High_Botanist_Telarn_Mythic.mp4')}>Undecided vs. High Botanist Tel'arn Mythic</td>
                <td className="tableCell--size">1.59GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_High_Botanist_Telarn_Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Krosus_Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Krosus_Mythic.mp4')}>Undecided vs. Krosus Mythic</td>
                <td className="tableCell--size">1.07GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Krosus_Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Spellblade_Aluriel_Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Spellblade_Aluriel_Mythic.mp4')}>Undecided vs. Spellblade Aluriel Mythic</td>
                <td className="tableCell--size">1.82GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Spellblade_Aluriel_Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Tichondrius_Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Tichondrius_Mythic.mp4')}>Undecided vs. Tichondrius Mythic</td>
                <td className="tableCell--size">1.74GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/nighthold/Undecided_vs_Tichondrius_Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Nighthold;

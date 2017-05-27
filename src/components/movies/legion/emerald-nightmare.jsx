import React from 'react';
import { Row, Col } from 'react-bem-grid';

const EmeraldNightmare = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Emerald Nightmare</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Cenarius Mytic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Cenarius Mytic.mp4')}>Undecided vs. Cenarius Mytic</td>
                <td className="tableCell--size">2.11GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Cenarius Mytic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic.mp4')}>Undecided vs. Dragons of Nightmare Mythic</td>
                <td className="tableCell--size">3.19GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic With Portals.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic With Portals.mp4')}>Undecided vs. Dragons of Nightmare Mythic With Portals</td>
                <td className="tableCell--size">3.20GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic With Portals.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Elerethe Renferal Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Elerethe Renferal Mythic.mp4')}>Undecided vs. Elerethe Renferal Mythic</td>
                <td className="tableCell--size">1.93GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Elerethe Renferal Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ilgynoth Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ilgynoth Mythic.mp4')}>Undecided vs. Il'gynoth Mythic</td>
                <td className="tableCell--size">4.32GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ilgynoth Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Nythendra Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Nythendra Mythic.mp4')}>Undecided vs. Nythendra Mythic</td>
                <td className="tableCell--size">1.06GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Nythendra Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ursoc Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ursoc Mythic.mp4')}>Undecided vs. Ursoc Mythic</td>
                <td className="tableCell--size">2.40GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Ursoc Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Xavius Mytic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Xavius Mytic.mp4')}>Undecided vs. Xavius Mytic</td>
                <td className="tableCell--size">3.61GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/legion/emerald-nightmare/Undecided vs. Xavius Mytic.m2t"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default EmeraldNightmare;

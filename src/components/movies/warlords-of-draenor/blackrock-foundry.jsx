import React from 'react';
import { Row, Col } from 'react-bem-grid';

const BlackrockFoundry = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Blackrock Foundry</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Beastlord Darmac Mythic v2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Beastlord Darmac Mythic v2.mp4')}>Undecided vs. Beastlord Darmac Mythic</td>
                <td className="tableCell--size">1.38GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Beastlord Darmac Mythic v2.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blackhand Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blackhand Heroic.mp4')}>Undecided vs. Blackhand Heroic</td>
                <td className="tableCell--size">869MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blackhand Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blast Furnace Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blast Furnace Heroic.mp4')}>Undecided vs. Blast Furnace Heroic</td>
                <td className="tableCell--size">1.21GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Blast Furnace Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Flamebender Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Flamebender Mythic.mp4')}>Undecided vs. Flamebender Mythic</td>
                <td className="tableCell--size">922MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Flamebender Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Gruul Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Gruul Mythic.mp4')}>Undecided vs. Gruul Mythic</td>
                <td className="tableCell--size">1.02GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Gruul Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Hansgar and Franzok Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Hansgar and Franzok Mythic.mp4')}>Undecided vs. Hansgar and Franzok Mythic</td>
                <td className="tableCell--size">858MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Hansgar and Franzok Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Oregorger Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Oregorger Mythic.mp4')}>Undecided vs. Oregorger Mythic</td>
                <td className="tableCell--size">979MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/blackrock-foundry/Undecided vs. Oregorger Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default BlackrockFoundry;

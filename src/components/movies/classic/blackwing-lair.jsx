import React from 'react';
import { Row, Col } from 'react-bem-grid';

const BlackwingLair = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Blackwing Lair</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part I.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part I.mp4')}>Axis vs. Broodlord Lashlayer - 2006-05-02, Part I</td>
                <td className="tableCell--size">309MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part I.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part II.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part II.mp4')}>Axis vs. Broodlord Lashlayer - 2006-05-02, Part II</td>
                <td className="tableCell--size">28MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part II.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - Party - 2006-05-02.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - Party - 2006-05-02.mp4')}>Axis vs. Broodlord Lashlayer - Party - 2006-05-02</td>
                <td className="tableCell--size">14MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - Party - 2006-05-02.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - 2006-05-20.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - 2006-05-20.mp4')}>Axis vs. Chromaggus - 2006-05-20</td>
                <td className="tableCell--size">178MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - 2006-05-20.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - First kill after reform.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - First kill after reform.mp4')}>Axis vs. Chromaggus - First kill after reform</td>
                <td className="tableCell--size">108MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Chromaggus - First kill after reform.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Flamegore.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Flamegore.mp4')}>Axis vs. Flamegore</td>
                <td className="tableCell--size">29MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Flamegore.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part I.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part I.mp4')}>Axis vs. Razorgore phase 2 - 2006-04-14, Part I</td>
                <td className="tableCell--size">264MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part I.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part II.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part II.mp4')}>Axis vs. Razorgore phase 2 - 2006-04-14, Part II</td>
                <td className="tableCell--size">33MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part II.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - 2006-04-24.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - 2006-04-24.mp4')}>Axis vs. Vaelastrasz - 2006-04-24</td>
                <td className="tableCell--size">27MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - 2006-04-24.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - First kill after reform.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - First kill after reform.mp4')}>Axis vs. Vaelastrasz - First kill after reform</td>
                <td className="tableCell--size">63MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Axis vs. Vaelastrasz - First kill after reform.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Nefarian.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Nefarian.mp4')}>Lemmings vs. Nefarian</td>
                <td className="tableCell--size">277MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Nefarian.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Razorgore.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Razorgore.mp4')}>Lemmings vs. Razorgore</td>
                <td className="tableCell--size">144MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Razorgore.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Vaelastrasz.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Vaelastrasz.mp4')}>Lemmings vs. Vaelastrasz</td>
                <td className="tableCell--size">56MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Lemmings vs. Vaelastrasz.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Mayhem vs. Nefarian.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Mayhem vs. Nefarian.mp4')}>Mayhem vs. Nefarian</td>
                <td className="tableCell--size">282MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Mayhem vs. Nefarian.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Broodlord Lashlayer.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Broodlord Lashlayer.mp4')}>Talons vs. Broodlord Lashlayer</td>
                <td className="tableCell--size">60MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Broodlord Lashlayer.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Vaelastrasz.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Vaelastrasz.mp4')}>Talons vs. Vaelastrasz</td>
                <td className="tableCell--size">63MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/blackwing-lair/Talons vs. Vaelastrasz.avi"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default BlackwingLair;

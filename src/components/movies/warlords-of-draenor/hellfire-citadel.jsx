import React from 'react';
import { Row, Col } from 'react-bem-grid';

const HellfireCitadel = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Hellfire Citadel</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided Hellfire Heroic Speed Run.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided Hellfire Heroic Speed Run.mp4')}>Undecided Hellfire Heroic Speed Run</td>
                <td className="tableCell--size">2.39GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided Hellfire Heroic Speed Run.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow--no-hover">
                <td className="tableCell--watch"></td>
                <td className="tableCell" >Undecided vs. Archimonde Heroic</td>
                <td className="tableCell--size">1.34GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Archimonde Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Archimonde Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Archimonde Mythic.mp4')}>Undecided vs. Archimonde Mythic</td>
                <td className="tableCell--size">3.28GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Archimonde Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Fel Lord Zakuun Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Fel Lord Zakuun Mythic.mp4')}>Undecided vs. Fel Lord Zakuun Mythic</td>
                <td className="tableCell--size">1.68GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Fel Lord Zakuun Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic.mp4')}>Undecided vs. Gorefiend Mythic</td>
                <td className="tableCell--size">1.25GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic no christmas.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic no christmas.mp4')}>Undecided vs. Gorefiend Mythic no christmas</td>
                <td className="tableCell--size">1.25GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic no christmas.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire Assault Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire Assault Mythic.mp4')}>Undecided vs. Hellfire Assault Mythic</td>
                <td className="tableCell--size">1.22GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire Assault Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire High Council Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire High Council Mythic.mp4')}>Undecided vs. Hellfire High Council Mythic</td>
                <td className="tableCell--size">1.24GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire High Council Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Iron Reaver Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Iron Reaver Mythic.mp4')}>Undecided vs. Iron Reaver Mythic</td>
                <td className="tableCell--size">1.13GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Iron Reaver Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kilrogg Deadeye Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kilrogg Deadeye Mythic.mp4')}>Undecided vs. Kilrogg Deadeye Mythic</td>
                <td className="tableCell--size">775MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kilrogg Deadeye Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kormrok Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kormrok Mythic.mp4')}>Undecided vs. Kormrok Mythic</td>
                <td className="tableCell--size">1.30GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Kormrok Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Heroic.mp4')}>Undecided vs. Mannoroth Heroic</td>
                <td className="tableCell--size">389MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Mythic.mp4')}>Undecided vs. Mannoroth Mythic</td>
                <td className="tableCell--size">1.56GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Mythic.mp4"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Shadow-Lord Iskar Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Shadow-Lord Iskar Mythic.mp4')}>Undecided vs. Shadow-Lord Iskar Mythic</td>
                <td className="tableCell--size">1.62GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Shadow-Lord Iskar Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar Heroic.mp4')}>Undecided vs. Socrethar Heroic</td>
                <td className="tableCell--size">1.26GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar the Eternal Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar the Eternal Mythic.mp4')}>Undecided vs. Socrethar the Eternal Mythic</td>
                <td className="tableCell--size">1.19GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar the Eternal Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Heroic.mp4')}>Undecided vs. Tyrant Velhari Heroic</td>
                <td className="tableCell--size">910MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Heroic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Mythic.mp4')}>Undecided vs. Tyrant Velhari Mythic</td>
                <td className="tableCell--size">2.60GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. XhulHorac Mythic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. XhulHorac Mythic.mp4')}>Undecided vs. XhulHorac Mythic</td>
                <td className="tableCell--size">2.11GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/warlords-of-draenor/hellfire-citadel/Undecided vs. XhulHorac Mythic.m2t"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default HellfireCitadel;

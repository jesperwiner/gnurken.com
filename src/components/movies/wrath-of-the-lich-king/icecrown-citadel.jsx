import React from 'react';
import { Row, Col } from 'react-bem-grid';

const IcecrownCitadel = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Icecrown Citadel</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Princes Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Princes Heroic.mp4')}>Illumination vs. Blood Princes Heroic</td>
                <td className="tableCell--size">375MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Princes Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Queen Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Queen Heroic.mp4')}>Illumination vs. Blood Queen Heroic</td>
                <td className="tableCell--size">374MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Queen Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Deathbringer Saurfang Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Deathbringer Saurfang Heroic.mp4')}>Illumination vs. Deathbringer Saurfang Heroic</td>
                <td className="tableCell--size">346MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Deathbringer Saurfang Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Gunship Battle Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Gunship Battle Heroic.mp4')}>Illumination vs. Gunship Battle Heroic</td>
                <td className="tableCell--size">499MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Gunship Battle Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lady Deathwhisper Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lady Deathwhisper Heroic.mp4')}>Illumination vs. Lady Deathwhisper Heroic</td>
                <td className="tableCell--size">520MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lady Deathwhisper Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lord Marrowgar Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lord Marrowgar Heroic.mp4')}>Illumination vs. Lord Marrowgar Heroic</td>
                <td className="tableCell--size">562MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lord Marrowgar Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Professor Putricide Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Professor Putricide Heroic.mp4')}>Illumination vs. Professor Putricide Heroic</td>
                <td className="tableCell--size">472MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Professor Putricide Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Rotface Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Rotface Heroic.mp4')}>Illumination vs. Rotface Heroic</td>
                <td className="tableCell--size">376MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Rotface Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood-Queen Lana\'thel Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood-Queen Lana\'thel Heroic.mp4')}>Sallskapsraiden vs. Blood-Queen Lana'thel Heroic</td>
                <td className="tableCell--size">172MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood-Queen Lana\'thel Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood Princes Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood Princes Heroic.mp4')}>Sallskapsraiden vs. Blood Princes Heroic</td>
                <td className="tableCell--size">446MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood Princes Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Deathbringer Saurfang.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Deathbringer Saurfang.mp4')}>Sallskapsraiden vs. Deathbringer Saurfang</td>
                <td className="tableCell--size">258MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Deathbringer Saurfang.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Festergut Heroic HighBitrate.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Festergut Heroic HighBitrate.mp4')}>Sallskapsraiden vs. Festergut Heroic HighBitrate</td>
                <td className="tableCell--size">1.05GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Festergut Heroic HighBitrate.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Gunship Battle.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Gunship Battle.mp4')}>Sallskapsraiden vs. Gunship Battle</td>
                <td className="tableCell--size">192MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Gunship Battle.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lady Deathwhisper Full House.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lady Deathwhisper Full House.mp4')}>Sallskapsraiden vs. Lady Deathwhisper Full House</td>
                <td className="tableCell--size">81MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lady Deathwhisper Full House.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lord Marrowgar Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lord Marrowgar Heroic.mp4')}>Sallskapsraiden vs. Lord Marrowgar Heroic</td>
                <td className="tableCell--size">375MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lord Marrowgar Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Professor Putricide.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Professor Putricide.mp4')}>Sallskapsraiden vs. Professor Putricide</td>
                <td className="tableCell--size">220MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Professor Putricide.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Rotface.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Rotface.mp4')}>Sallskapsraiden vs. Rotface</td>
                <td className="tableCell--size">173MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Rotface.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Valithria Dreamwalker Heroic.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Valithria Dreamwalker Heroic.mp4')}>Sallskapsraiden vs. Valithria Dreamwalker Heroic</td>
                <td className="tableCell--size">307MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Valithria Dreamwalker Heroic.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default IcecrownCitadel;

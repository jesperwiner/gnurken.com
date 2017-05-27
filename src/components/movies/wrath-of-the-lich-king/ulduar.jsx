import React from 'react';
import { Row, Col } from 'react-bem-grid';

const Ulduar = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Ulduar</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Cefe).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Cefe).mp4')}>Illumination vs. Algalon(Cefe)</td>
                <td className="tableCell--size">406MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Cefe).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Hidrasactum).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Hidrasactum).mp4')}>Illumination vs. Algalon(Hidrasactum)</td>
                <td className="tableCell--size">244MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Hidrasactum).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Nadezhda ver2).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Nadezhda ver2).mp4')}>Illumination vs. Algalon(Nadezhda ver2)</td>
                <td className="tableCell--size">354MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Nadezhda ver2).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode).mp4')}>Illumination vs. GeneralVezax(Hardmode)</td>
                <td className="tableCell--size">290MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode) PriestPOV.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode) PriestPOV.mp4')}>Illumination vs. GeneralVezax(Hardmode) PriestPOV</td>
                <td className="tableCell--size">376MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode) PriestPOV.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Hodir Hardmode.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Hodir Hardmode.mp4')}>Illumination vs. Hodir Hardmode</td>
                <td className="tableCell--size">125MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Hodir Hardmode.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Ignis.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Ignis.mp4')}>Illumination vs. Ignis</td>
                <td className="tableCell--size">135MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Ignis.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hard).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hard).mp4')}>Illumination vs. IronCouncil(Hard)</td>
                <td className="tableCell--size">202MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hard).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hardmode).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hardmode).mp4')}>Illumination vs. IronCouncil(Hardmode)</td>
                <td className="tableCell--size">410MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hardmode).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Mimiron(Hardmode).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Mimiron(Hardmode).mp4')}>Illumination vs. Mimiron(Hardmode)</td>
                <td className="tableCell--size">423MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Mimiron(Hardmode).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Thorim(hardmode).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Thorim(hardmode).mp4')}>Illumination vs. Thorim(hardmode)</td>
                <td className="tableCell--size">223MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. Thorim(hardmode).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. XT-002.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. XT-002.mp4')}>Illumination vs. XT-002</td>
                <td className="tableCell--size">186MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. XT-002.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. YoggSaron.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. YoggSaron.mp4')}>Illumination vs. YoggSaron</td>
                <td className="tableCell--size">430MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Illumination vs. YoggSaron.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Algalon.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Algalon.mp4')}>Sallskapsraiden vs. Algalon</td>
                <td className="tableCell--size">372MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Algalon.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. FlameLeviathan Hardmode.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. FlameLeviathan Hardmode.mp4')}>Sallskapsraiden vs. FlameLeviathan Hardmode</td>
                <td className="tableCell--size">179MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. FlameLeviathan Hardmode.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Freya Hardmode v2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Freya Hardmode v2.mp4')}>Sallskapsraiden vs. Freya Hardmode v2</td>
                <td className="tableCell--size">467MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Freya Hardmode v2.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ignis the Furnace Master v2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ignis the Furnace Master v2.mp4')}>Sallskapsraiden vs. Ignis the Furnace Master v2</td>
                <td className="tableCell--size">189MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ignis the Furnace Master v2.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. IronCouncil HardMode.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. IronCouncil HardMode.mp4')}>Sallskapsraiden vs. IronCouncil HardMode</td>
                <td className="tableCell--size">152MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. IronCouncil HardMode.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron Hardmode.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron Hardmode.mp4')}>Sallskapsraiden vs. Mimiron Hardmode</td>
                <td className="tableCell--size">458MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron Hardmode.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron v2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron v2.mp4')}>Sallskapsraiden vs. Mimiron v2</td>
                <td className="tableCell--size">356MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron v2.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ulduar (high quality).mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ulduar (high quality).mp4')}>Sallskapsraiden vs. Ulduar (high quality)</td>
                <td className="tableCell--size">2.31GB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ulduar (high quality).wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Yogg-Saron v2.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Yogg-Saron v2.mp4')}>Sallskapsraiden vs. Yogg-Saron v2</td>
                <td className="tableCell--size">544MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Yogg-Saron v2.wmv"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default Ulduar;

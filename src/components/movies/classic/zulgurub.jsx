import React from 'react';
import { Row, Col } from 'react-bem-grid';

const ZulGurub = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Zul'Gurub</th></tr></thead>
            <tbody>
              <tr className="tableRow--no-hover">
                <td className="tableCell--watch"></td>
                <td className="tableCell" >Axis - EyeoftheTiger - 2006-02-12</td>
                <td className="tableCell--size">77MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-12.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part I.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part I.mp4')}>Axis - EyeoftheTiger - 2006-02-14, Part I</td>
                <td className="tableCell--size">21MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part I.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part II.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part II.mp4')}>Axis - EyeoftheTiger - 2006-02-14, Part II</td>
                <td className="tableCell--size">10MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part II.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priest Thekal - 2006-02-14.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priest Thekal - 2006-02-14.mp4')}>Axis vs. High Priest Thekal - 2006-02-14</td>
                <td className="tableCell--size">131MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priest Thekal - 2006-02-14.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-09.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-09.mp4')}>Axis vs. High Priestess Arlokk - 2006-04-09</td>
                <td className="tableCell--size">184MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-09.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-10.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-10.mp4')}>Axis vs. High Priestess Arlokk - 2006-04-10</td>
                <td className="tableCell--size">177MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-10.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-04-09.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-04-09.mp4')}>Axis vs. High Priestess Marli - 2006-04-09</td>
                <td className="tableCell--size">226MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-04-09.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-05-20.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-05-20.mp4')}>Axis vs. High Priestess Marli - 2006-05-20</td>
                <td className="tableCell--size">171MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. High Priestess Marli - 2006-05-20.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. Jindo The Hexxer - 2006-04-12.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. Jindo The Hexxer - 2006-04-12.mp4')}>Axis vs. Jindo The Hexxer - 2006-04-12</td>
                <td className="tableCell--size">156MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. Jindo The Hexxer - 2006-04-12.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. MojoMadness - 2006-02-14.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. MojoMadness - 2006-02-14.mp4')}>Axis vs. MojoMadness - 2006-02-14</td>
                <td className="tableCell--size">68MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/zulgurub/Axis vs. MojoMadness - 2006-02-14.avi"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default ZulGurub;

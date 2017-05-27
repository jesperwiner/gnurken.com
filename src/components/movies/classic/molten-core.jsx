import React from 'react';
import { Row, Col } from 'react-bem-grid';

const MoltenCore = React.createClass({
	componentWillUnmount () {
		this.props.handleTransitionEnd();
	},
	render()  {
		return (
      <Row xs >
        <Col xs>
          <table className="tableMovies">
            <thead className="tableHeader"><tr><th colSpan={4}>Molten Core</th></tr></thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Garr - 2006-04-06.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Garr - 2006-04-06.mp4')}>Axis vs. Garr - 2006-04-06</td>
                <td className="tableCell--size">149MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Garr - 2006-04-06.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Geddon - 2006-04-06.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Geddon - 2006-04-06.mp4')}>Axis vs. Geddon - 2006-04-06</td>
                <td className="tableCell--size">85MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Geddon - 2006-04-06.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-02-26.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-02-26.mp4')}>Axis vs. Ragnaros - 2006-02-26</td>
                <td className="tableCell--size">19MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-02-26.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part I.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part I.mp4')}>Axis vs. Ragnaros - 2006-04-07, Part I</td>
                <td className="tableCell--size">135MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part I.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part II.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part II.mp4')}>Axis vs. Ragnaros - 2006-04-07, Part II</td>
                <td className="tableCell--size">69MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part II.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-07-11.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-07-11.mp4')}>Axis vs. Ragnaros - 2006-07-11</td>
                <td className="tableCell--size">150MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - 2006-07-11.wmv"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - Party - 2006-02-26.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - Party - 2006-02-26.mp4')}>Axis vs. Ragnaros - Party - 2006-02-26</td>
                <td className="tableCell--size">9MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Ragnaros - Party - 2006-02-26.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Rangaros - Try - 2006-02-13.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Rangaros - Try - 2006-02-13.mp4')}>Axis vs. Rangaros - Try - 2006-02-13</td>
                <td className="tableCell--size">82MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Axis vs. Rangaros - Try - 2006-02-13.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Golemagg at level 70.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Golemagg at level 70.mp4')}>Golemagg at level 70</td>
                <td className="tableCell--size">56MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Golemagg at level 70.avi"><button className="downloadButton" /></a></td>
              </tr>
              <tr className="tableRow">
                <td className="tableCell--watch"><button className="watchButton" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Ragnaros at level 70.mp4')} /></td>
                <td className="tableCell" onClick={() => this.props.showMovie('http://www.gnurken.com/movies/wow-movies/classic/molten-core/Ragnaros at level 70.mp4')}>Ragnaros at level 70</td>
                <td className="tableCell--size">53MB</td>
                <td className="tableCell--download"><a href="http://www.gnurken.com/movies/wow-movies/classic/molten-core/Ragnaros at level 70.avi"><button className="downloadButton" /></a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
		)
	}
});

export default MoltenCore;

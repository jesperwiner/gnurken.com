import { connect } from 'react-redux';
import AboutSubMenu from './sub-menu';

const mapStateToProps = ({ routing }) => ({
  routing,
});

export default connect(mapStateToProps)(AboutSubMenu);

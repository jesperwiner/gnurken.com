import { connect } from 'react-redux';
import AboutSubMenu from './menu';

const mapStateToProps = ({ routing }) => ({
  routing,
});

export default connect(mapStateToProps)(AboutSubMenu);

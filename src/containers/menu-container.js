import { connect } from 'react-redux';
import Menu from '../components/menu';

const mapStateToProps = ({ routing }) => ({
  routing,
});

const MenuContainer = connect(mapStateToProps)(Menu);
export default MenuContainer;

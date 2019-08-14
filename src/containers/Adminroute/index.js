// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Adminroute from 'src/components/Adminroute';

const mapStateToProps = state => ({
  role: state.userInfo.role,
});

const mapDispatchToProps = {};

const AdminrouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adminroute);

// export
export default AdminrouteContainer;

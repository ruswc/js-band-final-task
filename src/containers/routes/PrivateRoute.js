import { connect } from "react-redux"
import { isAuthenticatedSelector } from "selectors/auth"
import PrivateRoute from "components/routes/PrivateRoute"

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state)
})

export default connect(mapStateToProps)(PrivateRoute)

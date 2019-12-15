import { connect } from "react-redux"
import { isAuthenticatedSelector } from "selectors/auth"
import GuestRoute from "components/routes/GuestRoute"

const mapStateToProps = state => ({
  isGuest: !isAuthenticatedSelector(state)
})

export default connect(mapStateToProps)(GuestRoute)

import { connect } from "react-redux"
import { isAuthenticatedSelector, userSelector } from "selectors/auth"
import { cartProductsCountSelector } from "selectors/cart"
import { signOut } from "actions/auth"
import Header from "components/Header"

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
  user: userSelector(state),
  cartCount: cartProductsCountSelector(state)
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

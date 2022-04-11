import {Link} from 'react-router-dom'
import './index.css'
import CartContext from '../../context/CartContext'

const Order = () => (
  <CartContext.Consumer>
    {value => {
      const {resetCart} = value

      const onResetCart = () => {
        resetCart()
      }

      return (
        <div className="order-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-image"
          />
          <p>Order Placed Successfully.</p>
          <Link to="/products">
            <button type="button" className="shop-more" onClick={onResetCart}>
              Shop More
            </button>
          </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Order

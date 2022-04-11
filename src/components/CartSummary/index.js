// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, placeOrder} = value
      const totalAmountArray = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const totalAmount = totalAmountArray.reduce(
        (sum, eachItem) => sum + eachItem,
      )

      const onPlaceOrder = () => {
        
        placeOrder()
      }
      return (
        <div className="billing-container">
          <div className="billing-content">
            <div className="order-summary">
              <h1 className="order-total-heading">Order Total</h1>
              <h1 className="total-amount">Rs {totalAmount} /-</h1>
            </div>
            <p className="items-in-cart">{cartList.length} Items in cart</p>
            <button type="button" className="checkout" onClick={onPlaceOrder}>
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <AiOutlineShoppingCart className="cart-icon" />
      <div className="cart-count-badge">
        <p className="cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <header className="nav-header">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="alignment">
        <p className="my-orders-text">My Orders</p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header

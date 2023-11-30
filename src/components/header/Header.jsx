import {
  Cart,
  Navbar,
  Link
} from './imports'

function Header() {
  return (
    <div>
      <Navbar color="black" className='header'> 
        <Link to={'/'}> <Navbar.Brand style={{color: '#fff'}} className='header_text'> E-Shop </Navbar.Brand> </Link> 
        <Link to={'/cart'}><img src={Cart} alt="cart" /></Link> 
      </Navbar>
    </div>
  )
}

export default Header

import React, { useState } from 'react'
import { Wrapper } from './Navbar.styles'
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined'
import { Badge } from '@mui/material'
import { CartItemType } from '../App'
import { StyledButton } from '../Styles'

const Navbar = () => {
    const [cartItems, setCartItems] = useState([] as CartItemType[])
    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);
    return (
        <Wrapper>
            <div id='navBar'>
                <div id='topHalf'>
                    <div id='logoWrapper'>
                        <img id='logo' src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" alt='logo' />
                    </div>
                    <input type="text" placeholder="Give me all your money" />
                    <img id='backToSchool' src="http://blog.neurogistics.com/wp-content/uploads/2014/08/Back-To-School-Special-Banner.jpg" alt="" />
                </div>
                <div id='bottomHalf'>
                    <div id='department'>Departments</div>
                    <div id='sections'>
                        <div className="section">Your Amazon.com</div>
                        <div className="section">Today's Deals</div>
                        <div className="section">Gift Cards & Registry</div>
                        <div className="section">Sell</div>
                        <div className="section">Help</div>
                    </div>
                    <div id='accountStuff'>
                        <div className="section">Your Account</div>
                        <div className="section">Try Prime</div>
                        <div className="section">Lists</div>
                        <div className="section">Cart</div>
                    </div>
                </div>
                    <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                        <AddShoppingCartOutlined />
                    </Badge>
            </div>
        </Wrapper>
    )
}

export default Navbar

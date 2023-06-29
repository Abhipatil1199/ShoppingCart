import React from 'react'
import { Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import './Header.css'

function Header() {

    const { state: { cart }, dispatch ,productDispatch} = CartState();

    return (
        <Navbar bg='dark' variant='dark' style={{ height: '80px' }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shoping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: '500px' }}
                        placeholder='search a product'
                        className='m-auto'
                        onChange={(e)=>{
                           productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload:e.target.value
                           })
                        }}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown drop='start'>
                        <Dropdown.Toggle variant="success" >
                            <FaShoppingCart color='white' fontSize='25px' />
                            <b>{cart.length}</b>
                            {/* <spna >{cart.length}</spna> */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 380 }} >
                            {
                                cart.length > 0 ? (
                                    <>
                                        {
                                            cart.map((prod) => (
                                                <span className='cartItem' key={prod.id}>
                                                    <img
                                                        src={prod.image}
                                                        className='cartItemImg'
                                                        alt={prod.name}
                                                    />
                                                    <div className='cartItemDetail'>
                                                        <span>{prod.name}</span>
                                                        <spna>₹ {prod.price.split(".")[0]}</spna>
                                                    </div>
                                                    <AiFillDelete
                                                        fontSize='20px'
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() =>
                                                            dispatch({
                                                                type: 'REMOVE_FROM_CART',
                                                                payload: prod
                                                            })
                                                        }
                                                    />

                                                </span>
                                            ))
                                        }
                                        <Link to='/cart'>
                                            <Button style={{width: '95%', margin:"0 10px"}}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is empty</span>
                                )
                            }

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
import React, {useEffect} from 'react';
import apple from '../../assets/images/apple.png'
import banana from '../../assets/images/banana.png'
import orange from '../../assets/images/orange.png'
import dab from '../../assets/images/dab.png'
import coconut from '../../assets/images/coconut.png'
import ShoppingCart from '../../components/shoppinCardComponent/ShoppingCart'
import {Col, Container, Row} from "react-bootstrap";
import styles from '../../assets/styles/global.module.css'
import {CartButton} from "../../assets/styles/styleComponent";


function ShoppingCartData() {
    useEffect(() => {
        document.title = "ShoppingCart"
    })
    const cartData = [
        {name: "Apple", qur: '1kg', price: '200', src: apple},
        {name: "banana", qur: '12pcs', price: '140', src: banana},
        {name: "Orange", qur: '1kg', price: '380', src: orange},
        {name: "Green Coconut", qur: '1pc', price: '80', src: dab},
        {name: "Coconut", qur: '1pc', price: '60', src: coconut},
        {name: "Apple", qur: '1kg', price: '200', src: apple},
        {name: "banana", qur: '12pcs', price: '140', src: banana},
        {name: "Orange", qur: '1kg', price: '380', src: orange},
        {name: "Green Coconut", qur: '1pc', price: '80', src: dab},
        {name: "Coconut", qur: '1pc', price: '60', src: coconut},
        {name: "Apple", qur: '1kg', price: '200', src: apple},
        {name: "banana", qur: '12pcs', price: '140', src: banana},
        {name: "Orange", qur: '1kg', price: '380', src: orange},
        {name: "Green Coconut", qur: '1pc', price: '80', src: dab},
        {name: "Coconut", qur: '1pc', price: '60', src: coconut},
        {name: "Apple", qur: '1kg', price: '200', src: apple},
        {name: "banana", qur: '12pcs', price: '140', src: banana},
        {name: "Orange", qur: '1kg', price: '380', src: orange},
        {name: "Green Coconut", qur: '1pc', price: '80', src: dab},
        {name: "Coconut", qur: '1pc', price: '60', src: coconut},
    ]

    return (
        <>
            <Container>
                <CartButton className={styles.marginTop20}>
                    ShoppingCart
                </CartButton>
                <Row>
                    {
                        cartData.map((cart) => {
                            return <Col lg={2} key={Math.floor(Math.random() * 1000).toString()}>
                                <ShoppingCart name={cart.name} qur={cart.qur} amount={cart.price}
                                              src={cart.src}/>
                            </Col>

                        })
                    }

                </Row>
            </Container>
        </>
    );
}

export default ShoppingCartData;
import React from 'react';
import styles from '../../assets/styles/global.module.css'
import {Card} from "react-bootstrap";
import {CartButton} from "../../assets/styles/styleComponent";

function ShoppingCart(props) {
    return (
        <>
            <Card className={styles.cartCard}>
                <Card.Img variant={'center'} src={props.src} className={styles.cartImg}/>
                <Card.Body>
                    <Card.Title className={styles.cartItemName}>{props.name}</Card.Title>
                    <Card.Text className={styles.cardItemQur}>
                        {props.qur}
                    </Card.Text>
                    <Card.Text className={styles.cartItemAmount}>
                        {`৳${props.amount}`}
                    </Card.Text>
                    <CartButton>Add To Cart</CartButton>
                </Card.Body>
            </Card>
        </>
    );
}

export default ShoppingCart;
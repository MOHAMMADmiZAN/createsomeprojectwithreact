import React from 'react';
import notFound from '../../assets/images/404.jpg'
import {Col, Image, Row} from "react-bootstrap";
import styles from '../../assets/styles/global.module.css'

const NotFound = () => {
    return (

        <Row className={styles.notFound}>
            <Col lg={12}>
                <Image src={notFound} fluid/>
            </Col>
        </Row>

    )

}


export default NotFound;
import React from 'react';
import notFound from '../../assets/images/404.png'
import {Col, Image, Row} from "react-bootstrap";
import styles from '../../assets/styles/global.module.css'

const NotFound = () => {
    return (

        <Row className={styles.notFound}>
            <Col lg={12} className={`text-center`}>
                <Image src={notFound} fluid/>
            </Col>
        </Row>

    )

}


export default NotFound;
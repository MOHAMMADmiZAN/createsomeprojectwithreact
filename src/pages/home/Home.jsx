import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"
import LinkPath from "../../components/Link/LinkPath";

function Home(props) {
    const homeCardStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        margin: "0"

    }
    const homeTextStyle = {
        fontFamily: "var(--brand-font-family)",
        fontSize: "80px",
        fontWeight: "900",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

    }
    const cardBodyStyle = {
        position: "relative",

    }

    return (

        <Row>
            <Col lg={12}>
                <Card className={styles.cardCustom} style={{...homeCardStyle}}>
                    <Card.Header className={styles.cardHeaderCustom} as={"h2"}>
                        Home Page
                    </Card.Header>
                    <Card.Title style={{textAlign: 'center',}}>
                        <LinkPath/>
                    </Card.Title>
                    <Card.Body className={styles.cardBodyCustom} style={{...cardBodyStyle}}>
                        <h1 style={{...homeTextStyle}}>Create Some Project With React</h1>
                    </Card.Body>
                </Card>

            </Col>
        </Row>

    );
}

export default Home;
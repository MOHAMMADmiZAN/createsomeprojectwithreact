import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"
import axios from "axios";


function RandomJokes() {
    const [joke, setJoke] = useState('')
    const jokesClick = async () => {
        let jokesApi = 'https://api.chucknorris.io/jokes/random'
        try {
            const response = await axios.get(jokesApi)
            const responseData = await response.data.value
            setJoke((prevState) => responseData)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        document.title = 'Random Jokes'
    })
    useEffect(() => {
        jokesClick()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={10}>
                        <Card className={styles.cardCustom}>
                            <Card.Header className={styles.cardHeaderCustom} as={'h2'}>
                                Random Jokes App
                            </Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                                <h6 className={styles.cartItemName}>{joke}</h6>
                                <Button className={`${styles.countResultButton} ${styles.marginTop20}`}
                                        variant={'secondary'} onClick={jokesClick}>
                                    Click Me
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default RandomJokes;
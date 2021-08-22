import {useCallback, useEffect, useRef, useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css";
import Key from "../../components/keyComponent/Key";


function Counter() {
    const [count, setCount] = useState(0)
    const decrement = useRef(null);
    const start = useCallback(() => {
        if (count > 0) {
            decrement.current = setInterval(() => {
                setCount((prevState) => prevState - 1)
                console.log('updated state prevState')
            }, 1000)
            // setCount((prevState) => prevState - 1)
        }


    }, [count])

    const autoClear = () => {
        if (count === 0) {
            clearInterval(decrement.current)

        }

    }
    autoClear()

    const stop = () => {
        return clearInterval(decrement.current)
    }


    useEffect(
        () => {
            document.title = "Counter"

        }
    )
    // useEffect(
    //     () => {
    //         decrement.current = setInterval(start, 1000)
    //         return () => {
    //             clearInterval(decrement.current)
    //         }
    //
    //
    //     }, [start]
    // )


    return (
        <Container>
            <Row>
                <Col lg={10}>
                    <Card className={styles.cardCustom}>
                        <Card.Header className={styles.cardHeaderCustom} as={"h5"}>
                            countdown
                        </Card.Header>
                        <Card.Body className={styles.cardBodyCustom}>
                            <Row>
                                <Col lg={12}>
                                    <Button variant={"secondary"} className={styles.countResultButton}>
                                        <h3> {count >= 0 ? count : 0}</h3>
                                    </Button>
                                </Col>
                            </Row>
                            <Row><Col lg={12}>
                                <Key keyValue={'increment'} keyOnClick={() => {
                                    setCount((prevState) => prevState + 1)
                                }}/>
                                <Key keyValue={'decrement'} keyOnClick={() => setCount((prevState) => prevState - 1)}/>
                                <Button variant={'secondary'} className={styles.calculatorKey}
                                        onClick={start}>start</Button>
                                <Button variant={'secondary'} className={styles.calculatorKey}
                                        onClick={stop}>stop</Button>
                                <Key keyValue={'reset'} keyOnClick={() => setCount(0)}/>
                            </Col></Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )


}

export default Counter
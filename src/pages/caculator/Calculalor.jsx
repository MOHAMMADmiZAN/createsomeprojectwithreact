import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"
import {useEffect, useState} from "react";
import Key from "../../components/keyComponent/Key";

const Calculator = () => {

    const [op, setOp] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [result, setResult] = useState(0)
    const [inputResult, setInputResult] = useState('')
    useEffect(
        () => {
            document.title = "Calculator"


        }
    )
    const keyStyle = {
        minWidth: "170px"
    }

    const CalculatorFunction = (e) => {
        e.preventDefault()
        if (firstValue !== '' && lastValue !== '' && op !== '') {
            let x = Number.parseFloat(firstValue)
            let y = Number.parseFloat(lastValue)
            if (op === '+') {
                setResult(x + y)
            }
            if (op === '-') {
                setResult(x - y)
            }
            if (op === '*') {
                setResult(x * y)
            }
            if (op === '/') {
                setResult(x / y)

            }
            if (op === '%') {
                setResult(x / 100 * y)
            }
            if (op === 'CE') {
                setResult(0)
            }
        } else {
            return result;
        }

    }

    function keyOnClick(e) {
        try {
            setInputResult(prevState => prevState + e.target.value)
        } catch (err) {
            setInputResult(err)
        }

    }

    function clear() {
        setInputResult('')
    }

    function c() {
        try {
            setInputResult(inputResult.slice(0, -1))
        } catch (err) {
            setInputResult(err)
        }
    }

    // when eval function is dangerous //
    // alternative function of eval () reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    function devil(value) {
        // eslint-disable-next-line no-new-func
        return new Function('"use strict";return ' + value)();
    }


    function cal() {
        try {
            setInputResult(devil(inputResult).toString())
        } catch (err) {
            setInputResult(err)
        }
    }

    return (
        <Container className={styles.marginTop20}>
            <Row className={"justify-content-center"}>
                <Col lg={10}>
                    <Card className={styles.cardCustom}>
                        <Card.Header
                            className={`${styles.cardHeaderCustom} p-0`}><Button variant={"secondary"}
                                                                                 className={`${styles.calculatorResult}`}>
                            <h5>{result}</h5></Button></Card.Header>
                        <Card.Body className={styles.cardBodyCustom}>

                            <Form onSubmit={CalculatorFunction}>
                                <Form.Group as={Col} controlId={'firstValue'}>
                                    <Form.Label className={'paddingLabel10'}> </Form.Label>
                                    <Form.Control type={'text'} placeholder={' '}
                                                  onChange={(e) => setFirstValue(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId={'lastValue'}>
                                    <Form.Label className={'paddingLabel10'}> </Form.Label>
                                    <Form.Control type={'text'} placeholder={' '}
                                                  onChange={(e) => setLastValue(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Row><Col lg={12}>
                                    <Key keyValue={'+'} type={"submit"} keyOnClick={() => setOp('+')}/>
                                    <Key keyValue={'-'} type={"submit"} keyOnClick={() => setOp('-')}/>
                                    <Key keyValue={'*'} type={"submit"} keyOnClick={() => setOp('*')}/>
                                    <Key keyValue={'/'} type={"submit"} keyOnClick={() => setOp('/')}/>
                                    <Key keyValue={'%'} type={"submit"} keyOnClick={() => setOp('%')}/>
                                    <Key keyValue={'CE'} type={"submit"} keyOnClick={() => setOp('CE')}/>
                                </Col></Row>
                            </Form>


                            <Row className={"justify-content-center"}>
                                <Col lg={8}>
                                    <Card className={styles.cardCustom}>
                                        <Card.Header
                                            className={`${styles.cardHeaderCustom} ${styles.calculatorResultInput}`}
                                            as={'input'} value={inputResult} readOnly>
                                        </Card.Header>
                                        <Card.Body className={styles.cardBodyCustom}>
                                            <Row><Col lg={12}>
                                                <Key keyValue={1} keyOnClick={keyOnClick}/>
                                                <Key keyValue={2} keyOnClick={keyOnClick}/>
                                                <Key keyValue={3} keyOnClick={keyOnClick}/>
                                                <Key keyValue={4} keyOnClick={keyOnClick}/>
                                            </Col></Row>
                                            <Row><Col lg={12}>
                                                <Key keyValue={5} keyOnClick={keyOnClick}/>
                                                <Key keyValue={6} keyOnClick={keyOnClick}/>
                                                <Key keyValue={7} keyOnClick={keyOnClick}/>
                                                <Key keyValue={8} keyOnClick={keyOnClick}/>
                                            </Col></Row>
                                            <Row><Col lg={12}>
                                                <Key keyValue={9} keyOnClick={keyOnClick}/>
                                                <Key keyValue={0} keyOnClick={keyOnClick}/>
                                                <Key keyValue={'00'} keyOnClick={keyOnClick}/>
                                                <Key keyValue="." keyOnClick={keyOnClick}/>
                                            </Col></Row>
                                            <Row><Col lg={12}>
                                                <Key keyValue={'+'} keyOnClick={keyOnClick}/>
                                                <Key keyValue={"-"} keyOnClick={keyOnClick}/>
                                                <Key keyValue="*" keyOnClick={keyOnClick}/>
                                                <Key keyValue="/" keyOnClick={keyOnClick}/>
                                            </Col></Row>
                                            <Row><Col lg={12}>
                                                <Key keyValue="C" keyOnClick={c}/>
                                                <Key keyValue="CE" keyOnClick={clear}/>
                                                <Key keyValue="=" keyOnClick={cal} style={{...keyStyle}}/>
                                            </Col></Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )


}
export default Calculator
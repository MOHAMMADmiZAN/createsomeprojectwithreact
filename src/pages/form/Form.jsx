import {useState} from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css";
import {FormButton, FormError} from "../../assets/styles/styleComponent"


const Rform = () => {

    const [name, setName] = useState('')
    const [validName, setValidName] = useState('')
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState('')

    function formSubmit(e) {
        console.log(name, email, password, phone)
        e.preventDefault();
        if (name === '') {
            setValidName('required  Name')

        }
        if (email === '') {
            setValidEmail('required  Email')
        }
        if (password === '') {
            setValidPassword('required PassWord')
        }
        if (phone === '') {
            setValidPhone('required Phone')
        }

    }

    return (
        <Container>

            <Row className={'justify-content-center'}>
                <Col lg={'10'}>
                    <Card className={styles.cardCustom}>
                        <Card.Header as={'h3'} className={styles.cardHeaderCustom}>
                            REACT FORM
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={formSubmit}>
                                <Form.Group as={Col} controlId={'formName'}>
                                    <Form.Label className={styles.paddingLabel10}>name:</Form.Label>
                                    <Form.Control type={'text'} placeholder={'Type Your Name'}
                                                  onChange={(e) => setName(e.target.value)}>
                                    </Form.Control>
                                    {setValidName && <FormError error>{validName}</FormError>}
                                </Form.Group>
                                <Form.Group as={Col} controlId={'formEmail'}>
                                    <Form.Label className={'paddingLabel10'}>email:</Form.Label>
                                    <Form.Control type={'Email'} placeholder={'Type Your Email'}
                                                  onChange={(e) => setEmail(e.target.value)}>
                                    </Form.Control>
                                    {setValidEmail ? <FormError error>{validEmail}</FormError> : false}
                                </Form.Group>
                                <Form.Group as={Col} controlId={'formPassword'}>
                                    <Form.Label className={'paddingLabel10'}>PassWord:</Form.Label>
                                    <Form.Control type={'password'} placeholder={'Type Your Password'}
                                                  onChange={(e) => setPassword(e.target.value)}>
                                    </Form.Control>
                                    {setValidPassword ? <FormError error>{validPassword}</FormError> : false}
                                </Form.Group>
                                <Form.Group as={Col} controlId={'formPhone'}>
                                    <Form.Label className={'paddingLabel10'}>phoneNumber:</Form.Label>
                                    <Form.Control type={'tel'} placeholder={'Type Your Phone Number'}
                                                  onChange={(e) => setPhone(e.target.value)}>
                                    </Form.Control>
                                    {setValidPhone ? <FormError error>{validPhone}</FormError> :
                                        <FormError>{validPhone}</FormError>}
                                    {/*<FormError 404>{setValidPhone? validPhone : false}</FormError>*/}
                                </Form.Group>
                                <FormButton type={'submit'}>
                                    SUBMIT
                                </FormButton>
                            </Form>

                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>

    )
}

export default Rform;
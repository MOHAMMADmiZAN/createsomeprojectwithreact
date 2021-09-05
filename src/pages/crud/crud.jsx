import React, {useEffect} from 'react';
import {Button, Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"
import data from "bootstrap/js/src/dom/data";

function Crud() {
    // const [studentData,setStudentData] = useState([
    //     {
    //         name: "",
    //         roll: 0,
    //         department: "",
    //         section: "",
    //     }
    // ])
    useEffect(() => {
        document.title = "Crud"
    })
    const fetchStudent = () => {
        fetch('http://127.0.0.1:8000/api/students')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchStudent()
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Card className={styles.cardCustom}>
                            <Card.Header className={styles.cardHeaderCustom} as={"h4"}>
                                STUDENT DATA VIEW
                            </Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                              <Table striped bordered hover variant={"info"}>
                                  <thead>
                                  <tr>
                                      <th>SL</th>
                                      <th>NAME</th>
                                      <th>ROLL</th>
                                      <th>DEPARTMENT</th>
                                      <th>Section</th>
                                      <th>Action</th>
                                  </tr>
                                  </thead>
                                  <tbody>

                                  </tbody>

                              </Table>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className={styles.cardCustom}>
                            <Card.Header className={styles.cardHeaderCustom} as={"h4"}>
                                STUDENT DATA INSERT
                            </Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                                <Form>
                                    <Form.Group controlId={"studentName"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Name:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Name'}
                                                      name={"name"}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentRoll"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Roll:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Roll'}
                                                      name={"roll"}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentDepartment"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Department:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Department Name'}
                                                      name={"department"}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentSection"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Section:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Section'}
                                                      name={"section"}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant={"info"} style={{marginTop: "10px"}}>INSERT</Button>
                                </Form>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Crud;
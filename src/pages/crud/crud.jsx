import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"


function Crud() {
    const [data, setData] = useState([])
    const [lgShow, setLgShow] = useState(false);
    const [upId, setUpId] = useState(0)


    const [studentData, setStudentData] = useState({
        name: "",
        roll: 0,
        department: "",
        section: "",
    })
    const [upDataResponse, setUpDataResponse] = useState(
        {
            name: "",
            roll: 0,
            department: "",
            section: "",
        }
    )
    const handleClick = (e) => {
        setStudentData(
            {
                ...studentData,
                [e.target.name]: e.target.value
            }
        )

    }
    const upHandelClick = (e) => {
        setUpDataResponse(
            {
                ...upDataResponse,
                [e.target.name]: e.target.value
            }
        )
    }
    useEffect(() => {
        document.title = "Crud"
    })
    const fetchStudent = async () => {
        let url = 'http://127.0.0.1:8000/api/students'
        try {
            const response = await fetch(url)
            let data = await response.json();
             setData(() => data)
            console.log(data)

        } catch (e) {
            console.log(e)
        }


    }
    const deletedStudent = async (studentId) => {
        let deleteUrl = `http://127.0.0.1:8000/api/studentsRemove/${studentId}`
        try {
            const deleteResponse = await fetch(deleteUrl)
            let deleteData = await deleteResponse.json();
            console.log(deleteData);
        } catch (e) {
            console.log(e)
        }
    }
    const updatedStudent = (studentId) => {
        setLgShow(true)
        setUpId(() => studentId)

    }
    const insertStudent = async (e) => {
        e.preventDefault()
        let insertStudentUrl = 'http://127.0.0.1:8000/api/studentInsert'
        try {
            const insertResponse = await fetch(insertStudentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });
            return insertResponse.json()
        } catch (err) {
            console.log(err)
        }

        console.log(...studentData)
    }
    const updateResponse = async (e) => {
        e.preventDefault()
        console.log(upId)
        setLgShow(false)
        let updateResponseStudentUrl = `http://127.0.0.1:8000/api/studentsUpdateResponse/${upId}`
        try {
            const updateInsertResponse = await fetch(updateResponseStudentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(upDataResponse)
            });
            return updateInsertResponse.json()
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchStudent()

    }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Card className={styles.cardCustom}>
                            <Card.Header className={styles.cardHeaderCustom} as={"h4"}>
                                STUDENT DATA VIEW
                            </Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                                <Table striped bordered hover variant={"primary"}>
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
                                    {
                                        data.map((d, i) => {

                                            return <tr key={Math.floor(Math.random() * 10000).toString()}>
                                                <td>{i + 1}</td>
                                                <td>{d.name}</td>
                                                <td>{d.roll}</td>
                                                <td>{d.department}</td>
                                                <td>{d.section}</td>
                                                <td><Button variant={"info"} className={`mx-1`}
                                                            onClick={() => updatedStudent(d.id)}>Update</Button>
                                                    <Button variant={"danger"} className={`mx-1`}
                                                            onClick={() => deletedStudent(d.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                    </tbody>

                                </Table>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card className={styles.cardCustom}>
                            <Card.Header className={styles.cardHeaderCustom} as={"h4"}>
                                STUDENT DATA INSERT
                            </Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                                <Form onSubmit={insertStudent}>
                                    <Form.Group controlId={"studentName"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Name:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Name'}
                                                      name={"name"} onChange={handleClick}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentRoll"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Roll:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Roll'}
                                                      name={"roll"} onChange={handleClick}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentDepartment"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Department:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Department Name'}
                                                      name={"department"} onChange={handleClick}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId={"studentSection"}>
                                        <Form.Label className={styles.paddingLabel10}> Student Section:</Form.Label>
                                        <Form.Control type={'text'} placeholder={'Type Student Section'}
                                                      name={"section"} onChange={handleClick}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant={"info"} style={{marginTop: "10px"}} type={"submit"}>INSERT</Button>
                                </Form>
                                <Modal
                                    size="lg"
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    aria-labelledby="example-modal-sizes-title-lg"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Update Student Data
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={updateResponse}>
                                            <Form.Group controlId={"studentName"}>
                                                <Form.Label className={styles.paddingLabel10}> Student
                                                    Name:</Form.Label>
                                                <Form.Control type={'text'} placeholder={'Type Student Name'}
                                                              name={"name"} onChange={upHandelClick}>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId={"studentRoll"}>
                                                <Form.Label className={styles.paddingLabel10}> Student
                                                    Roll:</Form.Label>
                                                <Form.Control type={'text'} placeholder={'Type Student Roll'}
                                                              name={"roll"} onChange={upHandelClick}>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId={"studentDepartment"}>
                                                <Form.Label className={styles.paddingLabel10}> Student
                                                    Department:</Form.Label>
                                                <Form.Control type={'text'} placeholder={'Type Student Department Name'}
                                                              name={"department"} onChange={upHandelClick}>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId={"studentSection"}>
                                                <Form.Label className={styles.paddingLabel10}> Student
                                                    Section:</Form.Label>
                                                <Form.Control type={'text'} placeholder={'Type Student Section'}
                                                              name={"section"} onChange={upHandelClick}>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant={"info"} style={{marginTop: "10px"}}
                                                    type={"submit"}>Update</Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Crud;
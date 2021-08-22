import React, {useEffect} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import styles from '../../assets/styles/global.module.css'


const Users = () => {
    useEffect(() => {
        document.title = "Users List"
    })
    const usersData = [
        {
            name: "Bob", email: "bob@example.com", phone: "0123456789", address: [
                {
                    city: "Sydney", country: "Australia"
                }
            ]
        },
        {
            name: "Marlo", email: "marlo@example.com", phone: "01955522222", address: [
                {
                    city: "Florida", country: "Us"
                }
            ]
        },
        {
            name: "Smith", email: "smith@example.com", phone: "01855522222", address: [
                {
                    city: "Washington", country: "Us"
                }
            ]
        },
        {
            name: "Mohit", email: "mohit@example.com", phone: "0155455522222", address: [
                {
                    city: "Mumbai", country: "India"
                }
            ]
        },
        {
            name: "David", email: "david@example.com", phone: "01655522222", address: [
                {
                    city: "London", country: "Uk"
                }
            ]
        }

    ]
    return (
        <Container>
            <Row>
                <Col lg={10}>
                    <Card className={styles.cardCustom}>
                        <Card.Header className={styles.cardHeaderCustom} as={'h3'}>
                            Users Data List
                        </Card.Header>
                        <Card.Body className={styles.cardBodyCustom}>
                            <Table variant={'primary'} striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Country</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    usersData.map((user, index) =>
                                        <tr key={Math.floor(Math.random() * 10000).toString()}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            {user.address.map((add) => <td
                                                key={Math.floor(Math.random() * 10000).toString()}>{add.city}</td>)}
                                            {user.address.map((add) => <td
                                                key={Math.floor(Math.random() * 10000).toString()}>{add.country}</td>)}
                                        </tr>
                                    )
                                }
                                </tbody>

                            </Table>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
};


export default Users;
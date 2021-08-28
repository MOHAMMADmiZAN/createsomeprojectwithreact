import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from '../../assets/styles/global.module.css'
import {Card, Col, Container, Row, Table} from "react-bootstrap";

function CoronaUpdate() {

    const [covidData, setCovidData] = useState({
        status: {
            countryName: "",
            confirmedCount: 0,
            recoveredCount: 0,
            criticalCount: 0,
            deathsCount: 0,
        }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const covid19 = () => {
        const options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country/code',
            params: {code: 'bd'},
            headers: {
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                'x-rapidapi-key': 'efc7f2e794msh5631739ab5d2aa8p19af91jsnd809fd06de49'
            }
        };

        axios.request(options).then(function (response) {
            setCovidData({
                ...covidData, status: {
                    countryName: response.data[0].country,
                    confirmedCount: response.data[0].confirmed,
                    recoveredCount: response.data[0].recovered,
                    criticalCount: response.data[0].critical,
                    deathsCount: response.data[0].deaths,
                }
            })

        }).then(() => {
            console.log(covidData);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        covid19()
    }, [])

    return (
        <>
            <section className={`${styles.covidSection}`}>
                <div className={`${styles.covidOverlay}`} style={{padding: "30px"}}>
                    <Container>
                        <Row className={"text-center"}>
                            <Col lg={12}>
                                <Card className={styles.cardCustom}>
                                    <Card.Header as={'h3'} className={styles.cardHeaderCustom}> Covid 19
                                        Update</Card.Header>
                                    <Card.Body className={styles.cardBodyCustom}>
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                                <th style={{background: "#363636", color: "white"}}>Country</th>
                                                <th style={{background: "orange", color: "white"}}>ConfirmedCase</th>
                                                <th style={{background: "green", color: "white"}}>RecoveredCase</th>
                                                <th style={{background: "orange", color: "white"}}>CriticalCase</th>
                                                <th style={{background: "red", color: "white"}}>Deaths</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td style={{background: "rgba(54,54,54,0.2)"}}>{covidData.status.countryName}</td>
                                                <td style={{
                                                    color: "orange",
                                                    background: "rgba(255,165,0,0.2)"
                                                }}>{covidData.status.confirmedCount}</td>
                                                <td style={{
                                                    color: "green",
                                                    background: "rgba(0,128,0,0.2)"
                                                }}>{covidData.status.recoveredCount}</td>
                                                <td style={{
                                                    color: "orange",
                                                    background: "rgba(255,165,0,0.2)"
                                                }}>{covidData.status.criticalCount}</td>
                                                <td style={{
                                                    color: "red",
                                                    background: "rgba(255,0,0,0.2)"
                                                }}>{covidData.status.deathsCount}</td>
                                            </tr>
                                            </tbody>

                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
        </>
    );
}

export default CoronaUpdate;
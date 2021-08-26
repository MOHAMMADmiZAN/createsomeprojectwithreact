import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {CartButton} from "../../assets/styles/styleComponent";
import styles from '../../assets/styles/global.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faDev,
    faJs,
    faLaravel,
    faLinux,
    faPhp,
    faPython,
    faReact,
    faRust,
    faSymfony,
    faVuejs
} from '@fortawesome/free-brands-svg-icons'

function RandomColor() {
    const [color, setColor] = useState("#61DAFB")
    const [logo, setLogo] = useState(faReact)
    const _styles = {
        color: color,
        borderColor: color,
        transition: "0.4s",

    }

    function getRandomColor() {
        const letters = '0123456789abcdef';
        let hash = '#';
        for (let i = 0; i < 6; i++) {
            hash += letters[Math.floor(Math.random() * letters.length)];
        }
        return hash;
    }

    const logoArray = [faReact, faVuejs, faPhp, faAngular, faPython, faRust, faSymfony, faLaravel, faJs, faLinux, faDev,]
    const randomLogo = () => {
        return logoArray[Math.floor(Math.random() * logoArray.length)]
    }
    const colorClick = async () => {
        // let colorApi = "https://www.colr.org/json/color/random"
        // try {
        //     const response = await axios.get(colorApi)
        //     const responseData = await response.data.new_color
        //     // setColor(prevState => responseData)
        //     console.log(responseData)
        // } catch (e) {
        //     console.log(e)
        // }
        setColor(prevState => getRandomColor())
        setLogo(prevState => randomLogo())

    }
    useEffect(() => {
        document.title = "Random Color"
    })
    // useEffect(() => {
    //     colorClick()
    // }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card className={styles.cardCustom} style={{..._styles}}>
                            <Card.Header className={styles.cardHeaderCustom} as={"h5"} style={{color: color}}>RANDOM
                                COLOR</Card.Header>
                            <Card.Body className={styles.cardBodyCustom}>
                                <FontAwesomeIcon icon={logo} size={"10x"} pulse style={{..._styles}} border/>
                                <CartButton className={styles.marginTop20} onClick={colorClick}
                                            style={{backgroundColor: color,color: "#fff"}}>CLICK
                                    ME</CartButton>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default RandomColor;
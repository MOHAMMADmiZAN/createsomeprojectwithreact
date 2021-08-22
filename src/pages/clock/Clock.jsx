import React, {Component} from 'react';
import {Alert, Card, Container} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.clockTime = setInterval(() => {
            this.tick()
        }, 1000)
        document.title = 'Clock'
    }
componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.date.toLocaleTimeString())
}

    componentWillUnmount() {
        clearInterval(this.clockTime)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <Container>
                <Card className={styles.cardCustom}>
                    <Card.Header className={styles.cardHeaderCustom} as={'h6'}>
                        Clock
                    </Card.Header>
                    <Card.Body className={styles.cardBodyCustom}>
                        <Alert variant={'primary'}>
                            {this.state.date.toLocaleTimeString()}
                        </Alert>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}


export default Clock;
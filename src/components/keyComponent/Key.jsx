import {Button} from "react-bootstrap";
import styles from "../../assets/styles/global.module.css"


const Key = props => {
    return (
        <Button className={styles.calculatorKey} variant={"secondary"} onClick={props.keyOnClick}
                type={props.type} value={props.keyValue} style={props.style}>{props.keyValue}</Button>
    )
}
export default Key;
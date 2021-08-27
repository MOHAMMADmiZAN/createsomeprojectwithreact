import {Router} from "@reach/router";
/// component import //
import Home from "../pages/home/Home";
import Rform from "../pages/form/Form";
import Calculator from "../pages/caculator/Calculalor";
import NotFound from "../pages/404/NotFound";
import Counter from "../pages/counter/Counter";
import Users from "../pages/usersData/Users";
import Clock from "../pages/clock/Clock";
import ShoppingCartData from "../pages/shoppingCart/ShoppingCartData";
import RandomJokes from "../pages/randomJokes/RandomJokes";
import RandomColor from "../pages/randomColor/RandomColor";
import CoronaUpdate from "../pages/CoronaUpdate/CoronaUpdate";


function AppRouter() {
    return (
        <Router>
            <Home path={"/"}/>
            <Rform path={"/form"}/>
            <Calculator path={"/calculator"}/>
            <Counter path={"/counter"}/>
            <Users path={"/usersData"}/>
            <Clock path={"/clock"}/>
            <ShoppingCartData path={"/cart"}/>
            <RandomJokes path={"/jokes"}/>
            <RandomColor path={"/color"}/>
            <CoronaUpdate path={"/covid19"}/>
            <NotFound default/>
        </Router>
    )
}

export default AppRouter
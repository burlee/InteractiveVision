import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './Navbar.scss';
import Aux from '../../HOC/aux_x';
import Contact from '../Contact/Contact';
import Recipes from '../Recipes/Recipes';
import Footer from '../../Components/Footer/Footer'

class Navbar extends Component {
    render() {
        return (
            <Aux>
                <nav className={classes.Navbar}>
                    <div className={classes.Logo}>Intervi<span>.</span></div>
                    <ul>
                        <li><NavLink activeStyle={{borderBottom: '2px solid #5d00e1'}} exact to="/recipes">Przepisy</NavLink></li>
                        <li><NavLink activeStyle={{borderBottom: '2px solid #5d00e1'}} exact to="/">Kontakt</NavLink></li>
                    </ul>           
                </nav>
                <Switch>
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/' component={Contact} />
                </Switch>
                <Footer/>
            </Aux>
        );
    }
}

export default Navbar;

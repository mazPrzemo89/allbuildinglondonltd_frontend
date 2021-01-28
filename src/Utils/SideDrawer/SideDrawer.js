import React from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../backdrop/Backdrop';
import Aux from '../Aux/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <div>{props.children}</div>
                </div>
                <nav>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
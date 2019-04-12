import React from 'react';
//import Button from '@material-ui/core/Button';
/* import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer'; */

import { withStyles } from '@material-ui/styles';

import woman from './BeautifulWoman.jpg';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import Menu from './Menu';
import { SidebarMenu } from './SidebarMenu';

const styles = {
    image: {
        width: '100%',
        maxHeight: '700px',
        overflow: 'hidden',
        textAlign: 'center',
        /* marginTop: '6rem',*/
        marginBottom: '-2rem',
    },
    mdMenu: {
        display: 'none',
    },
    xsMenu: {

    },
    '@media (min-width: 960px)': {
        image: {
            marginBottom: '2rem',
        },
        mdMenu: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'center'
        },
        xsMenu: {
            display: 'none',
        },
    },
};


class TitleRow extends React.Component {

    state = {
        sidebarOpen: false
    };
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    render() {
        const {servicesClickHandler, contactClickHandler, logoClickedHandler, classes, currentRoute} = this.props;

        return (
            <>
                <div style={{
                    position: 'fixed',
                    top: '1.5rem',
                    backgroundColor: '#a48500',
                    /* backgroundColor: 'rgba(0, 117, 189, 0.9)', */
                    width: '100%',
                    /* margin: 'auto', */
                    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    /* borderBottom: '1px solid black', */
                    color: 'white',
                    opacity: '0.95',
                    height: '3rem',
                    boxSizing: 'border-box'
                }}>
                    <div
                        /* onClick={logoClickedHandler} */
                        style={{
                            fontSize: '2.3rem',
                            //cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Ordinacija Zekić
                    </div>

                    <div className={classes.mdMenu}>
                        <Menu servicesClickHandler={servicesClickHandler} contactClickHandler={contactClickHandler} currentRoute={currentRoute} />
                    </div>

                    <div className={classes.xsMenu}>
                        <div 
                            onClick={() => this.onSetSidebarOpen(true)}
                            style={{cursor: 'pointer', display: this.state.sidebarOpen && 'none'}}
                        >
                            <AccessAlarmIcon />
                        </div>
                        <SidebarMenu 
                            servicesClickHandler={servicesClickHandler}
                            contactClickHandler={contactClickHandler}
                            currentRoute={currentRoute} 
                            open={this.state.sidebarOpen}
                            onSetSidebarOpen={this.onSetSidebarOpen}
                        />
                    </div>
                </div>

                <div style={{width: '100%', height: '6rem', backgroundColor: '#a48500'}} />
                <div className={classes.image}>
                    <img src={woman} style={{width: '100%'}}/> 
                </div>
            </>
        );
    }
}

export default withStyles(styles)(TitleRow);


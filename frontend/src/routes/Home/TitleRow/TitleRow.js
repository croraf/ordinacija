import React from 'react';
import { withStyles } from '@material-ui/styles';

import woman from './BeautifulWoman.jpg';
import SpreadMenu from './SpreadMenu';
import { SidebarMenu } from './SidebarMenu';

const styles = {
    image: {
        width: '100%',
        maxHeight: '700px',
        overflow: 'hidden',
        textAlign: 'center',
        /* marginTop: '6rem',*/
        marginBottom: '-1rem',
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

    render() {
        const {servicesClickHandler, contactClickHandler, logoClickedHandler, classes, currentRoute} = this.props;

        return (
            <>
                <div style={{
                    position: 'fixed',
                    top: '0rem',
                    backgroundColor: '#a48500',
                    width: '100%',
                    padding: '0rem 1.5rem 0rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    /* borderBottom: '1px solid black', */
                    color: 'white',
                    opacity: '0.95',
                    height: '6rem',
                    boxSizing: 'border-box',
                    zIndex: 100,
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
                        <SpreadMenu
                            servicesClickHandler={servicesClickHandler}
                            contactClickHandler={contactClickHandler}
                            currentRoute={currentRoute}
                        />
                    </div>

                    <div className={classes.xsMenu}>
                        <SidebarMenu 
                            servicesClickHandler={servicesClickHandler}
                            contactClickHandler={contactClickHandler}
                            currentRoute={currentRoute}
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


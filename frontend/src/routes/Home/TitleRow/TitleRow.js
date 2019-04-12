import React from 'react';
//import Button from '@material-ui/core/Button';
/* import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer'; */
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/styles';

import woman from './BeautifulWoman.jpg';

import Menu from './Menu';

const styles = {
    image: {
        width: '100%',
        maxHeight: '700px',
        overflow: 'hidden',
        textAlign: 'center',
        /* marginTop: '6rem',*/
        marginBottom: '-2rem',
    },
    menuItemsWrapper: {
        display: 'none',
    },
    '@media (min-width: 960px)': {
        image: {
            marginBottom: '2rem',
        },
        menuItemsWrapper: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '1rem',
        },
    },
};


class TitleRow extends React.Component {
    render() {
        const {servicesClickHadnler, contactClickHandler, logoClickedHandler, classes, currentRoute} = this.props;

        return (
            <>
                <Grid container style={{
                    position: 'fixed',
                    top: '0rem',
                    backgroundColor: '#a48500',
                    /* backgroundColor: 'rgba(0, 117, 189, 0.9)', */
                    width: '100%',
                    margin: 'auto',
                    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    /* borderBottom: '1px solid black', */

                    color: 'white',
                    opacity: '0.95',
                    height: '4.5rem',
                }}>
                    <Grid item xs={12} md={6}
                        /* onClick={logoClickedHandler} */
                        style={{
                            fontSize: '2.3rem',
                            //cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Ordinacija Zekić
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.menuItemsWrapper}>
                        <Menu servicesClickHadnler={servicesClickHadnler} contactClickHandler={contactClickHandler} currentRoute={currentRoute} />
                    </Grid>
                </Grid>

                <div style={{width: '100%', height: '6rem', backgroundColor: '#a48500'}} />
                <div className={classes.image}>
                    <img src={woman} style={{width: '100%'}}/> 
                </div>
            </>
        );
    }
}

export default withStyles(styles)(TitleRow);


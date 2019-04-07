import React from 'react';
//import Button from '@material-ui/core/Button';
/* import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer'; */
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class TitleRow extends React.Component {
    render() {
        const {servicesClickHadnler, contactClickHandler, logoClickedHandler, currentRoute} = this.props;

        return (
            <Grid container style={{
                width: '100%',
                margin: '15px 0px 1rem 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Grid item xs={12} md={6}
                    /* onClick={logoClickedHandler} */
                    style={{
                        fontSize: '2.3rem',
                        //cursor: 'pointer',
                        fontWeight: 'bold',
                        color: 'black',
                        marginBottom: '1rem'
                    }}
                >
                    Ordinacija Zekić
                </Grid>

                
                <Grid item xs={12} md={6}
                    style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem'}}
                >
                    <Grid container>
                        <Grid item xs={false} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                           
                        </Grid>
                        <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Link 
                                onClick={servicesClickHadnler}
                                style={{fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'black', fontWeight: currentRoute === '/' && 'bold',}}
                                underline='none'
                            >
                                O nama
                            </Link>
                        </Grid>
                        <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Link 
                                onClick={servicesClickHadnler}
                                style={{fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'black', fontWeight: currentRoute === '/' && 'bold',}}
                                underline='none'
                            >
                                Usluge
                            </Link>
                        </Grid>
                        <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Link 
                                onClick={contactClickHandler}
                                style={{fontSize: '1.2rem', cursor: currentRoute === '/contact' ? 'default' : 'pointer', color: 'black', fontWeight: currentRoute === '/contact' && 'bold',}}
                                underline='none'
                            >
                                Kontakt
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                {/*THIS IS A HACK TO ADD EXTRA SPACE BELOW TITLE WHEN SIZE IS LARGER THAN md*/}
                <Grid item xs={6} md={12} style={{height: '1rem'}} />
                <Grid item xs={6} md={12} style={{height: '1rem'}} />
            </Grid>
        );
    }
}

export {TitleRow};

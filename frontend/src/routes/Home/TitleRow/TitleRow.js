import React from 'react';
//import Button from '@material-ui/core/Button';
/* import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer'; */
import Link from '@material-ui/core/Link';

class TitleRow extends React.Component {
    render() {
        const {servicesClickHadnler, contactClickHandler, logoClickedHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '15px 0px 3rem 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div 
                    /* onClick={logoClickedHandler} */
                    style={{
                        fontSize: '2rem',
                        //cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Ordinacija Zekić
                </div>

                
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Link onClick={servicesClickHadnler} style={{marginRight: '2rem', cursor: 'pointer'}}>Usluge</Link>
                    <Link onClick={contactClickHandler} style={{cursor: 'pointer'}}>Kontakt</Link>
                    {/* <CartButtonContainer />
                    {
                        loginStatus ? 
                            <MainMenuContainer /> :
                            <Button style={{height: '75%', margin: 'auto 0px', width: '33%', padding: '0rem'}} variant='outlined' color='secondary' onClick={loginButtonHandler}>Log in</Button>
                    } */}
                </div>
            </div>
        );
    }
}

export {TitleRow};

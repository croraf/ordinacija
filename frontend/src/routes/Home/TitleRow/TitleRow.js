import React from 'react';
//import Button from '@material-ui/core/Button';
/* import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer'; */
import Link from '@material-ui/core/Link';

class TitleRow extends React.Component {
    render() {
        const {servicesClickHadnler, contactClickHandler, logoClickedHandler, currentRoute} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '15px 0px 4rem 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div 
                    /* onClick={logoClickedHandler} */
                    style={{
                        fontSize: '2.3rem',
                        //cursor: 'pointer',
                        fontWeight: 'bold',
                        color: 'black'
                    }}
                >
                    Ordinacija Zekić
                </div>

                
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center',}}>
                    <Link 
                        onClick={servicesClickHadnler}
                        style={{fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'black', fontWeight: currentRoute === '/' && 'bold', marginRight: '2rem', }}
                        underline='none'
                    >
                        Usluge
                    </Link>
                    <Link 
                        onClick={contactClickHandler}
                        style={{fontSize: '1.2rem', cursor: currentRoute === '/contact' ? 'default' : 'pointer', color: 'black', fontWeight: currentRoute === '/contact' && 'bold'}}
                        underline='none'
                    >
                        Kontakt
                    </Link>
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

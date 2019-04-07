import React from 'react';
import { Button } from '@material-ui/core';

import mapUrl from './food7.jpg';

class Contact extends React.Component {

    render() {
        const {onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold', marginTop: '2rem'}}>Radno vrijeme</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '2.5rem'
                }}>
                    <div style={{marginBottom: '1rem'}}>Pon - Pet:  08:00 - 20:00h</div>
                    <div style={{}}>Sub:  08:00 - 14:00h</div>
                </div>

                <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Kontaktirajte nas</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '2.5rem'
                }}>
                    <div style={{marginBottom: '1rem'}}>Telefon: +385 91 111222</div>
                    <div style={{}}>Mail: ordinacija@gmail.com</div>
                </div>

                <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Lokacija</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '2.5rem'
                }}>
                    <div style={{marginBottom: '1rem'}}>Adresa: Zagrebačka 123, 10000 Zagreb</div>
                    <img src={mapUrl} width='500px' height='500px' style={{}} />
                </div>
                
            </div>
        );
    }
}

export {Contact};

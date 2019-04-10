import React from 'react';

import Grid from '@material-ui/core/Grid';

import { MapContainer } from './MapContainer';

class Contact extends React.Component {

    render() {
        const {onReturnToListOfRestaurantsHandler} = this.props;

        return (
            <Grid container>
                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <div style={{marginTop: '2rem', marginBottom: '4rem'}}>
                        <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Radno vrijeme</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{marginBottom: '1rem'}}>Pon - Pet:  08:00 - 20:00h</div>
                            <div style={{}}>Sub:  08:00 - 14:00h</div>
                        </div>
                    </div>

                    <div style={{marginTop: '3.5rem', marginBottom: '4rem'}}>
                        <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Kontaktirajte nas</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{marginBottom: '1rem'}}>Telefon: +385 91 111222</div>
                            <div style={{}}>Mail: ordinacija@gmail.com</div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <div style={{marginTop: '0rem', marginBottom: '4rem'}}>
                        <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Lokacija</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{marginBottom: '1rem'}}>Adresa: Zagrebačka 123, 10000 Zagreb</div>
                            <MapContainer style={{width: '100%', height: '500px'}} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export {Contact};

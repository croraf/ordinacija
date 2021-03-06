import React from 'react';

import Grid from '@material-ui/core/Grid';

import { MapContainer } from './MapContainer';

class Contact extends React.Component {

    render() {
        //const {} = this.props;

        return (
            <Grid container style={{textAlign: 'center', width: '700px', maxWidth: '100%'}}>
                <Grid item xs={12} md={12} style={{textAlign: 'center',}}>
                    <div style={{marginTop: '2rem', marginBottom: '4rem'}}>
                        <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>O Ordinaciji Zekić</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{marginBottom: '1rem', textAlign: 'left'}}>
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            </div>
                            <div style={{marginBottom: '1rem', textAlign: 'left'}}>
                                {`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '4rem'}}>
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
                </Grid>

                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '4rem'}}>
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
                    <div style={{marginBottom: '4rem'}}>
                        <div style={{fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold'}}>Lokacija</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{marginBottom: '1rem'}}>Adresa: Zagrebačka 123, 10000 Zagreb</div>
                            <MapContainer style={{width: '100%', height: '400px'}} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export {Contact};

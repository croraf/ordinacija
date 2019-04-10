import React from 'react';

import serviceUrl1 from './food7.jpg';
import serviceUrl2 from './food9.jpg';

import Grid from '@material-ui/core/Grid';

class Service extends React.Component {
    render() {
        return (
            <div style={{
                marginTop: '3rem',
                marginBottom: '2.5rem',
                width: '100%'
            }}>
                <Grid container spacing={32} style={{alignContent: 'space-around'}}>
                    <Grid item xs={12} md={12} lg={4}>
                        <div style={{fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.5rem'}}>Ime usluge</div>
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
                    </Grid>
                    {/* <div style={{
                        backgroundImage: `url(${serviceUrl})`,
                        backgroundSize: '100% 90%',
                        width: '300px',
                        height: '300px',
                        backgroundPositionY: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} /> */}
                    <Grid item xs={12} md={6} lg={4}>
                        <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                            <img src={serviceUrl1} width='300px' height='300px' style={{borderRadius: '10px'}}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                            <img src={serviceUrl2} width='300px' height='300px' style={{borderRadius: '10px'}} />
                        </div>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

export {Service};

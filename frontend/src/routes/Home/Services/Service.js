import React from 'react';

import serviceUrl1 from './food7.jpg';
import serviceUrl2 from './food9.jpg';


class Service extends React.Component {
    render() {
        return (
            <div style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                width: '100%'
            }}>
                <div style={{fontWeight: 'bold', fontSize: '1.4rem'}}>Ime usluge</div>
                <div style={{display: 'flex'}}>
                    <div>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</div>
                    {/* <div style={{
                        backgroundImage: `url(${serviceUrl})`,
                        backgroundSize: '100% 90%',
                        width: '300px',
                        height: '300px',
                        backgroundPositionY: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} /> */}
                    <img src={serviceUrl1} width='200px' height='200px' style={{margin: '0rem 1rem'}}/>
                    <img src={serviceUrl2} width='200px' height='200px' style={{}} />
                </div>
                
            </div>
        );
    }
}

export {Service};

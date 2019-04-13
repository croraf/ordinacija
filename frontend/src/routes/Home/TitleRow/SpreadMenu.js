import React from 'react';

import Link from '@material-ui/core/Link';


class SpreadMenu extends React.Component {

    render() {
        const {servicesClickHandler, contactClickHandler, currentRoute} = this.props;

        return (
            <>  
                <Link 
                    onClick={servicesClickHandler}
                    style={{marginLeft: '2rem', fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/' && 'bold',}}
                    underline='none'
                >
                    O nama
                </Link>
            
                <Link 
                    onClick={servicesClickHandler}
                    style={{marginLeft: '2rem', fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/' && 'bold',}}
                    underline='none'
                >
                    Usluge
                </Link>
            
                <Link 
                    onClick={contactClickHandler}
                    style={{marginLeft: '2rem', fontSize: '1.2rem', cursor: currentRoute === '/contact' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/contact' && 'bold',}}
                    underline='none'
                >
                    Kontakt
                </Link>
            </>
        );
    }
}

export default (SpreadMenu);


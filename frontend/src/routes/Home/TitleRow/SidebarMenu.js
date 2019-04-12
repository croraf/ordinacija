import React from 'react';

import Sidebar from 'react-sidebar';

class SidebarMenu extends React.Component {


    render() {
        const {servicesClickHandler, contactClickHandler, currentRoute, open, onSetSidebarOpen} = this.props;

        const sidebarContent = (
            <div style={{
                width: '170px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center'
            }}>
                <div 
                    style={{margin: '3rem', cursor: 'pointer'}}
                    onClick={() => {onSetSidebarOpen(false); servicesClickHandler();}}
                >
                    O nama
                </div>
                <div 
                    style={{margin: '3rem', cursor: 'pointer'}}
                    onClick={() => {onSetSidebarOpen(false); servicesClickHandler();}}
                >
                    Usluge
                </div>
                <div 
                    style={{margin: '3rem', cursor: 'pointer'}}
                    onClick={() => {onSetSidebarOpen(false); contactClickHandler();}}
                >
                    Kontakt
                </div>
            </div>
        );

        return (
            <Sidebar
                sidebar={sidebarContent}
                open={open}
                onSetOpen={onSetSidebarOpen}
                styles={{ sidebar: { background: 'black', height: '1000px', position: 'fixed',}, root: {height: '0px'} }}
                pullRight={true}
            >
                
            </Sidebar>  
        );
    }
}

export {SidebarMenu};


import React from 'react';

import Sidebar from 'react-sidebar';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

class SidebarMenu extends React.Component {

    state = {
        sidebarOpen: false
    };
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    render() {
        const {servicesClickHandler, contactClickHandler, currentRoute,} = this.props;

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
            <>
                <div 
                    onClick={() => this.onSetSidebarOpen(true)}
                    style={{cursor: 'pointer', display: this.state.sidebarOpen && 'none'}}
                >
                    <AccessAlarmIcon />
                </div>
                <Sidebar
                    sidebar={sidebarContent}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: 'black', height: '1000px', position: 'fixed',}, root: {height: '0px'} }}
                    pullRight={true}
                >
                    
                </Sidebar>  
            </>
        );
    }
}

export {SidebarMenu};


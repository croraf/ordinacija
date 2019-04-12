import React from 'react';

import Sidebar from 'react-sidebar';

class SidebarMenu extends React.Component {


    render() {

        const sidebarContent = (
            <div style={{
                width: '170px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center'
            }}>
                <div style={{margin: '3rem', cursor: 'pointer'}}>O nama</div>
                <div style={{margin: '3rem', cursor: 'pointer'}}>Usluge</div>
                <div style={{margin: '3rem', cursor: 'pointer'}}>Kontakt</div>
            </div>
        );

        return (
            <Sidebar
                sidebar={sidebarContent}
                open={this.props.open}
                onSetOpen={this.props.onSetSidebarOpen}
                styles={{ sidebar: { background: 'black', height: '1000px', position: 'fixed' } }}
                pullRight={true}
            >
                
            </Sidebar>  
        );
    }
}

export {SidebarMenu};


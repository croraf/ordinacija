import React from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Sidebar from 'react-sidebar';


{/* <Sidebar
                        sidebar={<b>Sidebar content</b>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{ sidebar: { background: 'white' } }}
                    >
                        <button onClick={() => this.onSetSidebarOpen(true)}>
                        Open sidebar
                        </button>
                    </Sidebar> */}

class Menu extends React.Component {
    render() {
        const {servicesClickHadnler, contactClickHandler, currentRoute} = this.props;

        return (
            <>              
                <Grid container>
                    <Grid item xs={false} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
                            
                    </Grid>
                    <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
                        <Link 
                            onClick={servicesClickHadnler}
                            style={{fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/' && 'bold',}}
                            underline='none'
                        >
                                    O nama
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
                        <Link 
                            onClick={servicesClickHadnler}
                            style={{fontSize: '1.2rem', cursor: currentRoute === '/' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/' && 'bold',}}
                            underline='none'
                        >
                                    Usluge
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={3} style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
                        <Link 
                            onClick={contactClickHandler}
                            style={{fontSize: '1.2rem', cursor: currentRoute === '/contact' ? 'default' : 'pointer', color: 'white', fontWeight: currentRoute === '/contact' && 'bold',}}
                            underline='none'
                        >
                                    Kontakt
                        </Link>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default (Menu);


import React from 'react';
/* import MediaQuery from 'react-responsive'; */

import { TitleRowContainer } from './TitleRow/TitleRowContainer';
import { HomeRouter } from './HomeRouter';
//import { CartModalContainer } from './CartModal/CartModalContainer';
/* import { RecentOrderNotificationContainer } from './RecentOrderNotification/RecentOrderNotificationContainer'; */

/* 
const containerWidth = 950;

const containerStyleFullHd = {
    position: 'relative',
    width: containerWidth + 'px',
    minWidth: containerWidth + 'px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
};

const containerStyleHdOverrides = {
    width: (containerWidth * 0.87) + 'px',
    minWidth: (containerWidth * 0.87) + 'px',
    fontSize: '0.87rem',
};

const containerStyleHd = Object.assign({}, containerStyleFullHd, containerStyleHdOverrides);
 */

class Home extends React.Component {

    componentDidMount () {
        // this.props.checkAuthenticationAndLoadUserData();
    }

    render() {

        return (
            <>
                <TitleRowContainer />
                <div style={{
                    /* position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center', */
                    //backgroundColor: 'whitesmoke'
                    display: 'flex',
                    alignItems: 'center',
                    width: '95%',
                    maxWidth: '1000px',
                    margin: 'auto',
                    marginTop: '1rem',
                    flexDirection: 'column',
                }}>
                    {/* <div style={{
                        minWidth: '200px'
                    }}><img src='https://picsum.photos/200/600' /></div> */}

                    {/* <RecentOrderNotificationContainer /> */}

                    {/* <MediaQuery query='(max-device-width: 1700px)'>
                        <div style={containerStyleHd}>
                            <TitleRowContainer />
                            <HomeRouter />
                        </div>
                    </MediaQuery>

                    <MediaQuery query='(min-device-width: 1701px)'>
                        <div style={containerStyleFullHd}>
                            <TitleRowContainer />
                            <HomeRouter />
                        </div>
                    </MediaQuery> */}
                    
                    {/* <div style={{
                        minWidth: '200px'
                    }}><img src='https://picsum.photos/300/300' /></div> */}

                    
                    <HomeRouter />
                    {/* <CartModalContainer /> */}
                </div>
                <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>Footer</div>
            </>
        );
    }
}

export { Home };

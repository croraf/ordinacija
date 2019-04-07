import React from 'react';
import { Service } from './Service';


class Services extends React.Component {

    componentWillMount() {
        // this.props.loadRouteData();
    }

    render() {

        const {listOfRestaurants, openOnly, area, onRestaurantClickHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem',
            }}>
                <Service />

                <Service />

                <Service />

                <Service />

                <Service />

                <Service />
            </div>
        );
    }
}

export {Services};

import React from 'react';
import TimerMixin from 'react-timer-mixin';
import '../../styles/app.scss';
import AppTemplate from '../components/AppTemplate';
import DataSource from '../services/DataSource';

const deviceId = process.env.REACT_APP_DEVICEHIVE_DEVICE_ID;
const authoriztionToken = process.env.REACT_APP_DEVICEHIVE_AUTHORIZATION_TOKEN;
const apiUrl = process.env.REACT_APP_DEVICEHIVE_API_URL;
const dataSource = new DataSource();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: null,
            isLoaded: false
        }
    };

    componentDidMount() {
        const interval = 300000;

        this.getNotifications();
        TimerMixin.setTimeout(
            async () => {this.getNotifications()},
            interval
        );
    }

    /**
     * get device notifications data object from DeviceHive
     *
     */
    getNotifications = async () => {
        try {
            let notififcations = await dataSource.getNotifications(apiUrl, deviceId, authoriztionToken);
            if (notififcations.data.length) {
                console.log(notififcations);
                this.setState({
                    notifications: notififcations.data,
                    isLoaded: true
                });
            } else {
                this.setState({
                    isLoaded: false
                });
            }
            TimerMixin.setTimeout(
                async () => {this.getNotifications()},
                2000
            );
        } catch (err) {
            console.error(err.response);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate -> prevProps', prevProps);
        console.log('componentDidUpdate -> prevState', prevState);
        console.log('componentDidUpdate -> snapshot', snapshot);
    }

    render() {
        const {
            notifications,
            isLoaded
        } = this.state;

        return (
            <AppTemplate
                notifications={notifications}
                isLoaded={isLoaded}
            />
        );
    }
}

export default App;
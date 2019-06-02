import axios from 'axios';

class DataSource {

    /**
     * get device notifications data object from DeviceHive
     *
     * @param {string} apiUrl
     * @param {string} deviceId
     * @param {string} authorizationToken
     *
     * @return {Promise}
     */
    getNotification = async (apiUrl, deviceId, authorizationToken) => {
        return await axios.get(`${apiUrl}/device${deviceId}/notification`, {
            headers: {
                Authorization: authorizationToken
            }
        });
    };

}

export default DataSource;

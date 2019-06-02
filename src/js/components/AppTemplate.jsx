import React from 'react';
import logo from "../../img/logo.png";

const AppTemplate = ({
    notifications,
    isLoaded
}) => {
  return (
      <div className="App">
        <section className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isLoaded ?
              <div className="Notification-Block">
                  <ul>
                      {notifications.map((notification, key) => {
                          return (
                              <li className="Notification-Item"
                                  key={`key_${key}`}>

                                  {new Date(Date.parse(notification["timestamp"])).toUTCString()}
                                  {}

                                  {JSON.parse(notification["notification"]
                                      .replace(/([a-zA-Z0-9]+?):/g, '"$1":')
                                      .replace(/'/g, '"')).map((item) => {
                                          return (
                                              <div className="App-Result">
                                                  <p className="App-link">Event type -> <span>{item["class_name"]}</span></p>
                                                  <p className="App-link">Probability -> <span>{item["score"].toFixed(2) * 100}%</span></p>
                                              </div>
                                             )

                                  })}

                                  {/*{JSON.parse(notification["notification"]*/}
                                  {/*    .replace(/([a-zA-Z0-9]+?):/g, '"$1":')*/}
                                  {/*    .replace(/'/g, '"'))[0]['class_name']}*/}
                                  {/*<p className="App-link">Probability -></p>*/}
                                  {/*{JSON.parse(notification["notification"]*/}
                                  {/*    .replace(/([a-zA-Z0-9]+?):/g, '"$1":')*/}
                                  {/*    .replace(/'/g, '"'))[0]['score']}*/}
                              </li>
                          )
                      })}
                  </ul>
              </div>
            :
          (<p className="App-link">No content yet &#128533;</p>)}
        </section>
      </div>
  );
};

export default AppTemplate;

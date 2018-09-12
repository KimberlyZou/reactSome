import React from "react";
import Crouton from "react-crouton";

export default class ReactCrouton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = {
      id: Date.now(),
      type: "error",
      message: "Hello React-Crouton",
      autoMiss: true || false,
      buttons: [
        {
          name: "close",
          listener: function() {
            console.log("close button clicked.");
          }
        }
      ],
      hidden: false,
      timeout: 2000
    };
    return (
      <Crouton
        id={data.id}
        type={data.type}
        message={data.message}
        onDismiss={data.onDismiss}
        buttons={data.buttons}
        hidden={data.hidden}
        timeout={data.timeout}
        autoMiss={data.autoMiss}
      >
        {/* // You can render child component here // <ChildComponent /> */}
      </Crouton>
    );
  }
}

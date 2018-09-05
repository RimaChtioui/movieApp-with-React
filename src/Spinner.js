import React from "react";

class Spinner extends React.Component {
  render() {
    console.log(Spinner);
    return (
      <div class="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
    );
  }
}

export default Spinner;

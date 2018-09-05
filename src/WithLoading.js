import React, { Component } from "react";
import Spinner from "./Spinner";

const WithLoading = Component => {
  return class WithLoading extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoading: true
        });
      }, 5000);
    }

    render() {
      console.log(Component);
      return this.state.isLoading === false ? (
        <Spinner />
      ) : (
        <Component {...this.props} />
      );
    }
  };
};

export default WithLoading;

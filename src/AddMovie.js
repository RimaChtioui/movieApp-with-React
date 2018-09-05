import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      plot: "",
      poster: "",
      imdbRating: 0,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  onChangeTitle = value => {
    this.setState({
      title: value
    });
  };

  onChangePlot = value => {
    this.setState({
      plot: value
    });
  };

  onChangePoster = value => {
    this.setState({
      poster: value
    });
  };
  onChangeImdbRating = value => {
    this.setState({
      imdbRating: value
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getMovie() {
    this.props.addMovieFunction({ ...this.state });
  }

  clickHandler() {
    this.toggle();
    this.getMovie();
  }

  render() {
    // console.log(this.state);
    return (
      <div className="add-movie-container">
        <Button className="add-movie" onClick={this.toggle}>
          <span>+</span>
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody>
            <form className="add-form">
              <input
                className="add-form-input"
                type="text"
                placeholder="Enter movie title"
                onChange={e => this.onChangeTitle(e.target.value)}
              />
              <input
                className="add-form-input"
                type="text"
                placeholder="Enter movie synopsis"
                onChange={e => this.onChangePlot(e.target.value)}
              />
              <input
                className="add-form-input"
                type="number"
                max="5"
                placeholder="Enter movie rating"
                onChange={e => this.onChangeImdbRating(e.target.value)}
              />
              <input
                className="add-form-input"
                type="file"
                name="picture"
                accept="image/*"
                onChange={e => this.onChangePoster(e.target.value)}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.clickHandler}>
              Add
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;

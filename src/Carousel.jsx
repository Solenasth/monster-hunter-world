import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // this is a static method that means it is added at class level, we wont call it never, ract will when data is updated
  // and will provide apropiate state from props.
  // neeeeeeds to be static always
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  //this function needs to be an arrow function *or have its context bind in the constructor* because this
  //is determined in a normal function at runtime and it will be wrong, however an arrow function keeps a snapshot of
  //the context where it was created.

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo.value}
              src={photo.value}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

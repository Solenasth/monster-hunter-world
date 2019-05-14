import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel.jsx";
import Modal from "./modal.jsx";

const petfinder = pf({
  //KEY: process.env.API_KEY
});

class Details extends React.Component {
  // the following code is thee standard way to predefine state, but its cumbersome
  // we configured babel and eslint to allow us to do the shorthand just this.stat = {things}
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       loading: true
  //     };
  //   }
  state = {
    showModal: false,
    loading: true
  };

  toggleModal = () =>
    this.setState({
      showModal: !this.state.showModal
    });

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city} city on , ${pet.contact.state} state`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading your new FREND</h1>;
    }

    const {
      name,
      animal,
      location,
      description,
      breed,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt This {animal}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Want to adopt {name}</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}> YES </button>
                <button onClick={this.toggleModal}> HELL YESSSSSS </button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;

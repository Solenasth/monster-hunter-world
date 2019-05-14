import React from "react";
// eslint-disable-next-line import/no-unresolved
import Pet from "./Pet";
import pf from "petfinder-client";
import SearchBox from "./SearchBox.jsx";

import { Consumer } from "./SearchContext.jsx";

const petfinder = pf({
  //KEY: process.env.API_KEY
});

class Results extends React.Component {
  //this is to call the constryctor of react component, and we need to pass props with super
  constructor(props) {
    super(props);
    //define the initial state
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    this.search();
  }
  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;

        //this code is to manage the api response non importante largely
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        //TO APPLY CHANGES< we need to inform react, basicaly update the state, this updates only the
        //needed variables, and can be short handed
        // example: this.setstate({variable: variable}) can be this.setstate({variable}) becasue they share the same name

        this.setState({
          pets
        });
      });
  };
  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city} city on: ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
        {/* a usefull snippet to dump code into the DOM */}
        {/* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */}
      </div>
    );
  }
}
//in order to use context inside lifecycle methods we need access to consumer, consumer however is only accesible in render
//what we are going to do is wrap the entire component in a consumer in the return, instead of returning it plainly,
//then we will anex the props that it has from the parent withouth touching anything using spread
//and then adding what we need for context to work,
//after that, the exported component will have access to the context.

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("you just clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adotp Me!"
      ),
      React.createElement(Pet, {
        name: "Carlitos",
        animal: "dog",
        breed: "golden toller"
      }),
      React.createElement(Pet, {
        name: "MOKAILES",
        animal: "gato",
        breed: "EL KAKAS"
      }),
      React.createElement(Pet, {
        name: "tete",
        animal: "gatete",
        breed: "gato roto"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

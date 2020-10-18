import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "2fe1e9fbb5004ff8a4c5312e01295edd",
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        entries: 0,
        joined: "",
      },
    };
  }

  calculateFaceLocation = (response) => {
    const clarifaiFace =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    const clarifaiName =
      response.outputs[0].data.regions[0].data.concepts[0].name;

    const inputImage = document.getElementById("inputImage");

    const width = Number(inputImage.width);
    const height = Number(inputImage.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
      name: clarifaiName,
    };
  };

  displayFace = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    fetch("https://warm-castle-11378.herokuapp.com/image", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: this.state.user.id }),
    })
      .then((response) => response.json())
      .then((entries) =>
        this.setState(Object.assign(this.state.user, { entries: entries }))
      );
    console.log(this.state);
    app.models
      .predict("e466caa0619f444ab97497640cefc4dc", this.state.input)
      .then((response) =>
        this.displayFace(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ isSignedIn: true });
    } else {
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: route });
  };

  loadUser = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    return (
      <div>
        <Particles className="particle" />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : this.state.route === "register" ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition image={this.state.imageUrl} box={this.state.box} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

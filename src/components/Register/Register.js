import React from "react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    fetch("https://fathomless-dusk-60206.herokuapp.com/register", {
      crossDomain: true,
      mode: "cors",
      method: 'POST',
      headers: {
    'Content-Type': 'application/json'
  },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => {
        console.log(response);
        return response.json()
      })
       .then((user) => {
         console.log(user);
        if (user.id) {
          this.props.onRouteChange("home");
          this.props.loadUser(user);
        }
      });
  };

  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 tc">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f3" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="flex justify-between">
              <input
                className="b pa3 input-reset b--black bg-transparent grow pointer f3 dib"
                type="submit"
                value="Register"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Register;

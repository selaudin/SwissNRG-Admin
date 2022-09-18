import React, {Component} from "react";
import "./css/main.css";
import "./css/util.css";
import Tilt from "react-tilt";
import Redirect from "react-router-dom/Redirect";
import loginPicture from "../assets/images/SwissNRG_3.png";

export default class Login extends Component {
state = {
    username: "",
    password: "",
    redirect: false,
    error: null
};

handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
}

async handleSubmit(e) {
    e.preventDefault();
    this.setState({
        redirect: true
    });

    //POST method
    // const response = await fetch(`http://84.201.140.28:8080/reg`, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'json'},
    //     body: JSON.stringify({user_email: this.state.username, user_password: this.state.password}),
    // });

    //GET method
    //const response =  await fetch(`http://localhost/api-shullani/administrator/find_administrator.php?username=${this.state.username}&password=${this.state.password}`);

    // const data = await response.json();
    // if (data.length !== 0) {
    //     localStorage.setItem('user', JSON.stringify(data));
    //     this.setState({
    //         redirect: true
    //     });
    // } else {
    //     this.setState({error: 'Incorrect username or password!'})
    // }
}

render() {
    if (localStorage.getItem('user') || (this.state.redirect)) {
        return (<Redirect to={'/Dashboard'}/>)
    }
    return (
        <React.Fragment>
            <div className="limiter">
                <div className="container-login100 notranslate">
                    <div className="wrap-login100">
                        <Tilt className="Tilt" options={{scale: 1.0}}>
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src={loginPicture} alt="IMG"/>
                            </div>
                        </Tilt>

                        <form className="login100-form" onSubmit={this.handleSubmit.bind(this)}>
                            <span className="login100-form-title">Admin Login</span>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"/>
              </span>
                            </div>

                            <div className="wrap-input100">
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"/>
              </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <p style={{color: 'red'}}>{this.state.error}</p>
                                <br/>
                                <button type="submit" className="login100-form-btn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </React.Fragment>
    );
}
}
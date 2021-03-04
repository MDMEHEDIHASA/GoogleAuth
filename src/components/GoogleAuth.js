import React from "react";
import {signIn,signOut} from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {
  //state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "906106836640-e6hp7151g6cfc1l58s46nafuo8dhgfu3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    }else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  onAuthChange = (isSignedIn) => {
    //console.log(this.props);
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
      //console.log(this.auth.currentUser.get().getId());
    }else{
      this.props.signOut();
    }
  };
  onSignInClick=()=>{
      this.auth.signIn();
  }
  onSignOutClick=()=>{
      this.auth.signOut();
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state)=>{
  //console.log(state);
  return{
    isSignedIn:state.authReducers.isSignedIn
  }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);

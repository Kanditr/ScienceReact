// import React, { Component } from "react";
// import firebaseConfig from "../config";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// class TestGoogleLogin extends Component {
//   state = { isSignedIn: false };
//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebaseConfig.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebaseConfig.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     callbacks: {
//       signInSuccess: () => false,
//     },
//   };
//   componentDidMount = () => {
//     firebaseConfig.auth().onAuthStateChanged((user) => {
//       this.setState({ isSignedIn: !!user });
//       console.log("user", user);
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         {this.state.isSignedIn ? (
//           <span>
//             <div>Signed In!</div>
//             <button onClick={() => firebaseConfig.auth().signOut()}>
//               Sign out!
//             </button>
//             <h1>Welcome {firebaseConfig.auth().currentUser.displayName}</h1>
//             <img
//               alt="profile picture"
//               src={firebaseConfig.auth().currentUser.photoURL}
//             />
//           </span>
//         ) : (
//           <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebaseConfig.auth()}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default TestGoogleLogin;

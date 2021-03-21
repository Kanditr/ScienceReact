// import React from "react";
// import firebaseConfig from "../config";

// var db = firebaseConfig.firestore();

// class Project extends React.Component {
//   state = {
//     users: null,
//   };

//   componentDidMount() {
//     console.log("mounted");
//     db.collection("User")
//       .get()
//       .then((snapshot) => {
//         const user = [];
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           user.push(data);
//         });
//         this.setState({ user: user });
//         console.log(snapshot);
//       })
//       .catch((error) => console.log(error));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Upperline</h1>
//         {this.state.user &&
//           this.state.user.map((user) => {
//             return (
//               <div>
//                 <p>{user.name}</p>
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }
// export default Project;

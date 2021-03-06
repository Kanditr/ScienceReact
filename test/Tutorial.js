let userList = document.querySelector("#userList");
let form = document.querySelector("#addUser");

// display data
function renderUser(doc) {
  let li = document.createElement("li");
  let Name = document.createElement("span");
  let City = document.createElement("span");
  let del = document.createElement("div");
  del.className = "del";

  li.setAttribute("data-id", doc.id);
  Name.textContent = doc.data().Name;
  City.textContent = doc.data().City;

  del.textContent = "x";

  li.appendChild(Name);
  li.appendChild(City);
  li.appendChild(del);

  userList.appendChild(li);

  //   delete data
  del.addEventListener("click", (e) => {
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("User").doc(id).delete();
  });
}

// read data
// db.collection("User")
//   .orderBy("Name")
//   .where("City", "==", "Bangkok")
//   .get()
//   .then((User) => {
//     User.docs.forEach((doc) => {
//       console.log(doc.data());
//       renderUser(doc);
//     });
//   });

// write data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("User").add({
    Name: form.Name.value,
    City: form.City.value,
  });

  //   reset input field
  form.Name.value = "";
  form.City.value = "";
});

// real-time database
db.collection("User")
  .orderBy("Name")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        renderUser(change.doc);
      } else if (change.type == "remove") {
        let li = userList.querySelector(`[data-id]=${change.doc.id}]`);
        userList.removeChild(li);
      }
    });
  });

/*window.addEventListener("load", () => {
    if (localStorage.getItem("user")) {
      window.location.replace("../index.html");
    }
  });
  
  import { auth, signInWithEmailAndPassword } from "./firebase.js";
  
  const loginHandler = async () => {
    try {
      // console.log("signUpHandler");
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      // console.log("email", email.value, password.value);
      const response = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log("respoonse", response.user.uid);
      localStorage.setItem("user", response.user.uid);
      window.location.replace("../index.html");
      // console.log(response, "response");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  
  window.loginHandler = loginHandler;*/
  
  
window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("./index.html");
  }
});


import { auth , signInWithEmailAndPassword} from "./firebase.js"
const loginHandler = async ()=>{
  try {
      const email = document.querySelector("#email")
      const password = document.querySelector("#password")
      const responce = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
      )
      console.log("responce" , responce.user.uid);
      localStorage.setItem("user",responce.user.uid)
      window.location.href = "./index.html"
  } catch (error) {
      alert("error", error.message);
  }
}


window.loginHandler = loginHandler;
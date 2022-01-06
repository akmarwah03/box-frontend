document
  .querySelector("#register .submit")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(e);
    const values = getRegisterValues();
    console.log(values);
    const tokens = await registerUser(values);
  });

document
  .querySelector("#login .submit")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const values = getLoginValues();
    const tokens = await loginUser(values);
    console.log(tokens);
    if (tokens) {
      //save to local storage
    }
  });

const getRegisterValues = () => {
  return {
    name: document.querySelector("#register .name").value,
    password: document.querySelector("#register .password").value,
    email: document.querySelector("#register .email").value,
  };
};

const getLoginValues = () => {
  return {
    password: document.querySelector("#login .password").value,
    email: document.querySelector("#login .email").value,
  };
};

const registerUser = async (values) => {
  const response = await fetch("http://192.168.1.122:8000/auth/signup", {
    body: JSON.stringify(values),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Register Response", response);
  return await response.json();
};

const loginUser = async (values) => {
  const response = await fetch("http://localhost:8000/auth/signin", {
    body: JSON.stringify(values),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Login Response", response);
  return await response.json();
};

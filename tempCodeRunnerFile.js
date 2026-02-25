hai() {
  let username = "harsh"; // local variable
  console.log(this);           // ❗️ undefined in strict mode
  console.log(this.username);  // ❗️ TypeError: Cannot read property 'username' of undefined
}

chai();
let myFetch = require("./umd");

myFetch.init({
    address: "https://icanhazdadjoke.com/j/",
    key: "1234"
});

myFetch.get("R7UfaahVfFd").then(result => console.log(result));


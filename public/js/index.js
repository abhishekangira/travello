let header = document.getElementsByClassName("header")[0];

console.log("yolo MFer");

// let functions = firebase.functions();

let mylog = firebase.functions().httpsCallable("log");

console.log(mylog("hi"));

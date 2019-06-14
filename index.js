import React, { Component } from 'react';
import './style.css';

//Logowanie
function logowanie() {
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;

  //validate input
  if (userName === "" && passWord === "") {
    alert("Please enter your Username and Password");
    return;
  }

if (passWord === "" && userName !== "") {
    alert("Please enter your Password: no value");
    return;
  }

if (userName === "" && passWord !== "") {
    alert("Please enter your Username: no value");
    return;
  }

   var total = "trying";

  document.getElementById("status").style.display = "block";
  document.getElementById("wynik").innerHTML = total;

}

//click to call function
document.getElementById("login").onclick = function() {
  logowanie();

};

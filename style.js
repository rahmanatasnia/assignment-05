let heart = document.querySelectorAll(".card .heart-icon");
let callBtn = document.querySelectorAll(".card .call-btn");
let copyBtn = document.querySelectorAll(".card .copy-btn");
let callHistoryContainer = document.getElementById("call-history");
let clearCallHistoryBtn = document.getElementById("clear-call-history-btn");

let heartCounted = 0;
let coinCounted = 100;
let copyCounted = 0;
let callHistory = [];
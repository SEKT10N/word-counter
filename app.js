//AUTHOR: SEKTION

window.onload = function () {
  document.querySelector("textarea").value = "";
};
var chars = [
  "\n",
  ",",
  ".",
  ";",
  "/",
  "=",
  "-",
  "+",
  "\\",
  "[",
  "]",
  "{",
  "}",
  "*",
  "%",
  "^",
  "\"",
  ":",
  "<",
  ">",
  "|"
];
var text = document.querySelector("textarea");
["keyup", "input", "click"].forEach((event) =>
  text.addEventListener(event, function () {
    var pgraph = document.querySelector("#word-count");
    var words = text.value;
	var characters = words.replaceAll('\n','');
    var lines = words.split("\n");
    lines = lines.length;
    for (let i = 0; i < chars.length; i++) {
      words = words.replaceAll(chars[i], " ");
    }
    words = words.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
      (words[i] != "" && words[i] != ";" && words[i] != "." && words[i] != "," && words[i] != ";") ? count +=1 : count;
    }
    pgraph.innerHTML =`Words:${count} Characters:${characters.length} Lines:${lines}`;
  })
);

const countTarget = document.querySelector("#word-count-input");
const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");

const count = function () {
  const characters = countTarget.value;
  const characterLength = characters.length;

  const words = characters.split(/[\n\r\s]+/g).filter(function (word) {
    return word.length > 0;
  });
  wordCount.innerHTML = words.length + " Words";
  characterCount.innerHTML = characterLength + " Characters";
};

count();

window.addEventListener(
  "input",
  function (event) {
    if (event.target.matches("#word-count-input")) {
      count();
    }
  },
  false
);

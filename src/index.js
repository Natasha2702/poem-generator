/*function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "roses are red, violets are blue, sugar is sweet and so are you",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);*/

  function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e6taed4cb9ef5dfoaff8f35a499504ef";
  let context =
    "You are a sweet romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with <strong> 'SheCodes AI' </strong> inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a english poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating ahttps://shecodespoemgenerator1.netlify.app/ poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
//Fetch quote data from JSON file
fetch("./website_data/text_data.json")
  .then((response) => response.json())
  .then((responseData) => displayQuote(responseData));

function displayQuote(data) {
  if (data.hasOwnProperty("quote")) {
    const myElement = document.getElementById("quoteMine");
    myElement.innerHTML = data.quote;
  }
}

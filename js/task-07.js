const inputChange = document.querySelector("input#font-size-control");
const abracadabra = document.querySelector("span#text");

inputChange.addEventListener("change", handleInputRange);
function handleInputRange(event) {
  abracadabra.style.fontSize = `${event.target.value}px`;
}

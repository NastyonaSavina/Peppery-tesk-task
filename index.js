
const addPairBtn = document.querySelector(".add-btn");
const newPairValue = document.querySelector(".input-place");
const pairList = document.querySelector(".pair-list");
const sortByNameBtn = document.querySelector(".sort-by-name-btn");
const sortByValueBtn = document.querySelector(".sort-by-val-btn");
const delBtn = document.querySelector(".del-btn");
const chosenItem = document.querySelectorAll(".pair-item");



let listOfValues = [];

addPairBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  let newPair = {};
  const cheackPair = newPairValue.value
    .trim()
    .split("=")
    .filter((word) => word != "");

  if (cheackPair.length !== 2) {
    newPairValue.value = "";
    return alert("Please, use format <name> = <value>");
  } else {
      newPair.name = cheackPair[0];
      newPair.value = cheackPair[1];

      listOfValues.push(newPair);
      newPairValue.value = "";
  }

    const markup = listOfValues
      .map(
        (pair) =>
          `<div class="form-field">
            <input type="checkbox"  class="pair-item" name="checkbox" value=${pair.name} id=${pair.name}>
            <label class="pair-item" for=${pair.name}>${pair.name} = ${pair.value}</label>
        </div>`
      )
      .join("");
     pairList.innerHTML = markup;
});


sortByNameBtn.addEventListener("click", () => {
    const sortedByName = listOfValues.sort((firstPair, secondPair) =>
      firstPair.name.localeCompare(secondPair.name)
    );
     const markup = sortedByName
       .map(
         (pair) =>
           `<div class="form-field">
            <input type="checkbox" class="pair-item" name="checkbox" value=${pair.name} id=${pair.name}>
            <label class="pair-item" for=${pair.name}>${pair.name} = ${pair.value}</label>
        </div>`
       )
       .join("");
     pairList.innerHTML = markup;

})

sortByValueBtn.addEventListener("click", () => {
  const sortedByValue = listOfValues.sort((firstPair, secondPair) =>
    firstPair.value.localeCompare(secondPair.value)
  );
    const markup = sortedByValue
      .map(
        (pair) => `<div class="form-field">
            <input type="checkbox" class="pair-item" name="checkbox" value=${pair.name} id=${pair.name}>
            <label class="pair-item" for=${pair.name}>${pair.name} = ${pair.value}</label>
        </div>`
      )
      .join("");
  pairList.innerHTML = markup;
});

chosenItem?.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});
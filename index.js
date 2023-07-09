
const addPairBtn = document.querySelector(".add-btn");
const newPairValue = document.querySelector(".input-place");
const pairList = document.querySelector(".pair-list");
const sortByNameBtn = document.querySelector(".sort-by-name-btn");
const sortByValueBtn = document.querySelector(".sort-by-val-btn");
const delBtn = document.querySelector(".del-btn");
const showXMLBtn = document.querySelector(".show-btn");



let listOfValues = [];

//Updating pair list function

function updateList(array) {
  const markup = array
    .map(
      (pair) =>
        `<label for=${pair.id} class="form-field"> <input type="checkbox" name="pair" value="" id=${pair.id}>${pair.name} = ${pair.value}</label>`
    )
    .join("");
  
  pairList.innerHTML = markup;
}



//Function for adding a new pair


addPairBtn.addEventListener("click",  (event) => {
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
      newPair.id = Math.ceil(Math.random() * 100);

      listOfValues.push(newPair);
      newPairValue.value = "";
  }

  updateList(listOfValues);
 
  
});

//Function for sorting by name



sortByNameBtn.addEventListener("click", () => {
    const sortedByName = listOfValues.sort((firstPair, secondPair) =>
      firstPair.name.localeCompare(secondPair.name)
    );
    updateList(sortedByName);
  


})

//Function for sorting by value


sortByValueBtn.addEventListener("click", () => {
  const sortedByValue = listOfValues.sort((firstPair, secondPair) =>
    firstPair.value.localeCompare(secondPair.value)
  );
    updateList(sortedByValue);

});


//Function for deleting


delBtn.addEventListener('click', () => {
  let checkboxes = document.querySelectorAll('input[name="pair"]:checked');
    
  let updatedlist = [];
  checkboxes.forEach((checkbox) => {
 
    updatedlist = listOfValues.filter((item) => item.id != checkbox.id);

  });
  updateList(updatedlist);
  listOfValues = updatedlist;
})


//Function for showing XML /in a directory to files for comparing HTML and XML formats

showXMLBtn.addEventListener('click', () => {

  const markup = listOfValues
    .map(
      (pair) =>
        `<label for="${pair.id}" class="form-field"><input type="checkbox"
            name="pair" value="" id="${pair.id}" />${pair.name} = ${pair.value}</label>`
    )
    .join("");
  pairList.innerHTML = markup;
  return alert("Well, yes, it's an XML format.");
})


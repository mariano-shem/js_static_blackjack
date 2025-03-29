let user = {
  name: "Juan",
  age: 0,
  country: "the Philippines"
}
myForm = document.querySelector("form[name=myform]")
mySentence = document.querySelector("#sentence")
myName = myForm["user-name"]
myAge = myForm["user-age"]
myCountry = myForm["user-country"]

function storeUser() {
  user.name = myName.value
  user.age = myAge.value
  user.country = myCountry.value

  mySentence.textContent = user.name + " is " + user.age + " years old and lives in " + user.country + "."
}



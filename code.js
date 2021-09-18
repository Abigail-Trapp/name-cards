let examplePerson = {
    firstName: "Homer",
    lastName: "Simpson",
    hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
    address: {
      number: 742,
      street: "Evergreen Terrace",
      city: "Springfield",
      state: "Illinois",
      zipcode: "12345",
    },
    "favorite color": "yellow",
  };
  
  let exampleNewPerson = {
    firstName: "Selena",
    lastName: "Midnight",
    hobbies: ["Walk in parks", "Playing with cats", "Pretending to be a vampire"],
    address: {
      number: 669,
      street: "Parker Avenue",
      city: "Salem",
      state: "Massachusetts",
      zipcode: "34893",
    },
    "favorite color": "dark red",
  };
  /*
  Using the function below, print the person to the page according 
  to the instructions on my.kenzie
  */
  
  function renderPerson(person) {
    // Your Code Here
  let card = document.createElement("div")
  card.classList.add("card")
  document.body.append(card)
  
  let homerSimpson = document.createElement("h2")
  homerSimpson.innerHTML = `${person.firstName} ${person.lastName}`
  card.append(homerSimpson)
  
  let hobbies = document.createElement("h4")
  hobbies.innerHTML = "Hobbies"
  card.append(hobbies)
  let ul = document.createElement("ul")
  card.append(ul)
  for (let i = 0; i < person.hobbies.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = `${person.hobbies[i]}`
    ul.append(li)
  }
  
  let shippingAddress = document.createElement("h4")
  shippingAddress.innerHTML = "Shipping Address"
  card.append(shippingAddress)
  
  let addressNumber = document.createElement("p")
  addressNumber.innerHTML = `<ul>${person.firstName} ${person.lastName}<ul>
  ${person.address.number} ${person.address.street}
  <ul>${person.address.city}, 
  ${person.address.state} 
  ${person.address.zipcode}</ul>`
  card.append(addressNumber)
  
  let color = document.createElement("h4")
  color.innerHTML = "Favorite Color"
  card.append(color)
  
  let yellow = document.createElement("p")
  yellow.innerHTML = `${person["favorite color"]}`
  card.append(yellow)
  }
  
  
  renderPerson(examplePerson);
  /*
  ---------------------------------------------------------------------------
  Part Two
  
  Create a new person.  
  
  Your object should look very similar to the Person object above!
  But you should use different values.  Put whatever you want for the values.
  
  Call renderPerson() and pass your new person object in as an argument to 
  render your person to the page.
  */
  
  // Your Code Here
  
  
  renderPerson(exampleNewPerson);
  
  
  /*
  ---------------------------------------------------------------------------
  Part Three
  
  Modify the person object to change them to bart.  
  Follow the instruction on my.kenzie
  */
  
  function changePersonToBart(person) {
  let newPerson = person
  newPerson.firstName = "Bart"
  //console.log(parts.splice(1)) outputs Bart
  newPerson.hobbies[newPerson.hobbies.length -1] = "Skateboarding"
  //console.log(partsHobby) outputs hobbies with skateboarding
  newPerson["favorite color"] = "orange"
  //console.log(color) outputs orange
  
  return newPerson
  }
  
  let Bart = changePersonToBart(examplePerson)
  renderPerson(Bart)
  
  
  /*
  ---------------------------------------------------------------------------
  Part Four (Optional Practice)
  
  Create your own object!
  */
  let exampleDog = {
    firstName : "Sprinkles",
    age: 2 ,
    favoriteTreats: ["carrots","chicken bits","biscuits"],
    adoption : {
      shelter: "Almost Home Adoptions", 
      city: "Denver",
      state: "Colorado",
      adoptionDate: "May 28",
    },
  "dog breed": "Corgi/Chihuahua mix"
  }
  // Your Code Here
    function renderDog(dog) {
    
    let card = document.createElement("div")
    card.classList.add("card")
    document.body.append(card)
    
    let sprinkles = document.createElement("h2")
    sprinkles.innerHTML = `${dog.firstName}`
    card.append(sprinkles)
  
    let age = document.createElement("h4")
    age.innerHTML = `Age: ${dog.age}`
    card.append(age) 
  
    let treats = document.createElement("h4")
    treats.innerHTML = "Favorite Treats"
    card.append(treats)
    let ul = document.createElement("ul")
    card.append(ul)
    for (let i = 0; i < dog.favoriteTreats.length; i++) {
      let li = document.createElement("li")
      li.innerHTML = `${dog.favoriteTreats[i]}`
      ul.append(li)
    }
    
    let adoption = document.createElement("h4")
    adoption.innerHTML = "Adoption"
    card.append(adoption)
    
    let info = document.createElement("p")
    info.innerHTML = 
  `<ul>${dog.adoption.shelter}
    <ul>${dog.adoption.city}, ${dog.adoption.state}</ul>
    ${dog.adoption.adoptionDate}`
    card.append(info)
    
    let breed = document.createElement("h4")
    breed.innerHTML = "Breed"
    card.append(breed)
    
    let mix = document.createElement("p")
    mix.innerHTML = `${dog["dog breed"]}`
    card.append(mix)
  }
  renderDog(exampleDog)
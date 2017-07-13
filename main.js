//  Loop to grab all info
// data is called customers
let _people = document.getElementById('person')

for (var i = 0; i < customers.results.length; i++) {
  let personBox = document.createElement('div')
  personBox.className = 'personBox'

  let person = customers.results[i]
  let pic = document.createElement('img')
  // pic.innerHTML = `${person.picture.medium}`
  // pic.setAttribute = ('src', person.picture.medium)
  pic.src = `${person.picture.large}`
  pic.className = 'pic'

  personBox.appendChild(pic)

  let element = document.createElement('li')
  element.innerHTML = person.name.first
  element.innerHTML += ` ${person.name.last}`
  element.className = 'h3'

  personBox.appendChild(element)

  let email = document.createElement('li') // <li>
  email.innerHTML = `${person.email} <br /><br />` // <li>email@whatever.com</li>
  email.className = 'email'
  personBox.appendChild(email) //adds to page

  let address1 = document.createElement('li')
  address1.innerHTML = person.location.street
  address1.className = 'address'
  personBox.appendChild(address1)

  let address2 = document.createElement('li')
  address2.innerHTML = `${person.location.city}, `
  address2.innerHTML += `${person.location.state} `
  address2.innerHTML += `${person.location.postcode}`
  address2.className = 'address'
  personBox.appendChild(address2)

  let phone = document.createElement('li')
  phone.innerHTML = `${person.phone} <br /><br />`
  personBox.appendChild(phone)

  let ssn = document.createElement('li')
  ssn.innerHTML = `${person.id.value} <br /></br />`
  ssn.className = 'ssn'
  personBox.appendChild(ssn)

  _people.appendChild(personBox)
}

// 1. Create a class for email
// Add line break after email
// Loop through address, display to screen
// Loop through phone number, display to screen
// Add line break
// Loop through SSN, display to screen

// 2. Create a class for address
// Create a class for SSN
// Create background-image

// Create flexbox, place people around screen

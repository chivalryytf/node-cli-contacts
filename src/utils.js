const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = './db/contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(path.join(contactsLocation),{encoding:'utf8'});
  return JSON.parse(contacts);
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  // const pastContacts = getContacts();
  // const fullContacts = {...pastContacts,...contacts}
  const contactsJSON = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(path.join(contactsLocation),contactsJSON);
  console.log(contacts,contactsJSON);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}


const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(), //uuid -> universal id
    name: "João",
    email: "joao@example.com",
    phone: "123-456",
    category_id: v4(),
  },
  {
    id: v4(), //uuid -> universal id
    name: "João",
    email: "joao@example.com",
    phone: "123-456",
    category_id: v4(),
  },
];

class ContactsRespository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }

  findById(id) {
    return contacts.find((contacts) => contacts.id === id);
  }

  delete(id) {
    return new Promise((resolve) => {
        contacts = contacts.filter((contact) => contact.id !== id);
        resolve()
    })
  }
}

module.exports = new ContactsRespository();

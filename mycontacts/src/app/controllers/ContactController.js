const ContactRepository = require("../repositorios/ContactsRepository");

class ContactController {

  home(req, res) {
    res.status(200).end("<h1>Hello Word!</h1>")
  }
  
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    // Obter um registro
    const contact = await ContactRepository.findById(id);
    console.log(contact);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: "User not found" });
    }

    response.json(contact);
  }

  store(request, response) {
    // Criar novo registro
  }

  update(request, response) {
    // Editar um registro
  }

  async delete(request, response) {
    const { id } = request.params;
    // Deletar um registro
    const contact = await ContactRepository.findById(id);
    console.log(contact);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: "User not found" });
    }

    await ContactRepository.delete(id);
    response.sedStatus(204);
  }
}

// Singleton
module.exports = new ContactController();

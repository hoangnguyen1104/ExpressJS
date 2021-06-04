const personDao = require("../dao/person");

class PersonService {
    createPesron(personDto){
        const {firstName, lastName, email} = personDto;
        return personDao.createPesron(firstName, lastName, email);
    }
}

module.exports = new PersonService();
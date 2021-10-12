class Managerr extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      officeNumber = this.officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}











module.exports = Manager;
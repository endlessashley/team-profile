class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      school = this.school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}











module.exports = Intern;
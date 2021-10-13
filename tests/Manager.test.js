const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("returns the manager's office number as entered", () => {
            const officeNumber = "113";
            const manager = new Manager("Addie", "1", "addie@adderson.com", officeNumber);
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("returns Manager", () => {
            const role = "Manager"
            const manager = new Manager ("Addie", "1", "addie@adderson.com", "113")
            expect (manager.getRole()).toEqual(role)
        })
    })
})
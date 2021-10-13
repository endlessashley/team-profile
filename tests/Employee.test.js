const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("returns the employee name entered", () => {
            const name = "Addie";
            const employee = new Employee(name, "1", "addie@adderson.com");
            expect(employee.getName()).toEqual(name);
        });
    });
    describe("getID", () => {
        it("returns employee id", () => {
            const id = 1;
            const employee = new Employee("Addie", id, "addie@adderson.com");
            expect (employee.getId()).toEqual(id)
        });
    });
    describe("getEmail", () => {
        it("returns the eployee email entered", () => {
            const email = "addie@adderson.com";
            const employee = new Employee("Addie", "1", email);
            expect (employee.getEmail()).toEqual(email)
        })
    })
    describe("getRole", () => {
        it("returns Employee", () => {
            const role = "Employee"
            const employee = new Employee ("Addie", "1", "addie@adderson.com")
            expect (employee.getRole()).toEqual(role)
        })
    })
})
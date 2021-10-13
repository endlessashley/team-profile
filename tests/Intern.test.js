const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getSchool", () => {
        it("returns the intern's school entered", () => {
            const school = "Harvard";
            const intern = new Intern("Addie", "1", "addie@adderson.com", school);
            expect(intern.getSchool()).toEqual(school);
        });
    });
    describe("getRole", () => {
        it("returns the intern's role as Intern", () => {
            const role = "Intern";
            const intern = new Intern("Addie", "1", "addie@adderson.com", "Harvard");
            expect(intern.getRole()).toEqual(role);
        });
    });
})
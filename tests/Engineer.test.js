const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getGithub", () => {
        it("returns the Github username enteerd", () => {
            const github = "amazingaddie";
            const engineer = new Engineer("Addie", "1", "addie@adderson.com", github);
            expect(engineer.getGithub()).toEqual(github);
        });
    });
    describe("getRole", () => {
        it("returns the engineer's role as Engineer", () => {
            const role = "Engineer";
            const engineer = new Engineer("Addie", "1", "addie@adderson.com", "amazingaddie");
            expect(engineer.getRole()).toEqual(role);
        });
    });
})
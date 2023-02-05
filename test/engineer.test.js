const Engineer = require("../lib/engineer");

test("Tests github username creation", () => {
    const testGithub = "Lindstdb";
    const employeeInstance = new Engineer("Dillon", 2, "notmyemail@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Tetsts getGithub returns github username", () => {
    const testGithub = "Lindstdb";
    const employeeInstance = new Engineer("Dillon", 2, "notmyemail@yahoo.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Tests role returns the role value", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Dillon", 2, "notmyemail@gmail.com", "Lindstdb");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
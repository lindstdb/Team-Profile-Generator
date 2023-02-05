const Manager = require("../lib/manager");

test("Tests if an office number has been rendered.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Dillon", 2, "notmyemail@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Tests getOfficeNumber returns office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Dillon", 2, "notmyemail@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Tests getRole returns role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Dillon", 2, "notmyemail@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});
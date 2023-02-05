const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Dillon";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Dillon", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "notmyemail@gmail.com";
    const employeeInstance = new Employee("Dillon", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Tests name is returned through getName method.", () => {
    const testName = "Dillon";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Tests Id is returned through getId method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Dillon", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Tests email is returned through getEmail method.", () => {
    const testEmail = "notmyemail@gmail.com";
    const employeeInstance = new Employee("Dillon", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Tests role is returned by getRole function", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Dillon", 2, "notmyemail@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="col">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title text-centered">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            <div class="card-body">
                    <p class="card-text">ID: ${manager.getId()}</p>
                    <p class="card-text">Email: <a href="Email:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
            </div>
            </div>
        </div>
        `;
    };


    const generateEngineer = engineer => {
        return `
        <div class="col">
        <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title text-centered">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        <div class="card-body">
                <p class="card-text">ID: ${engineer.getId()}</p>
                <p class="card-text">Email: <a href="Email:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="card-text">Github: <a href="https://github.com/${engineer.getGithub()}" target="blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
        </div>
        </div>
        </div>
    </div>
        `
    };

    const generateIntern = intern => {
        return`
        <div class="col">
        <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title text-centered">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        <div class="card-body">
                <p class="card-text">ID: ${intern.getId()}</p>
                <p class="card-text">Email: <a href="Email:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
        </div>
        </div>
    </div>
        `;
    };

    const html =[];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Dream Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jubotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">Dream Team</h1>
            </div>
        </div>
    </div>
    <div class="card-group">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
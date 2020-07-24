console.log('js');

$(document).ready(readyNow)


let employees = []

function readyNow() {
    // console.log('JQ Works');


    $('#empInfoIn').on('click', submitHandle)


}

function submitHandle() {
    console.log('Submit click');

    let employeeInfo = {
        fName: $('#fNameIn').val(),
        lName: $('#lNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        anualSalary: $('#anualSalIn').val()
    }
    console.log(employeeInfo);
    employees.push(employeeInfo);
    console.log(employees);

    appendInfoToDom();
    
}

function calculateMonthly( empSalary){
    console.log('in calculateMonthly');
    let monthlyCosts = 0;

    for( let salary of employees ) {
        monthlyCosts += Math.floor(salary.anualSalary) / 12
        $('#totalMonthly').empty()
        $('#totalMonthly').append(`
            Total Monthly: ${monthlyCosts}
        `)
    }
    if(monthlyCosts > 20000 ){
        console.log('Over budget');
        $('#totalMonthly').addClass("overBudget" );
    }
    console.log(monthlyCosts);
    
}

// append array to the DOM
function appendInfoToDom() {
    console.log('Appending DOM');

    $('.tableEmpInfo').empty();

    for (let employee of employees) {
        $('.tableEmpInfo').append(`
            <tr>
                <td> ${employee.fName} </td>
                <td> ${employee.lName} </td>
                <td> ${employee.id} </td>
                <td> ${employee.title} </td>
                <td> $${employee.anualSalary} </td>
                <td><button>Delete</button></td>
            <tr>    
        `)
    }
    calculateMonthly(employees.anualSalary);
}







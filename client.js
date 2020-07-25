console.log('js');

$(document).ready(readyNow)


let employees = []

function readyNow() {
    // console.log('JQ Works');


    $('#empInfoIn').on('click', submitHandle);
    $('.tableEmpInfo').on('click', '.deleteBtn', deleteEmployee);
}

function deleteEmployee() {
    console.log('delete btn clicked');
    $(this).closest('tr').remove();
    for (let i = 0; i < employees.length; i++) {
        console.log(employees);
        $(this).closest('tr').removeData(employees.splice(i, 1));
    } // end for
    console.log('new array with employees', employees);
    let newSalaryTotal = 0
    for( let newTotal of employees ) {
        newSalaryTotal += newTotal.annualSalary/12
        console.log('new monthly total', newSalaryTotal);
        
    }
} // end deleteEmployee

function submitHandle() {
    console.log('Submit click');

    let employeeInfo = {
        fName: $('#fNameIn').val(),
        lName: $('#lNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalIn').val()
    }
    console.log(employeeInfo);
    employees.push(employeeInfo);
    console.log(employees);

    // $('#fNameIn').val('');
    // $('#lNameIn').val('');
    // $('#idIn').val('');
    // $('#titleIn').val('');
    // $('#annualSalIn').val('');

    appendInfoToDom();

}// end submitHandle

function calculateMonthly(empSalary) {
    console.log('in calculateMonthly');
    let monthlyCosts = 0;

    for (let salary of employees) {
        monthlyCosts += salary.annualSalary / 12
        $('#totalMonthly').empty();
        $('#totalMonthly').append(`
            Total Monthly: ${monthlyCosts.toFixed(2)}
        `);
    }
    if (monthlyCosts > 20000) {
        console.log('Over budget');
        $('#totalMonthly').addClass('overBudget');
    } else {
        $('#totalMonthly').addClass('underBudget');
        $('#totalMonthly').removeClass('overbudget')
    } // end conditional
    console.log(monthlyCosts);

}// end calculateMonthly

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
                <td> $${employee.annualSalary} </td>
                <td><button class="deleteBtn">Delete</button></td>
            <tr>    
        `)
    } // end for
    calculateMonthly(employees.annualSalary);
} // end appendInfoToDom







// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = ''
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}

function setBestCustomer(a = 'not bob') {
    bestCustomer = a
}
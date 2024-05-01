const accountId = 14491
let account_email = "dev@gmail.com" // Use let for variables
var accountPassword = "2425"  
accountCity = "delhi"
let accountState;

// accountId = 11553 //not allowed

account_email = "dev242@gmail.com"
accountPassword = "5343"
accountCity = "Noida"

/* prefer not to use var
because of issue in block scope and functional scopes */

console.log(accountId)
console.table([accountId,accountPassword,accountCity, accountState])

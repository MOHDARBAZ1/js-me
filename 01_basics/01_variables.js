const accountId = 12453;
let accountEmail = 'arbaz@google.com'
var accountPassword = "12345"
accountCity = "Delhi"
let accountState


// Prefer not to use var because of issue in block scope and functional scope

accountEmail = "arbaz@yahoo.com"
accountPassword = "57689"
accountCity = 'Moradabad'

// accountId = 23 not allowed for constant
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
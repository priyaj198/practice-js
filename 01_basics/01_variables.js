const accountId = 14453
let accountEmail = "chauhan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //Not Allowed

accountEmail = "ch@gmail.com"
accountPassword = "1242443"
accountCity = "banglore"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
var customerName = 'bob'
const leastFavoriteCustomer = "deem"

function upperCaseCustomerName(){
    const UpperCustomer = customerName.toUpperCase();
    console.log(UpperCustomer, "Its working") //Works in Console.log()
    return UpperCustomer //Does not work in return
    
}

function setBestCustomer(){
    let bestCustomer = "not bob"
    console.log(bestCustomer, "setBest")
    return bestCustomer
}

function overwriteBestCustomer(){
    let bestCustomer = "maybe bob"
    console.log(bestCustomer, "Overwrite")
    return bestCustomer
}

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = "kadeem"
    return leastFavoriteCustomer
}
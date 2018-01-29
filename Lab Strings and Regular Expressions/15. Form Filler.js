function printReplacedPlaceholders(username, email, phoneNumber, params) {
    let placeHolers = {
         username: /<![A-Za-z]+!>/g,
         email: /<@[A-Za-z]+@>/g,
        phoneNumber: /<\+[A-Za-z]+\+>/g
    }
     let result = params.join('\n')
        .replace(placeHolers.username, username)
         .replace(placeHolers.email, email)
         .replace(placeHolers.phoneNumber, phoneNumber)
     console.log(result)
 }
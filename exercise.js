const number = 5;

let promise = new Promise((resolve, reject) => {
    if(number > 10) {
        return resolve(number);
    } else return reject(new Error('Errore.'));
})

promise.then(() => console.log(number)).catch((err) => console.error(err));
const os = require('os');
// console.log(os.hostname);;
//user info
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds
console.log(`System uptime is ${os.uptime()} in seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
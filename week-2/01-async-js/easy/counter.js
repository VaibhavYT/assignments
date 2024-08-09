let count = 0;

// setInterval(() => {
//     count++;
//     console.log(count);
// }, 1000);

// console.log(count);

function counter(params) {
    count++;
    setTimeout(() => {
        counter(count);
        console.log(count);
    }, 1000);
}


counter(count);
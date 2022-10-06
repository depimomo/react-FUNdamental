const one = (callback) => {
    setTimeout(() => {
        console.log('one');
        callback();
    }, 5000);
};

const two = (callback) => {
    setTimeout(() => {
        console.log('two');
        callback();
    }, 1000);
};

const three = (callback) => {
    setTimeout(() => {
        console.log('three');
        callback();
    }, 3000);
};

const four = (callback) => {
    console.log('four');
};

one(() => {
    two(() => {
        three(four);
    });
});

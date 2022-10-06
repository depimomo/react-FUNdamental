const isKayoHealthy = true;

const simplePromise = new Promise((resolve, reject) => {
    // HIT API (get data)
    // post data
    // edit data
    // kalkulasi

    if (isKayoHealthy) {
        const successMessage = 'berhasil berhasil hore';
        resolve(successMessage);
    } else {
        const failMessage = 'gagal';
        reject(failMessage);
    }
});

simplePromise
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

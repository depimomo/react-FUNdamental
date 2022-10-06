const uploadImage = (imageFile) => {
    return new Promise((resolve, reject) => {
        if (imageFile == '' || imageFile == undefined) {
            reject('Image not found!');
        } else {
            console.log(`uploading ${imageFile}`);
            const image = `fs-${imageFile}`;
            resolve(image);
        }
    });
};

const cropImage = (image) => {
    return new Promise((resolve, reject) => {
        if (image == '' || image == undefined) {
            reject('Image not found!');
        } else {
            console.log(`cropping ${image}`);
            const croppedImage = `${image}-crop`;
            resolve(croppedImage);
        }
    });
};

const addWatermark = (croppedImage) => {
    return new Promise((resolve, reject) => {
        if (croppedImage == '' || croppedImage == undefined) {
            reject('Image not found!');
        } else {
            console.log(`watermarking ${croppedImage}`);
            const watermarkedImage = `${croppedImage}-wm`;
            resolve(watermarkedImage);
        }
    });
};

// nested promise
uploadImage('Bando', (image) =>
    cropImage(image, (croppedImage) =>
        addWatermark(croppedImage, (watermarkedImage) => {
            console.log(`done ${watermarkedImage}`);
        })
    )
);

// with .then
uploadImage('selfie')
    .then((x) => cropImage(x))
    .then((y) => addWatermark(y))
    .then((z) => console.log(z))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'));

// with async - await
const insta = async (image) => {
    try {
        const uploadedImage = await uploadImage(image);
        const watermarkedImage = await addWatermark(uploadedImage);
        const croppedImage = await cropImage(watermarkedImage);

        console.log(croppedImage);
    } catch (err) {
        console.log(err);
    }
};

insta('fotokuda');

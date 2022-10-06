const uploadImage = (imageFile, nextStep) => {
    console.log('uploading ' + imageFile);
    const image = 'fs-' + imageFile;
    nextStep(image);
};

const cropImage = (image, nextStep) => {
    console.log('cropping ' + image);
    const croppedImage = image + '-crop';
    nextStep(croppedImage);
};

const addWatermark = (croppedImage, nextStep) => {
    console.log('watermarking ' + croppedImage);
    const watermarkedImage = croppedImage + '-wm';
    nextStep(watermarkedImage);
};

uploadImage('selfie', (x) => {
    cropImage(x, (y) => {
        addWatermark(y, (z) => {
            console.log(z);
        });
    });
});

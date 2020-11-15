let fileNamesData = [];
function loadThisFile(fileData, index) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
            const fileReadData = fileReader.result;
            fileNamesData.push({
                fileName: fileData.name,
                index,
            })
            resolve(fileReadData);
        });
        fileReader.addEventListener('error', () => {
            reject(`Something error in file loading :: STATE: ${fileReader.readyState}`);
        });
        fileReader.readAsDataURL(fileData);
    });
}

async function loadFile(inputTarget) {
    let promiseArr = [];
    for (let i = 0; i < inputTarget.files.length; i++) {
        const file = inputTarget.files.item(i);
        promiseArr.push(loadThisFile(file, i));
    }
    const loadedFiles = await Promise.all(promiseArr);
    return { loadedFiles, fileData: fileNamesData };
}

export default loadFile;
import _ from 'lodash'
import { loadThisFile } from './fileInputeLoader'
const data = require('../config.json');

class AssetLoader {
    constructor() {
        this.loadedAssets = [];
        this.fileData = [];
        this.loadedFiles = [];
        window.loadedAssets = this.loadedAssets;
        window.data = data;
    }

    async loading(name, index, result) {
        const blobData = await result.blob();
        const urlResult = await loadThisFile(blobData, index)

        this.fileData.push({
            fileName: name,
            index,
            data: urlResult
        });
    }

    async loadAsset(callback = _.noop) {
        const allFetchPromis = [];

        _.forEach(data, album => {
            album.forEach(({ url, name, index }) => {
                const bindedFunction = this.loading.bind(this, name, index);
                allFetchPromis.push(
                    fetch(url, {
                        cache: 'force-cache',
                    }).then(bindedFunction));
            })
        });
        try {
            await Promise.all(allFetchPromis);
            console.log('FETCHED ALL ASSETS');
            callback();
        } catch (error) {
            console.error('Got this error:::SORRY ', error)
        }
    }
}

const assetLoader = new AssetLoader();
export default assetLoader;
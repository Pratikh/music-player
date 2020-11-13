import _ from 'lodash'
const data = require('../config.json');

class AssetLoader {
    constructor() {
        this.loadedAssets = [];
        window.loadedAssets = this.loadedAssets;
        window.data = data;
    }

    async loading(name,result){
        const blobData = await result.blob();
        const loadedData = {
            name,
            data:blobData
        }
        this.loadedAssets.push(loadedData);
        console.log('aaa')
    }

    async loadAsset(callback = _.noop) {
        const allFetchPromis = [];

        _.forEach(data,album => {
            album.forEach(({ url, name }) => {
                const bindedFunction = this.loading.bind(this,name);
                allFetchPromis.push(
                    fetch(url, {
                        cache: 'force-cache',
                    }).then(bindedFunction));
            })
        });
        try{
            await Promise.all(allFetchPromis);
            console.log('FETCHED ALL ASSETS');
            callback();
        }catch(error){
            console.error('Got this error:::SORRY ',error)
        }
    }
}

const assetLoader = new AssetLoader();
export default assetLoader;
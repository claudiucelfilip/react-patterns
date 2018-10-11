import { observable, computed, action } from 'mobx';


export default class TableStore {
    @observable columns;

    constructor(localStoreKey) {
        this.localStoreKey = localStoreKey;
        this.columns = JSON.parse(localStorage[this.localStoreKey] || '{}');
    }
    @action setColumn(key, value) {
       this.columns[key] = value;
       localStorage[this.localStoreKey] = JSON.stringify(this.columns);
    }

    @computed get restrictedColumns() {
        return Object.keys(this.columns)
            .filter(key => this.columns[key] === false);
    }
}
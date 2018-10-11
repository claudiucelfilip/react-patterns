import { observable, computed, action } from 'mobx';


export default class SongsStore {
    @observable songs = [];
    @observable state = 'pending';

    constructor() {
        this.fetchSongs();
    }

    @action fetchSongs() {
        this.state = 'pending';
        fetch('http://hidden-haze-247.getsandbox.com/songs')
            .then(res => res.json())
            .then(action(res => {
                this.songs = res;
                this.state = 'done';
            }));
    }

    @computed get tracks() {
        return this.songs.Tracks || [];
    }
}
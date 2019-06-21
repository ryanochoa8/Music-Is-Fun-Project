export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template() {
        return `
        <div class="col-4 text-center>
            <div class="card bg-light my-3>
            <img src="${this.albumArt}" class="card-img-top pt-1 rounded" alt="album artwork">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Song Title:</b> ${this.title}</li>
                    <li class="list-group-item"><b>Artist:</b> ${this.artist}</li>
                    <li class="list-group-item"><b>Collection:</b> ${this.collection}</li>
                    <li class="list-group-item"><b>Price:</b> $${this.price}</li>
                </ul>
                    <div class="row justify-content-center py-2">
                        <audio controls src="${this.preview}" type="audio/mpeg"></audio>
                    </div>
                </div>
            </div>
        </div>`
    }
} 
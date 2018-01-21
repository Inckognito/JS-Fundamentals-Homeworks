function nowPlaying(data) {
    let trackName = data[0]
    let artistName = data[1]
    let duration = data[2]

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`)

}
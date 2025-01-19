function high(x) {
    let words = x.split(" ")
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let pointsArray = []

    words.forEach((word) => {
        let letters = word.split("");
        let score = 0
        let letterpoints = 0

        letters.forEach((letter) => {
            let value = (alphabet.indexOf(letter) + 1);

            letterpoints += value
            return letterpoints
        })

        score += letterpoints
        pointsArray.push({ word, score })
    })

    let highscore = pointsArray[0].score;
    for (let i = 1; i < pointsArray.length; i++) {
        if (pointsArray[i].score > highscore) {
            highscore = pointsArray[i].score;
        }
    }
    
    let position = pointsArray.map((word) => word.score).indexOf(highscore)
    biggestWord = pointsArray[position]

    return biggestWord.word
}
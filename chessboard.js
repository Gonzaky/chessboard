const chessboard = () => {
    //  code goes here

    const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let chessboardArray = [];

    for(let i= 0; i< letterArray.length; i++) {
        chessboardArray[i] = letterArray.map((letter, h) => {
            return `${letterArray[i]} - ${h + 1}`
        });
    };
    return chessboardArray
}

module.exports = chessboard;
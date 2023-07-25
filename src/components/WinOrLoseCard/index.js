// Write your code here.
import './index.css'
const WinOrLoseCard = props =>{
    const {hasWon,onClickPlayAgain,score}=props
    const winLoseImgUrls = hasWon ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png" : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
    const gameResult = hasWon ? "You Won" : "You Lose"
    const scoreStatus = hasWon ? "Best Score" : "Score"
    return(
        <div className="win-lose-container">
        <div>
        <h1 className="status">{gameResult}</h1>
        <p className="score">{scoreStatus}</p>
        <p className="score-num">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={onClickPlayAgain}>Play Again</button>
        </div>
        <img src={winLoseImgUrls} className="img-urls" alt="win or lose"/>
        </div>
    )
}
export default WinOrLoseCard

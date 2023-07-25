// Write your code here.
import './index.css'
const NavBar = props => {
    const {score,topScore,isGameInProgress}=props
    return(
        <nav className="navbar">
        <div className="header">
        <div>
        <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo" className="logo"/>
        <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
        <div>
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
        </div>
        )}
        </div>
        </nav>
    )
}
export default NavBar

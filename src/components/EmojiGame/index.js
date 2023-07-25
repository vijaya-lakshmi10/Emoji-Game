/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component{
  state={
    clickedEmojisList:[],
    isGameInProgress:true,
    topScore:0
  }

getShuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

restartGame=()=>{
  this.setState({clickedEmojisList:[],isGameInProgress:true})
}

displayScoreCard=()=>{
  const {emojisList}=this.props
  const {clickedEmojisList}=this.state
  const hasWon=emojisList.length===clickedEmojisList.length
  return(
    <WinOrLoseCard hasWon={hasWon} onClickPlayAgain={this.restartGame} score={clickedEmojisList.length}/>
  )
}

setTopScoreForGame=(score)=>{
  const {topScore}=this.state
  let updatedTopScore=topScore
  if(score>topScore){
    updatedTopScore=score
  }
  this.setState({topScore:updatedTopScore, isGameInProgress:false})
}

clickOnEmoji=id=>{
  const {emojisList}=this.props
  const {clickedEmojisList}=this.state
  const isEmojiPresent=clickedEmojisList.includes(id)
  const clickedEmojisListLength=clickedEmojisList.length
  if(isEmojiPresent){
    this.setTopScoreForGame(clickedEmojisListLength)
  }
  else{
    if(emojisList.length-1=== clickedEmojisListLength){
      this.setTopScoreForGame(emojisList.length)
    }
    this.setState(prevState=>({
      clickedEmojisList:[...prevState.clickedEmojisList,id]
    }))
  }
}

displayEmojisList=()=>{
  const shuffledEmojisList =this.getShuffledEmojisList()
  return(
    <ul className="emojis-list-container">
    {shuffledEmojisList.map(eachEmoji=>(
      <EmojiCard key={eachEmoji.id} emojiDetails={eachEmoji} clickOnEmoji={this.clickOnEmoji}/>
    ))}
    </ul>
  )
}

  render(){
    const {clickedEmojisList,isGameInProgress,topScore}=this.state
    return(
      <div className="emoji-container">
      <NavBar score={clickedEmojisList.length}
      isGameInProgress={isGameInProgress}
      topScore={topScore}/>
      <div className="body-container">
      {isGameInProgress ? this.displayEmojisList() : this.displayScoreCard()}
      </div>
      </div>
    )
  }
}
export default EmojiGame

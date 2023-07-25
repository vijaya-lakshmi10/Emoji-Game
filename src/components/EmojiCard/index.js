// Write your code here.
import './index.css'
const EmojiCard = props =>{
    const {emojiDetails,clickOnEmoji}=props
    const {id,emojiName,emojiUrl}=emojiDetails
    const onClickEmoji=()=>{
        clickOnEmoji(id)
    }
    return(
        <li className="emojis-list">
        <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName}/>
        </button>
        </li>
    )
}
export default EmojiCard

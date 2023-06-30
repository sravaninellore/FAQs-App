// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faq, onToggleIcon} = props
  const {questionText, answerText, isPlusIconVisible} = faq
  const faqIconURL = isPlusIconVisible
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const faqIconAltText = isPlusIconVisible ? 'plus' : 'minus'

  const onFaqIcon = () => {
    const {id} = faq
    onToggleIcon(id)
  }

  return (
    <li className="faq-item">
      <div className="faq-icon-container">
        <h1 className="faq-question">{questionText}</h1>
        <button type="button" className="button-icon" onClick={onFaqIcon}>
          <img src={faqIconURL} alt={faqIconAltText} className="icon" />
        </button>
      </div>
      {!isPlusIconVisible && (
        <div>
          <hr className="hr-line" />
          <p className="faq-answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem

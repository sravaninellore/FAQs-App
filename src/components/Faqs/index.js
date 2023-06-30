// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = props
    this.state = {
      faqsList: faqsList.map(eachFaq => ({
        ...eachFaq,
        isPlusIconVisible: true,
      })),
    }
  }

  onToggleIcon = faqId => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (faqId === eachFaq.id) {
          return {
            ...eachFaq,
            isPlusIconVisible: !eachFaq.isPlusIconVisible,
          }
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faq={eachFaq}
                onToggleIcon={this.onToggleIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

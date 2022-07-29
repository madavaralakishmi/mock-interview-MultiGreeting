import './App.css'
import {Component} from 'react'
import Greetings from './Components/Greetings'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    isActiveId: languageGreetingsList[0].id,
    imageAlt: languageGreetingsList[0].imageAltText,
    image:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
  }

  onButton = (imageUrl, imageAltText, id) => {
    console.log(id)
    this.setState({imageAlt: imageAltText, image: imageUrl, isActiveId: id})
  }

  render() {
    const {image, imageAlt, isActiveId} = this.state
    return (
      <div className="bg-center">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <Greetings
              key={each.id}
              details={each}
              onButton={this.onButton}
              isActiveIdentify={isActiveId === each.id}
            />
          ))}
        </ul>
        <img src={image} alt={imageAlt} />
      </div>
    )
  }
}
export default App

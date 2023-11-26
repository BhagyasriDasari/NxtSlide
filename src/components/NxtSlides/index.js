import {Component} from 'react'
import NxtSlideList from '../NxtSlideList'
import NxtContext from '../../ReactContext'
import NxtSlide from '../NxtSlide'
import './index.css'

class NxtSlides extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="nxt-slides-container">
              <ol className="nxt-slides">
                {initialList.map((eachSlide, index) => (
                  <NxtSlideList
                    details={eachSlide}
                    key={eachSlide.id}
                    nxtSlideNumber={index + 1}
                  />
                ))}
              </ol>
              <NxtSlide />
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NxtSlides

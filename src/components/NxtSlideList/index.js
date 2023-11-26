import {Component} from 'react'
import './index.css'
import NxtContext from '../../ReactContext'

class NxtSlideList extends Component {
  render() {
    const {details, nxtSlideNumber} = this.props
    const {heading, description} = details

    return (
      <NxtContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === nxtSlideNumber - 1
          const activeStyling = isActive ? 'css-styles' : ''

          const onClickSlideTab = () => {
            changeActiveTab(nxtSlideNumber - 1)
          }

          return (
            <li
              className={`Nxt-slide-list ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${nxtSlideNumber}`}
            >
              <p className="nxt-slide-num">{nxtSlideNumber}</p>
              <div className="nxt-slide">
                <h1 className="nxt-slide-head">{heading}</h1>
                <p className="nxt-slide-desc">{description}</p>
              </div>
            </li>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NxtSlideList

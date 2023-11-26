import {Component} from 'react'
import './index.css'
import NxtContext from '../../ReactContext'

class NxtSlide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            ChangeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              ChangeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            ChangeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="nxt-slide-container-first">
              <div className="nxt-slide-container">
                {headingActive ? (
                  <h1
                    onClick={this.onClickHeading}
                    className="nxt-slide-heading"
                  >
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="nxt-slide-heading-given"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="nxt-slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    className="nxt-slide-description-given"
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NxtSlide

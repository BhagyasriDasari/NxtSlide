import {v4 as uuidv4} from 'uuid'
import './index.css'
import NxtContext from '../../ReactContext'

const NxtButton = () => (
  <NxtContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <div>
          <button
            type="button"
            className="nxt-button"
            onClick={onClickAddButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="image"
            />
            New
          </button>
        </div>
      )
    }}
  </NxtContext.Consumer>
)
export default NxtButton

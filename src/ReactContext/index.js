import React from 'react'

const NxtContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default NxtContext

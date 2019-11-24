import React from 'react'

import ContactComponent from './component'

interface IProps {
  id: string
  name: string
  text?: string
  selectedId?: string
  onClick(id: string): void
}

class Contact extends React.Component<IProps> {
  handleClick = () => {
    const { id, onClick } = this.props

    onClick(id)
  }

  get active(): boolean {
    const { selectedId, id } = this.props

    return selectedId === id
  }

  render() {
    const { name, text } = this.props

    return (
      <ContactComponent
        name={name}
        text={text}
        active={this.active}
        onClick={this.handleClick}
      />
    )
  }
}

export default Contact

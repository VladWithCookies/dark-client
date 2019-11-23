import React from 'react'

import ContactComponent from './component'

interface IProps {
  id: string
  name: string
  text?: string
  onClick(id: string): void
}

class Contact extends React.Component<IProps> {
  handleClick = () => {
    const { id, onClick } = this.props

    onClick(id)
  }

  render() {
    const { name, text } = this.props

    return (
      <ContactComponent
        name={name}
        text={text}
        onClick={this.handleClick}
      />
    )
  }
}

export default Contact

import React from 'react'
import { Button } from '@blueprintjs/core'

interface IProps {
  name: string
  text?: string
  active: boolean
  onClick?: VoidFunction
}

const Contact: React.FC<IProps> = ({ name, text, active, onClick }) => (
  <Button
    fill
    minimal
    active={active}
    onClick={onClick}
    className="contact"
  >
    <img src="https://picsum.photos/200/400" className="contact__image" alt="avatar" />
    <div>
      <h3 className="contact__name">
        {name}
      </h3>
      <p className="contact__text">
        {text}
      </p>
    </div>
  </Button>
);

export default Contact

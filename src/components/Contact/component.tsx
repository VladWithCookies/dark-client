import React from 'react'

interface IProps {
  name?: string
  text?: string
}

const Contact: React.FC<IProps> = ({ name, text }) => (
  <div className="contact__container">
    <img src="https://picsum.photos/200/400" className="contact__image" alt="avatar" />
    <div>
      <h3 className="contact__name">
        {name}
      </h3>
      <p className="contact__text">
        {text}
      </p>
    </div>
  </div>
);

export default Contact

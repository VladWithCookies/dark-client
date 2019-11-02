import React from 'react'

import { IModal } from '../../concepts/modal/types'
import Portal from '../Portal'

interface IProps {
  modals: IModal[]
}

const Modals: React.FC<IProps> = ({ modals }) => (
  <React.Fragment>
    {modals.map(({ id, content }) => (
      <Portal key={id}>
        {content}
      </Portal>
    ))}
  </React.Fragment>
)

export default Modals

import React from 'react';
//style
import { Modal } from './modalApp.js';

function ModalApp(props) {
  return (
    <Modal>
      {props.children}
    </Modal>
  )
}

export { ModalApp }

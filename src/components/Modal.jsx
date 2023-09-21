import {React, Component } from 'react'
import { GrClose } from 'react-icons/gr'

/*
* callback modal? need to receive a function to execute
* if it is accepted, and prevent if it is canceled / closed
*/

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      user: {}
    };
  }
  cancelModal = () => {
    this.props.setDisplayModal(false)
  }
  continueModal = () => {
    this.props.setDisplayModal(false)
    this.props.continue(true)
  }
  render() {
    return (
      <div className={`d-grid ${this.props.displayModal ? '' : 'hidden'}`}>
      <section className="modal">
        <div className="flex-end">
          <span className="modal-close" onClick={this.cancelModal}><GrClose /></span>
        </div>
        <h2 className="modal-title">{this.props.t('logout_title')}</h2>
        <p className="modal-content">{this.props.t('logout_message')}</p>
        <div className="flex modal-button-container">
          <span className="modal-button" onClick={this.cancelModal}>{this.props.t('cancel')}</span>
          <span className="modal-button" onClick={this.continueModal}>{this.props.t('continue')}</span>
        </div>
      </section>
      <div className="overlay" onClick={this.cancelModal}>
      </div>
      </div>
    )
  }
}

export default Modal
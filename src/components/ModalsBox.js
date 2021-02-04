import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalsBox extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>Error</ModalHeader>
                    <ModalBody>
                        {this.props.message}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalsBox

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddVehicleModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <React.Fragment>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <h4>Text in a modal</h4>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </React.Fragment>
        )
    }
}
export default AddVehicleModal;
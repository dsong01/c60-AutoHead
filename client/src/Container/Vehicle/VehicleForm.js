import React from 'react';
import VehicleList from './VehicleList';
import { Button } from 'react-bootstrap';

class VehicleForm extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="test">Vehicle</a>
                            </li>
                            <li className="breadcrumb-item active">Vehicle List</li>
                            <li style={{ right: 30, position: "Absolute" }}>
                                <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                                    Add Vehicle
                                </Button>
                            </li>
                        </ol>
                    </div>
                    <VehicleList />
                </div>
            </React.Fragment>
        )
    }
}
export default VehicleForm;
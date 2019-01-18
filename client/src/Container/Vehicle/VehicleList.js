import React from 'react';
import moment from 'moment-timezone';
import * as VehicleService from '../../Services/VehicleService';

class ListVehicles extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            vehicleData: []
        }
    }
    componentDidMount(){
        const promise = VehicleService.getAll()
        return promise 
        .then(responseData => {
            this.setState({vehicleData: responseData})
        })
        .catch(console.error)
    }
    render() {
        const vehicleList = this.state.vehicleData.map(vehicle => {  
            return( 
                <tbody>
                    <tr key={vehicle.VehicleId}>
                        <td>{vehicle.Year}</td>
                        <td>{vehicle.Make}</td>
                        <td>{vehicle.Model}</td>
                        <td>{vehicle.VIN}</td>
                        <td>{vehicle.Trim}</td>
                        <td>{vehicle.Transmission}</td>
                        <td>{vehicle.Engine}</td>
                        <td>{vehicle.TireSize}</td>
                        <td>{vehicle.Mileage}</td>
                        <td style={{width: 200}}><select name="userTypeId" 
                        value="hello"
                        style={{width: "75%", whiteSpace: "normal", display: "inline-block"}}
                        onChange={null} multiple="" tabindex="-1" aria-hidden="true"
                        className={ 'form-control is-valid'}
                        >
                        <option style={{ backgroundColor: "black"}} value='' >select type</option>
                    </select></td>
                    </tr>
                </tbody>
            )});
        const currentTime = moment.tz("America/Los_Angeles").format("MMMM Do YYYY, h:mm a")
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <table className="table table-bordered" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>VIN</th>
                                <th>Trim</th>
                                <th>Transmission</th>
                                <th>Engine</th>
                                <th>Tire Size</th>
                                <th>Mileage</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {vehicleList}
                    </table>
                      
                
                    <div>Last Updated at {currentTime}</div>
                    </div>
            </React.Fragment >
        )
    }
}

export default ListVehicles;
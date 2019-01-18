import React from 'react';
import { Route, Switch} from 'react-router-dom';
import VehicleList from '../Vehicle/VehicleList';
import DashBoard from '../Dashboard';
import VehicleForm from '../Vehicle/VehicleForm';


export default class ContentRouter extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/container/vehicles" component={VehicleList} />
                <Route path="/container/vehicleForm" component={VehicleForm} />
                </Switch>
            </React.Fragment>
        )
    }
}
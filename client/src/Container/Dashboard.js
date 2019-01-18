import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="content-wrapper">

          <div className="container-fluid">

            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="test">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Overview</li>
            </ol>

            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body" style={{ backgroundColor: "#212529" }}>
                    <div className="card-body-icon" style={{ zIndex: 200 }}>
                      <i className="fas fa-fw fa-comments"></i>
                    </div>
                    <div className="mr-5">26 New Messages!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" style={{ backgroundColor: "#212529" }} href="test">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body" style={{ backgroundColor: "#212529" }}>
                    <div className="card-body-icon" style={{ zIndex: 200 }}>
                      <i className="fas fa-fw fa-list"></i>
                    </div>
                    <div className="mr-5">11 New Tasks!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" style={{ backgroundColor: "#212529" }} href="test">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body" style={{ backgroundColor: "#212529" }}>
                    <div className="card-body-icon" style={{ zIndex: 200 }}>
                      <i className="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div className="mr-5">123 New Orders!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" style={{ backgroundColor: "#212529" }} href="test">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body" style={{ backgroundColor: "#212529" }}>
                    <div className="card-body-icon" style={{ zIndex: 200 }}>
                      <i className="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a className="card-footer text-white clearfix small z-1" style={{ backgroundColor: "#212529" }} href="test">
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid">
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
          <VehicleList /> */}
        </div>

      </React.Fragment >
    )
  }
}
export default Dashboard;



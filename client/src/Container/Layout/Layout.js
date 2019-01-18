import React from 'react';
import ContentRouter from '../Routing/ContentRouter';
import { withRouter } from 'react-router-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props)

      this.state = { 
        toggle: true
      }

      this.vehicleClick = this.vehicleClick.bind(this);

    }

    onToggle(e){
      switch (this.state.toggle){
        case true : 
          this.setState({
            toggle : false
          })
          break;
        case false :
          this.setState({
            toggle : true
          })
          break;
        default: 
          break;
     }
    }

    vehicleClick(e){
      this.props.history.push("/container/vehicleForm")

    }
    
    render() {
      return (
        <React.Fragment>
          <body id="page-top">
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
              <a className="navbar-brand mr-1" href="index.html">AutoHead</a>
              <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" onClick={(e) => this.onToggle(e)} >
                <i className="fas fa-bars"></i>
              </button>
              <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                  <div className="input-group-append">
                  </div>
                </div>
              </form>
              <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="test" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger">9+</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                    <a className="dropdown-item" href="test">Action</a>
                    <a className="dropdown-item" href="test">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="test">Something else here</a>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="test" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger">7</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                    <a className="dropdown-item" href="test">Action</a>
                    <a className="dropdown-item" href="test">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="test">Something else here</a>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="test" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle fa-fw"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="test">Settings</a>
                    <a className="dropdown-item" href="test">Activity Log</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="test" data-toggle="modal" data-target="testlogoutModal">Logout</a>
                  </div>
                </li>
              </ul>
            </nav>
            <div id="wrapper">
              <ul className={this.state.toggle ? "sidebar navbar-nav toggled" : "sidebar navbar-nav"}>
                <li className="nav-item active">
                  <a className="nav-link" href="/" >
                    <i className="fas fa-fw fa-tachometer-alt" ></i>
                    <span style={this.state.toggle ? null : { marginLeft: "8px" }}>Dashboard</span>
                  </a>
                </li>
                <li className="nav-item active" onClick={(e)=>this.vehicleClick(e)}>
                  <a className="nav-link" href="/container/vehicleForm">
                    <i className="fas fa-fw fa-car-alt"></i>
                    <span style={this.state.toggle ? null : { marginLeft: "8px" }}>Vehicle</span>
                  </a>
                </li>
              </ul>

              <ContentRouter />

              <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                      <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                      <a className="btn btn-primary" href="login.html">Logout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </React.Fragment>
      )
    }
}
export default withRouter(Layout);
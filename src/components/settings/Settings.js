import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit
} from '../../actions/settingsAction';

class Settings extends Component {
  disableBalanceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props; // retrieve action from props
    setDisableBalanceOnAdd(); // call the action
  };

  disableBalanceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit(); // call the action
  };

  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration(); // call the action
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Add</label>{' '}
                <input
                  type="checkbox"
                  name="setDisableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance on Edit</label>{' '}
                <input
                  type="checkbox"
                  name="setDisableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

// @todo describe parameters for connect: second are the actions and first bring properties from state and props
export default connect(
  (state, props) => ({
    // these are brought from redux state
    auth: state.firebase.auth, // put in this.props.auth
    settings: state.settings // put this in this.props.settings
  }),
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);

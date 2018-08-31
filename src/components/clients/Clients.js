import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '1122233',
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'kdoe@mail.com',
        phone: '111-222-3333',
        balance: '30'
      },
      {
        id: '2223333',
        firstName: 'John',
        lastName: 'Smith',
        email: 'snutge@mail.com',
        phone: '111-234-3333',
        balance: '300.10'
      },

      {
        id: '33444554',
        firstName: 'Mark',
        lastName: 'Bell',
        email: 'bell@mail.com',
        phone: '122-322-4423',
        balance: '140.54'
      }
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName} {client.lastName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2 )}</td>
                  <td>
                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm" >
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;

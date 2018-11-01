import React from 'react';
import TroubleForm from './centralpanel/TroubleForm';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row content">
            <div class="col-sm-3 sidenav">{'this is left panel'}</div>
            <div class="col-sm-9">
              <TroubleForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

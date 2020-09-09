import React, { FunctionComponent } from 'react';
import { IMedico } from '../../models/medico';
import './medico.css';

export type MedicoProps = {
  medico: IMedico;
};

const Medico: FunctionComponent<MedicoProps> = ({medico}) => {
  return <div className="container ProviderList">
    <div className="flex medico">
      <div>
        <img src="images/user.svg" />
      </div>
      <div className="align-center column">
        <h4><a href={"/medicos/" + medico.user.id} >{medico.user.firstName}, {medico.user.lastName}, {medico.user.designation}</a></h4>
        <div>{(medico.specialities || []).map(s => s.speciality).join(', ')}</div>
        <div>{medico.address.address1}</div>
        <div>{medico.address.address2} {medico.address.zipCode}</div>
        <div>{medico.address.phone} PHONE</div>
        <div><small>0.7 Miles Away</small></div>
        <div><small>View Additional Locations (6)</small></div>
        <div><small>View Enrollment Information</small></div>
      </div>
      <div className="flex justify-center layout-column">
        <div><small>Not Evaluated For Premium Care</small></div>
        <div><small>Accepting All Patients</small></div>
      </div>
    </div>
    <div className="col-sm-12 botDetails">
      Office Visit - Primary Medico - Established Patient - Moderate Complexity
    </div>
  </div>;
};

export default Medico;

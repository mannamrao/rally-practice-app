import React, { useState, useEffect } from 'react';
import Medico from '../../components/medico/medico';
import { get } from '../../services/http';
import { IMedico } from '../../models/medico';
import MedicoSearch from '../../components/medico-search/medico-search';


const Medicos = () => {
  const [medicos, setMedicos] = useState<IMedico[]>([]);

  useEffect(() => {
    fetchMedicos();
  }, []);

  const fetchMedicos = (search: string|null = null) => {
    let url = 'medicos';
    if (search) {
      url = url + '?name=' + search;
    }
    get(url).then(async (res: IMedico[]) => {
      setMedicos(res);
    });
  };

  return <div>
    <div className="container topHeader">
        <div className="row">
            <div className="col-lg-12">
                <h1>Who are you looking for?</h1>
            </div>
        </div>
    </div>
    <MedicoSearch  onChange={fetchMedicos} />
    {medicos.map((medico, i) => <Medico key={i} medico={medico} />)}
    </div>;
};

export default Medicos;

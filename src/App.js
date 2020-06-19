import React from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table';

function App() {
  return (
    <div className="App">
      <MaterialTable
      columns={[{title:'IP_Address',field:'IP_Address'},
              {title: 'Status',field: 'Status'},
              {title: 'lastSuccess',field: 'lastSuccess'},
              {title: '2h', field: 'hour_2'},
              {title: '8h',field: 'hour_8'},
              {title: '1d',field: 'day_1'},
              {title: '7d',field: 'day_7'},
              {title: '30d',field: 'day_30'},
              {title: 'blocks',field: 'blocks'},
              {title: 'svcs',field: 'svcs'},
              {title: 'version',field: 'version'}        
              ]}
      data={[{IP_Address: "47.90.248.68:8233", Status: "good", lastSuccess:"1591980661", hour_2: "100.00% ", hour_8: "99.95%", day_1: "94.40%", day_7: "34.30%", day_30: "9.35%"
      ,  blocks: "864312",  services: '00000005' , version: "170010 '/MagicBean:2.1.2/'"}]}
              />
    </div>
  );
}

export default App;

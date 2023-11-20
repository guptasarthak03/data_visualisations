import React from 'react';
import TableComponent from './components/Table';
import data from './assets/data/Wine-Data.json';

import {
  calculateStats,
  parseFlavanoidData,
  parseGammaData,
} from './utils/utility';

function App() {
  const flavanoidData = parseFlavanoidData(data || []);
  const updatedFlavanoidData = calculateStats(flavanoidData, 'Flavanoids');

  const GammaData = parseGammaData(data || []);
  const updatedGammaData = calculateStats(GammaData, 'gamma');

  return (
    <div>
      <h1>Data Visualisation Table</h1>
      <TableComponent
        columnData={updatedFlavanoidData}
        tableHeading='Flavanoid'
      />
      <TableComponent
        columnData={updatedGammaData}
        tableHeading='Gamma'
      />
    </div>
  );
}

export default App;



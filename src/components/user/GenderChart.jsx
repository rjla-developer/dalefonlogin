import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

function GenderChart({ users }) {
  const maleUsers = users.filter((user) => user.gender === 'Masculino');
  const femaleUsers = users.filter((user) => user.gender === 'Femenino');

  const data = [
    { gender: 'Masculino', count: maleUsers.length },
    { gender: 'Femenino', count: femaleUsers.length },
  ];

  return (
    <div className="b-radius-8 shadow gender-chart text-black bg-white">
      <h2 className='text-center pt-4'>Gráfica de Usuarios por Género</h2>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={[1, 2]} tickFormat={["Masculino", "Femenino"]} />
        <VictoryAxis dependentAxis />
        <VictoryBar data={data} x="gender" y="count" />
      </VictoryChart>
    </div>
  );
}

export default GenderChart;

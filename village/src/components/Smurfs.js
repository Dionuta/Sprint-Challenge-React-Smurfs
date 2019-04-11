import React from 'react';

import Smurf from './Smurf';

const Smurfs =({smurfs, updateSmurfs, history})=> {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {smurfs.map(smurf => {
            return (
              <Smurf
                {...smurf}
                history={history}
                updateSmurfs={updateSmurfs}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

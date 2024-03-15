import { useState } from "react";

const Data = () => {
  const [anotherNumber, setAnotherNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(16)}>Mudar state</button>
      </div>
    </div>
  );
};

export default Data;

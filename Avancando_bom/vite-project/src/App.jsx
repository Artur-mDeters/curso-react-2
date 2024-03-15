import './App.css'

import CarDetails from './components/CarDetails';

import Fragment from './components/Fragment';

const cars = [
  {id: 1, brand: "Porsche", color: "Cinza", km: 120},
  {id: 2, brand: "BMW", color: "Azul", km: 1203},
  {id: 3, brand: "MacLarem", color: "Laranja", km: 0},
  {id: 4, brand: "MacLarem", color: "preta", km: 1200},
  {id: 5, brand: "Lamborguini", color: "Laranja", km: 12341},
]

function App() {
  return (
    <>
    {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand}
      color={car.color}
      km={car.km}
      />
    ))}

    <Fragment />
    </>
  );
}

export default App

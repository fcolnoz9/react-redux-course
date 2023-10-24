import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './App.css';


function getRandomAnimal() {
	const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
	const randomNumber = Math.random() * animals.length;
	const roundNumber = Math.floor(randomNumber);
	return animals[roundNumber];
}

function App() {
	const [animals, setAnimals] = useState([])

	const handleClick = () => {
			setAnimals([...animals, getRandomAnimal()]);
	};
	const renderedAnimals = animals.map((animal, index)=>{
		return <AnimalShow type={animal} key={index}/>
	});

	return(
		<div className="app">
			<button onClick={handleClick}>Add Animal</button>
			<div className="animals-list">
				{renderedAnimals}
			</div>
		</div>
	);
}

export default App;

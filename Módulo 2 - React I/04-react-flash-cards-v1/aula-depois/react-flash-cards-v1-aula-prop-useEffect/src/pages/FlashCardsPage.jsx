import { useState } from 'react';
import Buttom from '../components/Buttom';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header'
import Main from '../components/Main'
import RadioButton from '../components/RadioButton';
import { allFlashCards } from '../data/allFlashCards';
import { helperShuffleArray } from '../helpers/arrayHelper';

export default function FlashCardsPage() {
	const [allCards, setAllCards] = useState(allFlashCards);
	const [showTitle, setShowTitle] = useState(false);

	function handleButtonClick() {
		const shuffledCards = helperShuffleArray(allCards);
		
		setAllCards(shuffledCards);
	}

	function handleRadioshowTitleClick() {
		setShowTitle(true);
	}

	function handleRadioshowDescriptionClick() {
		setShowTitle(false);
	}

	console.log(showTitle);

	return (
		<>
			<Header>React-flash-cards-v1</Header>
			<Main>
				<div className='text-center mb-4'>
					<Buttom onButtonClick={handleButtonClick}>Embaralhar cards</Buttom>
				</div>

				<div className='flex flex-row items-center justify-center space-x-4'>
					<RadioButton
						id='radioButtonShowTitle'
						name='showInfo'
						buttonChecked={showTitle}
						onButtonClick={handleRadioshowTitleClick}
					>
						Mostrar Título
					</RadioButton>
					<RadioButton
						id='radioButtonShowDescription'
						name='showInfo'
						buttonChecked={!showTitle}
						onButtonClick={handleRadioshowDescriptionClick}
					>
						Mostrar descrição
					</RadioButton>
				</div>
				
				<FlashCards>
					{
						allCards.map(({id, title, description}) => {
							return <FlashCard
						  					key={id}
												title={title}
												description={description}
												showFlashCardTitle={showTitle}
											/>	
						})
					}
				</FlashCards>
			</Main>
    </>
	);
}
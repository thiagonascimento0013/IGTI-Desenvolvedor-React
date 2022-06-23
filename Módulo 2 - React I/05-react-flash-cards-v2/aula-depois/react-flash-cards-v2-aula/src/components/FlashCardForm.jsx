import TextArea from "./TextArea";
import TextInput from "./TextInput";
import {useEffect, useState} from 'react';
import Button from "./Button";
import Error from "./Error";

export default function FlashCardForm({
	createMode = true,
	onPersist = null,
	children: flashCard =null,
}) {
	const [title, setTitle] = useState(flashCard?.title || '');
	const [description, setDescription] = useState(flashCard?.description || '');
	const [error, setError] = useState('');

	useEffect(() => {
		if(createMode) {
			setTitle('');
			setDescription('');
		}
	}, [createMode]);

	function handleTitleChange(newTitle) {
		setTitle(newTitle);
	}

	function handletDescriptionChange(newDescription) {
		setDescription(newDescription);
	}

	function clearFields() {
		setTitle('');
		setDescription('');
	}

	function validateForm() {
		return title.trim() !== '' && description.trim() !== '';
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		if(validateForm()) {
			setError('');

			if(onPersist) {
				onPersist(title, description);	
				clearFields()
			}
		} else {
			setError("O preenchimento de Título e Descrição é obrigatório.");
		}
	}

	function handleFormReset() {
		clearFields();
	}

	const backgroundClassName = createMode ? 'bg-green-100' : 'bg-yellow-100';

	return (
		<form
			className={`${backgroundClassName} p-4`}
			onSubmit={handleFormSubmit}
			onReset={handleFormReset}
		>
			<h2 className="text-center font-semibold">Manutenção de Flash Cards</h2>

			<TextInput
				labelDescription="Título:"
				inputValue={title}
				onInputChange={handleTitleChange}
				/>
			<TextArea
				labelDescription="Descrição:"
				textAreaValue={description}
				onTextAreaChange={handletDescriptionChange}
				/>

				<div className="flex items-center justify-between" >
					{error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
					<div>
						<Button colorClass="bg-red-200" type="reset">Limpar</Button>
						<Button colorClass="bg-green-400" type="submit">Salvar</Button>
					</div>
				</div>
		</form>
	);
}

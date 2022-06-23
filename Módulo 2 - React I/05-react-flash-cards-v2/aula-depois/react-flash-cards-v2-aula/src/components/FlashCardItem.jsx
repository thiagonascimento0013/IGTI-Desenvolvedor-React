import {AiOutlineEdit as EditIcon} from 'react-icons/ai';
import {AiOutlineDelete as DeleteIcon} from 'react-icons/ai';

export default function FlashCardItem({
	children: flashCard,
	onDelete = null,
	onEdit = null,
}) {
	const {title, description} = flashCard;

	function handleDeleteIconClick() {
		if(onDelete) {
			onDelete(flashCard.id);
		}
	}

	function handleEditIconClick() {
		if(onEdit) {
			onEdit(flashCard);
		}
	}

	return (
		<div className="border m-2 p-2">
			<ul className="flex flex-col space-y-4" >
				<li><strong>Título: </strong> <span>{title}</span></li>
				<li><strong>Descrição: </strong><span>{description}</span></li>
			</ul>

			<div className='mt-4 flex flex-row space-x-4 items-center justify-end' >
				<EditIcon
					onClick={handleEditIconClick}
					className="cursor-pointer"
					size={24}
				/>
				<DeleteIcon
					onClick={handleDeleteIconClick}
					className="cursor-pointer"
					size={24} 
				/>
			</div>
		</div>
	);
}

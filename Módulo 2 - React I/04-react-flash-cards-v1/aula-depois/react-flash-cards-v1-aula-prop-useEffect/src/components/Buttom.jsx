export default function Buttom({
	children: description = 'Descrição do botão',
	onButtonClick = null,
}) {
	function handleButtonClick() {
		if (onButtonClick) {
			onButtonClick();
		}
	}
	return <button className="bg-gray-200 p-2 m-1 rounded-md" onClick={handleButtonClick}>{description}</button>
}
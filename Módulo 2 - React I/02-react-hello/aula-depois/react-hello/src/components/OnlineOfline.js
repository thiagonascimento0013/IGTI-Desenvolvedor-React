export default function OnlineOfline({isOnline = true}) {
	const className = isOnline ? 'bg-green-200' : 'bg-red-200';
	
	return (
		<span className={`${className} p-2`}>
			{isOnline ? 'Online' : 'Ofline'}
		</span>
	)
}
export default function Teste(props) {
	console.log(props);
	return <div>Teste</div>;
}

//Exemplo de utilização de props

/* 
<Teste 
  nunber={10}
  string="Teste"
  visible data={{a: 1, b: 2}}
  onClick={() => {
    console.log("Click");
  }}
/> 
*/
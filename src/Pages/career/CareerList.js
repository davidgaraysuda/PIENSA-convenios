function CareerList(props){
	return(
		<div className="category-list">
		<table>
		<thead >
		  <tr>
			
			<th>Nombre de la Carrera</th>
			<th>Coordinador de la carrera</th>
			<th>...</th>
			
		  </tr>
		</thead>
		<tbody>
	        {props.children}
			</tbody>
  </table>
  </div>
	);
	}
	
	export default CareerList
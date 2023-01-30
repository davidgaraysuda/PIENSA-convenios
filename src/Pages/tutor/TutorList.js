function TutorList(props){
	return(
		<div className="category-list">
		<table>
		<thead >
		  <tr>
			
			<th>Nombre</th>
			<th>Email</th>
			<th>Teléfono</th>
			<th>Tutor alterno</th>
			<th>Estado</th>
			<th>Empresa</th>
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
	
	export default TutorList
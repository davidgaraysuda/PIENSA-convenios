function TeacherList(props){
	return(
		<div className="category-list">
		<table>
		<thead >
		  <tr>
			
			<th>Nombre</th>
			<th>Teléfono</th>
			<th>Estado</th>
			<th>Carrera</th>
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
	
	export default TeacherList
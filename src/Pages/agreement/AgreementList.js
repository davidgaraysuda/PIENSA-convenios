function AgreementList(props){
	return(
		<div className="category-list">
		<table>
		<thead >
		  <tr>
			
			<th>Fecha de inicio</th>
			<th>Fecha de finalización</th>
			<th>Estado</th>
			<th>Compañía</th>
			<th>Tutor Empresarial</th>
			<th>Tutor Academico</th>
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
	
	export default AgreementList
function CompanyList(props){
	return(
		<div className="category-list">
		<table>
		<thead >
		  <tr>
			
			<th>Nombre de la Empresa</th>
			<th>Teléfono</th>
			<th>Contacto</th>
			<th>Estado</th>
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
	
	export default CompanyList
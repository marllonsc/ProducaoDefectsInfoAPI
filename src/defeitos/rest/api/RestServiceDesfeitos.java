package defeitos.rest.api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import defeitos.db.DAO.DefeitoDAO;
import defeitos.db.entitiy.Defeito;
import defeitos.db.entitiy.Texto; 

@Path("/RestServiceDesfeitos") 
public class RestServiceDesfeitos {

	private DefeitoDAO dao = new DefeitoDAO();

	@GET
	@Path("/defeitos")
	public Response getDefeitos() {
		//			return dao.getDefeitos();
		
		String json = new Gson().toJson(dao.getDefeitos());
		
		return Response.ok(new GenericEntity<String>(json) {
	    }).build();
		
//		GenericEntity<List<Defeito>> entity = new GenericEntity<List<Defeito>>(null);
//		return Response.ok() //200
//				.entity(dao.getDefeitos())
//				.header("Access-Control-Allow-Origin", "*")
//				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
//				.allow("OPTIONS").build();
	}
	
	
	@POST
	@Path("/setText")
	public Response setText(String texto) {
		return Response.ok(new GenericEntity<Boolean>(dao.salveTexto(texto)) {
		 }).build();
//		return Response.ok() //200
//				.entity(dao.salveTexto(texto))
//				.header("Access-Control-Allow-Origin", "*")
//				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
//				.allow("OPTIONS").build();
	}
	
	@GET
	@Path("/getText")
	public Response setGet() {
		
		String json = new Gson().toJson(dao.getTexto());
		
		return Response.ok(new GenericEntity<String>(json) {
	    }).build();
		
//		return Response.ok() //200
//		.entity(dao.getTexto())
//		.header("Access-Control-Allow-Origin", "*")
//		.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
//		.allow("OPTIONS").build();
	}
	
}

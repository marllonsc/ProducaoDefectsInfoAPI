package defeitos.db.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import defeitos.db.entitiy.DataFormatada;
import defeitos.db.entitiy.Defeito;
import defeitos.db.entitiy.Texto;
import defeitos.db.files.FilesUtil;
import framework.aurora.db.persistence.BaseDao;

public class DefeitoDAO extends BaseDao<Defeito> {

	public DefeitoDAO() {
		super(Defeito.class);
	}

	public List<Defeito> getDefeitos() {
		System.out.println("Information loading.............................................. - " +  new Date());
		List<Defeito> defeitos = new ArrayList<Defeito>();
		String equipe = "";
		Defeito def;
		int i = 1;
		int total = 0;
		int validos = 0;
		ResultSet result = this.executeSearchSQL("select equipe_atual equipe,\r\n"
				+ "         username, decode(origem, 'WARROOM',origem, decode(priorizacao, 1, 'Priorizado','')) priorizacao, codigo, sla, '' observação, previsao_fim_analise data_da_data,\r\n"
				+ "          previsao_entrega data_entrega, status_desc, sumario from vw_chamados_detail_r2@dbl_eisadesk a where status_desc not in \r\n"
				+ "         ('Fixed','Invalid','Duplicated','Resolved','Closed','Wontfix') and  nome = 'Tarefa' and username  not  in ('eber.m.ribeiro','almir.g.junior','anderson.a.santos',\r\n"
				+ "         'antonio.i.nascimento','adriano.l.goncalves','filipe.s.almeida','anderson.l.dorigao','johann.o.rosner','pedro.b.goncalves','thiana.a.sousa',\r\n"
				+ "         'ricardo.m.oliveira','ronald.s.pires','caio.g.segovia','filipe.g.julio','felipe.y.silva','marcos.a.andre','kaique.l.silva','carlos.e.sousa','rodrigo.o.ruy',\r\n"
				+ "         'henrique.e.silva','rodolfo.s.costa','marcio.c.ferreira','marcos.d.moreira','lucinio.v.cortizo','rodrigo.i.mello','fernando.v.muniz','fabio.o.moreira','paulo.f.siqueira','walter.s.candido','juliana.a.santos',\r\n"
				+ "         'paulo.f.siqueira','thiago.lorena',  'eduardo.collado','caue.beloni', 'tatiana.c.fratel','andre.s.pernabel','caio.m.paulino','filipe.r.lima','lucas.a.silva','thales.b.terra','luiz.t.assumpcao','verusca.c.rocha','diogo.h.sousa') order by equipe,codigo");
		if (result != null) {
			try {
				while (result.next()) {
					if (checkEquipes(result)) {
						if (!equipe.equalsIgnoreCase(result.getString(1))) {
							equipe = result.getString(1);
							i = 1;
						}
						
							def = new Defeito(i + "", result.getString(1), result.getString(2), result.getString(3),
									result.getString(4), result.getString(5), result.getString(6), new DataFormatada(result.getDate(7)),
									new DataFormatada(result.getDate(8)), result.getString(9), result.getString(10));
							defeitos.add(def);
							i++;
							total++;
	
							if (!"Waiting".equalsIgnoreCase(result.getString(9)) && checkEquipes(result)) {
								validos++;
							}
					}

				}

				addValidos(defeitos, validos);

				addTotal(defeitos, total);
				

			} catch (Exception e) {
				e.printStackTrace();
				System.out.println(e.getMessage());
			} 
		}
		System.out.println("Information loaded! - " +  new Date());
		return defeitos;
	}

	private boolean checkEquipes(ResultSet result) throws SQLException {
		if ("ARQUITETURA S.".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("CARE".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("CORE".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("INTERFACES(B2B)".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("INTERFACES(B2C)".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("PARAMETRIZAÇÃO".equalsIgnoreCase(result.getString(1))) {
			return true;
		} else if ("TRIAGEM".equalsIgnoreCase(result.getString(1))) {
			return true;
		}
		return false;
	}

	private void addValidos(List<Defeito> defeitos, int validos) {
		Defeito def;
		def = new Defeito(validos + "", "VALIDOS", "", "", "", "", "", new DataFormatada(null), new DataFormatada(null), "", "");
		defeitos.add(def);
	}

	private void addTotal(List<Defeito> defeitos, int total) {
		Defeito def;
		def = new Defeito(total + "", "Total", "", "", "", "", "", new DataFormatada(null), new DataFormatada(null), "", "");
		defeitos.add(def);
	}


	public Boolean salveTexto(String texto) {
		return new FilesUtil().geraArquivo(texto);
	}

	public Texto getTexto() {
		Texto txt = new Texto(FilesUtil.readFile());
		return txt;
	}
	
}

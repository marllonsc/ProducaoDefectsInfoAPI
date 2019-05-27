package defeitos.db.entitiy;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DataFormatada {

	private Date data;
	private String dataFormatada;
	private Boolean maiorQuedataAtual;

	public DataFormatada(Date data) {
		this.formarCampos(data);
	}

	public DataFormatada() {
	}

	private void formarCampos(Date data) {
		if (data != null) {
			this.data = data;
			this.dataFormatada = this.formatarData(data);
			this.maiorQuedataAtual = this.checkDataAtual(data);
		}else {
			this.data = null;
			this.dataFormatada = "";
			this.maiorQuedataAtual = true;
		}
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.formarCampos(data);
	}

	public String getDataFormatada() {
		return dataFormatada;
	}

	public Boolean getMaiorQuedataAtual() {
		return maiorQuedataAtual;
	}

	private String formatarData(Date data) {
		SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = formato.format(data);
		return dataFormatada;
	}

	private Boolean checkDataAtual(Date data) {
		if (data.after(new Date())) {
			return true;
		} else {
			return false;
		}
	}

}

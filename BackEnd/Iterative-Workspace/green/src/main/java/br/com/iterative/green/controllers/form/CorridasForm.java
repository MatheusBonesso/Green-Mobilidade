package br.com.iterative.green.controllers.form;

import java.time.LocalDateTime;

import br.com.iterative.green.models.Corridas;
import br.com.iterative.green.models.Veiculos;
import br.com.iterative.green.repository.VeiculosRepository;

public class CorridasForm {

	private Long veiculoId;
	private String emailCondutor;
	private LocalDateTime horaFim;
	private Long codigo;
	private boolean ativa;


	public Long getVeiculoId() {
		return veiculoId;
	}

	public void setVeiculoId(Long veiculoId) {
		this.veiculoId = veiculoId;
	}

	public String getEmailCondutor() {
		return emailCondutor;
	}

	public void setEmailCondutor(String emailCondutor) {
		this.emailCondutor = emailCondutor;
	}

	public LocalDateTime getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(LocalDateTime horaFim) {
		this.horaFim = horaFim;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public boolean isAtiva() {
		return ativa;
	}

	public void setAtiva(boolean ativa) {
		this.ativa = ativa;
	}

	public Corridas converter(VeiculosRepository repository) {
		
		Veiculos veiculo = repository.findByCodigo(codigo);
		return new Corridas(veiculo, emailCondutor, horaFim, ativa);
	}

}

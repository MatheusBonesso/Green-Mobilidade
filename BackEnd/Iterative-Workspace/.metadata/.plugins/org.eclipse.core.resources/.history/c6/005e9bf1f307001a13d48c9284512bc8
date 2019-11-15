package br.com.iterative.green.controllers.form;

import java.time.LocalDateTime;

import br.com.iterative.green.models.Aluguel;
import br.com.iterative.green.models.Condutor;
import br.com.iterative.green.models.Financeiro;
import br.com.iterative.green.models.Veiculos;
import br.com.iterative.green.repository.CondutorRepository;
import br.com.iterative.green.repository.FinanceiroRepository;
import br.com.iterative.green.repository.VeiculosRepository;

public class AluguelForm {

	private Long veiculoId;
	private String emailCondutor;
	private LocalDateTime horaFim;
	private Long id;
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
		return id;
	}

	public void setCodigo(Long id) {
		this.id = id;
	}

	public boolean isAtiva() {
		return ativa;
	}

	public void setAtiva(boolean ativa) {
		this.ativa = ativa;
	}

	public Aluguel converter(Long id, VeiculosRepository veiculoRepository, 
			CondutorRepository condutorRepository, FinanceiroRepository financeiroRepository, String emailCondutor) {
		
		Veiculos veiculo = veiculoRepository.getOne(id);
		Condutor condutor = condutorRepository.findByEmail(emailCondutor);
		Financeiro financeiro = financeiroRepository.getOne(veiculo.getFinanceiro().getId());
		
		//Considerando que o pagamento foi feito no ato do aluguel, o parametro
		//pago é passado como true
		return new Aluguel(veiculo,condutor, financeiro,emailCondutor, horaFim, ativa, true);
	}

}

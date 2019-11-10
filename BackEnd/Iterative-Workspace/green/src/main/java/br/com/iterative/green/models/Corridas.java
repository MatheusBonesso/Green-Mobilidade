package br.com.iterative.green.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Corridas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private Veiculos veiculo;
	
	private String emailCondutor;
	private LocalDateTime horaInicio = LocalDateTime.now();
	private LocalDateTime horaFim;
	private boolean ativa = false;
	
	public Corridas() {
		
	}

	public Corridas(Veiculos veiculo, String emailCondutor, LocalDateTime horaFim, boolean ativa) {
		this.veiculo = veiculo;
		this.emailCondutor = emailCondutor;
		this.horaFim = horaFim;
		this.ativa = ativa;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Veiculos getVeiculo() {
		return veiculo;
	}

	public void setVeiculo(Veiculos veiculo) {
		this.veiculo = veiculo;
	}

	public String getEmailCondutor() {
		return emailCondutor;
	}

	public void setEmailCondutor(String emailCondutor) {
		this.emailCondutor = emailCondutor;
	}

	public LocalDateTime getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(LocalDateTime horaInicio) {
		this.horaInicio = horaInicio;
	}

	public LocalDateTime getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(LocalDateTime horaFim) {
		this.horaFim = horaFim;
	}

	public boolean isAtiva() {
		return ativa;
	}

	public void setAtiva(boolean ativa) {
		this.ativa = ativa;
	}

}

package br.com.iterative.green.controllers.form;

import java.time.LocalDateTime;

import br.com.iterative.green.models.Corridas;
import br.com.iterative.green.repository.CorridasRepository;

public class CorridaAtualizarForm {
	private LocalDateTime horaFim;
	private boolean ativa;

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

	public Corridas atualizar(Long id, CorridasRepository corridasRepository) {
		Corridas corrida = corridasRepository.getOne(id);
		corrida.setAtiva(this.ativa);
		corrida.setHoraFim(this.horaFim);
		
		
		return corrida;
	}

}

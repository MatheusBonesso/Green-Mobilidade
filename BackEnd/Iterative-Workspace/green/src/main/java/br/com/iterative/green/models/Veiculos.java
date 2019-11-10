package br.com.iterative.green.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Veiculos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int ano;
	private Long codigo;
	
	private String marca;
	private String cor;
	private String modelo;
	private LocalDateTime dataHoraUltimaCorrida;
	private Double velocidadeMaxima;
	private Double quilometragem;
	private DiasDeUtilizacao diasUtilizacao;
	private Double valorMinuto;
	private String urlImagem;
	private boolean emUso;
	private Double valorTotal;
	
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public LocalDateTime getDataHoraUltimaCorrida() {
		return dataHoraUltimaCorrida;
	}

	public void setDataHoraUltimaCorrida(LocalDateTime dataHoraUltimaCorrida) {
		this.dataHoraUltimaCorrida = dataHoraUltimaCorrida;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public Double getVelocidadeMaxima() {
		return velocidadeMaxima;
	}

	public void setVelocidadeMaxima(Double velocidadeMaxima) {
		this.velocidadeMaxima = velocidadeMaxima;
	}

	public Double getQuilometragem() {
		return quilometragem;
	}

	public void setQuilometragem(Double quilometragem) {
		this.quilometragem = quilometragem;
	}

	public DiasDeUtilizacao getDiasUtilizacao() {
		return diasUtilizacao;
	}

	public void setDiasUtilizacao(DiasDeUtilizacao diasUtilizacao) {
		this.diasUtilizacao = diasUtilizacao;
	}

	public Double getValorMinuto() {
		return valorMinuto;
	}

	public void setValorMinuto(Double valorMinuto) {
		this.valorMinuto = valorMinuto;
	}
	
	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getUrlImagem() {
		return urlImagem;
	}

	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}

	public boolean isEmUso() {
		return emUso;
	}

	public void setEmUso(boolean emUso) {
		this.emUso = emUso;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}


}

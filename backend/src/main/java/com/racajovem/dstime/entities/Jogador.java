package com.racajovem.dstime.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jogador")
public class Jogador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	private Integer gol;
	private Integer assistencia;
	private String posicao;
	
	public Jogador() {
		
	}

	public Jogador(String nome, Integer gol, Integer assistencia, String posicao) {
		super();
		this.nome = nome;
		this.gol = gol;
		this.assistencia = assistencia;
		this.posicao = posicao;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getGol() {
		return gol;
	}

	public void setGol(Integer gol) {
		this.gol = gol;
	}

	public Integer getAssistencia() {
		return assistencia;
	}

	public void setAssistencia(Integer assistencia) {
		this.assistencia = assistencia;
	}

	public String getPosicao() {
		return posicao;
	}

	public void setPosicao(String posicao) {
		this.posicao = posicao;
	}
	
}

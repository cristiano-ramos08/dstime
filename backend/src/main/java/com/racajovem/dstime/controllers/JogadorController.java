package com.racajovem.dstime.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.racajovem.dstime.entities.Jogador;

import com.racajovem.dstime.repositories.JogadorRepository;

@RestController
@RequestMapping("/artilharias")
public class JogadorController {
	
	private final JogadorRepository jogadorRepository;
	
	public JogadorController(JogadorRepository jogadorRepository) {
        this.jogadorRepository = jogadorRepository;
    }
	
	@GetMapping
	public List<Jogador> getJogador(){
		return jogadorRepository.findAll();
	}
	
	 @GetMapping("/{id}")
	    public Jogador getJogador(@PathVariable Long id) {
	        return jogadorRepository.findById(id).orElseThrow(RuntimeException::new);
	    }

	    @PostMapping
	    public ResponseEntity<Jogador> createJogador(@RequestBody Jogador jogador) throws URISyntaxException {
	        Jogador savedJogador = jogadorRepository.save(jogador);
	        return ResponseEntity.created(new URI("/artilharia/" + savedJogador.getId())).body(savedJogador);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Jogador> updateJogador(@PathVariable Long id, @RequestBody Jogador jogador) {
	    	Jogador currentJogador = jogadorRepository.findById(id).orElseThrow(RuntimeException::new);
	        currentJogador.setNome(jogador.getNome());
	        currentJogador.setGol(jogador.getGol());
	        currentJogador.setAssistencia(jogador.getAssistencia());
	        currentJogador.setPosicao(jogador.getPosicao());
	        currentJogador = jogadorRepository.save(jogador);

	        return ResponseEntity.ok(currentJogador);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Jogador> deleteJogador(@PathVariable Long id) {
	    	jogadorRepository.deleteById(id);
	        return ResponseEntity.ok().build();
	    }
	}
	
	
	

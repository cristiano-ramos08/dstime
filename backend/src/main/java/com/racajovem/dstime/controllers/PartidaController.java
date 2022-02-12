package com.racajovem.dstime.controllers;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.racajovem.dstime.entities.Partida;
import com.racajovem.dstime.repositories.PartidaRepository;

@RestController
@RequestMapping(value = "/partida")
public class PartidaController {
	
private final PartidaRepository partidaRepository;
	
	public PartidaController(PartidaRepository partidaRepository) {
        this.partidaRepository = partidaRepository;
    }
	
	@GetMapping
	public Page<Partida> findaAll(Pageable pageable){
		return partidaRepository.findAll(pageable);
	}
	
	 @GetMapping("/{id}")
	    public Partida getPartida(@PathVariable Long id) {
	        return partidaRepository.findById(id).orElseThrow(RuntimeException::new);
	    }

	    @PostMapping
	    public ResponseEntity<Partida> createPartida(@RequestBody Partida partida) throws URISyntaxException {
	        Partida savedPartida = partidaRepository.save(partida);
	        return ResponseEntity.created(new URI("/partida/" + savedPartida.getId())).body(savedPartida);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Partida> updatePartida(@PathVariable Long id, @RequestBody Partida partida) {
	    	Partida currentPartida = partidaRepository.findById(id).orElseThrow(RuntimeException::new);
	    	currentPartida.setTimeRaca(partida.getTimeRaca());
	    	currentPartida.setTimeAdversario(partida.getTimeAdversario());
	    	currentPartida.setDataJogo(partida.getDataJogo());
	    	currentPartida.setLocal(partida.getLocal());
	    	currentPartida.setGolsRaca(partida.getGolsRaca());
	    	currentPartida.setGolsAdversario(partida.getGolsAdversario());
	    	currentPartida = partidaRepository.save(partida);

	        return ResponseEntity.ok(currentPartida);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Partida> deletePartida(@PathVariable Long id) {
	    	partidaRepository.deleteById(id);
	        return ResponseEntity.ok().build();
	    }
}

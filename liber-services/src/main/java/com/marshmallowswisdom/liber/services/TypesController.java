package com.marshmallowswisdom.liber.services;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.marshmallowswisdom.liber.domain.ContentType;
import com.marshmallowswisdom.liber.persistence.Repository;

@Controller
@RequestMapping("/types")
public class TypesController {
	
	@RequestMapping( method = RequestMethod.GET )
	@ResponseBody
	public List<ContentType> retrieveTypes() {
		final Repository repository = new Repository();
		return repository.retrieveTypes();
	}

	@RequestMapping( value = "/{id}", method = RequestMethod.GET )
	@ResponseBody
	public ContentType retrieveType( @PathVariable final int id ) {
		final Repository repository = new Repository();
		return repository.retrieveType( id );
	}
	
	@RequestMapping( method = RequestMethod.POST )
	@ResponseBody
	public ContentType createType( @RequestBody final TypeForm type ) {
		final Repository repository = new Repository();
		return repository.saveType( new ContentType( type.getName() ) );
	}
	
	@RequestMapping( value = "/{id}", method = RequestMethod.DELETE )
	@ResponseBody
	public String deleteType( @PathVariable final int id ) {
		final Repository repository = new Repository();
		repository.deleteType( id );
		return "success";
	}

}
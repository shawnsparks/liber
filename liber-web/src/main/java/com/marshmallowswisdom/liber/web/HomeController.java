package com.marshmallowswisdom.liber.web;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController {
	
	@RequestMapping( method = RequestMethod.GET )
	public ModelAndView getHomePage() {
		final ModelAndView mav = new ModelAndView( "home" );
		return mav;
	}

}

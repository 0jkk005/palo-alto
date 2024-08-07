jQuery(document).ready(function() {
  
  setTimeout(function() {    
    	jQuery('ol.flickity-page-dots').attr('role','none');
    
		jQuery('ol.flickity-page-dots li').attr('role','button').attr('tabindex','0');

        if(document.querySelector('span.data-uw-rm-autofix-hide')){
              document.querySelector('span.data-uw-rm-autofix-hide').parentElement.remove();
              document.querySelector('span.data-uw-rm-autofix-hide').parentElement.remove();
        }

  		jQuery('iframe').attr('title','iframe title');
            
	}, 3500);
  
  jQuery('ul.nav > li[aria-haspopup="true"] > a').attr('aria-haspopup','true');
  
  jQuery('input#pkezjl').before('<label for="pkezjl" class="visually-hidden">input</label>');
  
  jQuery('input#chp_txt_utstttco').before('<label for="chp_txt_utstttco" class="visually-hidden">input</label>');
	  
  jQuery('input#l70jrs').before('<label for="l70jrs" class="visually-hidden">input</label>');
  
  jQuery('.breadcrumbs').attr('role','navigation');
  
  jQuery('span[style*="color: #038d50"]').css('color', '#06834c');


});
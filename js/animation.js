/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var menu_right = document.getElementById("ul-menu-right");
var plus_btn = document.getElementById("plus-icon-span")
var menu_mobile = document.getElementById("itens-mobile");
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var btn_mobile = document.getElementById("ballPrincipal");
var btn_plus_rotate = document.getElementById("plus-mobile");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
var slider4 = document.getElementById("slider4");
var quant= 0;
function closed(){
	menu_right.style.display ='none';
	plus_btn.style.display = 'flex';
	plus_btn.style.transform ='rotate(180deg)';
}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
function opened(){
	menu_right.style.display ='flex';
	plus_btn.style.display = 'none';
}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
function openMobi(){
	if(quant===0){
		menu_mobile.style.display = 'flex';
		btn_plus_rotate.style.transform = 'rotate(180deg)';
		quant=1;
	} else{
		menu_mobile.style.display = 'none';
		btn_plus_rotate.style.transform = 'rotate(0deg)';
		quant=0
	}
}
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
function identify() {
	var y = document.documentElement.scrollTop;
	if (y>=0 && y <=475) {		
		slider1.style.width = '32px';
		slider2.style.width = '25px';
		slider3.style.width = '25px';
		slider4.style.width = '25px';	
		slider1.style.backgroundColor = '#ffffff';	
		slider2.style.backgroundColor = '#ffffff';	
		slider3.style.backgroundColor = '#ffffff';
		slider4.style.backgroundColor = '#ffffff';
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
	} else if(y>475 && y <=1350) {
		slider1.style.width = '25px';	
		slider2.style.width = '32px';	
		slider3.style.width = '25px';
		slider4.style.width = '25px';
		slider1.style.backgroundColor = '#8e0000';	
		slider2.style.backgroundColor = '#8e0000';	
		slider3.style.backgroundColor = '#8e0000';
		slider4.style.backgroundColor = '#8e0000';
	} else if(y>1350 && y <=1755) {
		slider1.style.width = '25px';	
		slider2.style.width = '25px';	
		slider3.style.width = '32px';
		slider4.style.width = '25px';
		slider1.style.backgroundColor = '#ffffff';	
		slider2.style.backgroundColor = '#ffffff';	
		slider3.style.backgroundColor = '#ffffff';
		slider4.style.backgroundColor = '#ffffff';
	} 
	/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
	
  }
/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA_PEREIRA_MESQUITA  */
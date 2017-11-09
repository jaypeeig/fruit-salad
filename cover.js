$(function(){

	$('#algo_form').on('submit', function(){
		return false;
	});

	$('button[type=submit]').on('click', function(){
		hanldeOps($(this).html().toLowerCase());
	});

	const hanldeOps = (operation) => {
		if (operation == 'decode') {
			return decode();
		}else{
			return encode();
		}
	}

	const encode = () => {
		let str = document.querySelector('#string').value;
		let slt = document.querySelector('#salt').value;
		let encoded = btoa(btoa(str) + slt);
		$('p.lead').html(encoded);
	}

	const decode = () => {
		let str = document.querySelector('#string').value;
		let slt = document.querySelector('#salt').value;
		let decoded = atob(atob(str).replace(slt, ''));
		$('p.lead').html(decoded);
	}	

	//document.querySelector('#string').value
	//document.querySelector('#string').value
});
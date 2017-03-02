var sidebar = {open:'false'};

function resize(){
	if(sidebar.open=='false')
	{
		document.getElementById('scl').setAttribute('class', 'huge');
		sidebar.open='true';
	}
	else if(sidebar.open=='true')
	{
		document.getElementById('scl').setAttribute('class', 'spin-container-left');
		sidebar.open='false';
	}
}

function clearSpinTextArea(){
	document.getElementById('spin-text-area').value = '';
}
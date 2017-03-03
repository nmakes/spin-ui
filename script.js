var sidebar = {open:'false'};

function resize(){
	if(sidebar.open=='false')
	{
		document.getElementById('plusbutton').innerHTML = '-';
		document.getElementById('scl').setAttribute('class', 'huge');
		sidebar.open='true';
	}
	else if(sidebar.open=='true')
	{
		document.getElementById('plusbutton').innerHTML = '+';
		document.getElementById('scl').setAttribute('class', 'spin-container-left');
		sidebar.open='false';
	}
}

var textArea = document.getElementById('spin-text-area');

textArea.addEventListener('keydown',tabEvent); 
// by default addEventListener passes the event as an argument to the function tabEvent

/*
// default parameter passing test

var hi=[6,24,5];
hi.map(function (i,ele) {
	console.log(ele,i);
});
*/

function tabEvent(event) {
	if(event.keyCode===9){
		event.preventDefault();
		var v=this.value,
			s=this.selectionStart,
			e=this.selectionEnd;
		this.value=v.substring(0, s)+'    '+v.substring(e);
		this.selectionStart=this.selectionEnd=s+4;
		return false;
	}
}

function clearSpinTextArea(){
	document.getElementById('spin-text-area').value = '';
}
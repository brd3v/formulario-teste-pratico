


//selection
const submit = document.querySelector('#submit')
const marco = document.querySelector('#marco')	
const marcos = document.querySelector('#marcos')	
const marcoss = document.querySelector('#marcoss')	
var selecionados = 0;
//action
submit.addEventListener('click' , () => {
//logic
if(marco.checked){
	alert('pedido realizado') 
	
}if(marcos.checked){
	alert('pedido realizado')
}
	if(marcoss.checked){
	alert('pedido realizado')
}
})
//action
submit.addEventListener('click', () => {
	if (marco.checked == false && marcos.checked == false && marcoss.checked == false ) {
		alert('Por favor Escolha um Adesivo')}
 else {
			submit.onclick=window.location.href='thanks.html'

	}
	})
//selection
const result$ = document.getElementById('resultado')
const menos = document.getElementById('menos')
const mais$ = document.getElementById('mais')
let contador = 1
result$.innerHTML =contador
//action
mais$.addEventListener('click', function(){
	

	//logic
if (contador == 10) {alert('Fim de estoque')} else {
		result$.innerHTML = ++contador 
}

})
menos.addEventListener('click', function(){
	if(contador == 0 ){
		alert('O pedido deve ser um numero positivo ')
		onclick = false;
	}
	result$.innerHTML = --contador
})
//action
submit.addEventListener('click', () => {
	//logic
	if (result$.innerHTML <=

	 0) {
		alert('a quantidade deve ser positivo')
	}
})


let menu_contronls = document.querySelectorAll('#menu-contronl>div')
let menu_bodys = document.querySelectorAll('#menu-body>div')
function ToggleClass(element, elementList, className) {
	for (var i = 0; i < elementList.length; i++) {
		elementList[i].classList.remove(className)
	}
	if (element == '') return
	element.classList.add(className)
}

for (var i = 0; i < menu_contronls.length; i++) {
	menu_contronls[i].addEventListener('click',function(e){
		let element_index = [...menu_contronls].indexOf(e.target)
		ToggleClass(e.target,menu_contronls,'menu-contronl-active')
		console.log(menu_bodys[element_index])
		ToggleClass(menu_bodys[element_index],menu_bodys,'menu-body-active')
	})
}
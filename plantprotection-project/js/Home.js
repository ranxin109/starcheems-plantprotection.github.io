let tab_active = document.querySelector('.tag-active')
let tab_tag_list = document.querySelectorAll('.tab-tag')
let tab_content_list = document.querySelectorAll('.tab-content')
let tab_contronl = document.querySelector('#tab-contronl')
let tab_tag_span = document.querySelectorAll('.tab-text')
const header = document.querySelector('#page-top');
const header_left = document.querySelector('#header-left')
const page_top = document.querySelector('#page-top')
let second_li = document.querySelectorAll('.second li')
let first_li = document.querySelectorAll('.first>li')
let language_list = document.querySelectorAll('#translate-language li')
document.addEventListener('scroll', function(e) {
	if (document.documentElement.scrollTop >= 70) {
		header_left.classList.add('left-scale')
		tab_contronl.classList.add('tab-contronl-scale')
		page_top.classList.add('page-height')
	} else {
		header_left.classList.remove('left-scale')
		tab_contronl.classList.remove('tab-contronl-scale')
		page_top.classList.remove('page-height')
	}
})

// 一级菜单控制
for (var i = 0; i < first_li.length; i++) {
	first_li[i].addEventListener('click', function(e) {
		let current_element = e.target
		let parent_element = e.target.parentNode
		if (parent_element.parentNode.classList[0] == 'li-hover' || parent_element.classList[0] == 'li-hover')
			return
		parent_element.parentNode.parentNode.querySelector('.tab-text').click()
		ToggleClass(current_element, first_li, 'li-active')
		ToggleClass('', second_li, 'li-active')
	})
}
// 二级菜单控制
for (var i = 0; i < second_li.length; i++) {
	second_li[i].addEventListener('click', function(e) {
		let current_element = e.target
		current_element.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.tab-text')
		.click()
		ToggleClass(current_element, second_li, 'li-active')
		ToggleClass(current_element, first_li, 'li-active')
		current_element.parentNode.parentNode.classList.add('li-active')
	})
}

// TAB控制
for (var m = 0; m < tab_tag_span.length; m++) {
	tab_tag_span[m].addEventListener('click', function(e) {
		for (var i = 0; i < tab_tag_list.length; i++) {
			tab_tag_list[i].classList.remove('tag-active')
		}
		e.target.parentNode.classList.add('tag-active')
		let element_index = [...tab_tag_span].indexOf(e.target)
		for (var j = 0; j < tab_content_list.length; j++) {
			tab_content_list[j].classList.remove('content-active')
		}
		tab_content_list[element_index].classList.add('content-active')
		ToggleClass('', second_li, 'li-active')
		ToggleClass('', first_li, 'li-active')
		let first_list = e.target.parentNode.querySelector('.first')
		let second_list = e.target.parentNode.querySelector('.second')
		if(first_list){
			e.target.parentNode.querySelectorAll('.first>li')[0].classList.add('li-active')
			if(second_list){
				e.target.parentNode.querySelectorAll('.second>li')[0].classList.add('li-active')
			}
		}
	})

}

// 翻译控制
for (var i = 0; i < language_list.length; i++) {
	language_list[i].addEventListener('click',function(e){
		ToggleClass(e.target,language_list,'translate-active')
	})
}

function ToggleClass(element, elementList, className) {
	for (var i = 0; i < elementList.length; i++) {
		elementList[i].classList.remove(className)
	}
	if (element == '') return
	element.classList.add(className)
}

const inputElem = [...document.querySelectorAll(".inputs")];
const input = [...document.querySelectorAll("input")];
const form = document.querySelector('form')


form.addEventListener('submit', (e)=>{
    e.preventDefault
})

input.forEach((inps) => {
	document.addEventListener("click", (e) => {
		if (e.target.parentElement === inps.parentElement) {
			inps.parentElement.children[1].classList.add("active");
		} else if (
			inps.value == "" &&
			e.target.parentElement !== inps.parentElement
		) {
			inps.parentElement.children[1].classList.remove("active");
		}
	});
});


const spans = [...document.querySelectorAll(".hello")]

spans.forEach((span)=>{
    span.addEventListener('click', (e)=>{
        e.target.previousElementSibling.focus()
    })
})
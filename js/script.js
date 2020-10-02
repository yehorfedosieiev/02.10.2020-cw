$("body").on("click", "[data-editable]", function(event){
	event.preventDefault(); //
	console.log(this);
	const type = $(this).attr("data-editable");
	console.log(type);

	const $element = $(this);

	$("<input>")
		.attr("type", type)
		.insertAfter($element)
		.val($element.text()) // 
		// .focus() // ставит фокус в input
		.select() // выделяет текст в input
		.on("keyup", function(event){
			console.log("event", event);
			switch (event.which){
				case 13:
					$element
						.insertAfter(this)
						.text($(this).val())
					
					$(this).remove();
					break;
				case 27: break;
			}
		})



	$element.remove();
});
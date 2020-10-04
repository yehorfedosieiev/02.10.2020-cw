
$("body").on("click", "[data-editable]", function(event){
	event.preventDefault(); //
	console.log(this);
	const type = $(this).attr("data-editable");
	console.log("Значение data-editable", type);
	
	const $element = $(this);
	console.log("текст в теге", $element.text());
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
					console.log("новый this ", this)
					$element
						.insertAfter(this)
						.text($(this).val())
					console.log("значение this ", $(this).val())
					$(this).remove();
					break;
				case 27:
					$element.insertAfter(this);
					$(this).remove();
					break;
			}
		})

	$element.remove();
});
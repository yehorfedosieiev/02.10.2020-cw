
$("body").on("click", "[data-editable]", function(event){
	event.preventDefault(); //
	console.log(this);
	const type = $(this).attr("data-editable");
	console.log("Значение data-editable", type);
	
	const $element = $(this);
	console.log("текст в теге", $element.text());
	let $input = $("<input>");
	$input
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
					console.log("значение this - val ", $(this).val())
					$(this).remove();
					$buttonConfirm.remove();
					$buttonCancel.remove();
					break;
				case 27:
					$element.insertAfter(this);
					$(this).remove();
					$buttonConfirm.remove();
					$buttonCancel.remove();
					break;
			}
		});

	let $buttonConfirm = $("<button>");
	$buttonConfirm
		.attr("type", 'button')
		// .attr('id', 'confirm')
		.insertAfter($input)
		.addClass('btn btn-primary');
	
	let $confirmIcon = $("<i>");
	$confirmIcon
		.addClass('glyphicon glyphicon-ok')
		.appendTo($buttonConfirm);

	let $buttonCancel = $("<button>");
	$buttonCancel
		.attr("type", 'button')
		// .attr('id', 'cancel')
		.insertAfter($buttonConfirm)
		.addClass('btn btn-danger');

	let $cancelIcon = $("<i>");
	$cancelIcon
		.addClass('glyphicon glyphicon-remove')
		.appendTo($buttonCancel);
	
	$buttonConfirm
		.on('click', function() {
			$element
				.insertAfter($input)
				.text($input.val())
			this.remove();
			$input.remove()
			$buttonCancel.remove();
		});
	$buttonCancel
		.on('click', function(){
			$element.insertAfter(this);
			this.remove();
			$input.remove()
			$buttonConfirm.remove();
		});
	
	$element.remove();
});
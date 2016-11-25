function Display() {
	var t = $('#title').val();
	var a = $('#author').val();
	var c = $('#content').val();
	var f = $('#files').val();
	addJournal(t, a, c, f);

	$("#entTable tbody").append(
		"<tr class='col-md-12' id='r1"+journal.length+"'>"+
		"<td class='col-md-2'>"+ t +"</td>"+
		"<td class='col-md-2'>"+ a +"</td>"+
		"<td class='col-md-3'>"+ c +"</td>"+
		"<td class='col-md-3'>"+ f +"</td>"+
		"<td class='col-md-2'><input type='button' value='Delete' onClick='Delete()'/></td>"+
		"</tr>");
};

function Delete() {
	$('#entTable tr').on('click', function (e) {
    	e.preventDefault();
    	$(this).closest('tr').remove();
	});
};

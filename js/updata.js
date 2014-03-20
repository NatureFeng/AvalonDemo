//avalon
avalon.ready(function() {
	avalon.define("form-box", function(vm) {
		var add_data = [];
		$.each(new data(), function(index, val) {
			add_data.push(val);
		});
		vm.add_input = add_data;

	});
	avalon.scan();

	function data(){
			this.workerNumber = {
				"id":"workerNumber",
				"label":"职工编号",
				"type":"text",
			};
		}
});


//jquery
$(document).ready(function() {
	$(".add").submit(function(e) {
		e.preventDefault();
		$.post("suibian", {
				"workerNumber" : $("#workerNumber").val()
			},
			function(data) {
				alert("Data: " + data);
			});
	});
});
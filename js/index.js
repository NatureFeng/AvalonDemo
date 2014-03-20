//avalon
avalon.ready(function() {
	avalon.define("form-box", function(vm) {
		var add_data = [];
		$.each(new data(), function(index, val) {
			add_data.push(val);
		});
		vm.add_input = add_data;
		/*
		vm.add_input = {
			workerNumber : {
				"id":"workerNumber",
				"label":"职工编号",
				"type":"text"
			}
		};
		*/
	});
	avalon.scan();

	function data(){
			this.workerNumber = {
				"id":"workerNumber",
				"label":"职工编号",
				"type":"text",
			};
			this.basicWage = {
				"id":"basicWage",
				"label":"基本工资",
				"type":"text",
			};
			this.allowances = {
				"id":"allowances",
				"label":"津贴",
				"type":"text",
			};
			this.jobSubsidies = {
				"id":"jobSubsidies",
				"label":"岗贴",
				"type":"text",
			};
			this.subsidies = {
				"id":"subsidies",
				"label":"补贴",
				"type":"text",
			};
			this.yfNumber = {
				"id":"yfNumber",
				"label":"应发数",
				"type":"text",
			};
			this.PersonalIncomeTax = {
				"id":"PersonalIncomeTax",
				"label":"个人所得税",
				"type":"text",
			};
			this.ykNumber = {
				"id":"ykNumber",
				"label":"应扣数",
				"type":"text",
			};
			this.sfNumber = {
				"id":"sfNumber",
				"label":"实发数",
				"type":"text",
			};
		}
});


//jquery
$(document).ready(function() {
	$(".add").submit(function(e) {
		e.preventDefault();
		$.post("suibian", {
				test: "test1"
			},
			function(data) {
				alert("Data: " + data);
			});
	});
});
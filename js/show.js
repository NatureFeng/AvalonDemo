//avalon
avalon.ready(function() {
	data_th = [
		"职工编号",
		"基本工资",
		"津贴",
		"岗贴",
		"补贴",
		"应发数",
		"个人所得税",
		"应扣数",
		"实发数"
	];

	avalon.define("table-box", function(vm) {
		vm.show_th = data_th;
	});
	avalon.scan();
});
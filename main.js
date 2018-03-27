//Var age, // age of person inputting
//Var gender, // gender of person inputting
//Var prison, // dropdown of prison in New York
//Var charge1, // type of charge person was put in jail with
//Var charge 2, // second type of charge person was put in jail with
//Var charge 3, // third type of charge person was put in jail with
//Var amountSavings, // amount person inputting has saved up 

//timeInJail = (charge1 + charge1 + charge3) / amountSavings //*

//The charges will be chosen from pull down menus. Each charge chosen will have a value assigned to it.//*


$(document).ready(function () {
	$(".item").find("input").on("keyup keydown keypress change", function (e) {
		var input = $(this),
			item = input.closest(".item"),
			qty = parseFloat(item.find(".qty").val()),
			cost = parseFloat(item.find(".cost").val()),
			tariff = parseFloat(item.data("tariff-percent")),
			total = parseFloat(qty * cost),
			total_tariff = addTariff(total, tariff);

		if (isNumber(cost) && isNumber(qty)) {
			item.find(".pre_total").find("span").text(total);
			item.find(".post_total").find("span").text(total_tariff);
		}
	});

	$(".calculate").on("click", function (e) {
		e.preventDefault();

		var pre_cost = 0,
			post_cost = 0;

		$("td.pre_total").each(function () {
			var pre_total = $(this),
				total = pre_total.find("span").text();

			console.log("Totalling pre...");

			total = parseFloat(total);

			pre_cost += total;
		});

		$("td.post_total").each(function () {
			var post_total = $(this),
				total = post_total.find("span").text();

			console.log("Totalling post...");
			total = parseFloat(total);

			post_cost += total;
		});

		$("#pre_total").find("span").text(pre_cost);
		$("#post_total").find("span").text(post_cost);
	});
});


function isNumber(num) {
	return !isNaN(parseFloat(num));
}

function addTariff(total, tariff) {
	return total + (total * (tariff / 100));
}
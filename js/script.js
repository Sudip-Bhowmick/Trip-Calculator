function calculate() {
    var stayCost = parseFloat(document.getElementById("stayCost").value) || 0;
    var foodCost = parseFloat(document.getElementById("foodCost").value) || 0;
    var travelCost = parseFloat(document.getElementById("travelCost").value) || 0;
    var numPeople = parseInt(document.getElementById("numPeople").value) || 1;

    var tripDate = document.getElementById("tripDate").value;
    var formattedDate = formatDate(tripDate);

    var totalCost = stayCost + foodCost + travelCost;
    var costPerPerson = totalCost / numPeople;

    document.getElementById("result").innerHTML = "Total Cost per Person for " + formattedDate + ": $" + costPerPerson.toFixed(2);
}

function formatDate(dateString) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const yValues = [1000, 11000, 12000, 13000, 10400, 10500, 16000, 17000, 18000, 10900, 20000, 30000];
const totalEarnings = yValues.reduce((total, value) => total + value);
const highestEarnings = Math.max(...yValues);
const highestEarningsMonth = xValues[yValues.indexOf(highestEarnings)];
const formattedEarnings = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalEarnings);
const formattedEarnings2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(highestEarnings);


document.getElementById("total-earnings").textContent = formattedEarnings;
document.getElementById("total-earnings1").textContent = formattedEarnings;
document.getElementById("card-value").textContent = formattedEarnings2;
document.getElementById("month").textContent = highestEarningsMonth;
6
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:40000, stepSize: 10000 }}],
    }
  }
});



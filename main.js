let myChart = document.getElementById("myChart").getContext("2d");

let massChart = new Chart(myChart, {
  // bar,horizontal,pie
  type: "bar",
  data: {
    labels: ["Dar es Salaam", "Mwanza", "Arusha", "Morogoro", "Tanga"],
    datasets: [
      {
        label: "Tanzania Population",
        data: [2698652, 436801, 341136, 250902, 224876],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  },
  options: {},
});

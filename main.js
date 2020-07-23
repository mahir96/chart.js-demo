let myChart = document.getElementById("myChart").getContext("2d");
// let progress = document.getElementById("barProgress");

// Global options
Chart.defaults.global.animate;
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
          "rgba(244, 67, 54, 0.7)",
          "rgba(63, 81, 181, 0.4)",
          "rgba(255, 235, 59, 0.5)",
          "rgba(0, 150, 136, 0.4)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(156, 39, 176, 0.6)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      position: "top",
      align: "center",
    },
    title: {
      display: true,
      text: "Lagest Cities in Tanzania",
      fontSize: 25,
      padding: 10,
      lineHeight: 2.5,
    },
    tooltips: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      mode: "nearest",
    },
  },
});

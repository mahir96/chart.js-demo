let myChart = document.getElementById("myChart").getContext("2d");
let progress = document.getElementById("barProgress");

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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
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
    animation: {
      onProgress: function (animation) {
        progress.value = animation.currentStep / animation.numSteps;
      },
      onComplete: function () {
        window.setTimeout(function () {
          progress.value = 0;
        }, 2000);
      },
    },
  },
});

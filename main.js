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
      },
    ],
  },
  options: {},
});

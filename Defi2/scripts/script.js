const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2021-22','2022-23','2023-24','2024-25'],
        datasets: [{
            label: "Les inscrits à l'UT2J en L2 MIASHS",
            backgroundColor: 'rgb(0, 199, 193)',
            borderColor: 'rgb(0, 199, 193)',
            data: [148, 120, 135, 130],
            borderWidth: 1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const labels = [
'2021-22',
'2022-23',
'2023-24',
'2024-25'
];

new Chart(ctx1, {
    type: 'line',
    data:  {
    labels: labels,
    datasets: [{
        label: 'Les inscrits à l’UT2J en L2 MIASHS',
        backgroundColor: 'rgb(0, 199, 193)',
        borderColor: 'rgb(0, 199, 193)',
        data: [148, 120, 135, 130]
    }]
    },
});
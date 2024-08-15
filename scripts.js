document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    const ctxSales = document.getElementById('salesChart').getContext('2d');
    const ctxEngagement = document.getElementById('engagementChart').getContext('2d');

    new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [10, 20, 15, 25, 30, 20],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctxEngagement, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Engagement',
                data: [100, 200, 150, 250],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Basic navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            document.querySelectorAll('.page').forEach(page => {
                page.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';
        });
    });

    // Show the overview page by default
    document.getElementById('overview').style.display = 'block';
});

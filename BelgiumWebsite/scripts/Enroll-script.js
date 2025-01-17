document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('enrollmentForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            setTimeout(countDownTimer, 100); 
        });
    } else {
        console.error('Enrollment form not found');
    }

    function countDownTimer() {
        console.log('countDownTimer function is running');
        const degree = document.getElementById('degree').value;
        localStorage.setItem('showTimer', 'true');
        localStorage.setItem('selectedDegree', degree);
        window.location.href = "../index.html";
    }

    function updateTimer() {
        const showTimer = localStorage.getItem('showTimer');
        const selectedDegree = localStorage.getItem('selectedDegree');
        
        if (showTimer === 'true') {
            const elements = document.getElementsByClassName('CountDownTimer');
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'block';
            }

            let startDate;
            switch (selectedDegree) {
                case 'BCOM':
                    startDate = new Date('2024-12-01T00:00:00');
                    break;
                case 'BIT':
                    startDate = new Date('2024-11-01T00:00:00');
                    break;
                case 'DIT':
                case 'DDS':
                    startDate = new Date('2024-10-01T00:00:00');
                    break;
                case 'CIT':
                case 'NIT':
                    startDate = new Date('2024-09-01T00:00:00');
                    break;
                default:
                    startDate = new Date();
                    console.error('Invalid degree:', selectedDegree);
            }

            function displayTime() {
                const now = new Date();
                const timeRemaining = startDate - now;

                if (timeRemaining < 0) {
                    document.getElementById('Timer-Output').textContent = "The course has started!";
                    clearInterval(timerInterval);
                    return;
                }

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.getElementById('Timer-Output').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }

            const timerInterval = setInterval(displayTime, 1000);

            displayTime();

            localStorage.removeItem('showTimer');
            localStorage.removeItem('selectedDegree');
        }
    }

    updateTimer();
});

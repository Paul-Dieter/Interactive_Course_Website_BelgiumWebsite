document.addEventListener('DOMContentLoaded', () => {
    const courseSelect = document.getElementById('courseSelect');
    const yearSelect = document.getElementById('yearSelect');
    const moduleList = document.getElementById('moduleList');
    const completedModules = document.getElementById('completedModules');
    const printCourseButton = document.getElementById('printCourse');

    courseSelect.addEventListener('change', (event) => {
        const selectedCourse = event.target.value;
        yearSelect.disabled = !selectedCourse;
        if (selectedCourse) {
            displayModules(selectedCourse, 'first');
        }
    });

    yearSelect.addEventListener('change', (event) => {
        const selectedYear = event.target.value;
        const selectedCourse = courseSelect.value;
        displayModules(selectedCourse, selectedYear);
    });

    moduleList.addEventListener('change', (event) => {
        if (event.target.classList.contains('module-checkbox')) {
            const listItem = event.target.parentElement;
            listItem.classList.toggle('completed', event.target.checked);
            updateCompletedModules();
        }
    });

    printCourseButton.addEventListener('click', () => {
        window.print();
    });
    moduleList.innerHTML = '<div style="text-align: center;"><strong><em>Select Course:</em></strong></div>';
    function displayModules(course, year) {
        moduleList.innerHTML = '<div style="text-align: center;"><strong><em>Select Completed Course:</em></strong></div>';
        const modules = courseData[course].years[year];
        modules.forEach(module => {
            const li = document.createElement('li');
            li.classList.add('module');
            li.innerHTML = `<input type="checkbox" class="module-checkbox" data-module="${module.subject}"> ${module.subject} (${module.code})`;
            moduleList.appendChild(li);
        });
    }
    completedModules.innerHTML = '<div style="text-align: center;"><strong><em>Completed Course:</em></strong></div>';
    function updateCompletedModules() {
        const completed = document.querySelectorAll('.module-checkbox:checked');
        completedModules.innerHTML = '<div style="text-align: center;"><strong><em>Completed Course:</em></strong></div>';
        completed.forEach(module => {
            const li = document.createElement('li');
            li.textContent = module.dataset.module;
            completedModules.appendChild(li);
        });
    }
});
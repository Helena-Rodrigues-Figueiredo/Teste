const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksH3.length; index += 1) {
  emergencyTasksH3[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < emergencyTasksH3.length; index += 1) {
    noEmergencyTasksH3[index].style.backgroundColor = 'black';
  }

const footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "rgb(3, 80, 16)";
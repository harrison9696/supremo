// Naming the variables
const members = document.querySelectorAll('.connect__member');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

// Show the next member
nextBtn.addEventListener('click', () => {
    // get the current member
    let current = document.querySelector('.current-member');
    // remove current-member class from current
    current.classList.remove('current-member');
    if(current.nextElementSibling && current.nextElementSibling.classList.contains('connect__member')) {
        // add current-member class to next member
        current.nextElementSibling.classList.add('current-member');
    }   else {
        // add current-member class to first member
        members[0].classList.add('current-member');
    }
});

// Show the previous member
prevBtn.addEventListener('click', () => {
    // get the current member
    let current = document.querySelector('.current-member');
    // remove current-member class from current
    current.classList.remove('current-member');
    if(current.previousElementSibling && current.previousElementSibling.classList.contains('connect__member')) {
        // add current-member class to previous member
        current.previousElementSibling.classList.add('current-member');
    }   else {
        // add current-member class to the last member
        members[members.length - 1].classList.add('current-member');
    }
});
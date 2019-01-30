// DOM elements

const btns = document.querySelectorAll("button");
const form = document.querySelector("form");
const formActivity = document.querySelector("form span");
const input = document.querySelector("input");
const error = document.querySelector(".error");

let activity = "walking";
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    // get activity

    activity = e.target.dataset.activity;

    // remove and add active class

    btns.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    // set id of input field
    input.setAttribute('id', activity);

    // set text of form span
    formActivity.textContent = activity;

    // call the update function
    update(data);
  });
});

// form submit
form.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    const distance = +input.value;
    if(distance){
        db.collection('activities').add({
            distance: distance,
            activity: activity,
            date: new Date().toString()
        }).then(() => {
            error.textContent = '';
            input.value = '';
        })
    } else {
        error.textContent = 'Please enter a valid distance';
    }
})

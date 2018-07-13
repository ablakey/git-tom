function updateButton() {
  var buttons = document.querySelectorAll('a.btn');
  buttons.forEach(b => {
    if (b.innerText === 'Blame') {
      b.innerText = 'Tom';
    }
  });
}

 // A very naive approach but properly handles dynamic pages like GitHub that dynamically update.
 // MutationObserver might be an option but that's more than 5 mins of work.
window.setInterval(updateButton, 1000);

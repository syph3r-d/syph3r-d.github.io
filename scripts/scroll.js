document.addEventListener('click', function (event) {
    if (!event.target.matches('.nav-btn')) return;
  
    event.preventDefault();
    const element = document.getElementById(event.target.dataset.target);
  
    element.scrollIntoView(
        {
            behavior: 'smooth',
        }
    );
  });



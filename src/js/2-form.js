const form = document.querySelector(".feedback-form")
const localStorageKey = "feedback-form-state"
form.addEventListener('input', (event) => {
    if (event.target.tagName.toLowerCase() === 'input') {
        localStorage.setItem('feedback-form', JSON.stringify({
            email: document.querySelector('input[name=email]').value,
            message: document.querySelector('textarea[name=message]').value
        }));
    }
});

  form.addEventListener('submit', (event) => {
    event.preventDefault();
      localStorage.clear()
    const formData = {
     email: document.querySelector('input[name=email]').value,
     message: document.querySelector('textarea[name=message]').value
    };
      form.reset()
  });


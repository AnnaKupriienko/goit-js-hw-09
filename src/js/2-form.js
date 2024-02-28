const form = document.querySelector(".feedback-form")
const localStorageKey = "feedback-form-state"

form.addEventListener('input', (event) => {
<<<<<<< Updated upstream
  localStorage.setItem('localStorageKey', JSON.stringify({
  email: form.elements.email.value.trim(),
  message: form.elements.message.value.trim()
        }));
    });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
  email: form.elements.email.value.trim(),
  message: form.elements.message.value.trim()
    };
    if (formData) {
      console.log(formData)
    }
    localStorage.removeItem(localStorageKey)
=======
        localStorage.setItem(localStorageKey, JSON.stringify({
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim()
        }));
    });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim()
    };
    if (formData) {
      console.log(formData);
    }
>>>>>>> Stashed changes
      form.reset()
  });

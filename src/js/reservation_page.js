const form = document.getElementById('reservation_form');

if (form) {
  const fields = {
    people: document.getElementById('people'),
    date: document.getElementById('date'),
    time: document.getElementById('time'),
    fullname: document.getElementById('fullname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
  };
  const errorMessage = document.getElementById('error_message');
  const successModal = document.getElementById('reservation_success_modal');
  const modalVisibleTime = 5000;
  const modalFadeTime = 700;
  let closeModalTimeout;
  let redirectTimeout;

  const getFieldValue = field => field.value.trim();

  function setCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const today = `${year}-${month}-${day}`;

    fields.date.value = today;
    fields.date.min = today;
    fields.time.value = `${hours}:${minutes}`;
  }

  function showSuccessModal() {
    if (!successModal) {
      return;
    }

    clearTimeout(closeModalTimeout);
    clearTimeout(redirectTimeout);
    successModal.classList.add('is-visible');
    successModal.setAttribute('aria-hidden', 'false');

    closeModalTimeout = setTimeout(() => {
      successModal.classList.remove('is-visible');
      successModal.setAttribute('aria-hidden', 'true');

      redirectTimeout = setTimeout(() => {
        window.location.href = './index.html';
      }, modalFadeTime);
    }, modalVisibleTime);
  }

  function validateForm() {
    const values = Object.fromEntries(
      Object.entries(fields).map(([name, field]) => [name, getFieldValue(field)])
    );

    if (Object.values(values).some(value => value === '')) {
      return 'please fill all fields';
    }

    if (Number(values.people) <= 0 || Number(values.people) > 12) {
      return 'number of people is invalid choose from 1-12';
    }

    if (!values.email.includes('@')) {
      return 'invalid email';
    }

    if (values.phone.length < 7) {
      return 'invalid phone number';
    }

    return '';
  }

  setCurrentDateTime();

  form.addEventListener('submit', event => {
    event.preventDefault();

    errorMessage.textContent = validateForm();

    if (errorMessage.textContent) {
      return;
    }

    showSuccessModal();
    form.reset();
    setCurrentDateTime();
  });
}

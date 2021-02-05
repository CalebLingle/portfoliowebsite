document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
    e.preventDefault()
    let contactForm  = document.getElementById('Contact-Form');
    let formData = new FormData(contactForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) => alert(error))
}
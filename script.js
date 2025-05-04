const themetoggle = document.getElementById('theme-toggle');
themetoggle.addEventListener('click',()=> document.body.classList.toggle('dark'));
emailjis.init("aVsqpt.1espEUJg-Lm")
function sendEmail(event) {
 event.preventDefault() ;
 emailjs.sendForm('service_i0ctusk', 'template_kvpoflic', '#contact-form')
 .then(()=>{
    alert("Message envoyé avec succès !")
    event.target.reset();
 },(error)=>{
    alert("Erreur de l'envoi:"+ error.text);
 }) ;
}
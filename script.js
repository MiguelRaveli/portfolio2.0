const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
const inputsContactForm = document.querySelectorAll(".inputsContactForm");
elements.forEach((element) => {
  myObserver.observe(element);
});

(function () {
  emailjs.init("WBDQdvrLmMcm4pr_Z"); // Substitua YOUR_USER_ID pelo seu ID de usuário do EmailJS
})();

// Função para enviar o e-mail
function sendEmail(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Enviar o formulário através do EmailJS
  emailjs.sendForm("service_dyqeywq", "template_akvfas8", event.target).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      inputsContactForm.forEach((inputs) => {
        inputs.value = "";
      });
      alert("Email enviado com sucesso!");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Falha ao enviar o email. Tente novamente.");
    }
  );
}

// Adiciona o event listener ao formulário
document.getElementById("contact-form").addEventListener("submit", sendEmail);

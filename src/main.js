const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio automático do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Preencha todos os campos!');
    return;
  }

  // Validação de email (opcional)
  if (!validateEmail(email)) {
    alert('Email inválido!');
    return;
  }

  // Processar o envio do formulário (ex: enviar por email, salvar no banco de dados)
  alert('Formulário enviado com sucesso!');
  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Mensagem:', mensagem);

  // Limpar o formulário
  form.reset();
});

// Função auxiliar para validar email (opcional)
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)$/i;
  return re.test(email);
}

const nav = document.querySelector('nav');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  nav.classList.toggle('show'); // Adiciona ou remove a classe "show" ao elemento nav
});

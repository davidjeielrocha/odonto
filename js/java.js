document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    
    // Validação simples
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }
});
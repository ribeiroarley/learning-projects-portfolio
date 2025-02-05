// Função para mostrar a seção selecionada
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção ativa
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Adiciona a classe "active" para o rodapé também
    const footer = document.querySelector('footer');
    footer.classList.add('active');
}

// Exibe a seção "Sobre Mim" por padrão, incluindo o rodapé
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});

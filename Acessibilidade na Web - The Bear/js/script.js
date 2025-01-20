function alternarMesa(elemento) {
    // Verifica o status atual da mesa
    const status = elemento.getAttribute('data-status');

    // Se a mesa estiver ocupada, muda para disponível
    if (status === 'ocupado') {
        elemento.classList.remove('ocupado');
        elemento.classList.add('disponivel');
        elemento.setAttribute('data-status', 'disponivel'); // Atualiza o status da mesa
    } 
    // Se a mesa estiver disponível, muda para ocupado
    else if (status === 'disponivel') {
        elemento.classList.remove('disponivel');
        elemento.classList.add('ocupado');
        elemento.setAttribute('data-status', 'ocupado'); // Atualiza o status da mesa
    }
}

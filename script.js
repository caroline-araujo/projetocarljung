let popUpWindow;

function abrirLista() {
    const livrosSelecionados = document.querySelectorAll('input[type="checkbox"]:checked');

  // Criar o conteúdo HTML para a lista de livros comprados
    let listaMarcadosHTML = '';
    listaMarcadosHTML += '<h2>Livros Comprados</h2>';
    livrosSelecionados.forEach((livro) => {
    const livroSelecionado = livro.parentNode.textContent;
    listaMarcadosHTML += `<p>${livroSelecionado}</p>`;
});

  // Abrir a janela pop-up com a lista de livros comprados
    popUpWindow = window.open('', 'Livros Comprados', 'width=700,height=500');
    const html = `
        <html>
        <head>
        <title>Lista de Livros Comprados</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            padding: 10px;
            }
            h2 {
            margin-bottom: 10px;
            }
        </style>
        </head>
        <body>
        ${listaMarcadosHTML}
        </body>
        </html>
    `;
    popUpWindow.document.open();
    popUpWindow.document.write(html);
    popUpWindow.document.close();
}

function abrirLivrosFaltantes() {
    const livros = document.querySelectorAll('input[type="checkbox"]');

  // Criar o conteúdo HTML para a lista de livros faltantes
    let listaFaltantesHTML = '';
    listaFaltantesHTML += '<h2>Livros Faltantes</h2>';
    livros.forEach((livro) => {
        if (!livro.checked) {
        const livroFaltante = livro.parentNode.textContent;
        listaFaltantesHTML += `<p>${livroFaltante}</p>`;
        }
});

  // Abrir a janela pop-up com a lista de livros faltantes
    popUpWindow = window.open('', 'Livros Faltantes', 'width=700,height=500');
    const html = `
        <html>
        <head>
        <title>Lista de Livros Faltantes</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            padding: 10px;
            }
            h2 {
            margin-bottom: 10px;
            }
        </style>
        </head>
        <body>
        ${listaFaltantesHTML}
        </body>
        </html>
    `;
    popUpWindow.document.open();
    popUpWindow.document.write(html);
    popUpWindow.document.close();
}

function limparSelecoes() {
    const livros = document.querySelectorAll('input[type="checkbox"]');

    livros.forEach((livro) => {
    livro.checked = false;
    });
}

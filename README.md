# 🎭 Culturama

<p align="center">
  <img src="gif-culturama.mp4" alt="Formulário Culturama com foco em acessibilidade e alto contraste" width="100%">
</p>

## 📋 Sobre o Projeto

O **Culturama** é um projeto de formulário web responsivo desenvolvido inicialmente durante o curso de HTML e CSS orientado a formulários, SEO e acessibilidade da Alura. 

A aplicação foca em coletar dados dos usuários de forma estruturada, utilizando práticas modernas de semântica e validação de dados. No entanto, buscando ir além do escopo inicial das aulas, implementei de forma 100% independente melhorias profundas com foco em **acessibilidade (A11y)**, **experiência do usuário** e **arquitetura de código**.

---

## 🚀 Minhas Contribuições (Melhorias Independentes)

Diferente do escopo padrão do curso, tomei a iniciativa de evoluir o projeto com as seguintes funcionalidades:

*   **⚡ Sistema de Alto Contraste Personalizado:** Desenvolvi uma lógica em JavaScript nativo para alternar o tema do formulário através de um botão dedicado, permitindo que pessoas com daltonismo ou baixa visão naveguem com conforto e segurança.
*   **🎨 Estilização Inclusiva e Minuciosa:** Garanti que a acessibilidade visual fizesse parte de cada detalhe. Diferente de temas genéricos, estilizei individualmente as **linhas das bordas, caixas de seleção (checkboxes), textos e estados de foco**, adaptando suas cores de forma harmoniosa tanto para o modo normal quanto para o alto contraste.
*   **⚙️ Variáveis CSS Dinâmicas (`:root`):** Refatorei o código CSS para centralizar toda a paleta de cores dentro de variáveis customizadas no `:root`. Isso eliminou repetições de código e facilitou a manutenção e a troca de temas de forma limpa.
*   **📏 Responsividade Avançada (`rem`):** Substituí as unidades estáticas de pixels (`px`) por unidades relativas (`rem`). Essa abordagem garante que o layout, os campos e os textos se adaptem perfeitamente quando o usuário utiliza o zoom nativo do navegador para leitura.

---

## 🛠️ Tecnologias Utilizadas

A distribuição de tecnologias no repositório reflete uma base sólida em semântica e estilização fina:

*   **HTML5 (71.0%):** Uso correto de tags estruturais como `<fieldset>`, `<legend>`, `<datalist>` e `<textarea>` para garantir uma árvore de acessibilidade limpa.
*   **CSS3 (27.7%):** Uso de variáveis nativas (`var(--css)`), arquitetura flexível, responsividade e customização completa de elementos nativos de formulário.
*   **JavaScript (1.3%):** Manipulação de DOM limpa e direta para ativação das classes de acessibilidade.

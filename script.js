// Seleção dos elementos por id
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
  btnOpen: document.getElementById("btn-open"),
  btnCollapse: document.getElementById("btn-collapse"),
  sidebar: document.querySelector(".sidebar"),
}

// Atualiza o estado da classe is-empty no wrapper conforme o conteúdo do elemento
function updateEditableWrapperState(element, wrapper) {
  const hasText = element.textContent.trim().length > 0
  wrapper.classList.toggle("is-empty", !hasText)
}

// Atualiza o estado de todos os elementos editáveis
function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

// Adiciona ouvintes de evento input para atualizar os wrappers em tempo real
function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener("input", () => {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  })

  elements.promptContent.addEventListener("input", () => {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
  })
}

function openSideBar() {
  elements.sidebar.style.display = "flex"
  elements.btnOpen.style.display = "none"
}

function closeSideBar() {
  elements.sidebar.style.display = "none"
  elements.btnOpen.style.display = "block"
}

function init() {
  attachAllEditableHandlers()
  updateAllEditableStates()

  elements.btnOpen.addEventListener("click", openSideBar)
  elements.btnCollapse.addEventListener("click", closeSideBar)
  // Estado inicial: sidebar visível, btnOpen oculto
  elements.sidebar.style.display = "flex"
  elements.btnOpen.style.display = "none"
}

// Executa a inicialização
init()

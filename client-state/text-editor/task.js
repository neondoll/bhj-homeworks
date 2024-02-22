const editorElement = document.getElementById('editor');

editorElement.value = localStorage.getItem('editorValue') || '';

const saveEditorValue = (value) => (localStorage.setItem('editorValue', value));

editorElement.addEventListener('input', (event) => (saveEditorValue(event.target.value)));

document.getElementById('clear').addEventListener('click', () => (saveEditorValue(editorElement.value = '')));
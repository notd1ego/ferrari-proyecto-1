document.getElementById('translateButton').addEventListener('click', async function() {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;

    if (!inputText) {
        alert("Por favor ingresa un texto para traducir.");
        return;
    }

    // Usar CORS Anywhere para evitar problemas con CORS
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://libretranslate.de/translate';
    const requestData = {
        q: inputText,
        source: sourceLang,
        target: targetLang,
        format: 'text'
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();
        document.getElementById('outputText').value = result.translatedText;
    } catch (error) {
        console.error('Error al traducir el texto:', error);
        alert('Hubo un error al traducir el texto. Inténtalo de nuevo.');
    }
});

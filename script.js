document.getElementById("btnCriptografar").addEventListener("click", function() {
    let inputTexto = document.getElementById("inputTexto").value;
    let outputTexto = inputTexto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    document.getElementById("outputTexto").value = outputTexto;
});

document.getElementById("btnDescriptografar").addEventListener("click", function() {
    let inputTexto = document.getElementById("inputTexto").value;
    let outputTexto = inputTexto.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    document.getElementById("outputTexto").value = outputTexto;
});

document.getElementById('btnCopiar').addEventListener('click', function() {
    
    var texto = document.getElementById('outputTexto');
    texto.select();
    texto.setSelectionRange(0, 99999); 


    document.execCommand('copy');

   
    alert('Texto copiado para a área de transferência!');
});
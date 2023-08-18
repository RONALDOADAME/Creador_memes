document.addEventListener('DOMContentLoaded', () => {
    var seleccion_meme = document.getElementById('seleccion_meme');
    var Memes = document.getElementById('Memes');
    var tipo_letra = document.getElementById('tipo_letra');
    var texto1 = document.getElementById('texto1');
    var autor = document.getElementById('autor');
    var crear = document.getElementById('crear');
    var caja = document.getElementById('caja');
    var resultado = document.getElementById('resultado');
    var resultado1 = document.getElementById('resultado1');
  
    seleccion_meme.addEventListener('change', () => {
      const categoriaSeleccionada = seleccion_meme.value;
      let opcionesImagen = '';
  
      if (categoriaSeleccionada === 'cara_amarilla') {
        opcionesImagen = `
        <option value="img/cara_amarilla_1">Cara amarilla 1</option>
        <option value="img/cara_amarilla_2">Cara amarilla 2</option>
        <option value="img/cara_amarilla_3">Cara amarilla 3</option> 
        `;
      } else if (categoriaSeleccionada === 'Sherk') {
        opcionesImagen = `
        <option value="img/sherk_1">Sherk 1</option>
        <option value="img/sherk_2">Sherk 2</option>
        <option value="img/sherk_3">Sherk 3</option> 
        `;
      } else if (categoriaSeleccionada === 'memes_randonm') {
        opcionesImagen = `
        <option value="img/meme_1">Randonm 1</option>
        <option value="img/meme_2">Randonm 2</option>
        <option value="img/meme_3">Randonm 3</option>
        `;
      }
  
      Memes.innerHTML = opcionesImagen;
    });
  
    crear.addEventListener('click', () => {
      const seleccion_meme = seleccion_meme.value;
      const Memes = Memes .value;
      const tipo_letra = tipo_letra.value;
      const texto1 = texto1.value;
      const autor = autor.value;
  
      resultado.src = Meme;
      memeTexto.style.fontFamily = fontType;
  
      resultado1.innerText = `${texto1}\n\nCreado por: ${autor}`;
  
      caja.classList.remove('caj');
    });
  });


















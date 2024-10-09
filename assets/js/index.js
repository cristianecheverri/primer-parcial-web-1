fetch('data/datos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const titulo_pagina = document.getElementById('titulo_pagina');
        titulo_pagina.innerHTML = data.titulo_pagina;

        let productos = '';

        data.productos.forEach(function (producto) {
            let imagenes = '';
            producto.imagenes.forEach(function (imagen) {
                imagenes += `<img src="${imagen}" class="w-20"></img>`;
            })
            console.log(imagenes);

            let reseñas = '';

            producto.reseñas.forEach(function (reseña) {
                reseñas += `<div class="border p-2 b-2">
                    <h3>${reseña.usuario}</h3>
                    <p>${reseña.comentario}</p>
                    <p>${reseña.calificacion}/5 </p>
                    <small>Fecha: ${reseña.fecha}</small>
                </div>`;
            });

            productos += `<tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.categoria}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${imagenes}</td>
                <td>${reseñas}</td>
            </tr>`;
        });

        const productosHtml = document.getElementById('lista-productos');
        productosHtml.innerHTML = productos;

        let reseñas_destacadas = '';
        data.reseñas_destacadas.forEach(function(reseña_destacada) {
            reseñas_destacadas += `
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${reseña_destacada.producto}</h5>
                  <p class="card-text">${reseña_destacada.comentario}</p>
                </div>
                <div class="card-footer text-body-secondary">
                    ${reseña_destacada.usuario} 
                    <br>
                    ${reseña_destacada.calificacion}/5 estrellas
                  </div>
              </div>
            </div>`;
        });

        const reseñas_destacadas_html = document.getElementById('reseñas_destacadas');
        reseñas_destacadas_html.innerHTML = reseñas_destacadas;

        let footer = `
            <p>${data.datos_tienda.nombre}</p>
            <p>${data.datos_tienda.direccion}</p>
            <p>${data.datos_tienda.telefono}</p>
            <p>${data.datos_tienda.correo}</p>
            <br>
            <h4>Horarios de atención</h4>
            <p>Lunes a viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
            <p>Sábados: ${data.datos_tienda.horario_atencion.sabados}</p>
            <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>
        `;

        const footerHtml = document.getElementById('footer');
        footerHtml.innerHTML = footer;
    })
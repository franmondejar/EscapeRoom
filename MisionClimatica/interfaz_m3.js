// =====================================================
// INTERFAZ M3 - MISIÓN CLIMÁTICA
//
// Capa visual e interactiva del Módulo 3.
// NO contiene reglas de negocio.
// La lógica de la actividad permanece en script.js.
// =====================================================


document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // BLOQUE: VENTANA TERMINAL - M3
    //
    // Menú principal de la terminal.
    //
    // Permite acceder posteriormente a:
    // - VIABILIDAD
    // - SERVICIO DE REPARACIÓN
    //
    // Mientras la ventana está oculta, sus controles
    // permanecen fuera del raycaster.
    // =====================================================


    // -----------------------------------------------------
    // REFERENCIAS
    // -----------------------------------------------------

    const hotspotTerminalM3 =
        document.querySelector("#hotspot-terminal-m3");

    const ventanaTerminalM3 =
        document.querySelector("#ventana-terminal-m3");

    const botonViabilidadM3 =
        document.querySelector("#boton-viabilidad-m3");

    const botonReparacionM3 =
        document.querySelector("#boton-reparacion-m3");

    const cerrarTerminalM3 =
        document.querySelector("#cerrar-terminal-m3");


    // -----------------------------------------------------
    // CONTROLES INTERACTIVOS DEL MENÚ
    // -----------------------------------------------------

    const controlesTerminalM3 = [
        botonViabilidadM3,
        botonReparacionM3,
        cerrarTerminalM3
    ];


    // La terminal comienza oculta.
    // Ninguno de sus controles debe interceptar
    // el raycaster.
    controlesTerminalM3.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // -----------------------------------------------------
    // ABRIR TERMINAL
    // -----------------------------------------------------

    hotspotTerminalM3.addEventListener("click", () => {

        ventanaTerminalM3.setAttribute("visible", true);

        controlesTerminalM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // -----------------------------------------------------
    // CERRAR TERMINAL
    // -----------------------------------------------------

    cerrarTerminalM3.addEventListener("click", () => {

        ventanaTerminalM3.setAttribute("visible", false);

        controlesTerminalM3.forEach((control) => {
            control.classList.remove("interactivo");
        });

    });


    // FIN BLOQUE: VENTANA TERMINAL - M3

    // =====================================================
    // BLOQUE: ACCESO A VIABILIDAD - CÓDIGO PV M1
    //
    // Al pulsar VIABILIDAD:
    // - se oculta el menú principal;
    // - se abre el panel de código PV;
    // - se activan únicamente sus controles.
    //
    // Los selectores reproducen el funcionamiento
    // utilizado en M1.
    //
    // En este bloque todavía NO se valida el código.
    // =====================================================


    // -----------------------------------------------------
    // REFERENCIAS DEL PANEL PV
    // -----------------------------------------------------

    const ventanaCodigoPvM3 =
        document.querySelector("#ventana-codigo-pv-m3");

    const respuestaCodigoPvM3 =
        document.querySelector("#respuesta-codigo-pv-m3");

    const botonComprobarPvM3 =
        document.querySelector("#boton-comprobar-pv-m3");

    const botonVolverPvM3 =
        document.querySelector("#boton-volver-pv-m3");


    // -----------------------------------------------------
    // SELECTOR 1 - CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv1M3 =
        document.querySelector("#codigo-pv-1-m3");

    const aumentarPv1M3 =
        document.querySelector("#aumentar-pv-1-m3");

    const disminuirPv1M3 =
        document.querySelector("#disminuir-pv-1-m3");

    let valorPv1M3 = 0;


    // -----------------------------------------------------
    // SELECTOR 2 - CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv2M3 =
        document.querySelector("#codigo-pv-2-m3");

    const aumentarPv2M3 =
        document.querySelector("#aumentar-pv-2-m3");

    const disminuirPv2M3 =
        document.querySelector("#disminuir-pv-2-m3");

    let valorPv2M3 = 0;


    // -----------------------------------------------------
    // SELECTOR 3 - CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv3M3 =
        document.querySelector("#codigo-pv-3-m3");

    const aumentarPv3M3 =
        document.querySelector("#aumentar-pv-3-m3");

    const disminuirPv3M3 =
        document.querySelector("#disminuir-pv-3-m3");

    let valorPv3M3 = 0;


    // -----------------------------------------------------
    // CONTROLES INTERACTIVOS DEL PANEL PV
    // -----------------------------------------------------

    const controlesCodigoPvM3 = [
        aumentarPv1M3,
        disminuirPv1M3,
        aumentarPv2M3,
        disminuirPv2M3,
        aumentarPv3M3,
        disminuirPv3M3,
        botonComprobarPvM3,
        botonVolverPvM3
    ];


    // El panel comienza oculto.
    controlesCodigoPvM3.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // -----------------------------------------------------
    // FUNCIÓN: REINICIAR CÓDIGO PV
    // -----------------------------------------------------

    function reiniciarCodigoPvM3() {

        valorPv1M3 = 0;
        valorPv2M3 = 0;
        valorPv3M3 = 0;

        codigoPv1M3.setAttribute("value", "00");
        codigoPv2M3.setAttribute("value", "00");
        codigoPv3M3.setAttribute("value", "00");

        respuestaCodigoPvM3.setAttribute("value", "");

    }


    // -----------------------------------------------------
    // ABRIR VIABILIDAD
    // -----------------------------------------------------

    botonViabilidadM3.addEventListener("click", () => {

        // Ocultar menú principal
        ventanaTerminalM3.setAttribute("visible", false);

        // Evitar superposición con otras ventanas del terminal
        document.querySelector("#ventana-codigo-m2-m3").setAttribute("visible", false);
        document.querySelector("#ventana-servicio-reparacion-m3").setAttribute("visible", false);

        controlesTerminalM3.forEach((control) => {
            control.classList.remove("interactivo");
        });

        // Mostrar panel de código PV
        ventanaCodigoPvM3.setAttribute("visible", true);

        controlesCodigoPvM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // -----------------------------------------------------
    // VOLVER AL MENÚ PRINCIPAL
    // -----------------------------------------------------

    botonVolverPvM3.addEventListener("click", () => {

        // Ocultar panel PV
        ventanaCodigoPvM3.setAttribute("visible", false);

        controlesCodigoPvM3.forEach((control) => {
            control.classList.remove("interactivo");
        });

        // Reiniciar únicamente la interfaz del código
        reiniciarCodigoPvM3();

        // Recuperar menú principal
        ventanaTerminalM3.setAttribute("visible", true);

        controlesTerminalM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // -----------------------------------------------------
    // SELECTOR 1 - CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv1M3.addEventListener("click", () => {

        valorPv1M3++;

        codigoPv1M3.setAttribute(
            "value",
            String(valorPv1M3).padStart(2, "0")
        );

    });


    disminuirPv1M3.addEventListener("click", () => {

        if (valorPv1M3 > 0) {
            valorPv1M3--;
        }

        codigoPv1M3.setAttribute(
            "value",
            String(valorPv1M3).padStart(2, "0")
        );

    });


    // -----------------------------------------------------
    // SELECTOR 2 - CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv2M3.addEventListener("click", () => {

        valorPv2M3++;

        codigoPv2M3.setAttribute(
            "value",
            String(valorPv2M3).padStart(2, "0")
        );

    });


    disminuirPv2M3.addEventListener("click", () => {

        if (valorPv2M3 > 0) {
            valorPv2M3--;
        }

        codigoPv2M3.setAttribute(
            "value",
            String(valorPv2M3).padStart(2, "0")
        );

    });


    // -----------------------------------------------------
    // SELECTOR 3 - CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv3M3.addEventListener("click", () => {

        valorPv3M3++;

        codigoPv3M3.setAttribute(
            "value",
            String(valorPv3M3).padStart(2, "0")
        );

    });


    disminuirPv3M3.addEventListener("click", () => {

        if (valorPv3M3 > 0) {
            valorPv3M3--;
        }

        codigoPv3M3.setAttribute(
            "value",
            String(valorPv3M3).padStart(2, "0")
        );

    });


    // FIN BLOQUE: ACCESO A VIABILIDAD - CÓDIGO PV M1

    
    // =====================================================
    // BLOQUE: RECUPERACIÓN DE PROPUESTA M1 - M3
    //
    // Interpreta el código PV introducido por el operador
    // para reconstruir qué dos productos fueron
    // seleccionados en M1.
    //
    // NO decide qué combinación es mejor.
    // Los tres códigos representan propuestas posibles.
    // =====================================================


    // -----------------------------------------------------
    // REFERENCIAS - VENTANA DE PRECIOS
    // -----------------------------------------------------

    const ventanaPreciosM3 =
        document.querySelector("#ventana-precios-m3");

    const nombreProducto1M3 =
        document.querySelector("#nombre-producto-1-m3");

    const nombreProducto2M3 =
        document.querySelector("#nombre-producto-2-m3");

    const botonVolverPreciosM3 =
        document.querySelector("#boton-volver-precios-m3");

    const botonComprobarPreciosM3 =
        document.querySelector("#boton-comprobar-precios-m3");

    const respuestaPreciosM3 =
        document.querySelector("#respuesta-precios-m3");


    // -----------------------------------------------------
    // CONTROLES DE PRECIOS
    // -----------------------------------------------------

    const controlesPreciosM3 = [
        document.querySelector("#aumentar-precio-1-centenas-m3"),
        document.querySelector("#disminuir-precio-1-centenas-m3"),
        document.querySelector("#aumentar-precio-1-decenas-m3"),
        document.querySelector("#disminuir-precio-1-decenas-m3"),
        document.querySelector("#aumentar-precio-1-unidades-m3"),
        document.querySelector("#disminuir-precio-1-unidades-m3"),

        document.querySelector("#aumentar-precio-2-centenas-m3"),
        document.querySelector("#disminuir-precio-2-centenas-m3"),
        document.querySelector("#aumentar-precio-2-decenas-m3"),
        document.querySelector("#disminuir-precio-2-decenas-m3"),
        document.querySelector("#aumentar-precio-2-unidades-m3"),
        document.querySelector("#disminuir-precio-2-unidades-m3"),

        botonComprobarPreciosM3,
        botonVolverPreciosM3
    ];


    // La ventana comienza oculta.
    controlesPreciosM3.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // -----------------------------------------------------
    // ESTADO RECUPERADO DE M1
    //
    // Solo almacena qué productos representa el código PV
    // introducido.
    // -----------------------------------------------------

    let productosRecuperadosM1 = [];


    // -----------------------------------------------------
    // COMPROBAR CÓDIGO PV
    // -----------------------------------------------------

    botonComprobarPvM3.addEventListener("click", () => {

        const codigoIntroducido =
            `PV-${String(valorPv1M3).padStart(2, "0")}` +
            `-${String(valorPv2M3).padStart(2, "0")}` +
            `-${String(valorPv3M3).padStart(2, "0")}`;


        // ---------------------------------------------
        // RECONSTRUIR LA SELECCIÓN ORIGINAL DE M1
        //
        // registrarPropuesta(...) recibe un ARRAY con los
        // nombres de las necesidades seleccionadas, no las
        // cantidades numéricas del código PV.
        // ---------------------------------------------

        productosRecuperadosM1 = [];

        if (valorPv1M3 === GAME_DATA.dispositivos.portatil.necesidad) {
            productosRecuperadosM1.push("portatil");
        } else if (valorPv1M3 !== 0) {
            respuestaCodigoPvM3.setAttribute("value", "CÓDIGO NO RECONOCIDO");
            return;
        }

        if (valorPv2M3 === GAME_DATA.dispositivos.tablet.necesidad) {
            productosRecuperadosM1.push("tablet");
        } else if (valorPv2M3 !== 0) {
            respuestaCodigoPvM3.setAttribute("value", "CÓDIGO NO RECONOCIDO");
            return;
        }

        if (valorPv3M3 === GAME_DATA.dispositivos.sobremesa.necesidad) {
            productosRecuperadosM1.push("sobremesa");
        } else if (valorPv3M3 !== 0) {
            respuestaCodigoPvM3.setAttribute("value", "CÓDIGO NO RECONOCIDO");
            return;
        }


        // ---------------------------------------------
        // LLAMAR AL MOTOR DE M1
        // ---------------------------------------------

        const resultadoM1 =
            registrarPropuesta(productosRecuperadosM1);


        // ---------------------------------------------
        // ACTUAR SEGÚN LA RESPUESTA DEL MOTOR
        // ---------------------------------------------

        if (!resultadoM1.valida) {

            respuestaCodigoPvM3.setAttribute(
                "value",
                "CÓDIGO NO RECONOCIDO"
            );

            return;
        }


        // ---------------------------------------------
        // TRADUCIR NOMBRES PARA LA INTERFAZ
        // ---------------------------------------------

        const nombresProductos = {
            portatil: "PORTÁTILES",
            tablet: "TABLETS",
            sobremesa: "SOBREMESA"
        };


        nombreProducto1M3.setAttribute(
            "value",
            nombresProductos[productosRecuperadosM1[0]]
        );

        nombreProducto2M3.setAttribute(
            "value",
            nombresProductos[productosRecuperadosM1[1]]
        );


        // ---------------------------------------------
        // CERRAR PANEL PV
        // ---------------------------------------------

        ventanaCodigoPvM3.setAttribute("visible", false);

        controlesCodigoPvM3.forEach((control) => {
            control.classList.remove("interactivo");
        });


        // ---------------------------------------------
        // ABRIR PRECIOS
        // ---------------------------------------------

        ventanaPreciosM3.setAttribute("visible", true);

        controlesPreciosM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // -----------------------------------------------------
    // VOLVER DESDE PRECIOS
    // -----------------------------------------------------

    botonVolverPreciosM3.addEventListener("click", () => {

         // Limpiar el mensaje al cerrar la ventana
        limpiarMensajePreciosM3();

        ventanaPreciosM3.setAttribute("visible", false);

        controlesPreciosM3.forEach((control) => {
            control.classList.remove("interactivo");
        });

        // Volver al panel PV
        ventanaCodigoPvM3.setAttribute("visible", true);

        controlesCodigoPvM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // FIN BLOQUE: RECUPERACIÓN DE PROPUESTA M1 - M3

    
    // =====================================================
    // BLOQUE: SELECTORES DE PRECIOS - M3
    //
    // Cada precio se construye mediante tres dígitos:
    // - centenas
    // - decenas
    // - unidades
    //
    // Cada dígito funciona de forma circular entre 0 y 9.
    //
    // IMPORTANTE:
    // Este bloque únicamente construye valores numéricos.
    // NO aplica límites sociales.
    // NO calcula costes.
    // NO calcula margen.
    // NO valida la viabilidad.
    // =====================================================

    // =====================================================
    // FUNCIÓN: LIMPIAR MENSAJE DE PRECIOS
    //
    // Cualquier modificación de los precios invalida
    // visualmente la comprobación anterior.
    // =====================================================

    function limpiarMensajePreciosM3() {

        respuestaPreciosM3.setAttribute(
            "value",
            ""
        );

    }


    // =====================================================
    // PRODUCTO 1 - REFERENCIAS
    // =====================================================

    const precio1CentenasM3 =
        document.querySelector("#precio-1-centenas-m3");

    const precio1DecenasM3 =
        document.querySelector("#precio-1-decenas-m3");

    const precio1UnidadesM3 =
        document.querySelector("#precio-1-unidades-m3");


    const aumentarPrecio1CentenasM3 =
        document.querySelector("#aumentar-precio-1-centenas-m3");

    const disminuirPrecio1CentenasM3 =
        document.querySelector("#disminuir-precio-1-centenas-m3");

    const aumentarPrecio1DecenasM3 =
        document.querySelector("#aumentar-precio-1-decenas-m3");

    const disminuirPrecio1DecenasM3 =
        document.querySelector("#disminuir-precio-1-decenas-m3");

    const aumentarPrecio1UnidadesM3 =
        document.querySelector("#aumentar-precio-1-unidades-m3");

    const disminuirPrecio1UnidadesM3 =
        document.querySelector("#disminuir-precio-1-unidades-m3");


    let valorPrecio1CentenasM3 = 0;
    let valorPrecio1DecenasM3 = 0;
    let valorPrecio1UnidadesM3 = 0;


    // =====================================================
    // PRODUCTO 2 - REFERENCIAS
    // =====================================================

    const precio2CentenasM3 =
        document.querySelector("#precio-2-centenas-m3");

    const precio2DecenasM3 =
        document.querySelector("#precio-2-decenas-m3");

    const precio2UnidadesM3 =
        document.querySelector("#precio-2-unidades-m3");


    const aumentarPrecio2CentenasM3 =
        document.querySelector("#aumentar-precio-2-centenas-m3");

    const disminuirPrecio2CentenasM3 =
        document.querySelector("#disminuir-precio-2-centenas-m3");

    const aumentarPrecio2DecenasM3 =
        document.querySelector("#aumentar-precio-2-decenas-m3");

    const disminuirPrecio2DecenasM3 =
        document.querySelector("#disminuir-precio-2-decenas-m3");

    const aumentarPrecio2UnidadesM3 =
        document.querySelector("#aumentar-precio-2-unidades-m3");

    const disminuirPrecio2UnidadesM3 =
        document.querySelector("#disminuir-precio-2-unidades-m3");


    let valorPrecio2CentenasM3 = 0;
    let valorPrecio2DecenasM3 = 0;
    let valorPrecio2UnidadesM3 = 0;


    // =====================================================
    // FUNCIÓN AUXILIAR - AUMENTAR DÍGITO
    // =====================================================

    function aumentarDigitoM3(valor) {

        if (valor >= 9) {
            return 0;
        }

        return valor + 1;

    }


    // =====================================================
    // FUNCIÓN AUXILIAR - DISMINUIR DÍGITO
    // =====================================================

    function disminuirDigitoM3(valor) {

        if (valor <= 0) {
            return 9;
        }

        return valor - 1;

    }


    // =====================================================
    // PRODUCTO 1 - CENTENAS
    // =====================================================

    aumentarPrecio1CentenasM3.addEventListener("click", () => {

        valorPrecio1CentenasM3 =
            aumentarDigitoM3(valorPrecio1CentenasM3);

        precio1CentenasM3.setAttribute(
            "value",
            valorPrecio1CentenasM3
        );

    });


    disminuirPrecio1CentenasM3.addEventListener("click", () => {

        valorPrecio1CentenasM3 =
            disminuirDigitoM3(valorPrecio1CentenasM3);

        precio1CentenasM3.setAttribute(
            "value",
            valorPrecio1CentenasM3
        );

    });


    // =====================================================
    // PRODUCTO 1 - DECENAS
    // =====================================================

    aumentarPrecio1DecenasM3.addEventListener("click", () => {

        valorPrecio1DecenasM3 =
            aumentarDigitoM3(valorPrecio1DecenasM3);

        precio1DecenasM3.setAttribute(
            "value",
            valorPrecio1DecenasM3
        );

    });


    disminuirPrecio1DecenasM3.addEventListener("click", () => {

        valorPrecio1DecenasM3 =
            disminuirDigitoM3(valorPrecio1DecenasM3);

        precio1DecenasM3.setAttribute(
            "value",
            valorPrecio1DecenasM3
        );

    });


    // =====================================================
    // PRODUCTO 1 - UNIDADES
    // =====================================================

    aumentarPrecio1UnidadesM3.addEventListener("click", () => {

        valorPrecio1UnidadesM3 =
            aumentarDigitoM3(valorPrecio1UnidadesM3);

        precio1UnidadesM3.setAttribute(
            "value",
            valorPrecio1UnidadesM3
        );

    });


    disminuirPrecio1UnidadesM3.addEventListener("click", () => {

        valorPrecio1UnidadesM3 =
            disminuirDigitoM3(valorPrecio1UnidadesM3);

        precio1UnidadesM3.setAttribute(
            "value",
            valorPrecio1UnidadesM3
        );

    });


    // =====================================================
    // PRODUCTO 2 - CENTENAS
    // =====================================================

    aumentarPrecio2CentenasM3.addEventListener("click", () => {

        valorPrecio2CentenasM3 =
            aumentarDigitoM3(valorPrecio2CentenasM3);

        precio2CentenasM3.setAttribute(
            "value",
            valorPrecio2CentenasM3
        );

    });


    disminuirPrecio2CentenasM3.addEventListener("click", () => {

        valorPrecio2CentenasM3 =
            disminuirDigitoM3(valorPrecio2CentenasM3);

        precio2CentenasM3.setAttribute(
            "value",
            valorPrecio2CentenasM3
        );

    });


    // =====================================================
    // PRODUCTO 2 - DECENAS
    // =====================================================

    aumentarPrecio2DecenasM3.addEventListener("click", () => {

        valorPrecio2DecenasM3 =
            aumentarDigitoM3(valorPrecio2DecenasM3);

        precio2DecenasM3.setAttribute(
            "value",
            valorPrecio2DecenasM3
        );

    });


    disminuirPrecio2DecenasM3.addEventListener("click", () => {

        valorPrecio2DecenasM3 =
            disminuirDigitoM3(valorPrecio2DecenasM3);

        precio2DecenasM3.setAttribute(
            "value",
            valorPrecio2DecenasM3
        );

    });


    // =====================================================
    // PRODUCTO 2 - UNIDADES
    // =====================================================

    aumentarPrecio2UnidadesM3.addEventListener("click", () => {

        valorPrecio2UnidadesM3 =
            aumentarDigitoM3(valorPrecio2UnidadesM3);

        precio2UnidadesM3.setAttribute(
            "value",
            valorPrecio2UnidadesM3
        );

    });


    disminuirPrecio2UnidadesM3.addEventListener("click", () => {

        valorPrecio2UnidadesM3 =
            disminuirDigitoM3(valorPrecio2UnidadesM3);

        precio2UnidadesM3.setAttribute(
            "value",
            valorPrecio2UnidadesM3
        );

    });


    // =====================================================
    // FUNCIÓN: OBTENER PRECIOS CONSTRUIDOS
    //
    // Convierte los tres dígitos de cada producto
    // en un único número.
    //
    // Ejemplo:
    // 1 - 3 - 2  => 132
    //
    // Esta función se utilizará posteriormente al
    // registrar la viabilidad mediante el motor.
    // =====================================================

    function obtenerPrecioProducto1M3() {

        return (
            valorPrecio1CentenasM3 * 100 +
            valorPrecio1DecenasM3 * 10 +
            valorPrecio1UnidadesM3
        );

    }


    function obtenerPrecioProducto2M3() {

        return (
            valorPrecio2CentenasM3 * 100 +
            valorPrecio2DecenasM3 * 10 +
            valorPrecio2UnidadesM3
        );

    }


    // FIN BLOQUE: SELECTORES DE PRECIOS - M3

        // =====================================================
    // BLOQUE: COMPROBACIÓN DE ACCESIBILIDAD DE PRECIOS - M3
    //
    // Comprueba que los precios establecidos respetan
    // los límites sociales definidos en GAME_DATA.
    //
    // La interfaz NO contiene los valores de los límites.
    // Los recupera de constants.js.
    //
    // Esta comprobación NO valida todavía:
    // - margen global mínimo;
    // - servicio de reparación;
    // - resultado completo de M3.
    // =====================================================


    // -----------------------------------------------------
    // COMPROBAR PRECIOS
    // -----------------------------------------------------

    botonComprobarPreciosM3.addEventListener("click", () => {

        const precioProducto1 =
            obtenerPrecioProducto1M3();

        const precioProducto2 =
            obtenerPrecioProducto2M3();


        // ---------------------------------------------
        // PRODUCTOS RECUPERADOS DE M1
        // ---------------------------------------------

        const producto1 =
            productosRecuperadosM1[0];

        const producto2 =
            productosRecuperadosM1[1];


        // ---------------------------------------------
        // LÍMITES SOCIALES
        //
        // Se leen directamente de constants.js.
        // ---------------------------------------------

        const limiteProducto1 =
            GAME_DATA.dispositivos[producto1]
                .precioMaximoAccesible;

        const limiteProducto2 =
            GAME_DATA.dispositivos[producto2]
                .precioMaximoAccesible;


        // ---------------------------------------------
        // COMPROBACIÓN
        // ---------------------------------------------

        const producto1Accesible =
            precioProducto1 <= limiteProducto1;

        const producto2Accesible =
            precioProducto2 <= limiteProducto2;


        // ---------------------------------------------
        // RESULTADO
        // ---------------------------------------------

        if (
            producto1Accesible &&
            producto2Accesible
        ) {

            respuestaPreciosM3.setAttribute(
                "value",
                "PRECIOS DENTRO DE LOS LÍMITES DE ACCESIBILIDAD"
            );

            return;
        }


        // ---------------------------------------------
        // IDENTIFICAR INCUMPLIMIENTOS
        // ---------------------------------------------

        let mensaje = "PRECIO NO ACCESIBLE:";


        if (!producto1Accesible) {

            mensaje +=
                ` ${GAME_DATA.dispositivos[producto1].nombre}` +
                ` (max. ${limiteProducto1} EUR)`;

        }


        if (!producto2Accesible) {

            mensaje +=
                ` ${GAME_DATA.dispositivos[producto2].nombre}` +
                ` (max. ${limiteProducto2} EUR)`;

        }


        respuestaPreciosM3.setAttribute(
            "value",
            mensaje
        );

    });


    // FIN BLOQUE: COMPROBACIÓN DE ACCESIBILIDAD DE PRECIOS - M3

        // =====================================================
    // BLOQUE: ACCESO A SERVICIO DE REPARACIÓN - CÓDIGO M2
    //
    // Permite introducir el código generado en M2.
    //
    // Cada posición puede adoptar:
    // P = Reparar/renovar
    // C = Recuperar componentes
    // M = Recuperar materiales
    //
    // Este bloque únicamente gestiona:
    // - apertura y cierre de la ventana;
    // - selectores P/C/M;
    // - vuelta al menú principal.
    //
    // La comprobación del código se realizará
    // posteriormente.
    // =====================================================


    // -----------------------------------------------------
    // REFERENCIAS - VENTANA CÓDIGO M2
    // -----------------------------------------------------

    const ventanaCodigoM2M3 =
        document.querySelector("#ventana-codigo-m2-m3");

    const respuestaCodigoM2M3 =
        document.querySelector("#respuesta-codigo-m2-m3");

    const botonComprobarM2M3 =
        document.querySelector("#boton-comprobar-m2-m3");

    const botonVolverM2M3 =
        document.querySelector("#boton-volver-m2-m3");


    // -----------------------------------------------------
    // SELECTOR 1
    // -----------------------------------------------------

    const codigoM21M3 =
        document.querySelector("#codigo-m2-1-m3");

    const aumentarM21M3 =
        document.querySelector("#aumentar-m2-1-m3");

    const disminuirM21M3 =
        document.querySelector("#disminuir-m2-1-m3");


    // -----------------------------------------------------
    // SELECTOR 2
    // -----------------------------------------------------

    const codigoM22M3 =
        document.querySelector("#codigo-m2-2-m3");

    const aumentarM22M3 =
        document.querySelector("#aumentar-m2-2-m3");

    const disminuirM22M3 =
        document.querySelector("#disminuir-m2-2-m3");


    // -----------------------------------------------------
    // SELECTOR 3
    // -----------------------------------------------------

    const codigoM23M3 =
        document.querySelector("#codigo-m2-3-m3");

    const aumentarM23M3 =
        document.querySelector("#aumentar-m2-3-m3");

    const disminuirM23M3 =
        document.querySelector("#disminuir-m2-3-m3");


    // -----------------------------------------------------
    // VALORES DE LOS SELECTORES
    // -----------------------------------------------------

    const opcionesCodigoM2M3 = ["P", "C", "M"];

    let indiceM21M3 = 0;
    let indiceM22M3 = 0;
    let indiceM23M3 = 0;


    // -----------------------------------------------------
    // CONTROLES INTERACTIVOS
    // -----------------------------------------------------

    const controlesCodigoM2M3 = [
        aumentarM21M3,
        disminuirM21M3,
        aumentarM22M3,
        disminuirM22M3,
        aumentarM23M3,
        disminuirM23M3,
        botonComprobarM2M3,
        botonVolverM2M3
    ];


    // La ventana comienza oculta.
    controlesCodigoM2M3.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // =====================================================
    // FUNCIÓN: ACTUALIZAR SELECTOR M2
    // =====================================================

    function actualizarSelectorM2M3(elemento, indice) {

        elemento.setAttribute(
            "value",
            opcionesCodigoM2M3[indice]
        );

    }


    // =====================================================
    // FUNCIÓN: LIMPIAR MENSAJE M2
    // =====================================================

    function limpiarMensajeCodigoM2M3() {

        respuestaCodigoM2M3.setAttribute(
            "value",
            ""
        );

    }


    // =====================================================
    // ABRIR SERVICIO DE REPARACIÓN
    // =====================================================

    botonReparacionM3.addEventListener("click", () => {

        // Ocultar menú principal
        ventanaTerminalM3.setAttribute("visible", false);

        // Evitar superposición con las ventanas de viabilidad
        ventanaCodigoPvM3.setAttribute("visible", false);
        ventanaPreciosM3.setAttribute("visible", false);

        controlesTerminalM3.forEach((control) => {
            control.classList.remove("interactivo");
        });


        // Mostrar código M2
        ventanaCodigoM2M3.setAttribute("visible", true);

        controlesCodigoM2M3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // =====================================================
    // VOLVER AL MENÚ PRINCIPAL
    // =====================================================

    botonVolverM2M3.addEventListener("click", () => {

        limpiarMensajeCodigoM2M3();

        ventanaCodigoM2M3.setAttribute("visible", false);

        controlesCodigoM2M3.forEach((control) => {
            control.classList.remove("interactivo");
        });


        ventanaTerminalM3.setAttribute("visible", true);

        controlesTerminalM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // =====================================================
    // SELECTOR 1
    // =====================================================

    aumentarM21M3.addEventListener("click", () => {

        indiceM21M3 =
            (indiceM21M3 + 1) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM21M3,
            indiceM21M3
        );

    });


    disminuirM21M3.addEventListener("click", () => {

        indiceM21M3 =
            (indiceM21M3 - 1 +
            opcionesCodigoM2M3.length) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM21M3,
            indiceM21M3
        );

    });


    // =====================================================
    // SELECTOR 2
    // =====================================================

    aumentarM22M3.addEventListener("click", () => {

        indiceM22M3 =
            (indiceM22M3 + 1) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM22M3,
            indiceM22M3
        );

    });


    disminuirM22M3.addEventListener("click", () => {

        indiceM22M3 =
            (indiceM22M3 - 1 +
            opcionesCodigoM2M3.length) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM22M3,
            indiceM22M3
        );

    });


    // =====================================================
    // SELECTOR 3
    // =====================================================

    aumentarM23M3.addEventListener("click", () => {

        indiceM23M3 =
            (indiceM23M3 + 1) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM23M3,
            indiceM23M3
        );

    });


    disminuirM23M3.addEventListener("click", () => {

        indiceM23M3 =
            (indiceM23M3 - 1 +
            opcionesCodigoM2M3.length) %
            opcionesCodigoM2M3.length;

        actualizarSelectorM2M3(
            codigoM23M3,
            indiceM23M3
        );

    });


    // FIN BLOQUE: ACCESO A SERVICIO DE REPARACIÓN - CÓDIGO M2

        // =====================================================
    // BLOQUE: VALIDACIÓN DEL CÓDIGO M2 PARA REPARACIÓN
    //
    // Reconstruye la carga de trabajo correspondiente
    // al código introducido utilizando exclusivamente
    // los datos definidos en GAME_DATA.
    //
    // Para acceder al servicio de reparación:
    //
    // 1. El código debe respetar la capacidad de M2.
    // 2. Debe existir al menos una estrategia C
    //    (recuperación de componentes).
    //
    // Este bloque NO establece combinaciones válidas
    // predeterminadas.
    // =====================================================


    // -----------------------------------------------------
    // FUNCIÓN: OBTENER HORAS DE UNA DECISIÓN M2
    // -----------------------------------------------------

    function obtenerHorasDecisionM2M3(dispositivo, estrategia) {

        const equivalenciaEstrategias = {
            P: "reparar",
            C: "componentes",
            M: "materiales"
        };

        const tipoEstrategia =
            equivalenciaEstrategias[estrategia];

        return GAME_DATA.m2.horas[dispositivo][tipoEstrategia];

    }


    // -----------------------------------------------------
    // COMPROBAR CÓDIGO M2
    // -----------------------------------------------------

    botonComprobarM2M3.addEventListener("click", () => {

        // ---------------------------------------------
        // RECUPERAR LAS TRES DECISIONES
        //
        // Orden:
        // 1. Portátil
        // 2. Tablet
        // 3. Sobremesa
        // ---------------------------------------------

        const decisionPortatil =
            opcionesCodigoM2M3[indiceM21M3];

        const decisionTablet =
            opcionesCodigoM2M3[indiceM22M3];

        const decisionSobremesa =
            opcionesCodigoM2M3[indiceM23M3];


        // ---------------------------------------------
        // LLAMAR AL MOTOR DE M2
        //
        // El motor comprueba las 20 horas, registra
        // el modelo circular y determina si el servicio
        // de reparación está disponible.
        // ---------------------------------------------

        const resultadoM2 =
            registrarModeloCircular(
                decisionPortatil,
                decisionTablet,
                decisionSobremesa
            );


        // ---------------------------------------------
        // CÓDIGO M2 NO VÁLIDO
        // ---------------------------------------------

        if (!resultadoM2.valido) {

            respuestaCodigoM2M3.setAttribute(
                "value",
                "CÓDIGO M2 NO VALIDO"
            );

            return;
        }


        // ---------------------------------------------
        // SERVICIO DE REPARACIÓN NO DISPONIBLE
        // ---------------------------------------------

        if (!resultadoM2.reparacionDisponible) {

            respuestaCodigoM2M3.setAttribute(
                "value",
                "LA ESTRUCTURA EMPRESARIAL NO PERMITE UTILIZAR EL SERVICIO DE REPARACIÓN"
            );

            return;
        }


        // ---------------------------------------------
        // M2 REGISTRADO Y SERVICIO DISPONIBLE
        // ---------------------------------------------

        limpiarMensajeCodigoM2M3();

        ventanaCodigoM2M3.setAttribute("visible", false);

        controlesCodigoM2M3.forEach((control) => {
            control.classList.remove("interactivo");
        });

        ventanaServicioReparacionM3.setAttribute("visible", true);

        controlesServicioReparacionM3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // FIN BLOQUE: VALIDACIÓN DEL CÓDIGO M2 PARA REPARACIÓN

    // =====================================================
    // BLOQUE: CONFIGURACIÓN DEL SERVICIO DE REPARACIÓN - M3
    //
    // Gestiona:
    // - tipo de servicio;
    // - número de dispositivos;
    // - precio por reparación;
    // - disponibilidad según los componentes recuperados en M2.
    //
    // No recomienda decisiones ni revela los cálculos al alumnado.
    // =====================================================

    // -----------------------------------------------------
    // REFERENCIAS
    // -----------------------------------------------------

    const ventanaServicioReparacionM3 =
        document.querySelector("#ventana-servicio-reparacion-m3");

    const tipoReparacionM3 =
        document.querySelector("#tipo-reparacion-m3");

    const aumentarTipoReparacionM3 =
        document.querySelector("#aumentar-tipo-reparacion-m3");

    const disminuirTipoReparacionM3 =
        document.querySelector("#disminuir-tipo-reparacion-m3");

    const numeroReparacionesM3 =
        document.querySelector("#numero-reparaciones-m3");

    const aumentarNumeroReparacionesM3 =
        document.querySelector("#aumentar-numero-reparaciones-m3");

    const disminuirNumeroReparacionesM3 =
        document.querySelector("#disminuir-numero-reparaciones-m3");

    const precioReparacionDecenasM3 =
        document.querySelector("#precio-reparacion-decenas-m3");

    const precioReparacionUnidadesM3 =
        document.querySelector("#precio-reparacion-unidades-m3");

    const aumentarPrecioReparacionDecenasM3 =
        document.querySelector("#aumentar-precio-reparacion-decenas-m3");

    const disminuirPrecioReparacionDecenasM3 =
        document.querySelector("#disminuir-precio-reparacion-decenas-m3");

    const aumentarPrecioReparacionUnidadesM3 =
        document.querySelector("#aumentar-precio-reparacion-unidades-m3");

    const disminuirPrecioReparacionUnidadesM3 =
        document.querySelector("#disminuir-precio-reparacion-unidades-m3");

    const respuestaServicioReparacionM3 =
        document.querySelector("#respuesta-servicio-reparacion-m3");

    const botonConfirmarServicioReparacionM3 =
        document.querySelector("#boton-confirmar-servicio-reparacion-m3");

    const botonVolverServicioReparacionM3 =
        document.querySelector("#boton-volver-servicio-reparacion-m3");


    // -----------------------------------------------------
    // CONTROLES INTERACTIVOS
    // -----------------------------------------------------

    const controlesServicioReparacionM3 = [
        aumentarTipoReparacionM3,
        disminuirTipoReparacionM3,
        aumentarNumeroReparacionesM3,
        disminuirNumeroReparacionesM3,
        aumentarPrecioReparacionDecenasM3,
        disminuirPrecioReparacionDecenasM3,
        aumentarPrecioReparacionUnidadesM3,
        disminuirPrecioReparacionUnidadesM3,
        botonConfirmarServicioReparacionM3,
        botonVolverServicioReparacionM3
    ];

    controlesServicioReparacionM3.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // -----------------------------------------------------
    // ESTADO DEL SERVICIO
    // -----------------------------------------------------

    const opcionesServicioReparacionM3 = [
        "SIN SERVICIO",
        "BÁSICO - 80 EUR (1-4 DISPOSITIVOS)",
        "AMPLIADO - 150 EUR (5-8 DISPOSITIVOS)"
    ];

    let indiceServicioReparacionM3 = 0;
    let valorNumeroReparacionesM3 = 0;
    let valorPrecioReparacionDecenasM3 = 0;
    let valorPrecioReparacionUnidadesM3 = 0;


    // -----------------------------------------------------
    // FUNCIONES AUXILIARES
    // -----------------------------------------------------

    function actualizarServicioReparacionM3() {

        tipoReparacionM3.setAttribute(
            "value",
            opcionesServicioReparacionM3[indiceServicioReparacionM3]
        );

    }

    function obtenerPrecioReparacionM3() {

        return (
            valorPrecioReparacionDecenasM3 * 10 +
            valorPrecioReparacionUnidadesM3
        );

    }

    // -----------------------------------------------------
    // FUNCIÓN: COMPONENTES DISPONIBLES SEGÚN CÓDIGO M2
    //
    // Cada estrategia C permite utilizar los componentes
    // procedentes de los dispositivos averiados del lote.
    //
    // Las cantidades se leen directamente desde GAME_DATA.
    // -----------------------------------------------------

    function obtenerComponentesDisponiblesM3() {

        let total = 0;

        // PORTÁTILES
        if (opcionesCodigoM2M3[indiceM21M3] === "C") {
            total += GAME_DATA.dispositivos.portatil.averiados;
        }

        // TABLETS
        if (opcionesCodigoM2M3[indiceM22M3] === "C") {
            total += GAME_DATA.dispositivos.tablet.averiados;
        }

        // SOBREMESA
        if (opcionesCodigoM2M3[indiceM23M3] === "C") {
            total += GAME_DATA.dispositivos.sobremesa.averiados;
        }

        return total;

    }

    function limpiarMensajeServicioReparacionM3() {

        respuestaServicioReparacionM3.setAttribute("value", "");

    }


    // -----------------------------------------------------
    // TIPO DE SERVICIO
    // -----------------------------------------------------

    aumentarTipoReparacionM3.addEventListener("click", () => {

        indiceServicioReparacionM3 =
            (indiceServicioReparacionM3 + 1) %
            opcionesServicioReparacionM3.length;

        actualizarServicioReparacionM3();

    });

    disminuirTipoReparacionM3.addEventListener("click", () => {

        indiceServicioReparacionM3 =
            (indiceServicioReparacionM3 - 1 +
            opcionesServicioReparacionM3.length) %
            opcionesServicioReparacionM3.length;

        actualizarServicioReparacionM3();

    });


    // -----------------------------------------------------
    // NÚMERO DE DISPOSITIVOS
    // -----------------------------------------------------

    aumentarNumeroReparacionesM3.addEventListener("click", () => {

        if (valorNumeroReparacionesM3 < 8) {
            valorNumeroReparacionesM3++;
        }

        numeroReparacionesM3.setAttribute(
            "value",
            valorNumeroReparacionesM3
        );

    });

    disminuirNumeroReparacionesM3.addEventListener("click", () => {

        if (valorNumeroReparacionesM3 > 0) {
            valorNumeroReparacionesM3--;
        }

        numeroReparacionesM3.setAttribute(
            "value",
            valorNumeroReparacionesM3
        );

    });


    // -----------------------------------------------------
    // PRECIO POR REPARACIÓN
    // -----------------------------------------------------

    aumentarPrecioReparacionDecenasM3.addEventListener("click", () => {

        valorPrecioReparacionDecenasM3 =
            aumentarDigitoM3(valorPrecioReparacionDecenasM3);

        precioReparacionDecenasM3.setAttribute(
            "value",
            valorPrecioReparacionDecenasM3
        );

    });

    disminuirPrecioReparacionDecenasM3.addEventListener("click", () => {

        valorPrecioReparacionDecenasM3 =
            disminuirDigitoM3(valorPrecioReparacionDecenasM3);

        precioReparacionDecenasM3.setAttribute(
            "value",
            valorPrecioReparacionDecenasM3
        );

    });

    aumentarPrecioReparacionUnidadesM3.addEventListener("click", () => {

        valorPrecioReparacionUnidadesM3 =
            aumentarDigitoM3(valorPrecioReparacionUnidadesM3);

        precioReparacionUnidadesM3.setAttribute(
            "value",
            valorPrecioReparacionUnidadesM3
        );

    });

    disminuirPrecioReparacionUnidadesM3.addEventListener("click", () => {

        valorPrecioReparacionUnidadesM3 =
            disminuirDigitoM3(valorPrecioReparacionUnidadesM3);

        precioReparacionUnidadesM3.setAttribute(
            "value",
            valorPrecioReparacionUnidadesM3
        );

    });


    // =====================================================
    // BLOQUE: CIERRE DE M3 MEDIANTE EL MOTOR LÓGICO
    //
    // Recoge las decisiones visuales ya introducidas:
    // - precios de los dos productos recuperados de M1;
    // - número de reparaciones;
    // - precio por reparación.
    //
    // La interfaz NO calcula la viabilidad.
    // registrarViabilidad(...) valida las decisiones,
    // calcula el margen global y registra M3.
    // =====================================================

    botonConfirmarServicioReparacionM3.addEventListener("click", () => {

        // ---------------------------------------------
        // 1. RECUPERAR LOS PRECIOS MOSTRADOS
        // ---------------------------------------------

        const precioProducto1 =
            obtenerPrecioProducto1M3();

        const precioProducto2 =
            obtenerPrecioProducto2M3();


        // ---------------------------------------------
        // 2. TRADUCIR LOS DOS PRECIOS A P / T / S
        //
        // El producto no incluido en M1 permanece a 0.
        // ---------------------------------------------

        const preciosM3 = {
            portatil: 0,
            tablet: 0,
            sobremesa: 0
        };

        preciosM3[productosRecuperadosM1[0]] =
            precioProducto1;

        preciosM3[productosRecuperadosM1[1]] =
            precioProducto2;


        // ---------------------------------------------
        // 3. RECUPERAR EL SERVICIO DE REPARACIÓN
        //
        // SIN SERVICIO fuerza ambos valores a 0.
        // ---------------------------------------------

        const numeroReparaciones =
            indiceServicioReparacionM3 === 0
                ? 0
                : valorNumeroReparacionesM3;

        const precioReparacion =
            indiceServicioReparacionM3 === 0
                ? 0
                : obtenerPrecioReparacionM3();


        // ---------------------------------------------
        // 4. COMPROBAR COHERENCIA DEL TIPO DE SERVICIO
        //
        // El selector visual distingue:
        // 0 = SIN SERVICIO
        // 1 = BÁSICO (1-4 dispositivos)
        // 2 = AMPLIADO (5-8 dispositivos)
        //
        // registrarViabilidad(...) no recibe el tipo de
        // servicio como parámetro, por lo que esta
        // correspondencia debe comprobarse antes de enviar
        // los datos al motor.
        // ---------------------------------------------

        if (
            indiceServicioReparacionM3 === 0 &&
            numeroReparaciones !== 0
        ) {

            respuestaServicioReparacionM3.setAttribute(
                "value",
                "SERVICIO NO DISPONIBLE"
            );

            return;
        }


        if (
            indiceServicioReparacionM3 === 1 &&
            (
                numeroReparaciones < 1 ||
                numeroReparaciones > 4
            )
        ) {

            respuestaServicioReparacionM3.setAttribute(
                "value",
                "SERVICIO BÁSICO NO DISPONIBLE"
            );

            return;
        }


        if (
            indiceServicioReparacionM3 === 2 &&
            (
                numeroReparaciones < 5 ||
                numeroReparaciones > 8
            )
        ) {

            respuestaServicioReparacionM3.setAttribute(
                "value",
                "SERVICIO AMPLIADO NO DISPONIBLE"
            );

            return;
        }


        // ---------------------------------------------
        // 5. LLAMAR AL MOTOR DE M3
        // ---------------------------------------------

        const resultadoM3 =
            registrarViabilidad(
                preciosM3.portatil,
                preciosM3.tablet,
                preciosM3.sobremesa,
                numeroReparaciones,
                precioReparacion
            );


        // ---------------------------------------------
        // 6. ACTUAR SEGÚN LA RESPUESTA DEL MOTOR
        // ---------------------------------------------

        if (!resultadoM3.valido) {

            respuestaServicioReparacionM3.setAttribute(
                "value",
                "Criterios no cumplidos."
            );

            return;
        }


        respuestaServicioReparacionM3.setAttribute(
            "value",
            "VIABILIDAD REGISTRADA - CODIGO M3: " + resultadoM3.codigoM3
        );

    });

    // FIN BLOQUE: CIERRE DE M3 MEDIANTE EL MOTOR LÓGICO


    // -----------------------------------------------------
    // VOLVER AL CÓDIGO M2
    // -----------------------------------------------------

    botonVolverServicioReparacionM3.addEventListener("click", () => {

        limpiarMensajeServicioReparacionM3();

        ventanaServicioReparacionM3.setAttribute("visible", false);

        controlesServicioReparacionM3.forEach((control) => {
            control.classList.remove("interactivo");
        });

        ventanaCodigoM2M3.setAttribute("visible", true);

        controlesCodigoM2M3.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // FIN BLOQUE: CONFIGURACIÓN DEL SERVICIO DE REPARACIÓN - M3


    // =====================================================
    // BLOQUE: CONTROL DE SALIDA - MÓDULO 3
    //
    // La puerta NO recalcula ni revalida M3.
    // Reconstruye el código introducido manualmente y lo
    // compara con gameState.m3.codigoM3, generado previamente
    // por registrarViabilidad(...).
    //
    // P / T / S: tres dígitos por variable.
    // R: tres dígitos para número de reparaciones y tres
    //    para precio por reparación.
    // =====================================================

    const hotspotSalidaM3 =
        document.querySelector("#hotspot-salida-m3");

    const ventanaSalidaM3 =
        document.querySelector("#ventana-salida-m3");

    const feedbackSalidaM3 =
        document.querySelector("#feedback-salida-m3");

    const botonComprobarSalidaM3 =
        document.querySelector("#boton-comprobar-salida-m3");

    const cerrarSalidaM3 =
        document.querySelector("#cerrar-salida-m3");

    const grupoSalidaM3Reparacion =
        document.querySelector("#grupo-salida-m3-reparacion");

    const salidaM3Servicio =
        document.querySelector("#salida-m3-servicio");

    const aumentarSalidaM3Servicio =
        document.querySelector("#aumentar-salida-m3-servicio");

    const disminuirSalidaM3Servicio =
        document.querySelector("#disminuir-salida-m3-servicio");


    // -----------------------------------------------------
    // DÍGITOS DE LA PUERTA
    // -----------------------------------------------------

    const gruposDigitosSalidaM3 = {
        p: [
            document.querySelector("#salida-m3-p-1"),
            document.querySelector("#salida-m3-p-2"),
            document.querySelector("#salida-m3-p-3")
        ],
        t: [
            document.querySelector("#salida-m3-t-1"),
            document.querySelector("#salida-m3-t-2"),
            document.querySelector("#salida-m3-t-3")
        ],
        s: [
            document.querySelector("#salida-m3-s-1"),
            document.querySelector("#salida-m3-s-2"),
            document.querySelector("#salida-m3-s-3")
        ],
        rNum: [
            document.querySelector("#salida-m3-r-num-1"),
            document.querySelector("#salida-m3-r-num-2"),
            document.querySelector("#salida-m3-r-num-3")
        ],
        rPrecio: [
            document.querySelector("#salida-m3-r-precio-1"),
            document.querySelector("#salida-m3-r-precio-2"),
            document.querySelector("#salida-m3-r-precio-3")
        ]
    };

    const valoresSalidaM3 = {
        p: [0, 0, 0],
        t: [0, 0, 0],
        s: [0, 0, 0],
        rNum: [0, 0, 0],
        rPrecio: [0, 0, 0]
    };

    let salidaM3ConServicio = false;


    // -----------------------------------------------------
    // CONTROLES P / T / S
    // -----------------------------------------------------

    const controlesSalidaM3Fijos = [
        botonComprobarSalidaM3,
        cerrarSalidaM3,
        aumentarSalidaM3Servicio,
        disminuirSalidaM3Servicio
    ];

    ["p", "t", "s"].forEach((grupo) => {
        for (let i = 1; i <= 3; i++) {
            controlesSalidaM3Fijos.push(
                document.querySelector(`#aumentar-salida-m3-${grupo}-${i}`),
                document.querySelector(`#disminuir-salida-m3-${grupo}-${i}`)
            );
        }
    });


    // -----------------------------------------------------
    // CONTROLES R
    // -----------------------------------------------------

    const controlesSalidaM3Reparacion = [];

    ["r-num", "r-precio"].forEach((grupo) => {
        for (let i = 1; i <= 3; i++) {
            controlesSalidaM3Reparacion.push(
                document.querySelector(`#aumentar-salida-m3-${grupo}-${i}`),
                document.querySelector(`#disminuir-salida-m3-${grupo}-${i}`)
            );
        }
    });


    // La ventana comienza oculta y fuera del raycaster.
    controlesSalidaM3Fijos.forEach((control) => {
        control.classList.remove("interactivo");
    });

    controlesSalidaM3Reparacion.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // -----------------------------------------------------
    // FUNCIONES AUXILIARES
    // -----------------------------------------------------

    function limpiarFeedbackSalidaM3() {
        feedbackSalidaM3.setAttribute("value", "");
    }


    function actualizarDigitoSalidaM3(grupo, indice) {

        gruposDigitosSalidaM3[grupo][indice].setAttribute(
            "value",
            valoresSalidaM3[grupo][indice]
        );

    }


    function cambiarDigitoSalidaM3(grupo, indice, incremento) {

        valoresSalidaM3[grupo][indice] =
            (valoresSalidaM3[grupo][indice] + incremento + 10) % 10;

        actualizarDigitoSalidaM3(grupo, indice);
        limpiarFeedbackSalidaM3();

    }


    function valorGrupoSalidaM3(grupo) {

        return (
            valoresSalidaM3[grupo][0] * 100 +
            valoresSalidaM3[grupo][1] * 10 +
            valoresSalidaM3[grupo][2]
        );

    }


    function actualizarServicioSalidaM3() {

        salidaM3Servicio.setAttribute(
            "value",
            salidaM3ConServicio ? "CON SERVICIO" : "SIN SERVICIO"
        );

        grupoSalidaM3Reparacion.setAttribute(
            "visible",
            salidaM3ConServicio
        );

        controlesSalidaM3Reparacion.forEach((control) => {

            if (
                salidaM3ConServicio &&
                ventanaSalidaM3.getAttribute("visible")
            ) {
                control.classList.add("interactivo");
            } else {
                control.classList.remove("interactivo");
            }

        });

        limpiarFeedbackSalidaM3();

    }


    // -----------------------------------------------------
    // EVENTOS DE LOS 15 DÍGITOS
    // -----------------------------------------------------

    const mapaGruposSalidaM3 = [
        ["p", "p"],
        ["t", "t"],
        ["s", "s"],
        ["rNum", "r-num"],
        ["rPrecio", "r-precio"]
    ];

    mapaGruposSalidaM3.forEach(([grupoEstado, grupoId]) => {

        for (let i = 1; i <= 3; i++) {

            document
                .querySelector(`#aumentar-salida-m3-${grupoId}-${i}`)
                .addEventListener("click", () => {
                    cambiarDigitoSalidaM3(grupoEstado, i - 1, 1);
                });

            document
                .querySelector(`#disminuir-salida-m3-${grupoId}-${i}`)
                .addEventListener("click", () => {
                    cambiarDigitoSalidaM3(grupoEstado, i - 1, -1);
                });

        }

    });


    // -----------------------------------------------------
    // SELECTOR CON / SIN SERVICIO
    // -----------------------------------------------------

    aumentarSalidaM3Servicio.addEventListener("click", () => {
        salidaM3ConServicio = !salidaM3ConServicio;
        actualizarServicioSalidaM3();
    });

    disminuirSalidaM3Servicio.addEventListener("click", () => {
        salidaM3ConServicio = !salidaM3ConServicio;
        actualizarServicioSalidaM3();
    });


    // -----------------------------------------------------
    // ABRIR PUERTA
    // -----------------------------------------------------

    hotspotSalidaM3.addEventListener("click", () => {

        ventanaSalidaM3.setAttribute("visible", true);

        controlesSalidaM3Fijos.forEach((control) => {
            control.classList.add("interactivo");
        });

        actualizarServicioSalidaM3();

    });


    // -----------------------------------------------------
    // CERRAR PUERTA
    // -----------------------------------------------------

    cerrarSalidaM3.addEventListener("click", () => {

        ventanaSalidaM3.setAttribute("visible", false);

        controlesSalidaM3Fijos.forEach((control) => {
            control.classList.remove("interactivo");
        });

        controlesSalidaM3Reparacion.forEach((control) => {
            control.classList.remove("interactivo");
        });

        limpiarFeedbackSalidaM3();

    });


    // -----------------------------------------------------
    // COMPROBAR CÓDIGO
    //
    // La puerta NO reconstruye ni interpreta la cadena codigoM3.
    // Compara directamente los valores introducidos con el estado
    // que registrarViabilidad(...) dejó guardado en gameState.m3.
    //
    // La presentación visual mantiene siempre tres dígitos:
    // 003, 030, 145, etc.
    // -----------------------------------------------------

    botonComprobarSalidaM3.addEventListener("click", () => {

        // ---------------------------------------------
        // 1. COMPROBAR QUE M3 ESTÁ REGISTRADO
        // ---------------------------------------------

        if (!gameState.m3.completado) {

            feedbackSalidaM3.setAttribute(
                "value",
                "CÓDIGO NO RECONOCIDO"
            );

            return;
        }


        // ---------------------------------------------
        // 2. RECUPERAR VALORES INTRODUCIDOS EN LA PUERTA
        // ---------------------------------------------

        const precioP =
            valorGrupoSalidaM3("p");

        const precioT =
            valorGrupoSalidaM3("t");

        const precioS =
            valorGrupoSalidaM3("s");

        const numeroReparaciones =
            salidaM3ConServicio
                ? valorGrupoSalidaM3("rNum")
                : 0;

        const precioReparacion =
            salidaM3ConServicio
                ? valorGrupoSalidaM3("rPrecio")
                : 0;


        // ---------------------------------------------
        // 3. COMPROBAR COHERENCIA DEL SELECTOR SERVICIO
        //
        // SIN SERVICIO solo puede coincidir con un M3
        // registrado sin reparaciones.
        //
        // CON SERVICIO exige que el M3 registrado tenga
        // reparaciones.
        // ---------------------------------------------

        const motorTieneServicio =
            Number(gameState.m3.numeroReparaciones) > 0;

        if (salidaM3ConServicio !== motorTieneServicio) {

            feedbackSalidaM3.setAttribute(
                "value",
                "CÓDIGO NO RECONOCIDO"
            );

            return;
        }


        // ---------------------------------------------
        // 4. COMPARACIÓN DIRECTA CON gameState.m3
        // ---------------------------------------------

        const codigoCoincide =
            precioP === Number(gameState.m3.precioP) &&
            precioT === Number(gameState.m3.precioT) &&
            precioS === Number(gameState.m3.precioS) &&
            numeroReparaciones === Number(gameState.m3.numeroReparaciones) &&
            precioReparacion === Number(gameState.m3.precioReparacion);


        // ---------------------------------------------
        // 5. RESULTADO
        // ---------------------------------------------

        if (!codigoCoincide) {

            feedbackSalidaM3.setAttribute(
                "value",
                "CÓDIGO NO RECONOCIDO"
            );

            return;
        }

        feedbackSalidaM3.setAttribute(
            "value",
            "ACCESO AUTORIZADO - DIRÍJASE AL MODULO SIGUIENTE"
        );

        // =====================================================
        // INICIO: TRANSICIÓN M3 -> M4
        //
        // El código ya coincide con el estado registrado de M3.
        // Tras mostrar el mensaje de acceso autorizado,
        // espera 1,5 segundos y carga el Módulo 4.
        // NO modifica gameState ni vuelve a validar M3.
        // =====================================================

        setTimeout(() => {
            window.location.href = "M4.html";
        }, 2500);

        // FIN: TRANSICIÓN M3 -> M4

    });


    // FIN BLOQUE: CONTROL DE SALIDA - MÓDULO 3

});
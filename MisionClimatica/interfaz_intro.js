// =====================================================
// INTERFAZ INTRO - MISIÓN CLIMÁTICA
//
// Capa visual e interactiva de la introducción.
//
// Gestiona exclusivamente la secuencia:
//
// ORDENADOR
//      ↓
// AVISO DE CORREO
//      ↓
// CORREO DE ESTRELLITA
//      ↓
// INSTRUCCIONES
//      ↓
// MÓDULO 1
//
// NO contiene reglas de negocio.
// =====================================================


document.addEventListener("DOMContentLoaded", () => {


    // =====================================================
    // BLOQUE: REFERENCIAS - INTRO
    // =====================================================

    const hotspotOrdenadorIntro =
        document.querySelector("#hotspot-ordenador-intro");


    // -----------------------------------------------------
    // VENTANA 1 - AVISO DE CORREO
    // -----------------------------------------------------

    const ventanaAvisoCorreo =
        document.querySelector("#ventana-aviso-correo");

    const botonAbrirCorreo =
        document.querySelector("#boton-abrir-correo");

    const cerrarAvisoCorreo =
        document.querySelector("#cerrar-aviso-correo");


    // -----------------------------------------------------
    // VENTANA 2 - CORREO DE ESTRELLITA
    // -----------------------------------------------------

    const ventanaCorreoEstrellita =
        document.querySelector("#ventana-correo-estrellita");

    const botonInstrucciones =
        document.querySelector("#boton-instrucciones");


    // -----------------------------------------------------
    // VENTANA 3 - INSTRUCCIONES
    // -----------------------------------------------------

    const ventanaInstrucciones =
        document.querySelector("#ventana-instrucciones");

    const botonComenzar =
        document.querySelector("#boton-comenzar");

    // FIN BLOQUE: REFERENCIAS - INTRO



    // =====================================================
    // BLOQUE: ESTADO INICIAL DE INTERACCIÓN
    //
    // Los controles pertenecientes a ventanas ocultas
    // comienzan fuera del raycaster.
    // =====================================================

    botonAbrirCorreo.classList.remove("interactivo");
    cerrarAvisoCorreo.classList.remove("interactivo");

    botonInstrucciones.classList.remove("interactivo");

    botonComenzar.classList.remove("interactivo");

    // FIN BLOQUE: ESTADO INICIAL DE INTERACCIÓN



    // =====================================================
    // BLOQUE: ABRIR AVISO DE CORREO
    //
    // El operador pulsa sobre el ordenador.
    // =====================================================

    hotspotOrdenadorIntro.addEventListener("click", () => {

        ventanaAvisoCorreo.setAttribute(
            "visible",
            true
        );

        botonAbrirCorreo.classList.add(
            "interactivo"
        );

        cerrarAvisoCorreo.classList.add(
            "interactivo"
        );

    });

    // FIN BLOQUE: ABRIR AVISO DE CORREO



    // =====================================================
    // BLOQUE: CERRAR AVISO DE CORREO
    //
    // Permite volver a la sala sin abrir el mensaje.
    // =====================================================

    cerrarAvisoCorreo.addEventListener("click", () => {

        ventanaAvisoCorreo.setAttribute(
            "visible",
            false
        );

        botonAbrirCorreo.classList.remove(
            "interactivo"
        );

        cerrarAvisoCorreo.classList.remove(
            "interactivo"
        );

    });

    // FIN BLOQUE: CERRAR AVISO DE CORREO



    // =====================================================
    // BLOQUE: ABRIR CORREO DE ESTRELLITA
    //
    // Cierra el aviso y muestra el mensaje narrativo.
    // =====================================================

    botonAbrirCorreo.addEventListener("click", () => {

        // Cerrar ventana anterior
        ventanaAvisoCorreo.setAttribute(
            "visible",
            false
        );

        botonAbrirCorreo.classList.remove(
            "interactivo"
        );

        cerrarAvisoCorreo.classList.remove(
            "interactivo"
        );


        // Abrir correo
        ventanaCorreoEstrellita.setAttribute(
            "visible",
            true
        );

        botonInstrucciones.classList.add(
            "interactivo"
        );

    });

    // FIN BLOQUE: ABRIR CORREO DE ESTRELLITA



    // =====================================================
    // BLOQUE: ABRIR INSTRUCCIONES
    //
    // Cierra el correo y muestra las instrucciones
    // básicas de la actividad.
    // =====================================================

    botonInstrucciones.addEventListener("click", () => {

        // Cerrar correo
        ventanaCorreoEstrellita.setAttribute(
            "visible",
            false
        );

        botonInstrucciones.classList.remove(
            "interactivo"
        );


        // Abrir instrucciones
        ventanaInstrucciones.setAttribute(
            "visible",
            true
        );

        botonComenzar.classList.add(
            "interactivo"
        );

    });

    // FIN BLOQUE: ABRIR INSTRUCCIONES



    // =====================================================
    // BLOQUE: COMENZAR MISIÓN
    //
    // Finaliza la introducción y carga el Módulo 1.
    //
    // NO registra datos.
    // NO modifica gameState.
    // =====================================================

    botonComenzar.addEventListener("click", () => {

        window.location.href = "M1.html";

    });

    // FIN BLOQUE: COMENZAR MISIÓN


});
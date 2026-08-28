// =====================================================
// INTERFAZ M2 - MISIÓN CLIMÁTICA
//
// Capa visual e interactiva del Módulo 2:
// Taller de Recuperación.
//
// NO contiene reglas de negocio.
// La lógica de la actividad permanece en script.js.
// =====================================================


// =====================================================
// BLOQUE: INICIALIZACIÓN DE INTERFAZ M2
//
// Los elementos interactivos se incorporarán
// progresivamente una vez validada la escena 360.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("INTERFAZ M2 CARGADA");

});

// FIN BLOQUE: INICIALIZACIÓN DE INTERFAZ M2

// =====================================================
// BLOQUE: VENTANA PORTÁTILES - M2
//
// Abre la ventana al pulsar el hotspot de portátiles.
// Cierra la ventana al pulsar el botón X.
//
// IMPORTANTE:
// Cuando la ventana está oculta, su botón X queda
// fuera del raycaster para evitar interacciones fantasma.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const hotspotPortatiles =
        document.querySelector("#hotspot-portatiles");

    const ventanaPortatiles =
        document.querySelector("#ventana-portatiles-m2");

    const cerrarPortatiles =
        document.querySelector("#cerrar-portatiles-m2");


    // =====================================================
    // CONTROL DE INTERACCIÓN - VENTANA PORTÁTILES
    // =====================================================

    // La X comienza desactivada porque la ventana está oculta.
    cerrarPortatiles.classList.remove("interactivo");


    // -----------------------------------------------------
    // ABRIR VENTANA
    // -----------------------------------------------------

    hotspotPortatiles.addEventListener("click", () => {

        ventanaPortatiles.setAttribute("visible", true);

        cerrarPortatiles.classList.add("interactivo");

    });


    // -----------------------------------------------------
    // CERRAR VENTANA
    // -----------------------------------------------------

    cerrarPortatiles.addEventListener("click", () => {

        ventanaPortatiles.setAttribute("visible", false);

        cerrarPortatiles.classList.remove("interactivo");

    });

    // FIN CONTROL DE INTERACCIÓN - VENTANA PORTÁTILES

});

// FIN BLOQUE: VENTANA PORTÁTILES - M2

// =====================================================
// BLOQUE: VENTANAS TABLETS Y SOBREMESA - M2
//
// Gestiona exclusivamente la apertura y cierre de las
// ventanas informativas de los dos lotes.
//
// NO contiene lógica de negocio.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // REFERENCIAS - TABLETS
    // =====================================================

    const hotspotTablets =
        document.querySelector("#hotspot-tablets");

    const ventanaTablets =
        document.querySelector("#ventana-tablets-m2");

    const cerrarTablets =
        document.querySelector("#cerrar-tablets-m2");


    // =====================================================
    // REFERENCIAS - SOBREMESA
    // =====================================================

    const hotspotSobremesa =
        document.querySelector("#hotspot-sobremesa");

    const ventanaSobremesa =
        document.querySelector("#ventana-sobremesa-m2");

    const cerrarSobremesa =
        document.querySelector("#cerrar-sobremesa-m2");


    // =====================================================
    // ESTADO INICIAL DE LOS BOTONES X
    // =====================================================

    cerrarTablets.classList.remove("interactivo");
    cerrarSobremesa.classList.remove("interactivo");


    // =====================================================
    // CONTROL DE VENTANA - TABLETS
    // =====================================================

    hotspotTablets.addEventListener("click", () => {

        ventanaTablets.setAttribute("visible", true);

        cerrarTablets.classList.add("interactivo");

    });


    cerrarTablets.addEventListener("click", () => {

        ventanaTablets.setAttribute("visible", false);

        cerrarTablets.classList.remove("interactivo");

    });

    // FIN CONTROL DE VENTANA - TABLETS


    // =====================================================
    // CONTROL DE VENTANA - SOBREMESA
    // =====================================================

    hotspotSobremesa.addEventListener("click", () => {

        ventanaSobremesa.setAttribute("visible", true);

        cerrarSobremesa.classList.add("interactivo");

    });


    cerrarSobremesa.addEventListener("click", () => {

        ventanaSobremesa.setAttribute("visible", false);

        cerrarSobremesa.classList.remove("interactivo");

    });

    // FIN CONTROL DE VENTANA - SOBREMESA

});

// FIN BLOQUE: VENTANAS TABLETS Y SOBREMESA - M2

// =====================================================
// BLOQUE: TERMINAL M2 - SELECCIÓN VISUAL
//
// Gestiona:
// - apertura y cierre de la terminal;
// - selección exclusiva P / C / M por cada lote;
// - reinicio visual al cerrar.
//
// NO calcula horas.
// NO valida capacidad.
// NO genera códigos.
// NO modifica gameState.
// NO llama todavía a registrarModeloCircular().
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // REFERENCIAS GENERALES - TERMINAL
    // =====================================================

    const hotspotTerminalM2 =
        document.querySelector("#hotspot-terminal-m2");

    const ventanaTerminalM2 =
        document.querySelector("#ventana-terminal-m2");

    const cerrarTerminalM2 =
        document.querySelector("#cerrar-terminal-m2");

    const botonRegistrarM2 =
        document.querySelector("#boton-registrar-m2");

    
    // =====================================================
    // REFERENCIAS - FEEDBACK DEL MOTOR M2
    // =====================================================

    const feedbackEstadoM2 =
        document.querySelector("#feedback-m2-estado");

    const feedbackHorasM2 =
        document.querySelector("#feedback-m2-horas");

    const feedbackCodigoM2 =
        document.querySelector("#feedback-m2-codigo");

    
    // =====================================================
    // REFERENCIAS - FINALIZACIÓN DEL MÓDULO 2
    // =====================================================

    const botonFinalizarM2 =
        document.querySelector("#boton-finalizar-m2");

    // =====================================================
    // REFERENCIA - BOTÓN CAMBIAR M2
    // =====================================================

    const botonCambiarM2 =
        document.querySelector("#boton-cambiar-m2");


    const ventanaFinalM2 =
        document.querySelector("#ventana-final-m2");

    const codigoFinalM2 =
        document.querySelector("#codigo-final-m2");

    const cerrarFinalM2 =
        document.querySelector("#cerrar-final-m2");

    
    // =====================================================
    // REFERENCIAS - CONTROL DE SALIDA M2
    // =====================================================

    const hotspotSalidaM2 =
        document.querySelector("#hotspot-salida-m2");

    const ventanaSalidaM2 =
        document.querySelector("#ventana-salida-m2");

    // =====================================================
    // REFERENCIAS - SELECTORES DE CÓDIGO DE SALIDA M2
    // =====================================================

    const codigoM2Selector1 =
        document.querySelector("#codigo-m2-1");

    const codigoM2Selector2 =
        document.querySelector("#codigo-m2-2");

    const codigoM2Selector3 =
        document.querySelector("#codigo-m2-3");


    const aumentarM2_1 =
        document.querySelector("#aumentar-m2-1");

    const disminuirM2_1 =
        document.querySelector("#disminuir-m2-1");

    const aumentarM2_2 =
        document.querySelector("#aumentar-m2-2");

    const disminuirM2_2 =
        document.querySelector("#disminuir-m2-2");

    const aumentarM2_3 =
        document.querySelector("#aumentar-m2-3");

    const disminuirM2_3 =
        document.querySelector("#disminuir-m2-3");

    // FIN REFERENCIAS - SELECTORES DE CÓDIGO DE SALIDA M2

    const feedbackSalidaM2 =
        document.querySelector("#feedback-salida-m2");

    const botonComprobarSalidaM2 =
        document.querySelector("#boton-comprobar-salida-m2");

    
    const cerrarSalidaM2 =
        document.querySelector("#cerrar-salida-m2");

    // FIN REFERENCIAS - CONTROL DE SALIDA M2


    // =====================================================
    // ESTADO DE FINALIZACIÓN - INTERFAZ M2
    //
    // Esta variable controla únicamente la interfaz.
    // El estado lógico real de M2 pertenece a gameState.
    // =====================================================

    let resultadoRegistradoM2 = null;


    // =====================================================
    // CÓDIGO CONFIRMADO - MÓDULO 2
    //
    // Almacena exclusivamente el código correspondiente
    // a la decisión que el grupo haya confirmado.
    //
    // Será utilizado posteriormente por la puerta SALIDA.
    // No contiene ninguna valoración de la estrategia.
    // =====================================================

    let codigoM2Confirmado = null;


    // =====================================================
    // REFERENCIAS - PORTÁTILES
    // =====================================================

    const portatilesP = document.querySelector("#m2-portatiles-p");
    const portatilesC = document.querySelector("#m2-portatiles-c");
    const portatilesM = document.querySelector("#m2-portatiles-m");


    // =====================================================
    // REFERENCIAS - TABLETS
    // =====================================================

    const tabletsP = document.querySelector("#m2-tablets-p");
    const tabletsC = document.querySelector("#m2-tablets-c");
    const tabletsM = document.querySelector("#m2-tablets-m");


    // =====================================================
    // REFERENCIAS - SOBREMESA
    // =====================================================

    const sobremesaP = document.querySelector("#m2-sobremesa-p");
    const sobremesaC = document.querySelector("#m2-sobremesa-c");
    const sobremesaM = document.querySelector("#m2-sobremesa-m");


    // =====================================================
    // ESTADO VISUAL DE LA TERMINAL
    //
    // Estas variables representan únicamente lo seleccionado
    // en pantalla. No constituyen todavía una decisión
    // registrada en el motor.
    // =====================================================

    let seleccionPortatiles = null;
    let seleccionTablets = null;
    let seleccionSobremesa = null;


    // =====================================================
    // CONTROLES INTERACTIVOS DE LA TERMINAL
    // =====================================================

    const controlesTerminalM2 = [
        portatilesP,
        portatilesC,
        portatilesM,

        tabletsP,
        tabletsC,
        tabletsM,

        sobremesaP,
        sobremesaC,
        sobremesaM,

        botonRegistrarM2,
        cerrarTerminalM2
    ];


    // La terminal comienza oculta.
    controlesTerminalM2.forEach((control) => {
        control.classList.remove("interactivo");
    });

    // =====================================================
    // ESTADO INICIAL - CONTROLES DE FINALIZACIÓN
    // =====================================================

    botonFinalizarM2.setAttribute("visible", false);
    botonFinalizarM2.classList.remove("interactivo");

    botonCambiarM2.setAttribute("visible", false);
    botonCambiarM2.classList.remove("interactivo");

    cerrarFinalM2.classList.remove("interactivo");

    // FIN ESTADO INICIAL - CONTROLES DE FINALIZACIÓN


    // =====================================================
    // FUNCIÓN VISUAL - RESTABLECER FILA
    // =====================================================

    function restablecerFila(botones) {

        botones.forEach((boton) => {
            boton.setAttribute("color", "#D9D9D9");
        });

    }


    // =====================================================
    // FUNCIÓN VISUAL - MARCAR SELECCIÓN
    //
    // Restablece los tres botones de una fila y marca
    // únicamente la opción elegida.
    // =====================================================

    function marcarSeleccion(botones, botonSeleccionado) {

        restablecerFila(botones);

        botonSeleccionado.setAttribute("color", "#9E9E9E");

    }


    // =====================================================
    // ABRIR TERMINAL
    // =====================================================

    hotspotTerminalM2.addEventListener("click", () => {

        ventanaTerminalM2.setAttribute("visible", true);

        controlesTerminalM2.forEach((control) => {
            control.classList.add("interactivo");
        });

    });

    // FIN ABRIR TERMINAL

    // =====================================================
    // ABRIR CONTROL DE SALIDA - MÓDULO 2
    //
    // La puerta NO evalúa la estrategia elegida.
    // Únicamente comprueba si existe una decisión
    // previamente confirmada por el grupo.
    // =====================================================

    hotspotSalidaM2.addEventListener("click", () => {

        // Limpiar el panel cada vez que se abre
        feedbackSalidaM2.setAttribute("value", "");
        


        // -------------------------------------------------
        // CASO 1: NO EXISTE DECISIÓN CONFIRMADA
        // -------------------------------------------------

        if (!codigoM2Confirmado) {

            feedbackSalidaM2.setAttribute(
                "value",
                "Confirma primero tu modelo en la terminal"
            );

            ventanaSalidaM2.setAttribute("visible", true);

            cerrarSalidaM2.classList.add("interactivo");

            return;
        }


        // -------------------------------------------------
        // CASO 2: EXISTE DECISIÓN CONFIRMADA
        // -------------------------------------------------

        ventanaSalidaM2.setAttribute("visible", true);

        botonComprobarSalidaM2.classList.add("interactivo");
        
        cerrarSalidaM2.classList.add("interactivo");

        aumentarM2_1.classList.add("interactivo");
        disminuirM2_1.classList.add("interactivo");

        aumentarM2_2.classList.add("interactivo");
        disminuirM2_2.classList.add("interactivo");

        aumentarM2_3.classList.add("interactivo");
        disminuirM2_3.classList.add("interactivo");

    });

    // FIN ABRIR CONTROL DE SALIDA - MÓDULO 2


    // =====================================================
    // CERRAR CONTROL DE SALIDA - MÓDULO 2
    // =====================================================

    cerrarSalidaM2.addEventListener("click", () => {

        ventanaSalidaM2.setAttribute(
            "visible",
            false
        );

        botonComprobarSalidaM2.classList.remove("interactivo");
        
        cerrarSalidaM2.classList.remove("interactivo");

        feedbackSalidaM2.setAttribute("value", "");
        

    });

    // FIN CERRAR CONTROL DE SALIDA - MÓDULO 2


    // =====================================================
    // SELECTORES DE CÓDIGO - CONTROL DE SALIDA M2
    //
    // Cada selector recorre exclusivamente:
    // P -> C -> M
    //
    // Los controles únicamente permiten reconstruir
    // manualmente el código anotado por el grupo.
    // No evalúan ni recomiendan ninguna estrategia.
    // =====================================================

    const valoresCodigoM2 = ["P", "C", "M"];

    let valorCodigoM2_1 = "P";
    let valorCodigoM2_2 = "P";
    let valorCodigoM2_3 = "P";


    // =====================================================
    // FUNCIÓN: AVANZAR SELECTOR
    // =====================================================

    function avanzarCodigoM2(valorActual) {

        const indiceActual =
            valoresCodigoM2.indexOf(valorActual);

        const nuevoIndice =
            (indiceActual + 1) % valoresCodigoM2.length;

        return valoresCodigoM2[nuevoIndice];
    }


    // =====================================================
    // FUNCIÓN: RETROCEDER SELECTOR
    // =====================================================

    function retrocederCodigoM2(valorActual) {

        const indiceActual =
            valoresCodigoM2.indexOf(valorActual);

        const nuevoIndice =
            (indiceActual - 1 + valoresCodigoM2.length)
            % valoresCodigoM2.length;

        return valoresCodigoM2[nuevoIndice];
    }


    // =====================================================
    // CONTROLES +/- - SELECTOR 1 - PORTÁTILES
    // =====================================================

    aumentarM2_1.addEventListener("click", () => {

        valorCodigoM2_1 =
            avanzarCodigoM2(valorCodigoM2_1);

        codigoM2Selector1.setAttribute(
            "value",
            valorCodigoM2_1
        );

    });


    disminuirM2_1.addEventListener("click", () => {

        valorCodigoM2_1 =
            retrocederCodigoM2(valorCodigoM2_1);

        codigoM2Selector1.setAttribute(
            "value",
            valorCodigoM2_1
        );

    });

    // FIN CONTROLES +/- - SELECTOR 1


    // =====================================================
    // CONTROLES +/- - SELECTOR 2 - TABLETS
    // =====================================================

    aumentarM2_2.addEventListener("click", () => {

        valorCodigoM2_2 =
            avanzarCodigoM2(valorCodigoM2_2);

        codigoM2Selector2.setAttribute(
            "value",
            valorCodigoM2_2
        );

    });


    disminuirM2_2.addEventListener("click", () => {

        valorCodigoM2_2 =
            retrocederCodigoM2(valorCodigoM2_2);

        codigoM2Selector2.setAttribute(
            "value",
            valorCodigoM2_2
        );

    });

    // FIN CONTROLES +/- - SELECTOR 2


    // =====================================================
    // CONTROLES +/- - SELECTOR 3 - SOBREMESA
    // =====================================================

    aumentarM2_3.addEventListener("click", () => {

        valorCodigoM2_3 =
            avanzarCodigoM2(valorCodigoM2_3);

        codigoM2Selector3.setAttribute(
            "value",
            valorCodigoM2_3
        );

    });


    disminuirM2_3.addEventListener("click", () => {

        valorCodigoM2_3 =
            retrocederCodigoM2(valorCodigoM2_3);

        codigoM2Selector3.setAttribute(
            "value",
            valorCodigoM2_3
        );

    });

    // FIN CONTROLES +/- - SELECTOR 3


    // =====================================================
    // COMPROBAR CÓDIGO DE SALIDA - MÓDULO 2
    //
    // Construye el código a partir de los tres selectores
    // manejados por el grupo.
    //
    // Después lo compara EXCLUSIVAMENTE con el código que
    // el propio grupo confirmó previamente en la terminal.
    //
    // NO comprueba combinaciones correctas.
    // NO evalúa las estrategias P / C / M.
    // NO vuelve a llamar al motor lógico.
    // =====================================================

    botonComprobarSalidaM2.addEventListener("click", () => {

        // -------------------------------------------------
        // 1. PROTECCIÓN
        //
        // Sin una decisión confirmada no existe ningún
        // código contra el que realizar la comprobación.
        // -------------------------------------------------

        if (!codigoM2Confirmado) {

            feedbackSalidaM2.setAttribute(
                "value",
                "Confirma primero tu modelo en la terminal"
            );

            return;
        }


        // -------------------------------------------------
        // 2. CONSTRUIR EL CÓDIGO INTRODUCIDO
        //
        // Ejemplo:
        // M2-P-C-M
        // -------------------------------------------------

        const codigoIntroducidoM2 =
            "M2-" +
            valorCodigoM2_1 + "-" +
            valorCodigoM2_2 + "-" +
            valorCodigoM2_3;


        // -------------------------------------------------
        // 3. COMPARAR CON EL CÓDIGO CONFIRMADO
        // -------------------------------------------------

        if (codigoIntroducidoM2 === codigoM2Confirmado) {

            feedbackSalidaM2.setAttribute(
                "value",
                "ACCESO AUTORIZADO\nDiríjase al módulo siguiente."
            );

            // =====================================================
            // INICIO: TRANSICIÓN M2 -> M3
            //
            // El código ya ha sido comprobado contra la decisión
            // confirmada por el grupo. Tras mostrar el mensaje,
            // espera 1,5 segundos y carga el Módulo 3.
            // NO modifica gameState ni revalida la estrategia.
            // =====================================================

            setTimeout(() => {
                window.location.href = "M3.html";
            }, 2500);

            // FIN: TRANSICIÓN M2 -> M3

            return;
        }


        // -------------------------------------------------
        // 4. EL CÓDIGO NO COINCIDE
        //
        // Esto NO significa que la combinación P/C/M sea
        // incorrecta. Significa únicamente que no coincide
        // con la decisión que el grupo confirmó.
        // -------------------------------------------------

        feedbackSalidaM2.setAttribute(
            "value",
            "CODIGO NO RECONOCIDO"
        );

    });

    // FIN COMPROBAR CÓDIGO DE SALIDA - MÓDULO 2


    // =====================================================
    // SELECCIÓN - PORTÁTILES
    // =====================================================

    const botonesPortatiles = [
        portatilesP,
        portatilesC,
        portatilesM
    ];

    portatilesP.addEventListener("click", () => {

        seleccionPortatiles = "P";
        marcarSeleccion(botonesPortatiles, portatilesP);

    });

    portatilesC.addEventListener("click", () => {

        seleccionPortatiles = "C";
        marcarSeleccion(botonesPortatiles, portatilesC);

    });

    portatilesM.addEventListener("click", () => {

        seleccionPortatiles = "M";
        marcarSeleccion(botonesPortatiles, portatilesM);

    });

    // FIN SELECCIÓN - PORTÁTILES


    // =====================================================
    // SELECCIÓN - TABLETS
    // =====================================================

    const botonesTablets = [
        tabletsP,
        tabletsC,
        tabletsM
    ];

    tabletsP.addEventListener("click", () => {

        seleccionTablets = "P";
        marcarSeleccion(botonesTablets, tabletsP);

    });

    tabletsC.addEventListener("click", () => {

        seleccionTablets = "C";
        marcarSeleccion(botonesTablets, tabletsC);

    });

    tabletsM.addEventListener("click", () => {

        seleccionTablets = "M";
        marcarSeleccion(botonesTablets, tabletsM);

    });

    // FIN SELECCIÓN - TABLETS


    // =====================================================
    // SELECCIÓN - SOBREMESA
    // =====================================================

    const botonesSobremesa = [
        sobremesaP,
        sobremesaC,
        sobremesaM
    ];

    sobremesaP.addEventListener("click", () => {

        seleccionSobremesa = "P";
        marcarSeleccion(botonesSobremesa, sobremesaP);

    });

    sobremesaC.addEventListener("click", () => {

        seleccionSobremesa = "C";
        marcarSeleccion(botonesSobremesa, sobremesaC);

    });

    sobremesaM.addEventListener("click", () => {

        seleccionSobremesa = "M";
        marcarSeleccion(botonesSobremesa, sobremesaM);

    });

    // FIN SELECCIÓN - SOBREMESA

    // =====================================================
    // REGISTRAR MODELO CIRCULAR
    //
    // La interfaz entrega las tres decisiones al motor.
    //
    // IMPORTANTE:
    // - NO calcula horas.
    // - NO valida la capacidad.
    // - NO genera el código M2.
    // - NO calcula ICV.
    // - NO determina disponibilidad de reparación.
    //
    // Todas esas operaciones pertenecen exclusivamente
    // a registrarModeloCircular(...) en script.js.
    // =====================================================

    botonRegistrarM2.addEventListener("click", () => {

        // -------------------------------------------------
        // 1. LLAMADA AL MOTOR LÓGICO
        // -------------------------------------------------

        const resultado = registrarModeloCircular(
            seleccionPortatiles,
            seleccionTablets,
            seleccionSobremesa
        );


        // -------------------------------------------------
        // 2. LIMPIAR FEEDBACK ANTERIOR
        // -------------------------------------------------

        feedbackEstadoM2.setAttribute("value", "");
        feedbackHorasM2.setAttribute("value", "");
        feedbackCodigoM2.setAttribute("value", "");


        // -------------------------------------------------
        // 3. RESPUESTA: ESTRATEGIA INCOMPLETA
        // -------------------------------------------------

        if (
            !resultado.valido &&
            resultado.motivo === "ESTRATEGIA_INCOMPLETA"
        ) {

            feedbackEstadoM2.setAttribute(
                "value",
                "MODELO NO REGISTRADO"
            );

            feedbackHorasM2.setAttribute(
                "value",
                "Revisa las decisiones de los tres lotes"
            );

            return;
        }


        // -------------------------------------------------
        // 4. RESPUESTA: ESTRATEGIA DESCONOCIDA
        //
        // Es una protección ante datos no reconocidos.
        // En uso normal, los botones P/C/M no deberían
        // producir este resultado.
        // -------------------------------------------------

        if (
            !resultado.valido &&
            resultado.motivo === "ESTRATEGIA_DESCONOCIDA"
        ) {

            feedbackEstadoM2.setAttribute(
                "value",
                "MODELO NO REGISTRADO"
            );

            feedbackHorasM2.setAttribute(
                "value",
                "Estrategia no reconocida"
            );

            return;
        }


        // -------------------------------------------------
        // 5. RESPUESTA: CAPACIDAD SUPERADA
        //
        // Las horas mostradas proceden directamente
        // del resultado devuelto por el motor.
        // -------------------------------------------------

        if (
            !resultado.valido &&
            resultado.motivo === "CAPACIDAD_HORAS"
        ) {

            feedbackEstadoM2.setAttribute(
                "value",
                "MODELO NO REGISTRADO"
            );

            feedbackHorasM2.setAttribute(
                "value",
                "Capacidad utilizada: " +
                resultado.horasUtilizadas +
                "/20 h"
            );

            feedbackCodigoM2.setAttribute(
                "value",
                "Se supera la capacidad disponible"
            );

            return;
        }


        // -------------------------------------------------
        // 6. RESPUESTA: MODELO REGISTRADO
        //
        // Tanto las horas como el código proceden
        // directamente del motor.
        //
        // Si el registro es válido, se conserva la respuesta
        // recibida y se habilita el botón FINALIZAR MÓDULO.
        // -------------------------------------------------

        if (resultado.valido) {

            feedbackEstadoM2.setAttribute(
                "value",
                "MODELO CIRCULAR REGISTRADO"
            );

            feedbackHorasM2.setAttribute(
                "value",
                "Capacidad utilizada: " +
                resultado.horasUtilizadas +
                "/20 h"
            );

            feedbackCodigoM2.setAttribute(
                "value",
                resultado.codigoM2
            );


            // =================================================
            // HABILITAR FINALIZACIÓN DEL MÓDULO 2
            //
            // Se conserva exactamente la respuesta que ya
            // ha generado registrarModeloCircular(...).
            //
            // Aquí NO se recalcula ni se valida nada.
            // =================================================

            resultadoRegistradoM2 = resultado;

            botonFinalizarM2.setAttribute("visible", true);
            botonFinalizarM2.classList.add("interactivo");

            botonCambiarM2.setAttribute("visible", true);
            botonCambiarM2.classList.add("interactivo");

            // FIN HABILITAR FINALIZACIÓN DEL MÓDULO 2


            return;
        }


        // -------------------------------------------------
        // 7. RESPUESTA NO PREVISTA
        //
        // Protección de interfaz.
        // No interpreta ni sustituye la lógica del motor.
        // -------------------------------------------------

        feedbackEstadoM2.setAttribute(
            "value",
            "MODELO NO REGISTRADO"
        );

        feedbackHorasM2.setAttribute(
            "value",
            "No se ha podido registrar la decision"
        );

    });

    // FIN REGISTRAR MODELO CIRCULAR

    // =====================================================
    // CAMBIAR DECISIÓN - MÓDULO 2
    //
    // Permite descartar la propuesta mostrada actualmente
    // y volver a realizar una nueva selección P/C/M.
    //
    // La terminal permanece abierta.
    // =====================================================

    botonCambiarM2.addEventListener("click", () => {

        // =================================================
        // 1. ELIMINAR RESULTADO PROVISIONAL DE LA INTERFAZ
        // =================================================

        resultadoRegistradoM2 = null;


        // =================================================
        // 2. BORRAR LAS TRES SELECCIONES
        // =================================================

        seleccionPortatiles = null;
        seleccionTablets = null;
        seleccionSobremesa = null;


        // =================================================
        // 3. DESMARCAR VISUALMENTE P / C / M
        // =================================================

        restablecerFila(botonesPortatiles);
        restablecerFila(botonesTablets);
        restablecerFila(botonesSobremesa);


        // =================================================
        // 4. BORRAR EL RESULTADO MOSTRADO
        // =================================================

        feedbackEstadoM2.setAttribute("value", "");
        feedbackHorasM2.setAttribute("value", "");
        feedbackCodigoM2.setAttribute("value", "");


        // =================================================
        // 5. OCULTAR CONFIRMAR Y CAMBIAR
        // =================================================

        botonFinalizarM2.setAttribute("visible", false);
        botonFinalizarM2.classList.remove("interactivo");

        botonCambiarM2.setAttribute("visible", false);
        botonCambiarM2.classList.remove("interactivo");

    });

    // FIN CAMBIAR DECISIÓN - MÓDULO 2

    // =====================================================
    // FINALIZAR MÓDULO 2
    //
    // Este botón NO vuelve a llamar al motor lógico.
    //
    // Utiliza exclusivamente el resultado válido que ya
    // fue devuelto por registrarModeloCircular(...)
    // y almacenado en resultadoRegistradoM2.
    // =====================================================

    botonFinalizarM2.addEventListener("click", () => {

        // -------------------------------------------------
        // PROTECCIÓN
        //
        // Si no existe previamente un resultado válido,
        // no se permite finalizar el módulo.
        // -------------------------------------------------

        if (!resultadoRegistradoM2) {
            return;
        }

        // =================================================
        // CONFIRMAR CÓDIGO ACTUAL
        //
        // El código procede directamente del resultado
        // generado previamente por el motor lógico.
        // =================================================

        codigoM2Confirmado =
            resultadoRegistradoM2.codigoM2;

        // FIN CONFIRMAR CÓDIGO ACTUAL


        // -------------------------------------------------
        // MOSTRAR EL CÓDIGO GENERADO POR EL MOTOR
        // -------------------------------------------------

        codigoFinalM2.setAttribute(
            "value",
            codigoM2Confirmado
        );


        // -------------------------------------------------
        // CERRAR TERMINAL M2
        // -------------------------------------------------

        ventanaTerminalM2.setAttribute(
            "visible",
            false
        );


        // Retirar del raycaster los controles de la terminal
        controlesTerminalM2.forEach((control) => {
            control.classList.remove("interactivo");
        });


        // El botón FINALIZAR tampoco debe permanecer activo
        botonFinalizarM2.classList.remove("interactivo");


        // -------------------------------------------------
        // MOSTRAR VENTANA FINAL DEL MÓDULO
        // -------------------------------------------------

        ventanaFinalM2.setAttribute(
            "visible",
            true
        );


        // Activar únicamente la X de la ventana final
        cerrarFinalM2.classList.add("interactivo");

    });

    // FIN FINALIZAR MÓDULO 2

    
    // =====================================================
    // CERRAR VENTANA FINAL - MÓDULO 2
    //
    // Cierra el mensaje de finalización y devuelve al
    // operador a la vista normal del taller.
    //
    // NO modifica el resultado registrado en el motor.
    // NO reinicia M2.
    // NO realiza ninguna navegación todavía.
    //
    // La transición al Módulo 3 se realizará posteriormente
    // mediante la puerta SALIDA.
    // =====================================================

    cerrarFinalM2.addEventListener("click", () => {

        // -------------------------------------------------
        // OCULTAR VENTANA FINAL
        // -------------------------------------------------

        ventanaFinalM2.setAttribute(
            "visible",
            false
        );


        // -------------------------------------------------
        // RETIRAR LA X DEL RAYCASTER
        // -------------------------------------------------

        cerrarFinalM2.classList.remove("interactivo");

    });

    // FIN CERRAR VENTANA FINAL - MÓDULO 2


    // =====================================================
    // CERRAR Y REINICIAR TERMINAL
    //
    // El cierre limpia exclusivamente la interfaz visual.
    // No modifica ningún dato del motor.
    // =====================================================

    cerrarTerminalM2.addEventListener("click", () => {

        // Ocultar terminal
        ventanaTerminalM2.setAttribute("visible", false);


        // Retirar controles del raycaster
        controlesTerminalM2.forEach((control) => {
            control.classList.remove("interactivo");
        });


        // Reiniciar estado visual
        seleccionPortatiles = null;
        seleccionTablets = null;
        seleccionSobremesa = null;

        // =================================================
        // REINICIAR ESTADO DE FINALIZACIÓN
        //
        // Si el operador cierra la terminal antes de pulsar
        // FINALIZAR MÓDULO, la confirmación visual se anula.
        //
        // Esto NO altera las reglas del motor lógico.
        // =================================================

        resultadoRegistradoM2 = null;

        botonFinalizarM2.setAttribute("visible", false);
        botonFinalizarM2.classList.remove("interactivo");

        // FIN REINICIAR ESTADO DE FINALIZACIÓN

        // Reiniciar feedback del motor
        feedbackEstadoM2.setAttribute("value", "");
        feedbackHorasM2.setAttribute("value", "");
        feedbackCodigoM2.setAttribute("value", "");


        // Reiniciar colores
        restablecerFila(botonesPortatiles);
        restablecerFila(botonesTablets);
        restablecerFila(botonesSobremesa);

    });

    // FIN CERRAR Y REINICIAR TERMINAL

});

// FIN BLOQUE: TERMINAL M2 - SELECCIÓN VISUAL
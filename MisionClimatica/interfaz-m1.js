// =====================================================
// INTERFAZ M1 - MISIÓN CLIMÁTICA
//
// Capa visual e interactiva del Módulo 1.
// NO contiene reglas de negocio.
// La lógica de la actividad permanece en script.js.
// =====================================================


// =====================================================
// BLOQUE: VENTANA A-17 - PORTÁTILES
//
// Abre la ventana al pulsar el hotspot A-17.
// Cierra la ventana al pulsar el botón X.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const hotspotA17 = document.querySelector("#hotspot-a17");
    const ventanaA17 = document.querySelector("#ventana-a17");
    const cerrarA17 = document.querySelector("#cerrar-a17");

    // =====================================================
    // CONTROL DE INTERACCIÓN - VENTANA A-17
    //
    // Al abrir:
    // - muestra la ventana;
    // - activa la X para el raycaster.
    //
    // Al cerrar:
    // - oculta la ventana;
    // - elimina la X del raycaster.
    // =====================================================

    // La X comienza desactivada porque la ventana está oculta.
    cerrarA17.classList.remove("interactivo");

    // Abrir ventana
    hotspotA17.addEventListener("click", () => {
        ventanaA17.setAttribute("visible", true);
        cerrarA17.classList.add("interactivo");
    });

    // Cerrar ventana
    cerrarA17.addEventListener("click", () => {
        ventanaA17.setAttribute("visible", false);
        cerrarA17.classList.remove("interactivo");
    });

    // FIN CONTROL DE INTERACCIÓN - VENTANA A-17

});

// FIN BLOQUE: VENTANA A-17 - PORTÁTILES

// =====================================================
// BLOQUE: VENTANA B-32 - TABLETS
//
// Abre la ventana al pulsar el hotspot B-32.
// Cierra la ventana al pulsar el botón X.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const hotspotB32 = document.querySelector("#hotspot-b32");
    const ventanaB32 = document.querySelector("#ventana-b32");
    const cerrarB32 = document.querySelector("#cerrar-b32");

    // =====================================================
    // CONTROL DE INTERACCIÓN - VENTANA B-32
    //
    // Al abrir:
    // - muestra la ventana;
    // - activa la X para el raycaster.
    //
    // Al cerrar:
    // - oculta la ventana;
    // - elimina la X del raycaster.
    // =====================================================

    // La X comienza desactivada porque la ventana está oculta.
    cerrarB32.classList.remove("interactivo");

    // Abrir ventana
    hotspotB32.addEventListener("click", () => {
        ventanaB32.setAttribute("visible", true);
        cerrarB32.classList.add("interactivo");
    });

    // Cerrar ventana
    cerrarB32.addEventListener("click", () => {
        ventanaB32.setAttribute("visible", false);
        cerrarB32.classList.remove("interactivo");
    });

    // FIN CONTROL DE INTERACCIÓN - VENTANA B-32

});

// FIN BLOQUE: VENTANA B-32 - TABLETS

// =====================================================
// BLOQUE: VENTANA C-08 - SOBREMESA
//
// Abre la ventana al pulsar el hotspot C-08.
// Cierra la ventana al pulsar el botón X.
//
// IMPORTANTE:
// Cuando la ventana está oculta, su botón X queda
// fuera del raycaster para no interceptar otros clics.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const hotspotC08 = document.querySelector("#hotspot-c08");
    const ventanaC08 = document.querySelector("#ventana-c08");
    const cerrarC08 = document.querySelector("#cerrar-c08");


    // =====================================================
    // CONTROL DE INTERACCIÓN - VENTANA C-08
    // =====================================================

    // La X comienza desactivada porque la ventana está oculta.
    cerrarC08.classList.remove("interactivo");

    // Abrir ventana
    hotspotC08.addEventListener("click", () => {
        ventanaC08.setAttribute("visible", true);
        cerrarC08.classList.add("interactivo");
    });

    // Cerrar ventana
    cerrarC08.addEventListener("click", () => {
        ventanaC08.setAttribute("visible", false);
        cerrarC08.classList.remove("interactivo");
    });

    // FIN CONTROL DE INTERACCIÓN - VENTANA C-08

});

// FIN BLOQUE: VENTANA C-08 - SOBREMESA

// =====================================================
// BLOQUE: VENTANA TERMINAL - REGISTRAR PROPUESTA
//
// Abre la ventana al pulsar el terminal.
// Cierra la ventana al pulsar X.
//
// IMPORTANTE:
// Todos los controles del terminal quedan fuera del
// raycaster mientras la ventana permanece oculta.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const hotspotTerminal = document.querySelector("#hotspot-terminal");
    const ventanaTerminal = document.querySelector("#ventana-terminal");

    const botonPortatiles = document.querySelector("#boton-portatiles");
    const botonTablets = document.querySelector("#boton-tablets");
    const botonSobremesa = document.querySelector("#boton-sobremesa");
    const botonRegistrar = document.querySelector("#boton-registrar");
    const cerrarTerminal = document.querySelector("#cerrar-terminal");
    const respuestaM1 = document.querySelector("#respuesta-m1");

    // =====================================================
    // CONTROLES POST-REGISTRO M1
    // =====================================================

    const decisionPostRegistroM1 =
        document.querySelector("#decision-post-registro-m1");

    const botonContinuarM1 =
        document.querySelector("#boton-continuar-m1");

    const botonCambiarM1 =
        document.querySelector("#boton-cambiar-m1");

    // FIN CONTROLES POST-REGISTRO M1

        // =====================================================
        // ESTADO VISUAL DE SELECCIÓN - M1
        //
        // Este estado pertenece únicamente a la interfaz.
        // NO valida las reglas de negocio de M1.
        // =====================================================

        let portatilesSeleccionados = false;
        let tabletsSeleccionadas = false;
        let sobremesaSeleccionada = false;        

        // FIN ESTADO VISUAL DE SELECCIÓN - M1


    // =====================================================
    // CONTROL DE INTERACCIÓN - VENTANA TERMINAL
    // =====================================================

    const controlesTerminal = [
        botonPortatiles,
        botonTablets,
        botonSobremesa,
        botonRegistrar,
        cerrarTerminal
    ];


    // La ventana comienza oculta:
    // ninguno de sus controles debe interceptar el raycaster.
    controlesTerminal.forEach((control) => {
        control.classList.remove("interactivo");
    });


    // Abrir ventana
    hotspotTerminal.addEventListener("click", () => {

        ventanaTerminal.setAttribute("visible", true);

        controlesTerminal.forEach((control) => {
            control.classList.add("interactivo");
        });

    });


    // =====================================================
    // CERRAR Y REINICIAR INTERFAZ DEL TERMINAL M1
    //
    // Al cerrar el terminal se limpia únicamente su
    // interfaz visual.
    //
    // IMPORTANTE:
    // NO modifica gameState.
    // NO modifica ningún dato registrado por el motor.
    // =====================================================

    cerrarTerminal.addEventListener("click", () => {

        // Cerrar ventana
        ventanaTerminal.setAttribute("visible", false);

        // Retirar controles del raycaster
        controlesTerminal.forEach((control) => {
            control.classList.remove("interactivo");
        });


        // ---------------------------------------------
        // REINICIAR SELECCIÓN VISUAL
        // ---------------------------------------------

        portatilesSeleccionados = false;
        tabletsSeleccionadas = false;
        sobremesaSeleccionada = false;

        botonPortatiles.setAttribute("color", "#D9D9D9");
        botonTablets.setAttribute("color", "#D9D9D9");
        botonSobremesa.setAttribute("color", "#D9D9D9");


        // ---------------------------------------------
        // BORRAR RESPUESTA ANTERIOR
        // ---------------------------------------------

        respuestaM1.setAttribute("value", "");

        // ---------------------------------------------
        // OCULTAR CONTROLES POST-REGISTRO
        // ---------------------------------------------

        decisionPostRegistroM1.setAttribute("visible", false);

        botonContinuarM1.classList.remove("interactivo");
        botonCambiarM1.classList.remove("interactivo");

    });

    // FIN CERRAR Y REINICIAR INTERFAZ DEL TERMINAL M1

        // =====================================================
        // SELECCIÓN VISUAL - PORTÁTILES
        //
        // Permite marcar y desmarcar PORTÁTILES.
        // No realiza ninguna validación de M1.
        // =====================================================

        botonPortatiles.addEventListener("click", () => {

            portatilesSeleccionados = !portatilesSeleccionados;

            if (portatilesSeleccionados) {
                botonPortatiles.setAttribute("color", "#9E9E9E");
            } else {
                botonPortatiles.setAttribute("color", "#D9D9D9");
            }

        });

        // FIN SELECCIÓN VISUAL - PORTÁTILES

        // =====================================================
        // SELECCIÓN VISUAL - TABLETS
        //
        // Permite marcar y desmarcar TABLETS.
        // No realiza ninguna validación de M1.
        // =====================================================

        botonTablets.addEventListener("click", () => {

            tabletsSeleccionadas = !tabletsSeleccionadas;

            if (tabletsSeleccionadas) {
                botonTablets.setAttribute("color", "#9E9E9E");
            } else {
                botonTablets.setAttribute("color", "#D9D9D9");
            }

        });

        // FIN SELECCIÓN VISUAL - TABLETS

        // =====================================================
        // SELECCIÓN VISUAL - SOBREMESA
        //
        // Permite marcar y desmarcar SOBREMESA.
        // No realiza ninguna validación de M1.
        // =====================================================

        botonSobremesa.addEventListener("click", () => {

            sobremesaSeleccionada = !sobremesaSeleccionada;

            if (sobremesaSeleccionada) {
                botonSobremesa.setAttribute("color", "#9E9E9E");
            } else {
                botonSobremesa.setAttribute("color", "#D9D9D9");
            }

        });

        // FIN SELECCIÓN VISUAL - SOBREMESA

            // =====================================================
            // REGISTRO DE PROPUESTA M1
            //
            // Recoge únicamente la selección visual del operador
            // y la envía al motor mediante registrarPropuesta().
            //
            // IMPORTANTE:
            // Aquí NO se validan reglas de M1.
            // Disponibilidad, capacidad, presupuesto y número
            // de necesidades son responsabilidad del motor.
            // =====================================================

            botonRegistrar.addEventListener("click", () => {

                // ---------------------------------------------
                // 1. CONSTRUIR LA SELECCIÓN DEL OPERADOR
                // ---------------------------------------------

                const necesidadesSeleccionadas = [];

                if (portatilesSeleccionados) {
                    necesidadesSeleccionadas.push("portatil");
                }

                if (tabletsSeleccionadas) {
                    necesidadesSeleccionadas.push("tablet");
                }

                if (sobremesaSeleccionada) {
                    necesidadesSeleccionadas.push("sobremesa");
                }


                // ---------------------------------------------
                // 2. ENVIAR LA DECISIÓN AL MOTOR
                // ---------------------------------------------

                const resultado = registrarPropuesta(
                    necesidadesSeleccionadas
                );


                // ---------------------------------------------
                // 3. MOSTRAR RESULTADO SOLO PARA PRUEBAS
                //
                // Temporal. Después lo sustituiremos por
                // respuesta visual dentro de A-Frame.
                // ---------------------------------------------

                console.log("RESULTADO INTERFAZ M1:", resultado);

                // ---------------------------------------------
                // 4. MOSTRAR RESPUESTA DEL MOTOR EN LA VR
                //
                // La interfaz NO decide si la propuesta es válida.
                // Únicamente muestra el resultado devuelto
                // por registrarPropuesta().
                // ---------------------------------------------

                if (resultado.valida) {

                    respuestaM1.setAttribute(
                        "value",
                        "PROPUESTA REGISTRADA\n" + resultado.codigoM1
                    );

                    // ---------------------------------------------
                    // MOSTRAR DECISIÓN POST-REGISTRO
                    //
                    // Solo aparece después de que el motor
                    // haya aceptado la propuesta.
                    // ---------------------------------------------

                    decisionPostRegistroM1.setAttribute("visible", true);

                    botonContinuarM1.classList.add("interactivo");
                    botonCambiarM1.classList.add("interactivo");

                } else {

                // ---------------------------------------------
                // MENSAJES DE VALIDACIÓN - M1
                //
                // Traduce los códigos devueltos por el motor
                // a mensajes comprensibles para el operador.
                //
                // NO realiza ninguna validación.
                // ---------------------------------------------

                let mensajeError = resultado.motivo;

                if (resultado.motivo === "NUMERO_NECESIDADES") {
                    mensajeError = "No se ajusta a los criterios solicitados.";
                }

                respuestaM1.setAttribute(
                    "value",
                    "PROPUESTA NO REGISTRADA\n" + mensajeError
                );

                }

                // FIN RESPUESTA DEL MOTOR EN LA VR

            });

            // FIN REGISTRO DE PROPUESTA M1

            // =====================================================
            // ACCIÓN: CONTINUAR DESPUÉS DE REGISTRAR M1
            //
            // Informa al operador del siguiente paso.
            // NO cambia de módulo.
            // NO modifica gameState.
            // NO valida ningún código.
            // =====================================================

            botonContinuarM1.addEventListener("click", () => {

                // Ocultar los botones de decisión
                decisionPostRegistroM1.setAttribute("visible", false);

                botonContinuarM1.classList.remove("interactivo");
                botonCambiarM1.classList.remove("interactivo");


                // Mostrar instrucción al operador
                respuestaM1.setAttribute(
                    "value",
                    "Introduzca el código de propuesta\nen el panel de acceso al\nTaller de Recuperación"
                );

                // ---------------------------------------------
                // HABILITAR ACCESO AL TALLER
                //
                // El hotspot solo se activa después de:
                // 1. registrar una propuesta válida;
                // 2. pulsar CONTINUAR.
                //
                // No realiza ninguna validación adicional.
                // ---------------------------------------------

                hotspotTaller.classList.add("interactivo");

                indicadorTaller.setAttribute("visible", true);

            });

            // FIN ACCIÓN: CONTINUAR DESPUÉS DE REGISTRAR M1

            // =====================================================
            // ACCIÓN: CAMBIAR PROPUESTA DESPUÉS DE REGISTRAR M1
            //
            // Informa al operador de cómo registrar otra propuesta.
            //
            // NO modifica gameState.
            // NO modifica la propuesta registrada.
            // El reinicio visual se producirá al cerrar la terminal.
            // =====================================================

            botonCambiarM1.addEventListener("click", () => {

                // ---------------------------------------------
                // OCULTAR CONTROLES POST-REGISTRO
                // ---------------------------------------------

                decisionPostRegistroM1.setAttribute("visible", false);

                botonContinuarM1.classList.remove("interactivo");
                botonCambiarM1.classList.remove("interactivo");


                // ---------------------------------------------
                // MOSTRAR INSTRUCCIÓN AL OPERADOR
                // ---------------------------------------------

                respuestaM1.setAttribute(
                    "value",
                    "Cierre la terminal y acceda\npara registrar su nueva propuesta"
                );

            });

            // FIN ACCIÓN: CAMBIAR PROPUESTA DESPUÉS DE REGISTRAR M1

    // FIN CONTROL DE INTERACCIÓN - VENTANA TERMINAL

    // =====================================================
    // PANEL DE ACCESO — TALLER DE RECUPERACIÓN
    //
    // Gestiona:
    // - apertura desde el hotspot de la puerta;
    // - colocación del panel frente al operador;
    // - cierre mediante X;
    // - selectores numéricos PV.
    //
    // NO valida códigos.
    // NO modifica gameState.
    // =====================================================


    // -----------------------------------------------------
    // REFERENCIAS GENERALES
    // -----------------------------------------------------

    const hotspotTaller =
        document.querySelector("#hotspot-taller");

    const panelAccesoTaller =
        document.querySelector("#panel-acceso-taller");

    const cerrarPanelTaller =
        document.querySelector("#cerrar-panel-taller");

    const botonAccederTaller =
        document.querySelector("#boton-acceder-taller");

    
    // -----------------------------------------------------
    // VENTANA DE RESULTADO DEL ACCESO
    // -----------------------------------------------------

    const ventanaResultadoTaller =
        document.querySelector("#ventana-resultado-taller");

    const mensajeResultadoTaller =
        document.querySelector("#mensaje-resultado-taller");

    const cerrarResultadoTaller =
        document.querySelector("#cerrar-resultado-taller");

    

    // -----------------------------------------------------
    // INDICADOR VISUAL — ACCESO AL TALLER
    // -----------------------------------------------------

    const indicadorTaller =
        document.querySelector("#indicador-taller");


    // -----------------------------------------------------
    // SELECTOR 1 — CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv1 =
        document.querySelector("#codigo-pv-1");

    const aumentarPv1 =
        document.querySelector("#aumentar-pv-1");

    const disminuirPv1 =
        document.querySelector("#disminuir-pv-1");

    let valorPv1 = 0;


    // -----------------------------------------------------
    // SELECTOR 2 — CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv2 =
        document.querySelector("#codigo-pv-2");

    const aumentarPv2 =
        document.querySelector("#aumentar-pv-2");

    const disminuirPv2 =
        document.querySelector("#disminuir-pv-2");

    let valorPv2 = 0;

    // -----------------------------------------------------
    // SELECTOR 3 — CÓDIGO PV
    // -----------------------------------------------------

    const codigoPv3 =
        document.querySelector("#codigo-pv-3");

    const aumentarPv3 =
        document.querySelector("#aumentar-pv-3");

    const disminuirPv3 =
        document.querySelector("#disminuir-pv-3");

    let valorPv3 = 0;


    // -----------------------------------------------------
    // CONTROLES INTERACTIVOS DEL PANEL
    //
    // IMPORTANTE:
    // Todos los elementos anteriores ya están declarados
    // antes de construir este array.
    // -----------------------------------------------------

    const controlesPanelTaller = [
        cerrarPanelTaller,
        aumentarPv1,
        disminuirPv1,
        aumentarPv2,
        disminuirPv2,
        aumentarPv3,
        disminuirPv3,
        botonAccederTaller
    ];


    // -----------------------------------------------------
    // ABRIR PANEL
    // -----------------------------------------------------

    hotspotTaller.addEventListener("click", () => {

        // Colocar el panel delante de la cámara
        panelAccesoTaller.object3D.position.set(0, 0, -2);

        // Vincularlo a la orientación actual de la cámara
        const camera = document.querySelector("[camera]");

        camera.object3D.add(panelAccesoTaller.object3D);

        // Mostrar panel
        panelAccesoTaller.setAttribute("visible", true);

        // Activar controles
        controlesPanelTaller.forEach((control) => {
            control.classList.add("interactivo");
        });

        

    });


    // -----------------------------------------------------
    // CERRAR PANEL
    // -----------------------------------------------------

    cerrarPanelTaller.addEventListener("click", () => {

        panelAccesoTaller.setAttribute("visible", false);

        controlesPanelTaller.forEach((control) => {
            control.classList.remove("interactivo");
        });

    });


    // -----------------------------------------------------
    // FUNCIONAMIENTO SELECTOR 1 — CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv1.addEventListener("click", () => {

        valorPv1++;

        codigoPv1.setAttribute(
            "value",
            String(valorPv1).padStart(2, "0")
        );

    });


    disminuirPv1.addEventListener("click", () => {

        if (valorPv1 > 0) {
            valorPv1--;
        }

        codigoPv1.setAttribute(
            "value",
            String(valorPv1).padStart(2, "0")
        );

    });


    // -----------------------------------------------------
    // FUNCIONAMIENTO SELECTOR 2 — CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv2.addEventListener("click", () => {

        valorPv2++;

        codigoPv2.setAttribute(
            "value",
            String(valorPv2).padStart(2, "0")
        );

    });


    disminuirPv2.addEventListener("click", () => {

        if (valorPv2 > 0) {
            valorPv2--;
        }

        codigoPv2.setAttribute(
            "value",
            String(valorPv2).padStart(2, "0")
        );

    });

    // -----------------------------------------------------
    // FUNCIONAMIENTO SELECTOR 3 — CÓDIGO PV
    // -----------------------------------------------------

    aumentarPv3.addEventListener("click", () => {

        valorPv3++;

        codigoPv3.setAttribute(
            "value",
            String(valorPv3).padStart(2, "0")
        );

    });


    disminuirPv3.addEventListener("click", () => {

        if (valorPv3 > 0) {
            valorPv3--;
        }

        codigoPv3.setAttribute(
            "value",
            String(valorPv3).padStart(2, "0")
        );

    });


    // -----------------------------------------------------
    // VALIDACIÓN DE ACCESO — TALLER DE RECUPERACIÓN
    //
    // Se aceptan las tres combinaciones viables de M1:
    //
    // PV-12-15-00  Portátiles + tablets
    // PV-12-00-08  Portátiles + sobremesa
    // PV-00-15-08  Tablets + sobremesa
    //
    // No se comprueba cuál fue la propuesta registrada.
    // Cualquiera de las tres permite continuar.
    // -----------------------------------------------------

    botonAccederTaller.addEventListener("click", () => {

        const codigoIntroducido =
            `PV-${String(valorPv1).padStart(2, "0")}` +
            `-${String(valorPv2).padStart(2, "0")}` +
            `-${String(valorPv3).padStart(2, "0")}`;

        const codigosValidos = [
            "PV-12-15-00",
            "PV-12-00-08",
            "PV-00-15-08"
        ];

        console.log("Código introducido:", codigoIntroducido);

        // -----------------------------------------------------
        // CERRAR Y REINICIAR EL PANEL DE CÓDIGO
        // -----------------------------------------------------

        panelAccesoTaller.setAttribute("visible", false);

        controlesPanelTaller.forEach((control) => {
            control.classList.remove("interactivo");
        });

        // Reset interno
        valorPv1 = 0;
        valorPv2 = 0;
        valorPv3 = 0;

        // Reset visual
        codigoPv1.setAttribute("value", "00");
        codigoPv2.setAttribute("value", "00");
        codigoPv3.setAttribute("value", "00");


        // -----------------------------------------------------
        // BLOQUEAR DE NUEVO EL ACCESO DE LA PUERTA
        // -----------------------------------------------------

        indicadorTaller.classList.remove("interactivo");
        indicadorTaller.setAttribute("visible", false);


        // -----------------------------------------------------
        // MOSTRAR RESULTADO
        // -----------------------------------------------------

        const camera = document.querySelector("[camera]");

        ventanaResultadoTaller.object3D.position.set(0, 0, -2);
        camera.object3D.add(ventanaResultadoTaller.object3D);

        ventanaResultadoTaller.setAttribute("visible", true);


        if (codigosValidos.includes(codigoIntroducido)) {

            console.log("ACCESO AUTORIZADO");

            mensajeResultadoTaller.setAttribute(
                "value",
                "ACCESO AUTORIZADO\n\nIniciando acceso al\nTaller de Recuperación..."
            );

            // =====================================================
            // INICIO: TRANSICIÓN M1 -> M2
            //
            // Tras mostrar el mensaje de acceso autorizado,
            // espera 1,5 segundos y carga el Módulo 2.
            // NO modifica gameState ni la validación del código.
            // =====================================================

            setTimeout(() => {
                window.location.href = "M2.html";
            }, 2500);

            // FIN: TRANSICIÓN M1 -> M2

        } else {

            console.log("CÓDIGO NO RECONOCIDO");

            mensajeResultadoTaller.setAttribute(
                "value",
                "CÓDIGO NO RECONOCIDO\n\nRevise la información\ny vuelva a intentarlo"
            );

            // La X solo se habilita en caso de error.
            cerrarResultadoTaller.classList.add("interactivo");
        }

    });

    // -----------------------------------------------------
    // CERRAR RESULTADO DE CÓDIGO NO RECONOCIDO
    // -----------------------------------------------------

    cerrarResultadoTaller.addEventListener("click", () => {

        ventanaResultadoTaller.setAttribute("visible", false);

        cerrarResultadoTaller.classList.remove("interactivo");

    });


    // FIN PANEL DE ACCESO — TALLER DE RECUPERACIÓN

});

// FIN BLOQUE: VENTANA TERMINAL - REGISTRAR PROPUESTA


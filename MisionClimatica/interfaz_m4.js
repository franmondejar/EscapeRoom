// ======================================================
// INTERFAZ M4 - MISIÓN CLIMÁTICA
//
// PASO ACTUAL:
// Tres paneles simultáneos para introducir:
// - código M1;
// - código M2;
// - P/T/S del código M3.
//
// Todavía NO se valida ni se ejecuta realizarAuditoria().
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // INICIO BLOQUE: REFERENCIAS GENERALES
    // ======================================================

    const hotspotPantalla =
        document.querySelector("#hotspot-pantalla-m4");

    const panelCodigos =
        document.querySelector("#panel-codigos-m4");

    const botonCerrar =
        document.querySelector("#cerrar-codigos-m4");

    const botonIniciar =
        document.querySelector("#iniciar-auditoria-m4");

    const panelInforme =
        document.querySelector("#panel-informe-m4");

    const informeEconomico =
        document.querySelector("#informe-economico-m4");

    const informeAmbiental =
        document.querySelector("#informe-ambiental-m4");

    const informeSocial =
        document.querySelector("#informe-social-m4");

    const informeOportunidades =
        document.querySelector("#informe-oportunidades-m4");

    // ======================================================
    // FIN BLOQUE: REFERENCIAS GENERALES
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: CÓDIGO M1
    // ======================================================

    const valoresM1 = [0, 0, 0];
    const controlesM1 = [];

    for (let i = 1; i <= 3; i++) {

        const texto =
            document.querySelector(`#m1-valor-${i}`);

        const mas =
            document.querySelector(`#m1-mas-${i}`);

        const menos =
            document.querySelector(`#m1-menos-${i}`);

        controlesM1.push(mas, menos);

        function actualizar() {
            texto.setAttribute(
                "value",
                String(valoresM1[i - 1]).padStart(2, "0")
            );
        }

        mas.addEventListener("click", () => {
            valoresM1[i - 1] =
                (valoresM1[i - 1] + 1) % 100;
            actualizar();
        });

        menos.addEventListener("click", () => {
            valoresM1[i - 1] =
                (valoresM1[i - 1] - 1 + 100) % 100;
            actualizar();
        });

    }

    // ======================================================
    // FIN BLOQUE: CÓDIGO M1
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: CÓDIGO M2
    // ======================================================

    const opcionesM2 = ["P", "C", "M"];
    const indicesM2 = [0, 0, 0];
    const controlesM2 = [];

    for (let i = 1; i <= 3; i++) {

        const texto =
            document.querySelector(`#m2-valor-${i}`);

        const mas =
            document.querySelector(`#m2-mas-${i}`);

        const menos =
            document.querySelector(`#m2-menos-${i}`);

        controlesM2.push(mas, menos);

        function actualizar() {
            texto.setAttribute(
                "value",
                opcionesM2[indicesM2[i - 1]]
            );
        }

        mas.addEventListener("click", () => {
            indicesM2[i - 1] =
                (indicesM2[i - 1] + 1) % opcionesM2.length;
            actualizar();
        });

        menos.addEventListener("click", () => {
            indicesM2[i - 1] =
                (indicesM2[i - 1] - 1 + opcionesM2.length) %
                opcionesM2.length;
            actualizar();
        });

    }

    // ======================================================
    // FIN BLOQUE: CÓDIGO M2
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: CÓDIGO M3 - P / T / S
    // ======================================================

    const valoresM3 = {
        p: [0, 0, 0],
        t: [0, 0, 0],
        s: [0, 0, 0]
    };

    const textosM3 = {
        p: document.querySelector("#m3-texto-p"),
        t: document.querySelector("#m3-texto-t"),
        s: document.querySelector("#m3-texto-s")
    };

    const controlesM3 =
        document.querySelector("#controles-m3-m4");

    const controlesM3Interactivos = [];

    const posicionesY = {
        p: 0.30,
        t: 0.08,
        s: -0.14
    };


    function actualizarM3(grupo) {

        textosM3[grupo].setAttribute(
            "value",
            `${grupo.toUpperCase()}      ${valoresM3[grupo][0]}   ${valoresM3[grupo][1]}   ${valoresM3[grupo][2]}`
        );

    }


    function cambiarDigitoM3(grupo, indice, cambio) {

        valoresM3[grupo][indice] =
            (valoresM3[grupo][indice] + cambio + 10) % 10;

        actualizarM3(grupo);

    }


    ["p", "t", "s"].forEach((grupo) => {

        for (let indice = 0; indice < 3; indice++) {

            const x = -0.48 + (indice * 0.21);
            const y = posicionesY[grupo];

            const mas =
                document.createElement("a-plane");

            mas.setAttribute(
                "id",
                `m3-${grupo}-mas-${indice + 1}`
            );

            mas.setAttribute("width", "0.14");
            mas.setAttribute("height", "0.13");
            mas.setAttribute("color", "#D9D9D9");
            mas.setAttribute(
                "position",
                `${x} ${y + 0.085} 0.03`
            );

            mas.innerHTML =
                '<a-text value="+" color="#111" align="center" width="1.1" position="0 0 0.01"></a-text>';


            const menos =
                document.createElement("a-plane");

            menos.setAttribute(
                "id",
                `m3-${grupo}-menos-${indice + 1}`
            );

            menos.setAttribute("width", "0.14");
            menos.setAttribute("height", "0.13");
            menos.setAttribute("color", "#D9D9D9");
            menos.setAttribute(
                "position",
                `${x} ${y - 0.085} 0.03`
            );

            menos.innerHTML =
                '<a-text value="-" color="#111" align="center" width="1.1" position="0 0 0.01"></a-text>';


            mas.addEventListener("click", () => {
                cambiarDigitoM3(grupo, indice, 1);
            });

            menos.addEventListener("click", () => {
                cambiarDigitoM3(grupo, indice, -1);
            });


            controlesM3.appendChild(mas);
            controlesM3.appendChild(menos);

            controlesM3Interactivos.push(mas, menos);

        }

    });

    // ======================================================
    // FIN BLOQUE: CÓDIGO M3 - P / T / S
    // ======================================================



    // ======================================================
    // INICIO BLOQUE: SERVICIO DE REPARACIÓN M3
    //
    // Reutiliza el sistema final de M3:
    // - SIN SERVICIO / CON SERVICIO
    // - R oculto cuando no existe servicio
    // - R = 3 dígitos para número + 3 para precio
    // ======================================================

    const servicioTexto =
        document.querySelector("#m3-servicio-valor");

    const servicioMas =
        document.querySelector("#m3-servicio-mas");

    const servicioMenos =
        document.querySelector("#m3-servicio-menos");

    const grupoRM3 =
        document.querySelector("#grupo-r-m3-m4");

    const controlesRM3 =
        document.querySelector("#controles-r-m3-m4");

    const textoRM3 =
        document.querySelector("#m3-texto-r");

    let m3ConServicio = false;

    const valoresR = {
        numero: [0, 0, 0],
        precio: [0, 0, 0]
    };

    const controlesRInteractivos = [];


    function actualizarTextoR() {

        textoRM3.setAttribute(
            "value",
            `R      ${valoresR.numero[0]}   ${valoresR.numero[1]}   ${valoresR.numero[2]}   x   ${valoresR.precio[0]}   ${valoresR.precio[1]}   ${valoresR.precio[2]}`
        );

    }


    function cambiarDigitoR(tipo, indice, cambio) {

        valoresR[tipo][indice] =
            (valoresR[tipo][indice] + cambio + 10) % 10;

        actualizarTextoR();

    }


    const posicionesNumero = [0.12, 0.30, 0.48];
    const posicionesPrecio = [0.82, 1.00, 1.18];

    [
        ["numero", posicionesNumero],
        ["precio", posicionesPrecio]
    ].forEach(([tipo, posiciones]) => {

        for (let i = 0; i < 3; i++) {

            const mas = document.createElement("a-plane");
            mas.setAttribute("width", "0.12");
            mas.setAttribute("height", "0.11");
            mas.setAttribute("color", "#D9D9D9");
            mas.setAttribute(
                "position",
                `${posiciones[i]} 0.07 0.03`
            );

            mas.innerHTML =
                '<a-text value="+" color="#111" align="center" width="1.0" position="0 0 0.01"></a-text>';

            const menos = document.createElement("a-plane");
            menos.setAttribute("width", "0.12");
            menos.setAttribute("height", "0.11");
            menos.setAttribute("color", "#D9D9D9");
            menos.setAttribute(
                "position",
                `${posiciones[i]} -0.07 0.03`
            );

            menos.innerHTML =
                '<a-text value="-" color="#111" align="center" width="1.0" position="0 0 0.01"></a-text>';

            mas.addEventListener("click", () => {
                cambiarDigitoR(tipo, i, 1);
            });

            menos.addEventListener("click", () => {
                cambiarDigitoR(tipo, i, -1);
            });

            controlesRM3.appendChild(mas);
            controlesRM3.appendChild(menos);

            controlesRInteractivos.push(mas, menos);
        }
    });


    function actualizarServicioM3() {

        servicioTexto.setAttribute(
            "value",
            m3ConServicio ? "CON SERVICIO" : "SIN SERVICIO"
        );

        grupoRM3.setAttribute(
            "visible",
            m3ConServicio
        );

        controlesRInteractivos.forEach((control) => {

            if (
                m3ConServicio &&
                panelCodigos.getAttribute("visible")
            ) {
                control.classList.add("interactivo");
            } else {
                control.classList.remove("interactivo");
            }

        });

    }


    servicioMas.addEventListener("click", () => {
        m3ConServicio = !m3ConServicio;
        actualizarServicioM3();
    });

    servicioMenos.addEventListener("click", () => {
        m3ConServicio = !m3ConServicio;
        actualizarServicioM3();
    });

    // ======================================================
    // FIN BLOQUE: SERVICIO DE REPARACIÓN M3
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: CONTROL DEL RAYCASTER
    // ======================================================

    const controlesPanel = [
        ...controlesM1,
        ...controlesM2,
        ...controlesM3Interactivos,
        servicioMas,
        servicioMenos,
        botonCerrar,
        botonIniciar
    ];


    function activarControlesPanel() {

        controlesPanel.forEach((control) => {
            control.classList.add("interactivo");
        });

    }


    function desactivarControlesPanel() {

        controlesPanel.forEach((control) => {
            control.classList.remove("interactivo");
        });

    }


    desactivarControlesPanel();

    // ======================================================
    // FIN BLOQUE: CONTROL DEL RAYCASTER
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: APERTURA Y CIERRE DEL PANEL
    // ======================================================

    hotspotPantalla.addEventListener("click", () => {

        hotspotPantalla.setAttribute("visible", false);
        hotspotPantalla.classList.remove("interactivo");

        panelCodigos.setAttribute("visible", true);

        activarControlesPanel();
        actualizarServicioM3();

    });


    botonCerrar.addEventListener("click", () => {

        panelCodigos.setAttribute("visible", false);

        desactivarControlesPanel();

        controlesRInteractivos.forEach((control) => {
            control.classList.remove("interactivo");
        });

        hotspotPantalla.setAttribute("visible", true);
        hotspotPantalla.classList.add("interactivo");

    });

    // ======================================================
    // FIN BLOQUE: APERTURA Y CIERRE DEL PANEL
    // ======================================================


    // ======================================================
    // INICIO BLOQUE: BOTÓN INICIAR AUDITORÍA
    //
    // M4 reconstruye M1, M2 y M3 mediante el motor lógico.
    // NO compara contra un gameState vacío al cargar la página.
    //
    // Orden:
    // 1. registrarPropuesta(...)
    // 2. registrarModeloCircular(...)
    // 3. registrarViabilidad(...)
    // 4. realizarAuditoria()
    //
    // La interfaz no duplica reglas de negocio.
    // ======================================================

    botonIniciar.addEventListener("click", () => {

        // --------------------------------------------------
        // 1. RECONSTRUIR M1
        // --------------------------------------------------

        const necesidadesM1 = [];

        if (valoresM1[0] === GAME_DATA.dispositivos.portatil.necesidad) {
            necesidadesM1.push("portatil");
        } else if (valoresM1[0] !== 0) {
            console.log("M4 — CÓDIGO M1 NO RECONOCIDO");
            return;
        }

        if (valoresM1[1] === GAME_DATA.dispositivos.tablet.necesidad) {
            necesidadesM1.push("tablet");
        } else if (valoresM1[1] !== 0) {
            console.log("M4 — CÓDIGO M1 NO RECONOCIDO");
            return;
        }

        if (valoresM1[2] === GAME_DATA.dispositivos.sobremesa.necesidad) {
            necesidadesM1.push("sobremesa");
        } else if (valoresM1[2] !== 0) {
            console.log("M4 — CÓDIGO M1 NO RECONOCIDO");
            return;
        }

        const resultadoM1 =
            registrarPropuesta(necesidadesM1);

        if (!resultadoM1.valida) {
            console.log("M4 — CÓDIGO M1 NO RECONOCIDO");
            return;
        }


        // --------------------------------------------------
        // 2. RECONSTRUIR M2
        // --------------------------------------------------

        const estrategiaP =
            opcionesM2[indicesM2[0]];

        const estrategiaT =
            opcionesM2[indicesM2[1]];

        const estrategiaS =
            opcionesM2[indicesM2[2]];

        const resultadoM2 =
            registrarModeloCircular(
                estrategiaP,
                estrategiaT,
                estrategiaS
            );

        if (!resultadoM2.valido) {
            console.log("M4 — CÓDIGO M2 NO RECONOCIDO");
            return;
        }


        // --------------------------------------------------
        // 3. RECONSTRUIR M3
        // --------------------------------------------------

        function convertirTresDigitos(digitos) {
            return (
                digitos[0] * 100 +
                digitos[1] * 10 +
                digitos[2]
            );
        }

        const precioP =
            convertirTresDigitos(valoresM3.p);

        const precioT =
            convertirTresDigitos(valoresM3.t);

        const precioS =
            convertirTresDigitos(valoresM3.s);

        const numeroReparaciones =
            m3ConServicio
                ? convertirTresDigitos(valoresR.numero)
                : 0;

        const precioReparacion =
            m3ConServicio
                ? convertirTresDigitos(valoresR.precio)
                : 0;

        const resultadoM3 =
            registrarViabilidad(
                precioP,
                precioT,
                precioS,
                numeroReparaciones,
                precioReparacion
            );

        if (!resultadoM3.valido) {
            console.log("M4 — CÓDIGO M3 NO RECONOCIDO");
            console.log(resultadoM3);
            return;
        }


        // --------------------------------------------------
        // 4. EJECUTAR AUDITORÍA FINAL
        // --------------------------------------------------

        const resultadoAuditoria =
            realizarAuditoria();

        console.log("M4 — RESULTADO DE LA AUDITORÍA");
        console.log(resultadoAuditoria);

        if (!resultadoAuditoria.valido) {
            return;
        }


        // --------------------------------------------------
        // 5. CONSTRUIR EL INFORME GLOBAL
        // --------------------------------------------------

        const economico = resultadoAuditoria.economico;
        const ambiental = resultadoAuditoria.ambiental;
        const social = resultadoAuditoria.social;

        const numero = (valor, decimales = 2) =>
            Number(valor).toFixed(decimales);

        informeEconomico.setAttribute(
            "value",
            "Ingresos totales: " + numero(economico.ingresosTotales) + " €\n" +
            "Costes totales: " + numero(economico.costesTotales) + " €\n" +
            "Resultado: " + numero(economico.beneficio) + " €\n" +
            "Margen global: " + numero(economico.margenGlobal) + " %\n" +
            "Minimo requerido: " + numero(economico.margenMinimoRequerido) + " %\n" +
            "Distancia al minimo: " +
            (economico.distanciaMargen >= 0 ? "+" : "") +
            numero(economico.distanciaMargen) + " pp"
        );


        informeAmbiental.setAttribute(
            "value",
            "CO2e evitado: " + numero(ambiental.co2Evitado, 0) + " kg\n" +
            "Intensidad ambiental: " + numero(ambiental.intensidadAmbiental) + " %\n" +
            "Horas utilizadas: " + numero(ambiental.horasUtilizadas, 0) + "/20 h\n" +
            "Puntos de conservacion: " + numero(ambiental.puntosConservacion, 0) + "\n" +
            "ICV: " + numero(ambiental.ICV) + " %\n" +
            "Margen de mejora circular: " +
            (ambiental.margenMejoraCircular ? "SI" : "NO")
        );


        const lineasSociales = [];

        function añadirProductoSocial(nombre, datos) {

            if (!datos) {
                return;
            }

            let situacion;

            if (datos.distanciaLimite === 0) {
                situacion = "EN EL LIMITE";
            } else {
                situacion =
                    numero(datos.distanciaLimite, 0) +
                    " € por debajo";
            }

            lineasSociales.push(
                nombre + ": " +
                numero(datos.precio, 0) + " / " +
                numero(datos.limiteAccesibilidad, 0) +
                " € (" + situacion + ")"
            );
        }

        añadirProductoSocial("Portatil", social.portatil);
        añadirProductoSocial("Tablet", social.tablet);
        añadirProductoSocial("Sobremesa", social.sobremesa);

        const renovados = social.equiposReparadosRenovados;

        lineasSociales.push(
            "Equipos renovados: P " + renovados.portatil +
            " · T " + renovados.tablet +
            " · S " + renovados.sobremesa
        );

        lineasSociales.push(
            "Componentes recuperados: " +
            (social.componentesRecuperados ? "SI" : "NO")
        );

        lineasSociales.push(
            "Servicio disponible: " +
            (social.reparacionDisponible ? "SI" : "NO")
        );

        lineasSociales.push(
            "Reparaciones realizadas: " +
            social.numeroReparaciones
        );

        informeSocial.setAttribute(
            "value",
            lineasSociales.join("\n")
        );


        const oportunidades =
            resultadoAuditoria.oportunidadesMejora;

        informeOportunidades.setAttribute(
            "value",
            oportunidades.length > 0
                ? oportunidades.join(" ")
                : "No se identifica margen adicional de mejora circular en la estrategia registrada."
        );


        // --------------------------------------------------
        // 6. CAMBIAR DE LA ENTRADA DE CÓDIGOS AL INFORME
        // --------------------------------------------------

        panelCodigos.setAttribute("visible", false);
        desactivarControlesPanel();

        controlesRInteractivos.forEach((control) => {
            control.classList.remove("interactivo");
        });

        panelInforme.setAttribute("visible", true);

    });

    // ======================================================
    // FIN BLOQUE: BOTÓN INICIAR AUDITORÍA
    // ======================================================

});

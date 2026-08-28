// ======================================================
// MOTOR PRINCIPAL DE LA ACTIVIDAD VR
// ======================================================


// ======================================================
// MÓDULO 1 — PROPUESTA DE VALOR
// ======================================================

function registrarPropuesta(necesidadesSeleccionadas) {

    console.log("======================================");
    console.log("M1 — PROPUESTA DE VALOR");
    console.log("Necesidades seleccionadas:", necesidadesSeleccionadas);


    // --------------------------------------------------
    // 1. COMPROBAR QUE SE HAN SELECCIONADO
    //    EXACTAMENTE DOS NECESIDADES
    // --------------------------------------------------

    if (necesidadesSeleccionadas.length !== GAME_DATA.m1.necesidadesASeleccionar) {

        console.log("PROPUESTA NO VÁLIDA");
        console.log("Deben seleccionarse exactamente dos necesidades.");

        return {
            valida: false,
            motivo: "NUMERO_NECESIDADES"
        };
    }


    // --------------------------------------------------
    // 2. COMPROBAR QUE LAS NECESIDADES EXISTEN
    // --------------------------------------------------

    for (const necesidad of necesidadesSeleccionadas) {

        if (!GAME_DATA.dispositivos[necesidad]) {

            console.log("PROPUESTA NO VÁLIDA");
            console.log("Necesidad no reconocida:", necesidad);

            return {
                valida: false,
                motivo: "NECESIDAD_DESCONOCIDA"
            };
        }
    }


    // --------------------------------------------------
    // 3. EVITAR QUE SE SELECCIONE DOS VECES
    //    LA MISMA NECESIDAD
    // --------------------------------------------------

    const necesidadesUnicas = new Set(necesidadesSeleccionadas);

    if (necesidadesUnicas.size !== necesidadesSeleccionadas.length) {

        console.log("PROPUESTA NO VÁLIDA");
        console.log("No puede seleccionarse dos veces la misma necesidad.");

        return {
            valida: false,
            motivo: "NECESIDAD_REPETIDA"
        };
    }


    // --------------------------------------------------
    // 4. DETERMINAR LAS CANTIDADES
    // --------------------------------------------------

    let cantidadP = 0;
    let cantidadT = 0;
    let cantidadS = 0;

    if (necesidadesSeleccionadas.includes("portatil")) {
        cantidadP = GAME_DATA.dispositivos.portatil.necesidad;
    }

    if (necesidadesSeleccionadas.includes("tablet")) {
        cantidadT = GAME_DATA.dispositivos.tablet.necesidad;
    }

    if (necesidadesSeleccionadas.includes("sobremesa")) {
        cantidadS = GAME_DATA.dispositivos.sobremesa.necesidad;
    }


    // --------------------------------------------------
    // 5. COMPROBAR DISPONIBILIDAD
    // --------------------------------------------------

    if (
        cantidadP > GAME_DATA.dispositivos.portatil.funcionales ||
        cantidadT > GAME_DATA.dispositivos.tablet.funcionales ||
        cantidadS > GAME_DATA.dispositivos.sobremesa.funcionales
    ) {

        console.log("PROPUESTA NO VÁLIDA");
        console.log("No existen suficientes dispositivos funcionales.");

        return {
            valida: false,
            motivo: "DISPONIBILIDAD"
        };
    }


    // --------------------------------------------------
    // 6. COMPROBAR CAPACIDAD MÁXIMA
    // --------------------------------------------------

    const totalDispositivos =
        cantidadP +
        cantidadT +
        cantidadS;

    if (totalDispositivos > GAME_DATA.m1.capacidadMaxima) {

        console.log("PROPUESTA NO VÁLIDA");
        console.log("Se supera la capacidad máxima de dispositivos.");

        return {
            valida: false,
            motivo: "CAPACIDAD"
        };
    }


    // --------------------------------------------------
    // 7. CALCULAR COSTE DE PREPARACIÓN
    // --------------------------------------------------

    const costePreparacion =
        (cantidadP * GAME_DATA.dispositivos.portatil.costePreparacion) +
        (cantidadT * GAME_DATA.dispositivos.tablet.costePreparacion) +
        (cantidadS * GAME_DATA.dispositivos.sobremesa.costePreparacion);


    // --------------------------------------------------
    // 8. COMPROBAR PRESUPUESTO
    // --------------------------------------------------

    if (costePreparacion > GAME_DATA.m1.presupuestoMaximo) {

        console.log("PROPUESTA NO VÁLIDA");
        console.log("Se supera el presupuesto disponible.");

        return {
            valida: false,
            motivo: "PRESUPUESTO"
        };
    }


    // --------------------------------------------------
    // 9. CALCULAR CO2e EVITADO
    // --------------------------------------------------

    const co2Evitado =
        (cantidadP * GAME_DATA.dispositivos.portatil.co2Evitado) +
        (cantidadT * GAME_DATA.dispositivos.tablet.co2Evitado) +
        (cantidadS * GAME_DATA.dispositivos.sobremesa.co2Evitado);


    // --------------------------------------------------
    // 10. CALCULAR INTENSIDAD AMBIENTAL
    // --------------------------------------------------

    const intensidadAmbiental =
        (co2Evitado / GAME_DATA.m1.co2ReferenciaMaxima) * 100;


    // --------------------------------------------------
    // 11. GENERAR CÓDIGO M1
    // --------------------------------------------------

    const codigoM1 =
        "PV-" +
        formatearCantidad(cantidadP) + "-" +
        formatearCantidad(cantidadT) + "-" +
        formatearCantidad(cantidadS);


    // --------------------------------------------------
    // 12. GUARDAR LA PROPUESTA EN EL ESTADO
    // --------------------------------------------------

    gameState.m1.cantidadP = cantidadP;
    gameState.m1.cantidadT = cantidadT;
    gameState.m1.cantidadS = cantidadS;

    gameState.m1.costePreparacion = costePreparacion;
    gameState.m1.co2Evitado = co2Evitado;
    gameState.m1.intensidadAmbiental = intensidadAmbiental;

    gameState.m1.codigoM1 = codigoM1;
    gameState.m1.completado = true;


    // --------------------------------------------------
    // 13. RESULTADO
    // --------------------------------------------------

    const resultado = {
        valida: true,

        cantidadP,
        cantidadT,
        cantidadS,

        totalDispositivos,
        costePreparacion,
        co2Evitado,
        intensidadAmbiental,

        codigoM1
    };


    console.log("PROPUESTA REGISTRADA");
    console.log(resultado);

    return resultado;
}


// ======================================================
// FUNCIONES AUXILIARES
// ======================================================

function formatearCantidad(cantidad) {
    return String(cantidad).padStart(2, "0");
}


// ======================================================
// MÓDULO 2 — MODELO CIRCULAR
// ======================================================

function registrarModeloCircular(estrategiaP, estrategiaT, estrategiaS) {

    console.log("======================================");
    console.log("M2 — MODELO CIRCULAR");
    console.log("Portátil:", estrategiaP);
    console.log("Tablet:", estrategiaT);
    console.log("Sobremesa:", estrategiaS);


    // --------------------------------------------------
    // 1. COMPROBAR QUE EXISTE UNA ESTRATEGIA
    //    PARA CADA UNO DE LOS TRES LOTES
    // --------------------------------------------------

    if (!estrategiaP || !estrategiaT || !estrategiaS) {

        console.log("MODELO NO VÁLIDO");
        console.log("Debe seleccionarse una estrategia para cada lote.");

        return {
            valido: false,
            motivo: "ESTRATEGIA_INCOMPLETA"
        };
    }


    // --------------------------------------------------
    // 2. COMPROBAR QUE LAS ESTRATEGIAS SON VÁLIDAS
    // --------------------------------------------------

    const estrategiasValidas = ["P", "C", "M"];

    if (
        !estrategiasValidas.includes(estrategiaP) ||
        !estrategiasValidas.includes(estrategiaT) ||
        !estrategiasValidas.includes(estrategiaS)
    ) {

        console.log("MODELO NO VÁLIDO");
        console.log("Se ha introducido una estrategia no reconocida.");

        return {
            valido: false,
            motivo: "ESTRATEGIA_DESCONOCIDA"
        };
    }


    // --------------------------------------------------
    // 3. TRADUCIR LA ESTRATEGIA A LA CLAVE UTILIZADA
    //    EN LA TABLA DE HORAS
    // --------------------------------------------------

    const claveEstrategia = {
        P: "reparar",
        C: "componentes",
        M: "materiales"
    };


    // --------------------------------------------------
    // 4. CALCULAR HORAS UTILIZADAS
    // --------------------------------------------------

    const horasP =
        GAME_DATA.m2.horas.portatil[
            claveEstrategia[estrategiaP]
        ];

    const horasT =
        GAME_DATA.m2.horas.tablet[
            claveEstrategia[estrategiaT]
        ];

    const horasS =
        GAME_DATA.m2.horas.sobremesa[
            claveEstrategia[estrategiaS]
        ];

    const horasUtilizadas =
        horasP +
        horasT +
        horasS;


    // --------------------------------------------------
    // 5. COMPROBAR CAPACIDAD DE TRABAJO
    // --------------------------------------------------

    if (horasUtilizadas > GAME_DATA.m2.capacidadHoras) {

        console.log("MODELO NO VÁLIDO");
        console.log(
            "La estrategia supera la capacidad máxima de trabajo."
        );

        return {
            valido: false,
            motivo: "CAPACIDAD_HORAS",
            horasUtilizadas
        };
    }


    // --------------------------------------------------
    // 6. DETERMINAR SI EL SERVICIO DE REPARACIÓN
    //    QUEDA DISPONIBLE PARA M3
    // --------------------------------------------------

    const reparacionDisponible =
        estrategiaP === "C" ||
        estrategiaT === "C" ||
        estrategiaS === "C";


    // ---------------------------------------------
    // 7. CALCULAR PUNTOS DE CONSERVACIÓN DE VALOR
    // ---------------------------------------------

    const puntosConservacion =
        GAME_DATA.m2.valorConservacion[estrategiaP] +
        GAME_DATA.m2.valorConservacion[estrategiaT] +
        GAME_DATA.m2.valorConservacion[estrategiaS];


    // ---------------------------------------------
    // 7.1. CALCULAR ICV
    // ---------------------------------------------

    const ICV =
        (
            (puntosConservacion - GAME_DATA.m2.icv.minimoFactible) /
            (GAME_DATA.m2.icv.maximoFactible - GAME_DATA.m2.icv.minimoFactible)
        ) * 100;


    // ---------------------------------------------
    // 7.2. DETERMINAR MARGEN DE MEJORA CIRCULAR
    // ---------------------------------------------

    const margenMejoraCircular = ICV < 100;

    
    // --------------------------------------------------
    // 8. GENERAR CÓDIGO M2
    //
    // Orden fijo:
    // PORTÁTIL - TABLET - SOBREMESA
    // --------------------------------------------------

    const codigoM2 =
        "M2-" +
        estrategiaP + "-" +
        estrategiaT + "-" +
        estrategiaS;


    // --------------------------------------------------
    // 9. GUARDAR EN EL ESTADO DE LA PARTIDA
    // --------------------------------------------------

    gameState.m2.estrategiaP = estrategiaP;
    gameState.m2.estrategiaT = estrategiaT;
    gameState.m2.estrategiaS = estrategiaS;

    gameState.m2.horasUtilizadas = horasUtilizadas;

    gameState.m2.codigoM2 = codigoM2;

    gameState.m2.reparacionDisponible =
        reparacionDisponible;

    gameState.m2.puntosConservacion =
        puntosConservacion;

    gameState.m2.ICV =
        ICV;

    gameState.m2.margenMejoraCircular =
        margenMejoraCircular;
    
    gameState.m2.completado = true;


    // --------------------------------------------------
    // 10. RESULTADO PARA PRUEBAS
    // --------------------------------------------------

    const resultado = {
        valido: true,

        estrategiaP,
        estrategiaT,
        estrategiaS,

        horasP,
        horasT,
        horasS,
        horasUtilizadas,

        reparacionDisponible,

        puntosConservacion,
        ICV,
        margenMejoraCircular,

        codigoM2
    };


    console.log("MODELO CIRCULAR REGISTRADO");
    console.log(resultado);

    return resultado;
}


// ======================================================
// MÓDULO 3 — VIABILIDAD ECONÓMICO-SOCIAL
// PARTE 1: PRECIOS DE LOS DISPOSITIVOS
// ======================================================

function registrarViabilidad(
    precioP,
    precioT,
    precioS,
    numeroReparaciones = 0,
    precioReparacion = 0
) {

    console.log("======================================");
    console.log("M3 — VIABILIDAD ECONÓMICO-SOCIAL");


    // --------------------------------------------------
    // 1. COMPROBAR QUE M1 ESTÁ COMPLETADO
    // --------------------------------------------------

    if (!gameState.m1.completado) {

        console.log("M3 NO DISPONIBLE");
        console.log("Debe completarse previamente el Módulo 1.");

        return {
            valido: false,
            motivo: "M1_NO_COMPLETADO"
        };
    }


    // --------------------------------------------------
    // 2. IDENTIFICAR LOS PRODUCTOS DE LA PROPUESTA
    // --------------------------------------------------

    const cantidadP = gameState.m1.cantidadP;
    const cantidadT = gameState.m1.cantidadT;
    const cantidadS = gameState.m1.cantidadS;


    // --------------------------------------------------
    // 3. NORMALIZAR PRECIOS
    //
    // El producto no seleccionado en M1 debe tener
    // obligatoriamente precio 0.
    // --------------------------------------------------

    if (cantidadP === 0) precioP = 0;
    if (cantidadT === 0) precioT = 0;
    if (cantidadS === 0) precioS = 0;

    // --------------------------------------------------
    // 3.1. COMPROBAR QUE LOS PRODUCTOS SELECCIONADOS
    //      TIENEN PRECIO DE VENTA
    // --------------------------------------------------

    if (cantidadP > 0 && precioP === 0) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El portátil forma parte de la propuesta y debe tener un precio de venta."
        );

        return {
            valido: false,
            motivo: "PRECIO_PORTATIL_NO_ESTABLECIDO"
        };
    }


    if (cantidadT > 0 && precioT === 0) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "La tablet forma parte de la propuesta y debe tener un precio de venta."
        );

        return {
            valido: false,
            motivo: "PRECIO_TABLET_NO_ESTABLECIDO"
        };
    }


    if (cantidadS > 0 && precioS === 0) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El ordenador de sobremesa forma parte de la propuesta y debe tener un precio de venta."
        );

        return {
            valido: false,
            motivo: "PRECIO_SOBREMESA_NO_ESTABLECIDO"
        };
    }

    // --------------------------------------------------
    // 4. COMPROBAR QUE LOS PRECIOS SON VÁLIDOS
    // --------------------------------------------------

    if (
        precioP < 0 ||
        precioT < 0 ||
        precioS < 0 ||
        !Number.isFinite(precioP) ||
        !Number.isFinite(precioT) ||
        !Number.isFinite(precioS)
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log("Los precios introducidos no son válidos.");

        return {
            valido: false,
            motivo: "PRECIO_INVALIDO"
        };
    }


    // --------------------------------------------------
    // 5. COMPROBAR LÍMITES SOCIALES
    //
    // Solo se comprueban los dispositivos incluidos
    // en la propuesta de M1.
    // --------------------------------------------------

    if (
        cantidadP > 0 &&
        precioP > GAME_DATA.dispositivos.portatil.precioMaximoAccesible
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El precio del portátil supera el límite máximo de accesibilidad."
        );

        return {
            valido: false,
            motivo: "LIMITE_SOCIAL_PORTATIL"
        };
    }


    if (
        cantidadT > 0 &&
        precioT > GAME_DATA.dispositivos.tablet.precioMaximoAccesible
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El precio de la tablet supera el límite máximo de accesibilidad."
        );

        return {
            valido: false,
            motivo: "LIMITE_SOCIAL_TABLET"
        };
    }


    if (
        cantidadS > 0 &&
        precioS > GAME_DATA.dispositivos.sobremesa.precioMaximoAccesible
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El precio del ordenador de sobremesa supera el límite máximo de accesibilidad."
        );

        return {
            valido: false,
            motivo: "LIMITE_SOCIAL_SOBREMESA"
        };
    }

    // --------------------------------------------------
    // 5.1. COMPROBAR DATOS DEL SERVICIO DE REPARACIÓN
    // --------------------------------------------------

    if (
        numeroReparaciones < 0 ||
        !Number.isInteger(numeroReparaciones)
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log("El número de reparaciones no es válido.");

        return {
            valido: false,
            motivo: "NUMERO_REPARACIONES_INVALIDO"
        };
    }


    // Si se solicitan reparaciones, el servicio debe haber
    // sido desbloqueado previamente en M2.

    if (
        numeroReparaciones > 0 &&
        !gameState.m2.reparacionDisponible
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log("El servicio de reparación no está disponible.");

        return {
            valido: false,
            motivo: "REPARACION_NO_DISPONIBLE"
        };
    }


    // Capacidad máxima del servicio: 8 reparaciones.

    if (
        numeroReparaciones >
        GAME_DATA.m3.servicioReparacion.ampliado.maxReparaciones
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log("Se supera la capacidad máxima del servicio de reparación.");

        return {
            valido: false,
            motivo: "CAPACIDAD_REPARACION"
        };
    }


    // --------------------------------------------------
    // 5.2. COMPROBAR COMPONENTES DISPONIBLES
    //
    // Las reparaciones solo pueden realizarse con
    // componentes recuperados mediante estrategia C
    // en el Módulo 2.
    //
    // Cada lote aporta como máximo los componentes
    // procedentes de sus dispositivos averiados.
    // --------------------------------------------------

    let componentesDisponibles = 0;


    // PORTÁTILES
    if (gameState.m2.estrategiaP === "C") {

        componentesDisponibles +=
            GAME_DATA.dispositivos.portatil.averiados;
    }


    // TABLETS
    if (gameState.m2.estrategiaT === "C") {

        componentesDisponibles +=
            GAME_DATA.dispositivos.tablet.averiados;
    }


    // SOBREMESA
    if (gameState.m2.estrategiaS === "C") {

        componentesDisponibles +=
            GAME_DATA.dispositivos.sobremesa.averiados;
    }


    // No pueden realizarse más reparaciones que
    // componentes recuperados disponibles.

    if (numeroReparaciones > componentesDisponibles) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El número de reparaciones supera los componentes disponibles."
        );

        return {
            valido: false,
            motivo: "COMPONENTES_INSUFICIENTES"
        };
    }


    // Si se realizan reparaciones, el precio debe ser
    // válido y no superar 35 € por reparación.

    if (
        numeroReparaciones > 0 &&
        (
            !Number.isFinite(precioReparacion) ||
            precioReparacion < 0
        )
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log("El precio de reparación no es válido.");

        return {
            valido: false,
            motivo: "PRECIO_REPARACION_INVALIDO"
        };
    }


    if (
        numeroReparaciones > 0 &&
        precioReparacion > GAME_DATA.m3.precioMaximoReparacion
    ) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "El precio por reparación supera el máximo permitido."
        );

        return {
            valido: false,
            motivo: "PRECIO_REPARACION_MAXIMO"
        };
    }


    // --------------------------------------------------
    // 6. CALCULAR INGRESOS POR PRODUCTOS
    // --------------------------------------------------

    const ingresosProductos =
        (cantidadP * precioP) +
        (cantidadT * precioT) +
        (cantidadS * precioS);


    // --------------------------------------------------
    // 7. CALCULAR COSTES DE LOS PRODUCTOS
    // --------------------------------------------------

    const costesProductos =
        (cantidadP * GAME_DATA.dispositivos.portatil.costeTotalM3) +
        (cantidadT * GAME_DATA.dispositivos.tablet.costeTotalM3) +
        (cantidadS * GAME_DATA.dispositivos.sobremesa.costeTotalM3);


    // --------------------------------------------------
    // 7.1. CALCULAR SERVICIO DE REPARACIÓN
    // --------------------------------------------------

    let costeServicio = 0;

    if (numeroReparaciones >= 1 && numeroReparaciones <= 4) {

        costeServicio =
            GAME_DATA.m3.servicioReparacion.basico.coste;

    } else if (numeroReparaciones >= 5 && numeroReparaciones <= 8) {

        costeServicio =
            GAME_DATA.m3.servicioReparacion.ampliado.coste;
    }


    const ingresosReparacion =
        numeroReparaciones * precioReparacion;

    // --------------------------------------------------
    // 8. CALCULAR RESULTADO Y MARGEN ACTUAL
    //
    // De momento SOLO productos.
    // El servicio de reparación se añadirá después.
    // --------------------------------------------------

    const resultadoProductos =
        ingresosProductos - costesProductos;

    const margenProductos =
        ingresosProductos > 0
            ? (resultadoProductos / ingresosProductos) * 100
            : 0;

    // --------------------------------------------------
    // 8.1. CALCULAR RESULTADOS GLOBALES
    // Productos + servicio de reparación
    // --------------------------------------------------

    const ingresosTotales =
        ingresosProductos + ingresosReparacion;

    const costesTotales =
        costesProductos + costeServicio;

    const resultadoGlobal =
        ingresosTotales - costesTotales;

    const margenGlobal =
        ingresosTotales > 0
            ? (resultadoGlobal / ingresosTotales) * 100
            : 0;
    
    // --------------------------------------------------
    // 8.2. COMPROBAR VIABILIDAD ECONÓMICA GLOBAL
    // --------------------------------------------------

    if (margenGlobal < GAME_DATA.m3.margenGlobalMinimo) {

        console.log("DECISIÓN NO VÁLIDA");
        console.log(
            "La propuesta no alcanza el margen global mínimo del 20 %."
        );

        return {
            valido: false,
            motivo: "MARGEN_GLOBAL_INSUFICIENTE",

            ingresosTotales,
            costesTotales,
            resultadoGlobal,
            margenGlobal
        };
    }



    // --------------------------------------------------
    // 8.3. CALCULAR MÁRGENES INDIVIDUALES
    // Solo para comprobación y análisis
    // --------------------------------------------------

    const margenPortatil =
        cantidadP > 0 && precioP > 0
            ? ((precioP - GAME_DATA.dispositivos.portatil.costeTotalM3) / precioP) * 100
            : 0;

    const margenTablet =
        cantidadT > 0 && precioT > 0
            ? ((precioT - GAME_DATA.dispositivos.tablet.costeTotalM3) / precioT) * 100
            : 0;

    const margenSobremesa =
        cantidadS > 0 && precioS > 0
            ? ((precioS - GAME_DATA.dispositivos.sobremesa.costeTotalM3) / precioS) * 100
            : 0;
    

    // --------------------------------------------------
    // 8.4. GENERAR CÓDIGO M3
    // --------------------------------------------------

    const codigoPrecioP =
        String(precioP).padStart(2, "0");

    const codigoPrecioT =
        String(precioT).padStart(2, "0");

    const codigoPrecioS =
        String(precioS).padStart(2, "0");


    let codigoReparacion = "R00";

    if (numeroReparaciones > 0) {

        codigoReparacion =
            "R" +
            numeroReparaciones +
            "x" +
            precioReparacion;
    }


    const codigoM3 =
        "M3-" +
        "P" + codigoPrecioP + "-" +
        "T" + codigoPrecioT + "-" +
        "S" + codigoPrecioS + "-" +
        codigoReparacion;

    // --------------------------------------------------
    // 9. GUARDAR ESTADO PROVISIONAL DE M3
    // --------------------------------------------------

    gameState.m3.precioP = precioP;
    gameState.m3.precioT = precioT;
    gameState.m3.precioS = precioS;

    gameState.m3.ingresosProductos = ingresosProductos;
    gameState.m3.costesProductos = costesProductos;

    gameState.m3.numeroReparaciones = numeroReparaciones;
    gameState.m3.precioReparacion = precioReparacion;
    gameState.m3.costeServicio = costeServicio;

    gameState.m3.ingresosReparacion = ingresosReparacion;

    gameState.m3.ingresosTotales = ingresosTotales;
    gameState.m3.costesTotales = costesTotales;

    gameState.m3.resultado = resultadoGlobal;
    gameState.m3.margenGlobal = margenGlobal;

    gameState.m3.codigoM3 = codigoM3;
    gameState.m3.completado = true;

    

    // --------------------------------------------------
    // 10. RESULTADO PARA PRUEBAS
    // --------------------------------------------------

    const resultado = {
        valido: true,

        precioP,
        precioT,
        precioS,

        margenPortatil,
        margenTablet,
        margenSobremesa,

        ingresosProductos,
        costesProductos,
        resultadoProductos,
        margenProductos,

        numeroReparaciones,
        precioReparacion,
        ingresosReparacion,
        costeServicio,

        ingresosTotales,
        costesTotales,
        resultadoGlobal,
        margenGlobal,
        
        codigoM3
    };


    console.log("PRECIOS REGISTRADOS");
    console.log(resultado);

    return resultado;
}


// ==================================================
// M4 — AUDITORÍA DEL TRIPLE BALANCE
// ==================================================

function realizarAuditoria() {

    // ---------------------------------------------
    // 1. COMPROBAR QUE M1, M2 Y M3 ESTÁN COMPLETADOS
    // ---------------------------------------------

    if (
        !gameState.m1.completado ||
        !gameState.m2.completado ||
        !gameState.m3.completado
    ) {

        console.log("AUDITORÍA NO DISPONIBLE");
        console.log(
            "La empresa debe completar M1, M2 y M3 antes de generar el perfil."
        );

        return {
            valido: false,
            motivo: "MODULOS_INCOMPLETOS"
        };
    }

    // ---------------------------------------------
    // 1.1. COMPROBAR COHERENCIA M1 ↔ M3
    // ---------------------------------------------

    const incoherenciaM1M3 =
        (gameState.m1.cantidadP === 0 && gameState.m3.precioP !== 0) ||
        (gameState.m1.cantidadT === 0 && gameState.m3.precioT !== 0) ||
        (gameState.m1.cantidadS === 0 && gameState.m3.precioS !== 0) ||

        (gameState.m1.cantidadP > 0 && gameState.m3.precioP <= 0) ||
        (gameState.m1.cantidadT > 0 && gameState.m3.precioT <= 0) ||
        (gameState.m1.cantidadS > 0 && gameState.m3.precioS <= 0);

    if (incoherenciaM1M3) {

        console.log("AUDITORÍA NO DISPONIBLE");
        console.log(
            "Existe una incoherencia entre la propuesta de M1 y los productos comercializados en M3."
        );

        return {
            valido: false,
            motivo: "INCOHERENCIA_M1_M3"
        };
    }

    // ---------------------------------------------
    // 1.2. COMPROBAR COHERENCIA M2 ↔ M3
    //      SERVICIO DE REPARACIÓN
    // ---------------------------------------------

    const incoherenciaM2M3 =
        !gameState.m2.reparacionDisponible &&
        gameState.m3.numeroReparaciones > 0;

    if (incoherenciaM2M3) {

        console.log("AUDITORÍA NO DISPONIBLE");
        console.log(
            "M3 incluye reparaciones, pero M2 no habilitó el servicio de reparación."
        );

        return {
            valido: false,
            motivo: "INCOHERENCIA_M2_M3_REPARACION"
        };
    }

    // ---------------------------------------------
    // 2. DIMENSIÓN ECONÓMICA
    // ---------------------------------------------

    const distanciaMargen =
        gameState.m3.margenGlobal - GAME_DATA.m3.margenGlobalMinimo;


    gameState.m4.distanciaMargen = 
    distanciaMargen;


    // ---------------------------------------------
    // 3. DIMENSIÓN SOCIAL — ACCESIBILIDAD
    // ---------------------------------------------

    const distanciaAccesibilidadP =
        gameState.m1.cantidadP > 0
            ? GAME_DATA.dispositivos.portatil.precioMaximoAccesible - gameState.m3.precioP
            : null;

    const distanciaAccesibilidadT =
        gameState.m1.cantidadT > 0
            ? GAME_DATA.dispositivos.tablet.precioMaximoAccesible - gameState.m3.precioT
            : null;

    const distanciaAccesibilidadS =
        gameState.m1.cantidadS > 0
            ? GAME_DATA.dispositivos.sobremesa.precioMaximoAccesible - gameState.m3.precioS
            : null;

    gameState.m4.distanciaAccesibilidadP =
        distanciaAccesibilidadP;

    gameState.m4.distanciaAccesibilidadT =
        distanciaAccesibilidadT;

    gameState.m4.distanciaAccesibilidadS =
        distanciaAccesibilidadS;


    // ---------------------------------------------
    // 4. DIMENSIÓN SOCIAL — CONTINUIDAD
    // ---------------------------------------------

    const equiposReparadosRenovados = {
        portatil:
            gameState.m2.estrategiaP === "P"
                ? GAME_DATA.dispositivos.portatil.averiados
                : 0,

        tablet:
            gameState.m2.estrategiaT === "P"
                ? GAME_DATA.dispositivos.tablet.averiados
                : 0,

        sobremesa:
            gameState.m2.estrategiaS === "P"
                ? GAME_DATA.dispositivos.sobremesa.averiados
                : 0
    };

    gameState.m4.equiposReparadosRenovados =
        equiposReparadosRenovados;


    const componentesRecuperados =
        gameState.m2.estrategiaP === "C" ||
        gameState.m2.estrategiaT === "C" ||
        gameState.m2.estrategiaS === "C";

    gameState.m4.componentesRecuperados =
        componentesRecuperados;
    

    

    // ---------------------------------------------
    // 5. OPORTUNIDADES DE MEJORA
    // ---------------------------------------------

    const oportunidadesMejora = [];

    if (gameState.m2.margenMejoraCircular) {
        oportunidadesMejora.push(
            "Existe margen para conservar más valor de los equipos averiados respetando las 20 horas disponibles."
        );
    }

    // ---------------------------------------------
    // 5.1. PREGUNTAS DE REFLEXIÓN
    // ---------------------------------------------

    const preguntasReflexion = {

        economica:
            "¿Qué consecuencias tendría intentar aumentar el margen económico de vuestra empresa?",

        ambiental:
            "¿Podríais conservar más valor de los equipos averiados sin superar las 20 horas disponibles?",

        social:
            "¿Cómo podrían vuestras decisiones mejorar la accesibilidad o la continuidad del servicio?",

        tripleBalance:
            "¿Podríais mejorar una dimensión sin perjudicar las otras dos?"
    };


    // ---------------------------------------------
    // 6. GENERAR PERFIL DE TRIPLE BALANCE
    // ---------------------------------------------

    gameState.m4.perfilGenerado = true;

    return {
        valido: true,

        economico: {
            ingresosTotales: gameState.m3.ingresosTotales,
            costesTotales: gameState.m3.costesTotales,
            beneficio: gameState.m3.resultado,
            margenGlobal: gameState.m3.margenGlobal,
            margenMinimoRequerido: GAME_DATA.m3.margenGlobalMinimo,
            distanciaMargen
        },

        ambiental: {
            co2Evitado: gameState.m1.co2Evitado,
            intensidadAmbiental: gameState.m1.intensidadAmbiental,

            puntosConservacion: gameState.m2.puntosConservacion,
            ICV: gameState.m2.ICV,
            horasUtilizadas: gameState.m2.horasUtilizadas,
            margenMejoraCircular: gameState.m2.margenMejoraCircular
        },

        social: {

            portatil: gameState.m1.cantidadP > 0
                ? {
                    precio: gameState.m3.precioP,
                    limiteAccesibilidad:
                        GAME_DATA.dispositivos.portatil.precioMaximoAccesible,
                    distanciaLimite: distanciaAccesibilidadP
                }
                : null,

            tablet: gameState.m1.cantidadT > 0
                ? {
                    precio: gameState.m3.precioT,
                    limiteAccesibilidad:
                        GAME_DATA.dispositivos.tablet.precioMaximoAccesible,
                    distanciaLimite: distanciaAccesibilidadT
                }
                : null,

            sobremesa: gameState.m1.cantidadS > 0
                ? {
                    precio: gameState.m3.precioS,
                    limiteAccesibilidad:
                        GAME_DATA.dispositivos.sobremesa.precioMaximoAccesible,
                    distanciaLimite: distanciaAccesibilidadS
                }
                : null,

            equiposReparadosRenovados,
            componentesRecuperados,

            reparacionDisponible: gameState.m2.reparacionDisponible,
            numeroReparaciones: gameState.m3.numeroReparaciones
        },

        oportunidadesMejora,
        preguntasReflexion
    };
    
}







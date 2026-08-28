// ======================================================
// ESTADO DE LA PARTIDA
// Guarda las decisiones tomadas por el grupo
// ======================================================

const gameState = {

    // --------------------------------------------------
    // MÓDULO 1 — PROPUESTA DE VALOR
    // --------------------------------------------------

    m1: {
        cantidadP: 0,
        cantidadT: 0,
        cantidadS: 0,

        costePreparacion: 0,
        co2Evitado: 0,
        intensidadAmbiental: 0,

        codigoM1: null,

        completado: false
    },


    // --------------------------------------------------
    // MÓDULO 2 — MODELO CIRCULAR
    // --------------------------------------------------

    m2: {
        estrategiaP: null,
        estrategiaT: null,
        estrategiaS: null,

        horasUtilizadas: 0,

        codigoM2: null,

        reparacionDisponible: false,
        puntosConservacion: 0,
        ICV: 0,
        margenMejoraCircular: false,

        completado: false
    },


    // --------------------------------------------------
    // MÓDULO 3 — VIABILIDAD ECONÓMICO-SOCIAL
    // --------------------------------------------------

    m3: {
        precioP: 0,
        precioT: 0,
        precioS: 0,

        numeroReparaciones: 0,
        precioReparacion: 0,
        costeServicio: 0,

        ingresosProductos: 0,
        ingresosReparacion: 0,
        ingresosTotales: 0,

        costesProductos: 0,
        costesTotales: 0,

        resultado: 0,
        margenGlobal: 0,

        codigoM3: null,

        completado: false
    },


    // --------------------------------------------------
    // MÓDULO 4 — AUDITORÍA DEL TRIPLE BALANCE
    // --------------------------------------------------

    m4: {

        // Dimensión económica
        distanciaMargen: null,

        // Dimensión social: accesibilidad
        distanciaAccesibilidadP: null,
        distanciaAccesibilidadT: null,
        distanciaAccesibilidadS: null,

        // Dimensión social: continuidad
        equiposReparadosRenovados: {
            portatil: 0,
            tablet: 0,
            sobremesa: 0
        },

        componentesRecuperados: false,

        // Estado técnico
        perfilGenerado: false
    }
};
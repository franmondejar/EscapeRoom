// ======================================================
// DATOS FIJOS DE LA ACTIVIDAD VR
// Fuente: Tabla Maestra de Lógica + fichas validadas
// ======================================================

const GAME_DATA = {

    // --------------------------------------------------
    // DISPOSITIVOS
    // --------------------------------------------------

    dispositivos: {

        portatil: {
            codigo: "P",
            nombre: "Portátil",

            disponibles: 20,
            funcionales: 16,
            averiados: 4,

            necesidad: 12,

            costePreparacion: 30,
            costeLogistica: 15,
            costeCobertura: 50,
            costeTotalM3: 95,

            precioMaximoAccesible: 145,

            co2Nuevo: 200,
            co2Reacondicionado: 11,
            co2Evitado: 189
        },

        tablet: {
            codigo: "T",
            nombre: "Tablet",

            disponibles: 25,
            funcionales: 22,
            averiados: 3,

            necesidad: 15,

            costePreparacion: 20,
            costeLogistica: 10,
            costeCobertura: 40,
            costeTotalM3: 70,

            precioMaximoAccesible: 80,

            co2Nuevo: 100,
            co2Reacondicionado: 4,
            co2Evitado: 96
        },

        sobremesa: {
            codigo: "S",
            nombre: "Ordenador de sobremesa",

            disponibles: 15,
            funcionales: 11,
            averiados: 4,

            necesidad: 8,

            costePreparacion: 40,
            costeLogistica: 20,
            costeCobertura: 50,
            costeTotalM3: 110,

            precioMaximoAccesible: 155,

            co2Nuevo: 350,
            co2Reacondicionado: 45,
            co2Evitado: 305
        }
    },


    // --------------------------------------------------
    // MÓDULO 1 — PROPUESTA DE VALOR
    // --------------------------------------------------

    m1: {
        capacidadMaxima: 30,
        presupuestoMaximo: 750,
        necesidadesASeleccionar: 2,

        co2ReferenciaMaxima: 4708
    },


    // --------------------------------------------------
    // MÓDULO 2 — MODELO CIRCULAR
    // --------------------------------------------------

    m2: {
        capacidadHoras: 20,

        horas: {

            portatil: {
                reparar: 12,
                componentes: 4,
                materiales: 1
            },

            tablet: {
                reparar: 12,
                componentes: 3,
                materiales: 1
            },

            sobremesa: {
                reparar: 8,
                componentes: 4,
                materiales: 1
            }
        },

        estrategias: {
            P: "Reparar/renovar",
            C: "Recuperar componentes",
            M: "Recuperar materiales"
        },

        valorConservacion: {
            P: 3,
            C: 2,
            M: 1
        },

        icv: {
            minimoFactible: 3,
            maximoFactible: 7
        }
    },


    // --------------------------------------------------
    // MÓDULO 3 — VIABILIDAD ECONÓMICO-SOCIAL
    // --------------------------------------------------

    m3: {
        margenGlobalMinimo: 20,
        precioMaximoReparacion: 35,

        servicioReparacion: {

            basico: {
                maxReparaciones: 4,
                coste: 80
            },

            ampliado: {
                maxReparaciones: 8,
                coste: 150
            }
        }
    }
};
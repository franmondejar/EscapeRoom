// =====================================================
// FUENTE GLOBAL A-FRAME — MISIÓN CLIMÁTICA
// =====================================================

AFRAME.registerComponent("fuente-global", {

    init: function () {

        const escena = this.el;

        escena.addEventListener("loaded", () => {

            const FUENTE_MSDF =
                "assets/fonts/Roboto-Regular-msdf.json";

            const FUENTE_IMAGEN =
                "assets/fonts/Roboto-Regular.png";

            const textos =
                escena.querySelectorAll("a-text");

            textos.forEach((texto) => {

                texto.setAttribute("text", {
                    font: FUENTE_MSDF,
                    fontImage: FUENTE_IMAGEN,
                    negate: false
                });

            });

            console.log(
                "Roboto aplicada a",
                textos.length,
                "textos A-Frame"
            );

        }, { once: true });

    }

});

// FIN FUENTE GLOBAL A-FRAME
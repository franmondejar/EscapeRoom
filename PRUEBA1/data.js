var APP_DATA = {
  "scenes": [
    {
      "id": "0-prueba-panormica",
      "name": "prueba panorámica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": -2.9336477902076226,
        "pitch": 0.10652001166559444,
        "fov": 1.4169136669925544
      },
      "linkHotspots": [
        {
          "yaw": -4.674281764052374,
          "pitch": 0.21538244102426418,
          "rotation": 0,
          "target": "1-sala-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.154248443994259,
          "pitch": -0.09160227458450265,
          "title": "Luz",
          "text": "La luz ilumina tu camino."
        },
        {
          "yaw": 1.9581308376786861,
          "pitch": -0.04607406875419784,
          "title": "Panel de código.",
          "text": "Introduce el código obtenido para desbloquear la siguiente sala."
        },
        {
          "yaw": -2.674281764052374,
          "pitch": 0.21538244102426418,
          "title": "Tele",
          "text": "Mira el vídeo."
        },
        {
          "yaw": -1.945787,
          "pitch": -0.342478,
          "title": "CORCHO_TEST",
          "text": "PRUEBA"
        }
      ]
    },
    {
      "id": "1-sala-2",
      "name": "Sala 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menú",
        tooltip: "Menú"
    },
    maps: {
        title: "Mapas",
        button: "Mapas",
        tooltip: "Lista de mapas"
    },
    markers: {
        title: "Marcadores",
        button: "Marcadores",
        tooltip: "Lista de marcadores",
        marker: "marcador | marcadores",
        markerSet: "Conjunto de Marcadores | Conjuntos de Marcadores",
        searchPlaceholder: "Buscar...",
        followPlayerTitle: "Seguir Jugador"
    },
    settings: {
        title: "Ajustes",
        button: "Ajustes"
    },
    goFullscreen: {
        button: "Pantalla Completa"
    },
    resetCamera: {
        button: "Restablecer Cámara",
        tooltip: "Restablecer Cámara y Posición"
    },
    updateMap: {
        button: "Actualizar Mapa",
        tooltip: "Limpiar Cache"
    },
    lighting: {
        title: "Iluminación",
        dayNightSwitch: {
            tooltip: "Día/Noche"
        },
        sunlight: "Luz de Día",
        ambientLight: "Luz Ambiental"
    },
    resolution: {
        title: "Resolución",
        high: "Alta (SSAA, x2)",
        normal: "Normal (Nativa, x1)",
        low: "Baja (Ampliada, x0.5)"
    },
    freeFlightControls: {
        title: "Controles de Vuelo Libre",
        mouseSensitivity: "Sensibilidad de Ratón",
        invertMouseY: "Invertir Eje Y del Ratón"
    },
    renderDistance: {
        title: "Distancia de Renderizado",
        hiresLayer: "Capa de Alta Resolución",
        lowersLayer: "Capa de Baja Resolución"
    },
    theme: {
        title: "Tema",
        default: "Predeterminado (Sistema/Navegador)",
        dark: "Oscuro",
        light: "Claro"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Restaurar todo los ajustes"
    },
    players: {
        title: "Jugadores",
        tooltip: "Lista de Jugadores"
    },
    compass: {
        tooltip: "Brújula / Norte"
    },
    controls: {
        title: "Vista / Controles",
        perspective: {
            button: "Perspectiva",
            tooltip: "Vista en perspectiva"
        },
        flatView: {
            button: "Plano",
            tooltip: "Ortogonal / Visualización Plana",
        },
        freeFlight: {
            button: "Vuelo libre",
            tooltip: "Vuelo libre / Modo espectador"
        }
    },
    language: {
        title: "Idioma",
    },
    blockTooltip: {
        block: "Bloque",
        position: "Posición",
        chunk: "Chunk",
        region: {
            region: "Región",
            file: "Archivo"
        },
        light: {
            light: "Iluminación",
            sun: "Sol",
            block: "Bloque",
        }
    },
    info: {
        title: "Información",
        button: "Información",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Control con ratón:</h2>
	<table>
		<tr><th>movimiento</th><td><kbd>clic izquierdo</kbd> + arrastrar</td></tr>
		<tr><th>zoom</th><td><kbd>rueda del ratón</kbd> (desplazar)</td></tr>
		<tr><th>rotar / inclinar</th><td><kbd>clic derecho</kbd> + arrastrar</td></tr>
	</table>
</p>
<p>
	<h2>Control con teclado:</h2>
	<table>
		<tr><th>movimiento</th><td><kbd>wasd</kbd> / <kbd>flechas de desplazamiento</kbd></td></tr>
		<tr><th>zoom</th><td>Pad numérico: <kbd>+</kbd>/<kbd>-</kbd> ó <kbd>Insertar</kbd>/<kbd>Inicio</kbd></td></tr>
		<tr><th>rotar / inclinar</th><td><kbd>Alt izquierdo</kbd> + <kbd>wasd</kbd> / <kbd>flechas de desplazamiento</kbd> ó <kbd>Supr</kbd>/<kbd>Fin</kbd>/<kbd>Re pág</kbd>/<kbd>Av Pág</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Control con panel táctil:</h2>
	<table>
		<tr><th>movimiento</th><td>pulsa + arrastrar</td></tr>
		<tr><th>zoom</th><td>pulsa con dos dedos + junta</td></tr>
		<tr><th>rotar / inclinar</th><td>pulsa con dos dedos + rotar / desliza arriba/abajo</td></tr>
	</table>
</p>
<br><hr>
<p class="info-footer">
	Este mapa ha sido generado con &#9829; usando <a href="https://bluecolo.red/bluemap">BlueMap</a> {version}
</p>
		`
    }
};

import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "Cancelar",
  "continue": "Continuar",
  "dailyRun": "Reto diario (Beta)",
  "loadGame": "Cargar partida",
  "newGame": "Nueva partida",
  "settings": "Ajustes",
  "selectGameMode": "Elige un modo de juego.",
  "logInOrCreateAccount": "Inicia sesión o crea una cuenta para empezar. ¡No se requiere correo electrónico!",
  "username": "Usuario",
  "password": "Contraseña",
  "login": "Iniciar Sesión",
  "register": "Registrarse",
  "emptyUsername": "El usuario no puede estar vacío",
  "invalidLoginUsername": "El usuario no es válido",
  "invalidRegisterUsername": "El usuario solo puede contener letras, números y guiones bajos",
  "invalidLoginPassword": "La contraseña no es válida",
  "invalidRegisterPassword": "Contraseña debe tener 6 o más caracter.",
  "usernameAlreadyUsed": "El usuario ya está en uso",
  "accountNonExistent": "El usuario no existe",
  "unmatchingPassword": "La contraseña no coincide",
  "passwordNotMatchingConfirmPassword": "Las contraseñas deben coincidir",
  "confirmPassword": "Confirmar Contra.",
  "registrationAgeWarning": "Al registrarte, confirmas tener 13 o más años de edad.",
  "backToLogin": "Volver al Login",
  "failedToLoadSaveData": "No se han podido cargar los datos guardados. Por favor, recarga la página.\nSi el fallo continúa, por favor comprueba #announcements en nuestro Discord.",
  "sessionSuccess": "Sesión cargada con éxito.",
  "failedToLoadSession": "No se han podido cargar los datos de tu sesión.\nPuede que estén corruptos.",
  "boyOrGirl": "¿Eres un chico o una chica?",
  "boy": "Chico",
  "girl": "Chica",
  "evolving": "¿Uh?\n¡{{pokemonName}} está evolucionando!",
  "stoppedEvolving": "{{pokemonName}} no ha evolucionado.",
  "pauseEvolutionsQuestion": "¿Quieres detener las evoluciones de {{pokemonName}}?\nSiempre pueden ser reactivadas desde la pantalla de tu equipo.",
  "evolutionsPaused": "Se han detenido las evoluciones para {{pokemonName}}.",
  "evolutionDone": "¡Felicidades!\n¡Tu {{pokemonName}} ha evolucionado a {{evolvedPokemonName}}!",
  "dailyRankings": "Rankings Diarios",
  "weeklyRankings": "Rankings Semanales",
  "noRankings": "Sin Rankings",
  "loading": "Cargando…",
  "playersOnline": "Jugadores en Línea",
  "empty":"Vacío",
  "yes":"Sí",
  "no":"No",
} as const;

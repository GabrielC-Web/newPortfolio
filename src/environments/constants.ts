import packageJson from '../../package.json'

// Habilidades
export const HTML5 = "assets/technologies/html-5-svgrepo-com.svg"
export const CSSIMG = "assets/technologies/css-3-svgrepo-com.svg"
export const BOOTSTRAP = "assets/technologies/bootstrap-svgrepo-com.svg"
export const TAILWIND = "assets/technologies/tailwind-svgrepo-com.svg"
export const JAVASCRIPT = "assets/technologies/javascript-svgrepo-com.svg"
export const TYPESCRIPT = "assets/technologies/typescript-svgrepo-com.svg"
export const REACT = "assets/technologies/react-svgrepo-com.svg"
export const ANGULAR = "assets/technologies/angular-svgrepo-com.svg"
export const GIT = "assets/technologies/git-svgrepo-com.svg"

//Proyectos

export const PROJECT1_DARK = "assets/iconos/version_oscura/icono-app_version_oscura.svg"
export const PROJECT2_DARK = "assets/iconos/version_oscura/icono-web_version_oscura.svg"
export const PROJECT3_DARK = "assets/iconos/version_oscura/icono-proyectos-personales_version_oscura.svg"

export const PROJECT1_LIGHT = "assets/iconos/version_clara/icono-app_version_clara.svg"
export const PROJECT2_LIGHT = "assets/iconos/version_clara/icono-web_version_clara.svg"
export const PROJECT3_LIGHT = "assets/iconos/version_clara/icono-proyectos-personales_version_clara.svg"


//Redes sociales
export const GMAIL1_DARK = "assets/iconos/version_oscura/icono-correo_version_oscura.svg"
export const GMAIL2_DARK = "assets/iconos/version_oscura/icono-correo_hover_version_oscura.svg"
export const GITHUB1_DARK = "assets/iconos/version_oscura/github-version-oscura.svg"
export const GITHUB2_DARK = "assets/iconos/version_oscura/github-hover-version-oscura.svg"

export const GMAIL1_LIGHT = "assets/iconos/version_clara/icono-correo_version_clara.svg"
export const GMAIL2_LIGHT = "assets/iconos/version_clara/icono-correo_hover_version_clara.svg"
export const GITHUB1_LIGHT = "assets/iconos/version_clara/github-version-clara.svg"
export const GITHUB2_LIGHT = "assets/iconos/version_clara/github-hover-version-clara.svg"

//Temas de color
export const THEMES = [
  {
    background: '#000000',
    components: '#101011',
    'contrast-color': '',
    name: 'Real Dark',
    class: 'dark-mode',
    classBorder: ' !border !border-solid !border-[#fff] ',
    textContrastColor: ' !text-[#fff] ',
    buttonClass: ' !border !border-solid !border-[#fff] !text-[#fff] '
  },
  {
    background: '#F2F4F4',
    components: '#E8E8E8',
    'contrast-color': '#303030',
    name: 'Light',
    class: 'light-mode',
    classBorder: ' !border !border-solid !border-[#303030] ',
    textContrastColor: ' !text-[#303030] ',
    buttonClass: ' !border !border-solid !border-[#303030] !text-[#303030] '
  },
 ]

/**
 * Versión del proyecto
 */
export const VERSION = packageJson.version

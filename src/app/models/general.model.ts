/**
 * Modelo de la data que tiene un proyecto
 */
export interface ProjectModel {
  title: string;
  id: number;
  description: string;
  imgDark: string;
  imgLight: string;
  zelda: string;
  imageClass?: string;
  techImageUrlLight: string;
  techImageUrlDark: string;
}

export interface ThemeModel {
  background: string;
  components: string;
  'contrast-color': string;
  name: string;
  class: string;
  classBorder: string;
  textContrastColor: string;
  buttonClass: string;
}

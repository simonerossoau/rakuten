import SectionModel from "./sectionModel";

export const categories: string[] = [
    'populares-en-taquilla',
    'estrenos-para-toda-la-familia',
    'estrenos-imprescindibles-en-taquilla',
    'estrenos-espanoles',
    'si-te-perdiste',
    'nuestras-preferidas-de-la-semana']

export const proxyUrl: string = 'https://polar-meadow-42409.herokuapp.com/';
export const basePath: string = "https://gizmo.rakuten.tv/v3/lists/";
export const tailPath: string = "?classification_id=3&device_identifier=web&locale=es&market_code=es";

export const SliderPath: string = "https://gizmo.rakuten.tv/v3/gardens/default?classification_id=5&device_identifier=web&locale=es&market_code=es&user_status=visitor";

export const defaultSection = new SectionModel();
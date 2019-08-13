import previewMovieModel from './previewMovieModel';

export default class contentsElement {

    public Data: previewMovieModel[];
    public Meta: any;

    constructor() {
        this.Data = [];
        this.Meta = undefined;
    }

    public apiToModel(data): contentsElement {
        var element = new contentsElement();

        element.Data = data.data;
        element.Meta = data.meta;

        return element;
    }
}
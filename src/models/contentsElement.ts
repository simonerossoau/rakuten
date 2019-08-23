import previewMovieModel from './previewMovieModel';

export default class contentsElement {

    public data: previewMovieModel[];
    public Meta: any;

    constructor() {
        this.data = [];
        this.Meta = undefined;
    }

    public apiToModel(data): contentsElement {
        var element = new contentsElement();

        element.data = data.data;
        element.Meta = data.meta;

        return element;
    }
}
export default class additionalImageModel {
    public Header: string;
    public Pattern: string;

    constructor() {
        this.Header = "";
        this.Pattern = "";
    }

    public apiToModel(data): additionalImageModel {
        var element = new additionalImageModel();

        element.Header = data.header;
        element.Pattern = data.pattern;

        return element;
    }
}
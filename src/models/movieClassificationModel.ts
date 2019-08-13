export default class movieClassificationModel {

    public Type: string;
    public Text_id: string;
    public Numerical_id: number;
    public Name: string;
    public Age: number;
    public Adult: boolean;
    public Description: string;
    public default: boolean;

    constructor() {

        this.Type = "";
        this.Text_id = "";
        this.Numerical_id = 0;
        this.Name = "";
        this.Age = 0;
        this.Adult = false;
        this.Description = "";
        this.default = false;
    }

    public apiToModel(data): movieClassificationModel{

        var classification = new movieClassificationModel();

        classification.Type = data.type;
        classification.Text_id = data.id;
        classification.Numerical_id = data.numerical_id;
        classification.Name = data.name;
        classification.Age = data.age;
        classification.Adult = data.adult;
        classification.Description = data.description;
        classification.default = data.default;

        return classification;
    }

    public modelToApi(data) {

    }
}
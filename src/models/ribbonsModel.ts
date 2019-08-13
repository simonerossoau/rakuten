export default class ribbonsModels{
    
    public Type: string;
    public Text_id: string;
    public Numerical_id: number;
    public Name: string;
    public Color: string;
    public Text_color: string;
    public Position: string;
    public Localized_name: string;
    public Image: string;

    constructor() {

        this.Type = "";
        this.Text_id = "";
        this.Numerical_id = 0;
        this.Name = "";
        this.Color = "";
        this.Text_color = "";
        this.Position = "";
        this.Localized_name = "";
        this.Image = "";
    }

    public apiToModel(data){
        
        var ribbons = new ribbonsModels();

        ribbons.Type = data.type;
        ribbons.Text_id = data.id;
        ribbons.Numerical_id = data.numerical_id;
        ribbons.Name = data.name;
        ribbons.Color = data.color;
        ribbons.Text_color = data.text_color;
        ribbons.Position = data.position;
        ribbons.Localized_name = data.localized_name;
        ribbons.Image = data.image;

        return ribbons; 
    }

    public modelToApi(data){

    }
}
import { TodoItem } from "./todoitem";

export class Model{
    name : string;
    items: TodoItem[];

    constructor(){
        this.name="Harun";
        this.items=[
            {description: "Kahvaltı" , action: true},
            {description: "Spor" , action: false},
            { description: "Dil" , action: true}
    ];
    }
}

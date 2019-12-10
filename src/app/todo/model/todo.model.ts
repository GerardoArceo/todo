export class Todo {
    public id: number;
    public completed: boolean;
    public text: string;

    constructor(text: string) {
        this.id = Math.random();
        this.completed = false;
        this.text = text;
    }

}
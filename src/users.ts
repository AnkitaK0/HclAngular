export class Users {
    id:string;
    Book_title:string;
     Book_auther:string;
    NumberOfBooks:number;

    constructor(id,Book_title,Book_auther,NumberOfBooks){
        this.id=id;
        this.Book_title=Book_title;
        this.Book_auther=Book_auther;
        this.NumberOfBooks=NumberOfBooks;
    }
}

class ResumeDetails{
    header: ResumeHeader[];
    data: ResumeData[];
    constructor(header: ResumeHeader[],data: ResumeData[]){
        this.header=header;
        this.data=data;
    }
}

class ResumeHeader{
    text:string;
    value:string;
    constructor(text:string,value:string){
        this.text=text;
        this.value=value;
    }
}

class ResumeData{
    juego1:string;
    juego2:string;
    juego3:string;
    constructor(juego1:string,juego2:string,juego3:string){
        this.juego1=juego1;
        this.juego2=juego2;
        this.juego3=juego3;
    }
}
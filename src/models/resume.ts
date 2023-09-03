class Resume {
    id: string;
    total:object;
    porcentaje:string;
    progreso:string;
    constructor(id:string, total:object,porcentaje:string,progreso:string){
        this.id=id;
        this.total=total;
        this.porcentaje=porcentaje;
        this.progreso=progreso;
    }
}

// class ResumeDetail{
//     juego1:string;
//     juego2:string;
//     juego3:string;
//     constructor(juego1:string,juego2:string,juego3:string){
//         this.juego1=juego1;
//         this.juego2=juego2;
//         this.juego3=juego3;
//     }
// }
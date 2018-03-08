interface alumno{
    noCtrl:String;
    nombre:String;
    apellidos:String;
    promedio:number;
    genero:String;
    fechaNacimiento:String;
    activo:boolean;
} 
    


export class Alumno{
    
    constructor(){}
    
    alumno=Array<alumno>();

    insertarAlumno(noCtrl:String,nombre:String,apellidos:String,promedio:number,genero:String,fechaNacimiento:String,activo:boolean):void{
        let nuevoAlumno:any;
        nuevoAlumno={
            noCtrl:noCtrl,
            nombre:nombre,
            apellidos:apellidos,
            promedio:promedio,
            genero:genero,
            fechaNacimiento:fechaNacimiento,
            activo:activo
        }
        this.alumno.push(nuevoAlumno);
        
    }
    
    
    imprimirAlumno():any{
        for(let i=0;i<this.alumno.length;i++){
            console.log(this.alumno[i]);
        }
    }

    borrarAlumno(noCtrl:String){
        for(let i=0;i<this.alumno.length;i++){
            if(this.alumno[i].noCtrl==noCtrl){
                this.alumno.splice(i,1);
            }
        }
    }

    actualizarAlumno(noCtrl:String,nombre:String,apellidos:String,promedio:number,genero:String,fechaNacimiento:String,activo:boolean):void{
        let nuevoAlumnoAct:any;
        nuevoAlumnoAct={
            noCtrl:noCtrl,
            nombre:nombre,
            apellidos:apellidos,
            promedio:promedio,
            genero:genero,
            fechaNacimiento:fechaNacimiento,
            activo:activo
        }
        for(let i=0;i<this.alumno.length;i++){
            if(this.alumno[i].noCtrl==noCtrl){
                this.alumno[i]=nuevoAlumnoAct;
            }
        }
    }

}
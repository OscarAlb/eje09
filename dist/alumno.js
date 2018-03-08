"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.alumno = Array();
    }
    Alumno.prototype.insertarAlumno = function (noCtrl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
        var nuevoAlumno;
        nuevoAlumno = {
            noCtrl: noCtrl,
            nombre: nombre,
            apellidos: apellidos,
            promedio: promedio,
            genero: genero,
            fechaNacimiento: fechaNacimiento,
            activo: activo
        };
        this.alumno.push(nuevoAlumno);
    };
    Alumno.prototype.imprimirAlumno = function () {
        for (var i = 0; i < this.alumno.length; i++) {
            console.log(this.alumno[i]);
        }
    };
    Alumno.prototype.borrarAlumno = function (noCtrl) {
        for (var i = 0; i < this.alumno.length; i++) {
            if (this.alumno[i].noCtrl == noCtrl) {
                this.alumno.splice(i, 1);
            }
        }
    };
    Alumno.prototype.actualizarAlumno = function (noCtrl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
        var nuevoAlumnoAct;
        nuevoAlumnoAct = {
            noCtrl: noCtrl,
            nombre: nombre,
            apellidos: apellidos,
            promedio: promedio,
            genero: genero,
            fechaNacimiento: fechaNacimiento,
            activo: activo
        };
        for (var i = 0; i < this.alumno.length; i++) {
            if (this.alumno[i].noCtrl == noCtrl) {
                this.alumno[i] = nuevoAlumnoAct;
            }
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;

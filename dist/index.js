"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_1 = require("./alumno");
var al = new alumno_1.Alumno();
al.insertarAlumno("14400925", "Oscar Alberto", "Cordero Villa", 87, "Masculino", "10-10-1994", true);
al.insertarAlumno("14400916", "Francisco Emnuel", "Cardenas Ramos", 89, "Masculino", "10-10-1994", true);
al.insertarAlumno("14400983", "Dylan Salvador", "Parra Dominguez", 90, "Masculino", "10-10-1994", true);
al.imprimirAlumno();
al.actualizarAlumno("14400983", "Salvador Dylan", "Dominguez Parra", 89, "Masculino", "10-10-1994", false);
al.imprimirAlumno();
al.borrarAlumno("14400916");
al.imprimirAlumno();

import mongoose from 'mongoose';

const EmployedScheme = new mongoose.Schema({
    nombre: {
        type: String
    },
    numSeguro: {
        type: Number
    },
    curp: {
        type: String
    },
    sueldo: {
        type: String
    },
    tipoSueldo: {
        type: String
    },
    departamento: {
        type: String
    },
    diasVacaciones: {
        type: Number
    }
}, {
    timestamps: true, //esto hace que mongo guarde la fecha de registro/actualizacion
    versionKey: false
});

export default mongoose.model('empleados', EmployedScheme);
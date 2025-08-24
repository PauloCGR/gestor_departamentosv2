import mongoose from 'mongoose';

const DepartamentScheme = new mongoose.Schema({
    nombre: {
        type: String
    },
    domicilio: {
        type: String
    },
    numeroContacto: {
        type: String
    },
    correo: {
        type: String
    },
    datoExtra: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('departamentos', DepartamentScheme);
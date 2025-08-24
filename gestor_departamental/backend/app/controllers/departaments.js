import { httpError } from '../helpers/handleError.js';
import departamentModel from '../models/departament.js'; // Corregida la ruta

const getItems = async (req, res) => {
    try {
        const listAll = await departamentModel.find({});
        res.send({ data: listAll });
    } catch (e) {
        httpError(res, e);
    }
};

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await departamentModel.findById(id);
        if (!item) {
            return res.status(404).send({ error: 'Departamento no encontrado' });
        }
        res.send({ data: item });
    } catch (e) {
        httpError(res, e);
    }
};

const createItem = async (req, res) => {
    try {
        const { nombre, domicilio, numeroContacto, correo, datoExtra } = req.body;
        const resDetail = await departamentModel.create({
            nombre, domicilio, numeroContacto, correo, datoExtra
        });
        res.status(201).send({ data: resDetail });
    } catch (e) {
        httpError(res, e);
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, domicilio, numeroContacto, correo, datoExtra } = req.body;
        const updatedItem = await departamentModel.findByIdAndUpdate(
            id,
            { nombre, domicilio, numeroContacto, correo, datoExtra },
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).send({ error: 'Departamento no encontrado' });
        }
        res.send({ data: updatedItem });
    } catch (e) {
        httpError(res, e);
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await departamentModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send({ error: 'Departamento no encontrado' });
        }
        res.send({ data: deletedItem, message: 'Departamento eliminado correctamente' });
    } catch (e) {
        httpError(res, e);
    }
};

export default { getItem, getItems, deleteItem, createItem, updateItem };
import { httpError } from '../helpers/handleError.js';
import employedModel from '../models/employed.js'; // Corregida la ruta

const getItems = async (req, res) => {
    try {
        const listAll = await employedModel.find({});
        res.send({ data: listAll });
    } catch (e) {
        httpError(res, e);
    }
};

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await employedModel.findById(id);
        if (!item) {
            return res.status(404).send({ error: 'Empleado no encontrado' });
        }
        res.send({ data: item });
    } catch (e) {
        httpError(res, e);
    }
};

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const resDetail = await employedModel.create({
            name, age, email
        });
        res.status(201).send({ data: resDetail });
    } catch (e) {
        httpError(res, e);
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;
        const updatedItem = await employedModel.findByIdAndUpdate(
            id,
            { name, age, email },
            { new: true } // Devuelve el documento actualizado
        );
        if (!updatedItem) {
            return res.status(404).send({ error: 'Empleado no encontrado' });
        }
        res.send({ data: updatedItem });
    } catch (e) {
        httpError(res, e);
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await employedModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send({ error: 'Empleado no encontrado' });
        }
        res.send({ data: deletedItem, message: 'Empleado eliminado correctamente' });
    } catch (e) {
        httpError(res, e);
    }
};

export default { getItem, getItems, deleteItem, createItem, updateItem };
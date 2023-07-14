import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    NombreAccion: {
        type: String,
        require: true,
        trim: true
    },
    MetodoPago: {
        type: String,
        require: true,
        trim: true
    },
    Precio: {
        type: Number,
        require: true,
        trim: true
    },
    Cantidad: {
        type: Number,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const acciones = mongoose.model("acciones", accionesSchema);

export default acciones;
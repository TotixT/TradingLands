import mongoose from "mongoose";

const tradersSchema = mongoose.Schema({
    Nombre: {
        type: String,
        require: true,
        trim: true
    },
    Edad: {
        type: Number,
        require: true,
        trim: true
    },
    Nacionalidad: {
        type: String,
        require: true,
        trim: true
    },
    Presupuesto: {
        type: Number,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const traders = mongoose.model("traders", tradersSchema);

export default traders;
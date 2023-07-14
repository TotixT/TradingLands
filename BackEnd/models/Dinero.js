import mongoose from "mongoose";

const dinerosSchema = mongoose.Schema({
    TipoDinero: {
        type: String,
        require: true,
        trim: true
    },
    MetodoPago: {
        type: String,
        require: true,
        trim: true
    },
    Monto: {
        type: Number,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const dineros = mongoose.model("dineros", dinerosSchema);

export default dineros;
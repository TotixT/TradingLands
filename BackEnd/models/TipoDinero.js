import mongoose from "mongoose";

const tipoDinerosSchema = mongoose.Schema({
    Tipo: {
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const tipoDineros = mongoose.model("tiposdineros", tipoDinerosSchema);

export default tipoDineros;
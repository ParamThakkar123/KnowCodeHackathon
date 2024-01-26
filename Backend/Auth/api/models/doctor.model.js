import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    Location:{
        type:String,
    },
    ContactNo:{
        type:String,
        unique:true,
    },
    Speciality:{
        type:String,
    },
    profilePicture:{
        type: String,
        default: "",
    }
}, {timestamps: true})

const Doctor = mongoose.model('Doctor', docSchema)
export default Doctor;
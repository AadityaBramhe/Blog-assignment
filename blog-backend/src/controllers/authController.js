import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const register = async (req,res) =>{
    try {
        const user = await User.create(req.body);
        res.status(201).json({message:"User registered", user});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const login = async (req,res) =>{
    const {email,password } = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"Invalid credentials"})
    }

    const isMatch =  await user.comparePassword(password);
    if(!isMatch){
        return res.status(400).jso
        
        n({error:"Invalid credentials"})
    }

    const token = jwt.sign({id:user._id, role:user.role},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
    res.json({token});
}
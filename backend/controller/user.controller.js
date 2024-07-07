import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signUp= async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPass = await bcrypt.hash(password,10);
        const createdUser = new User(
            {
                username,
                email,
                password:hashedPass
            }
        );
        await createdUser.save();
        res.status(201).json({message:"User created Successfully",user:{
            _id:createdUser._id,
            username:createdUser.username,
            email:createdUser.email,
        }});
    } catch (error) {
        console.log("Error: ",error.message);
        res.status(500).json({message:"Internal Server error"});
    }

    
}

export const login  = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username and or password"})
        }
        else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                username:user.username,
                email:user.email,
            }})
        }
    } catch (error) {
        console.log("Error: ",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}
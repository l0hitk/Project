import { Request, Response } from "express";
import User from "../models/user";
import { error } from "console";


const getCurrentUser = async(req:Request, res:Response) =>{
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
    
        if (existingUser) {
          return res.status(200).send();
        }
    
        const newUser = new User(req.body);
        await newUser.save();
    
        res.status(201).json(newUser.toObject());
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating user" });
      }
};

const updateCurrentUser = async(req: Request, res: Response) => {
  try{
    const{ name, institute, branch,city} = req.body;
    const user = await User.findById(req.userId);

    if(!user){
      return res.status(404).json({message:"User not found."});
    }
    user.name=name;
    user.institute=institute;
    user.city=city;
    user.branch=branch;

    await user.save();

    res.send(user)
  }catch{
    console.log(error);
    res.status(500).json({message:"Failed to update user."});
  }

};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};

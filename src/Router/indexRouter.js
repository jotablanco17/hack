import { Router } from "express";
import mongoManager from "../mongo/mongoManager.js";

const indexRouter = Router()
export default indexRouter




indexRouter.get("/users", async(req, res, next)=>{
    try {
        const all = await mongoManager.read()
        if (all) {
            return res.json({
                statusCode : 200,
                message : all
            })
        }else{
                const error = new Error ('error no se encontraron')
                error.status = 404
                throw error
            }
    } catch (error) {
        return next(error)
    }
})
indexRouter.post('/created', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Email and password are required.');
        }
        const newUser = await mongoManager.create({ email, password });
        return res.json({
            statusCode: 201,
            message: "User created successfully",
            userId: newUser._id
        });
    } catch (error) {
        return next(error);
    }
});


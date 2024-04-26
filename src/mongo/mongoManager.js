import User from "./models/user.js"

class Manager {
    constructor(){
    }
    async create(data){
        try {
            const one = await User.create(data)
            return one
        } catch (error) {
            throw error
        }
    }
    async read(){
        try {
            const all = await User.find()
            return all
        } catch (error) {
            throw error
        }
    }
}
const mongoManager = new Manager()
export default mongoManager
import axios from "../../utils/axios.config"


export const fetchUsers = async () =>{
    const data = await axios.get("/users")
    return data.data
};

export const postUser = async (userData) => {
    await axios.post("/user", userData )
};

export const deleteUser = async (id) => {
    await axios.delete(`/user/${id}` )
}
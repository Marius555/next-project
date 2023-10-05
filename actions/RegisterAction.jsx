"use server"
import RegisterSchema from "@/Schemas/RegisterSchema"
import PocketBase from 'pocketbase';
import { redirect } from "next/navigation";


const handle = async (data) => {
    const result = await RegisterSchema.isValid(await data)
    const pb = new PocketBase('http://127.0.0.1:8090');
    const filtered = {
        "username": data.Username,
        "email": data.Email,
        "emailVisibility": true,
        "password": data.Password,
        "passwordConfirm": data.ConfirmPassword,
    }
    try {
        const record = await pb.collection('UserTable').create(filtered);
        if (result === true) {
            // await pb.collection('UserTable').requestVerification(data.Email);
            return {"Success": "User Have Been Created And Email Was Sent"}
        }
        else {
            return {"Failed": "Failed To Send Verification Email"}
        }
    }
    catch (error) {
        return {"Failed": JSON.stringify(error)}
    }
}



export async function RegisterAction(data) {
    const sub = await handle(data)
    if(sub.Success){
        redirect("/")
    }
    else{
        const raw = JSON.parse(sub.Failed)
        const resp = await raw.response.data
        const filter = await Object.values(resp)[0].message
        return {"Faild": filter}
    }

}
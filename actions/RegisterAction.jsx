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
            await pb.collection('UserTable').requestVerification(data.Email);
            return {"success": record}
        }
        else {
            return "failed To Send Verification Email"
        }
    }
    catch (error) {
        return {"failed": error}
    }
}



export async function RegisterAction(data) {
    const sub = await handle(data)
    if(sub.success){
        redirect("/")
    }
    else{
        const resp = await sub.failed.response.data
        const filter = await Object.values(resp)[0].message
        return filter
    }

}
"use server"
import LoginSchema from "@/Schemas/LoginSchema";
import PocketBase from 'pocketbase';
import { redirect } from 'next/navigation'

const analyze = async (data) => {
    const result = await LoginSchema.isValid(await data)
    const pb = new PocketBase('http://127.0.0.1:8090');
    if (result === true) {
        try {
            const authData = await pb.collection('UserTable').authWithPassword(await data.Email, await data.Password);
            if (authData) {
                return { "success": "redirecting" }
            }
        }
        catch (error) {
            return { "failed": error };
        }
    }
}

export async function LoginAction(data) {
    const result = await analyze(data)
    if (result.success) {
        return redirect("/")
    }
    else {
        const resp = await result.failed.response.message
        return resp
    }

}
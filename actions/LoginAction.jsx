"use server"
import LoginSchema from "@/Schemas/LoginSchema";
import { cookies } from 'next/headers'
import { headers } from "next/headers";
import pb from "@/components/Auth";


const analyze = async (data) => {
    const result = await LoginSchema.isValid(await data)
    if (result === true) {
        try {
            const dota_resp = await pb.collection('UserTable').authWithPassword(await data.Email, await data.Password);

            if (dota_resp && await pb.collection('UserTable').authRefresh()) {
                cookies().set(pb.authStore.exportToCookie({ httpOnly: false }), { secure: false })
                return {"success": JSON.stringify(pb.authStore)}
            }
            else{
                return{"failed": "something went wrong with with validation"}
            }
        }
        catch (error) {
            return { "failed": error };
        }
    }
}

export async function LoginAction(data) {
    const result = await analyze(data)
    if (result) {
        return result
    }

}
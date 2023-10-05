"use server"
import LoginSchema from "@/Schemas/LoginSchema";
import { cookies } from 'next/headers'
import PocketBase from 'pocketbase';
 

const analyze = async (data) => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const result = await LoginSchema.isValid(await data)
    if (result === true) {
        try {
            const dota_resp = await pb.collection('UserTable').authWithPassword(await data.Email, await data.Password);

            if (dota_resp && await pb.collection('UserTable').authRefresh()) {
                cookies().set({
                    name: 'pb_auth',
                    value: JSON.stringify({ token: pb.authStore.token }),
                    httpOnly: true,
                    sameSite: false,
                    secure: false,
                    path: '/',
                })
                
                return {"success": JSON.stringify(pb.authStore)}
            }
            else{
                return{"failed": "something went wrong with with validation"}
            }
        }
        catch (error) {
            return { "failed": JSON.stringify(error) };
        }
    }
}

export async function LoginAction(data) {
    const result = await analyze(data)
    if (result) {
        return result
    }

}
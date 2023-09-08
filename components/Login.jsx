"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import LoginSchema from '@/Schemas/LoginSchema'
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginAction } from '@/actions/LoginAction'
import { useRouter } from 'next/navigation'


export default function Login() {

    const router = useRouter()

    const defaultValues = { Email: "", Password: "" }
    const { register, handleSubmit, formState: { errors }, } = useForm({ defaultValues, resolver: yupResolver(LoginSchema) })
    const [ispending, setIsPending] = useState(false);
    const [error_response, seterror_response] = useState();


    const submit = async (data) => {
        setIsPending(true)
        const dependency = await LoginAction(data)
        seterror_response(await dependency)
        setIsPending(false)

    }
    return (

        <Box sx={{ marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography variant='h6'>Log In</Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(submit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField error={Boolean(errors.Email)}
                            name='Email' type='email' required fullWidth label="Email" size='small' autoComplete='Email'
                            {...register("Email")}
                            helperText={errors.Email?.message}>

                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={Boolean(errors.Password)}
                            name='Password' type='password' required fullWidth label="Password" size='small' autoComplete='current-password'
                            {...register("Password")}
                            helperText={errors.Password?.message}>

                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: "12px", color: "red", fontWeight: "bold", paddingLelf: "10ox" }}>{error_response}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit' disabled={ispending} fullWidth variant='contained' sx={{ marginTop: "10px" }}>Log In</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import RegisterSchema from '@/Schemas/RegisterSchema'
import { RegisterAction } from '@/actions/RegisterAction'

export default function Register() {
    const defaultValues ={Username:"", Email: "", Password: "", ConfirmPassword: ""}

    const {register,handleSubmit,formState: { errors },} = useForm({defaultValues, resolver: yupResolver(RegisterSchema)})
    const [ispending, setIsPending] = useState(false);
    const [error_response, seterror_response] = useState();
  
    const Submit = async (data) => {
        setIsPending(true)
        const resp = await RegisterAction(data)
        seterror_response(await resp)
        setIsPending(false)
    }
    return (
        <Box sx={{  marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant='h6'>Sign In</Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(Submit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField error={Boolean(errors.Username)}
                         name='Username' required fullWidth label="Username" autoComplete='Your Name' size='small'
                        {...register("Username", { required: "Username Is Required" })}
                        helperText={errors.Username?.message}>
                        </TextField>
                    </Grid>
        
                    <Grid item xs={12}>
                        <TextField error={Boolean(errors.Email)}
                        name='Email' type='email' required fullWidth label="Email" size='small' autoComplete='Email'
                        {...register("Email")}
                        helperText={errors.Email?.message}>

                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField error={Boolean(errors.Password)}
                        name='Password' type='password' required fullWidth label="Password" size='small' autoComplete='new-password'
                        {...register("Password")}
                        helperText={errors.Password?.message}>

                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField type='password' error={Boolean(errors.ConfirmPassword)}
                        name='ConfirmPassword' required fullWidth label="Confirm Password" size='small' autoComplete='new-password'
                        {...register("ConfirmPassword")}
                        helperText={errors.ConfirmPassword?.message}>

                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{fontSize: "12px", color: "red", fontWeight: "bold"}}>{error_response}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button disabled={ispending} type='submit' fullWidth variant='contained' sx={{ marginTop: "10px" }}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

"use client"
import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StepOne = ({ trigger, register, errors, control, setActiveStep }) => {
    const submit = async () => {
        const validate = await trigger(["Name", "LastName", "PhoneNumber", "Age"])
        { validate === true && setActiveStep(cur => cur + 1) }
    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField error={Boolean(errors.Name)}
                        name='Name' required fullWidth label="Name" autoComplete='Your Name' size='small'
                        {...register("Name", { required: "Name Is Required" })}
                        helperText={errors.Name?.message}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField error={Boolean(errors.LastName)}
                        name='LastName' required fullWidth label="LastName" autoComplete='Your LastName' size='small'
                        {...register("LastName", { required: "Last Name Is Required" })}
                        helperText={errors.LastName?.message}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField error={Boolean(errors.PhoneNumber)}
                        name='PhoneNumber' required fullWidth label="Phone Number" autoComplete='Your PhoneNumber' size='small'
                        {...register("PhoneNumber", { required: "PhoneNumber Is Required" })}
                        helperText={errors.PhoneNumber?.message}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField error={Boolean(errors.Age)}
                        name='Age' required fullWidth label="Age" autoComplete='Your Age' size='small'
                        {...register("Age", { required: "Age Is Required" })}
                        helperText={errors.Age?.message}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file" {...register("Picture")}/>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button type='button' fullWidth variant='contained' sx={{ marginTop: "10px" }} onClick={submit}>Next</Button>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default StepOne

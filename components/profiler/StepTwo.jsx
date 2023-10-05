"use client"
import React from 'react'
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import { Grid, Button } from '@mui/material'
import { useState } from 'react';
import TwoSubOne from './TwoSubOne';
import TwoSubTwo from './TwoSubTwo';


const StepTwo = ({ trigger, register, errors, control, setActiveStep, Controller, handleSubmit }) => {
    const [Selling, setSelling] = useState(false);
    const [Buying, setBuying] = useState(false);
    const [BuyAndSell, setBuyAndSell] = useState(false);
    
    const submit = async (data) => {
        const validate = await trigger("Reason")
        // { validate === true && setActiveStep(cur => cur + 1) }

    }
    const handleClick = (e, data) => {
        // access to e.target here
        if (e.target.id === "Selling Services") {
            setSelling(true)
            setBuying(false)
            setBuyAndSell(false)
        }
        if (e.target.id === "Buying Services") {
            setBuying(true)
            setSelling(false)
            setBuyAndSell(false)
        }
        if (e.target.id === "Buying And Selling") {
            setBuyAndSell(true)
            setBuying(false)
            setSelling(false)
        }
    }
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <CssVarsProvider>
                    <Grid item xs={12} sm={12}>
                        <Controller
                            control={control}
                            name="Reason"
                            

                            render={({ field }) => (
                                <>
                                    <FormLabel sx={{ margin: "10px 5px" }}>What Brings You To Us?</FormLabel>
                                    <RadioGroup
                                        {...field}
                                        overlay
                                        onClick={handleClick}
                                        sx={{
                                            flexDirection: 'row',

                                            gap: 2,
                                            [`& .${radioClasses.checked}`]: {
                                                [`& .${radioClasses.action}`]: {
                                                    inset: -1,
                                                    border: '3px solid',
                                                    borderColor: 'primary.500',
                                                },
                                            },
                                            [`& .${radioClasses.radio}`]: {
                                                display: 'contents',
                                                '& > svg': {
                                                    zIndex: 2,
                                                    position: 'absolute',
                                                    top: '-8px',
                                                    right: '-8px',
                                                    bgcolor: 'background.surface',
                                                    borderRadius: '50%',
                                                },
                                            },
                                        }}
                                    >
                                        {['Selling Services', 'Buying Services', 'Buying And Selling'].map((value) => (
                                            <Sheet
                                                key={value}
                                                variant="outlined"

                                                sx={{
                                                    borderRadius: 'md',
                                                    boxShadow: 'sm',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: "center",
                                                    gap: 1.5,
                                                    p: 2,
                                                    minWidth: 120,
                                                    width: "100%"
                                                }}
                                            >
                                                <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
                                                <Avatar variant="soft" size="sm" />
                                                <FormLabel htmlFor={value}>{value}</FormLabel>
                                            </Sheet>
                                        ))}
                                    </RadioGroup>
                                    {Selling === true && <TwoSubOne trigger={trigger} register={register} errors={errors} control={control}
                                        setActiveStep={setActiveStep} Controller={Controller} handleSubmit={handleSubmit} />}
                                    {Buying === true && <TwoSubTwo trigger={trigger} register={register} errors={errors} control={control}
                                        setActiveStep={setActiveStep} Controller={Controller} handleSubmit={handleSubmit} />}
                                    {BuyAndSell === true && <TwoSubTwo trigger={trigger} register={register} errors={errors} control={control}
                                        setActiveStep={setActiveStep} Controller={Controller} handleSubmit={handleSubmit} />}    
                                </>
                            )}
                        />
                    </Grid>
                </CssVarsProvider>
                <Grid item xs={12} sm={12}>
                    <Button type='button' fullWidth variant='contained' sx={{ marginTop: "10px" }} onClick={submit}>Submit</Button>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default StepTwo

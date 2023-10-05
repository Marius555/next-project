"use client"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import { Grid, Button } from '@mui/material'

const TwoSubOne = ({ trigger, register, errors, control, setActiveStep, Controller, handleSubmit }) => {
    return (
        <React.Fragment>
            <FormLabel sx={{ margin: "10px 5px" }}>Who Are You?</FormLabel>
            <Grid>
                <CssVarsProvider>
                    <Controller
                        control={control}
                        name="SellerType"
                        render={({ field }) => (
                            <RadioGroup
                                overlay
                                {...field}
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
                                <Grid container spacing={2} columns={3}>
                                    {['Freelancer', 'Employee', 'Business CEO'].map((value) => (
                                        <Grid item lg={1} xs={1} md={1} sm={1} xl={1} key={value}>
                                            <Sheet
                                                key={value}
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: 'md',
                                                    boxShadow: 'sm',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
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
                                        </Grid>

                                    ))}
                                </Grid>
                            </RadioGroup>
                        )}
                    />
                </CssVarsProvider>
            </Grid>
        </React.Fragment>




    );
}

export default TwoSubOne

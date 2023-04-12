import React from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button
    } from '@material-ui/core';

    const LoginPage = () => {
    return (
        <div style={{ padding: 30 }}>
        <Paper>
            <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            >
            <Grid item xs={12}>
                <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
            <TextField label="Repeat Email"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth> Register </Button>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
    }
export default RegisterPage;
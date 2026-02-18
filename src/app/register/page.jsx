"use client";
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const RegisterPage = () => {
    return (
        <Container maxWidth="sm" sx={{ py: 10 }}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-playfair)', color: 'primary.main' }}>
                    Partner Registration
                </Typography>
                <Typography variant="body1" paragraph>
                    Registration coming soon. Please contact us for more information.
                </Typography>
            </Paper>
        </Container>
    );
};

export default RegisterPage;

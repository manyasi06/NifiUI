import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginPage: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Email:', values.email);
            console.log('Password:', values.password);
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('password')}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Box>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginPage;
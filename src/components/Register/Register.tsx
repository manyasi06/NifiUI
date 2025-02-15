import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), ], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: (values) => {
            // Handle registration logic here
            console.log('Username:', values.username);
            console.log('Email:', values.email);
            console.log('Password:', values.password);
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            id="username"
                            label="Username"
                            variant="outlined"
                            {...formik.getFieldProps('username')}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                    </Box>
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
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('confirmPassword')}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </Box>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Register;
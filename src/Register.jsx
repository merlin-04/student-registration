import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Button,
    Grid,
    Box,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText,
    Container,
    FormLabel,
} from "@mui/material";

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            gender: e.target.value
        });
    };

    const handleSubmit = () => {
        const validationErrors = {};
        let formValid = true;

        // Validate each field
        if (!formData.name) {
            formValid = false;
            validationErrors.name = 'Name is required';
        }
        if (!formData.address) {
            formValid = false;
            validationErrors.address = 'Address is required';
        }
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            formValid = false;
            validationErrors.mobile = 'Valid mobile number is required';
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formValid = false;
            validationErrors.email = 'Valid email is required';
        }
        if (!formData.gender) {
            formValid = false;
            validationErrors.gender = 'Gender is required';
        }
        if (!formData.dob) {
            formValid = false;
            validationErrors.dob = 'Date of birth is required';
        }
        if (!formData.course) {
            formValid = false;
            validationErrors.course = 'Course selection is required';
        }

        setErrors(validationErrors);

        if (formValid) {
            alert(`Data stored successfully!\n\n${JSON.stringify(formData, null, 2)}`);
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: ''
        });
        setErrors({});
    };


    return (
        <Box
            sx={{
                backgroundImage: 'url("https://t3.ftcdn.net/jpg/08/10/89/84/360_F_810898439_M7GxeIoecPFWfUaIekY0Qw3q4Kh2l0yO.jpg")', // Replace with your desired background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* <CssBaseline /> */}
            <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}>
                <h2 style={{ textAlign: 'center' }}>Higher Secondary Admission Form</h2>
                <Grid container spacing={2}>
                    {/* Name */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                    </Grid>

                    {/* Address */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Address"
                            variant="outlined"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                        />
                    </Grid>

                    {/* Mobile */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Mobile"
                            variant="outlined"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            error={!!errors.mobile}
                            helperText={errors.mobile}
                            type="text"
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            type="email"
                        />
                    </Grid>

                    {/* Gender */}
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!!errors.gender}>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                row
                                name="gender"
                                value={formData.gender}
                                onChange={handleGenderChange}
                            >
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormHelperText>{errors.gender}</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Date of Birth */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            variant="outlined"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            error={!!errors.dob}
                            helperText={errors.dob}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    {/* Course */}
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!!errors.course}>
                            <InputLabel>Course</InputLabel>
                            <Select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                label="Course"
                            >
                                <MenuItem value="Biology">Biology</MenuItem>
                                <MenuItem value="Computer Science">Computer Science</MenuItem>
                                <MenuItem value="Commerce">Commerce</MenuItem>
                                <MenuItem value="Humanities">Humanities</MenuItem>
                            </Select>
                            <FormHelperText>{errors.course}</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Buttons */}
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
                        <Button variant="outlined" color="secondary" onClick={resetForm}>Cancel</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Register
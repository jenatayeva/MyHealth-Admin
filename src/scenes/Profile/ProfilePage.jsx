import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import React from "react";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import { Formik, Form } from "formik";
import * as yup from "yup";
import AvatarPict from '../../assets/Img/4.png';

const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	firstName: yup.string("Enter your name").required("Fist name is required"),
	lastName: yup.string("Enter your surname").required("Last name is required"),
});

const ProfilePage = () => {
	return (
		<Box>
			<Header title="John's profile" subtitle='Update your profile' />
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					email: "",
					firstName: "",
					lastName: "",
				}}
				onSubmit={(values, actions) => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
				}}
			>
				{(form) => {
					return (
						<Form onSubmit={form.handleSubmit}>
						<Box display='flex'>
							<Avatar
								alt='John'
								src={AvatarPict}
								variant='square'
								sx={{ width: 120, height: 120 }}
							/>
							<Box>
									<Button variant='outlined' sx={{ ml: "10px" }}>
										Remove
									</Button>
									<Button
										variant='contained'
										component='label'
										sx={{ ml: "10px" }}
									>
										<PhotoCamera />
										Upload
										<input hidden accept='image/*' multiple type='file' />
									</Button>
							</Box>
						</Box>
							<Grid container rowSpacing={1} column={12} spacing={2} mt={2}>
								<Grid item xs={6}>
									<TextField
										id='firstName'
										name='firstName'
										required
										label='Full Name'
										fullWidth
										value={form.values.firstName}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										error={
											form.touched.firstName &&
											Boolean(form.errors.firstName)
										}
										helperText={
											form.touched.firstName && form.errors.firstName
										}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id='lastName'
										name='lastName'
										required
										label='Last Name'
										fullWidth
										value={form.values.lastName}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										error={
											form.touched.lastName && Boolean(form.errors.lastName)
										}
										helperText={
											form.touched.lastName && form.errors.lastName
										}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id='email'
										name='email'
										required
										label='Email'
										fullWidth
										value={form.values.email}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										error={form.touched.email && Boolean(form.errors.email)}
										helperText={form.touched.email && form.errors.email}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id='outlined-required'
										label='Room Number'
										fullWidth
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id='outlined-multiline-static'
										label='Description'
										multiline
										rows={4}
										fullWidth
									/>
								</Grid>
							</Grid>
							<Stack
								direction='row'
								justifyContent='flex-end'
								mt='1rem'
								spacing={2}
							>
								<Button variant='contained' type='submit'>
									Save Profile
								</Button>
								<Button variant='outlined'>Cancel</Button>
							</Stack>
					</Form>
					)
				}}
			</Formik>
		</Box>
	);
};

export default ProfilePage;

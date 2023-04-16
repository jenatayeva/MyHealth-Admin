import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TodayIcon from '@mui/icons-material/Today';
import { Route, Routes, Router } from 'react-router-dom';
import ProfilePage from "../Profile/ProfilePage";
import HospitalInfo from "../HospitalInfo/HospitalInfo";
;

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Welcome!
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant='persistent'
				anchor='left'
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItemButton
						component='a'
						href='/profile'
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>

					<ListItemButton
					component='a'
						href='/hostpitalInfo'
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							<LocalHospitalOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary="Hospital's Information"
							sx={{ opacity: open ? 1 : 0 }}
						/>
					</ListItemButton>

					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							<WheelchairPickupIcon />
						</ListItemIcon>
						<ListItemText primary='Patients' sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>

					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							<TodayIcon />
						</ListItemIcon>
						<ListItemText
							primary='Appoinments'
							sx={{ opacity: open ? 1 : 0 }}
						/>
					</ListItemButton>

					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							<EventAvailableIcon />
						</ListItemIcon>
						<ListItemText
							primary='Add appoinment'
							sx={{ opacity: open ? 1 : 0 }}
						/>
					</ListItemButton>
				</List>
			</Drawer>
			<Main open={open}>
				{/* <DrawerHeader /> */}
        <Routes>
            {/* <Route path='/' element={<Dashboard/>} /> 
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='*' element={<Dashboard/>} /> */}
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/hostpitalInfo' element={<HospitalInfo/>} />
        </Routes>
			</Main>
		</Box>
	);
}

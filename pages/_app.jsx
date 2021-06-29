import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { Grid, Typography, Top } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ClickAway from '../components/navbar';

import { makeStyles } from '@material-ui/core/styles';
import '../styles/globals.css';
import topbar from '../styles/Topbar.module.css';
import footer from '../styles/Footer.module.css';
import styles from '../styles/Navbar.module.css';

import { useRouter } from 'next/router';

// theme overrides
const theme = createMuiTheme({
	typography: {
		fontFamily: 'Poppins, Roboto, sans-serif',
	},
	palette: {
		primary: {
			main: '#D8A23A',
		},
		secondary: {
			main: '#262472',
		},
		text: {
			secondary: '#000000bf',
		},
	},
});

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const routes1 = {
	'About Us': '/company/about',
	'Partnership': '/company/partner',
	'Who We Are': '/company/whoweare',
};
const routes = {
	'Airport Transfer': '/services/airport_transfer',
	'Car Hire': '/services/car_hire',
	'Priority Pass': '/services/priority_pass',
	'Corporate Travel': '/services/corporate_travel',
	'Wedding Services': '/services/wedding_services',
};

function MyApp({ Component, pageProps }) {
	const onClickHandler = (e) => {
		console.log(e.target.parentNode.lastChild);
		if (e.target.parentNode.lastChild.style.display == 'flex') {
			e.target.parentNode.lastChild.style.display = 'none';
			return;
		}

		e.target.parentNode.lastChild.style.display = 'flex';
	};

	const router = useRouter();

	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 200,
		});
	}, []);
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));
	const classes = useStyles();

	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	return (
		<ThemeProvider theme={theme}>
			{/* Topbar */}

			{router.route.includes('blog') ? (
				<nav style={{ display: 'flex', justifyContent: 'center' }}>
					<img
						src={`${prefix}/assets/images/shuttle.png`}
						alt=''
						style={{
							width: '300px',
							borderRight: '1px solid #e4dede',
							borderLeft: '1px solid #e4dede',
							padding: '2rem',
						}}
					/>
				</nav>
			) : (
				<>
					<div data-aos='fade-down' className={topbar.topbar}>
						<div className={topbar.left}>
							<div className={topbar.item}>
								<WhatsAppIcon
									style={{
										fontSize: '17px',
										marginRight: '4px',
										color: 'green',
									}}
								/>
								<a href='#'>+234 903 000 9108</a>
							</div>
							<div className={topbar.item}>
								<PhoneIcon
									color='secondary'
									style={{
										fontSize: '17px',
										marginRight: '4px',
										color: 'blue',
									}}
								/>
								<a href='#'>+234 903 000 9108</a>
							</div>
							<div className={topbar.item}>
								<MailOutline
									color='secondary'
									style={{
										fontSize: '17px',
										marginRight: '4px',
										color: 'red',
									}}
								/>
								<a href='mailto:info@shuttlelane.com'>
									info@shuttlelane.com
								</a>
							</div>
						</div>
						<div className={topbar.right}>
							<Link href='/#how-it-works'>
								<a> How it works </a>
							</Link>
							<Link href='/customerservice/faq'>
								<a>FAQ</a>
							</Link>
							<Link href='/customerservice/contact'>
								<a>Contact Us</a>
							</Link>
						</div>
					</div>
					<nav className={styles.navbar}>
						<Grid container spacing={2}>
							<Grid item sm={3}>
								<div data-aos='fade-right'>
									<a href='/' className={styles.logo}>
										<img
											src={`${prefix}/assets/images/shuttle.png`}
											alt='logo'
										/>
									</a>
								</div>
							</Grid>
							<Grid
								item
								container
								justify='flex-end'
								alignItems='center'
								sm={9}
								spacing={3}
							>
								<Grid item>
									<Link href='/'>
										<a> Home</a>
									</Link>
								</Grid>

								<Grid item>
									{/* <div className={styles.menuList}>
										<p onClick={onClickHandler}>About</p>
										<ArrowDropDownIcon color='primary' />
										<div>
											<Link href='/company/about'>
												<a> About Us</a>
											</Link>
											<Link href='/company/whoweare'>
												<a> Who We Are</a>
											</Link>
											<Link href='/company/partner'>
												<a> Partnership</a>
											</Link>
										</div>
									</div> */}
									<ClickAway
										heading='About'
										routes={routes1}
									/>
									<ClickAway
										heading='Services'
										routes={routes}
									/>

									{/* <select>
										<option>About</option>
										<option>
											<Link href='/company/about'>
												<a> About Us</a>
											</Link>
										</option>
										<option>
											<Link href='/company/whoweare'>
												<a> Who We Are</a>
											</Link>
										</option>
										<option>
											<Link href='/company/partner'>
												<a> Partnership</a>
											</Link>
										</option>
									</select> */}
								</Grid>
								{/* <Grid item>
									<div className={styles.menuList}>
										<p onClick={onClickHandler}>
											<ArrowDropDownIcon color='primary' />
											Services
										</p>

										<div>
											<Link href='/services/airport_transfer'>
												<a> Airport Transfer</a>
											</Link>
											<Link href='/services/car_hire'>
												<a> Car Hire</a>
											</Link>
											<Link href='/services/priority_pass'>
												<a>Priority Pass</a>
											</Link>
											<Link href='/services/wedding_services'>
												<a>Wedding Services</a>
											</Link>
											<Link href='/services/corporate_travel'>
												<a>Corporate Travel</a>
											</Link>
										</div>
									</div>
								</Grid> */}

								<Grid item>
									<Link href='/company/partner'>
										<a> Become a Partner</a>
									</Link>
								</Grid>
								<Grid item>
									<Link href='/#fleet'>
										<a> Fleet</a>
									</Link>
								</Grid>
								<Grid item>
									<Link href='/blog'>
										<a> Blog</a>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</nav>
				</>
			)}
			<main className={styles.main}>
				<Component {...pageProps} />
			</main>
			<footer className={footer.footer}>
				<Grid container justify='space-evenly' spacing={3}>
					<Grid item className={footer.sections}>
						<Typography
							variant='h6'
							gutterBottom
							style={{ color: '#fff' }}
						>
							COMPANY
						</Typography>
						<Link href='/company/about'>
							<a>About Shuttle Lane</a>
						</Link>
						<Link href='/company/whoweare'>
							<a>Who We Are</a>
						</Link>
						<Link href='/company/partner'>
							<a>Partnership</a>
						</Link>
						<Link href='/company/contact'>
							<a>Get in touch</a>
						</Link>
						<Link href='/company/terms'>
							<a>Terms of Use</a>
						</Link>
						<Link href='/company/policy'>
							<a>Privacy Policy</a>
						</Link>
					</Grid>
					<Grid item className={footer.sections}>
						<Typography
							variant='h6'
							gutterBottom
							style={{ color: '#fff' }}
						>
							SERVICES
						</Typography>
						<Link href='/services/airport_transfer'>
							<a>Airport Transfer</a>
						</Link>
						<Link href='/services/car_hire'>
							<a>Car Hire</a>
						</Link>
						<Link href='/services/priority_pass'>
							<a>Priority Pass</a>
						</Link>
						<Link href='/services/corporate_travel'>
							<a>Corporate Travel</a>
						</Link>
						<Link href='/services/wedding_services'>
							<a>Wedding Services</a>
						</Link>
					</Grid>
					<Grid item className={footer.sections}>
						<Typography
							variant='h6'
							gutterBottom
							style={{ color: '#fff' }}
						>
							CUSTOMER SERVICE
						</Typography>

						<Link href='/#how-it-works'>
							<a>
								<a>How It Works</a>
							</a>
						</Link>
						<Link href='/customerservice/faq'>
							<a>Frequently Asked Questions</a>
						</Link>
						<Link href='/customerservice/contact'>
							<a>
								<a>Report a Problem</a>
							</a>
						</Link>
					</Grid>
					<Grid item className={footer.sections}>
						<Typography
							variant='h6'
							gutterBottom
							style={{ color: '#fff' }}
						>
							BOOK ONLINE
						</Typography>
						<Link href='/#header'>
							<a>Airport Transfer</a>
						</Link>
						<Link href='/#header'>
							<a>Car Hire</a>
						</Link>
						<Link href='/#header'>
							<a>Priority Pass</a>
						</Link>
					</Grid>
				</Grid>
			</footer>
		</ThemeProvider>
	);
}
export default MyApp;

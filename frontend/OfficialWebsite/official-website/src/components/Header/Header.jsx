import React, { useState, useContext, useRef } from 'react';
import styles from './Header.module.css';
import SideBar from './SideBar.jsx';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton.jsx';
import Logo from './Logo';
import { BreakPointContext } from '../../useBreakPoint';
// import styled from 'styled-components';
// const StyledLink = styled(Link)`
// 	text-decoration: none;

// 	&:focus,
// 	&:hover,
// 	&:visited,
// 	&:link,
// 	&:active {
// 		text-decoration: none;
// 	}
// `;
const items = [
	{
		label: (
			<Link className={styles.link} to={'/about'}>
				<div className={styles.chinesTabName}>關於我們</div>
				<div className={styles.engTabName}>ABOUT</div>
			</Link>
		),
		key: 'about',
		children: [],
	},
	{
		label: (
			<Link className={styles.link}>
				<div className={styles.chinesTabName}>展覽/活動</div>
				<div className={styles.engTabName}>EVENTS</div>
			</Link>
		),
		key: 'event',
		popupOffset: [-10, 10],
		children: [
			{
				label: (
					<div className={styles.subMenu}>
						<Link to='/introduce/exhibition'>
							<div className={styles.chinesTabName}>展覽</div>
							<div className={styles.engTabName}>EXHIBITIONS</div>
						</Link>
					</div>
				),
				key: 'show',
			},
			{
				label: (
					<div className={styles.subMenu}>
						<Link to='/introduce/activity'>
							<div className={styles.chinesTabName}>活動</div>
							<div className={styles.engTabName}>ACTIVITIES</div>
						</Link>
					</div>
				),
				key: 'activity',
			},
		],
	},
	{
		label: (
			<Link className={styles.link} to={'/calendar'}>
				<div className={styles.chinesTabName}>行事曆</div>
				<div className={styles.engTabName}>CALENDAR</div>
			</Link>
		),
		key: 'calendar',
		children: [],
	},
	{
		label: (
			<Link className={styles.link}>
				<div className={styles.chinesTabName}>特別企劃</div>
				<div className={styles.engTabName}>SPECIALS</div>
			</Link>
		),
		key: 'special',
		popupOffset: [-20, 10],
		children: [
			{
				label: (
					<div className={styles.subMenu}>
						<Link to={'/map'}>
							<div className={styles.chinesTabName}>尋洄地圖</div>
							<div className={styles.engTabName}>Map of ArtFest</div>
						</Link>
					</div>
				),
				key: 'backward',
			},
			{
				label: (
					<div className={styles.subMenu}>
						<Link to={'/psytest'}>
							<div className={styles.chinesTabName}>心理測驗</div>
							<div className={styles.engTabName}>Reply 2023</div>
						</Link>
					</div>
				),
				key: 'afMap',
			},
			{
				label: (
					<div className={styles.subMenu}>
						<Link to={'/artwork'}>
							<div className={styles.chinesTabName}>洄溯展覽暨比賽</div>
							<div className={styles.engTabName}>Throwback</div>
						</Link>
					</div>
				),
				key: 'psychoTest',
			},
		],
	},
];

const Header = () => {
	const [sideBarActive, setSideBarActive] = useState(false);
	const onClose = () => {
		setSideBarActive(false);
	};
	const add_class_on_scroll = (element, className) => {
		if (element) {
			element.classList.add(className);
		}
	};
	const remove_class_on_scroll = (element, className) => {
		if (element) {
			element.classList.remove(className);
		}
	};
	const { inBreakPoint } = useContext(BreakPointContext);
	const headRef = useRef(null);
	const observer = new IntersectionObserver((entries) => {
		if (!inBreakPoint) {
			const menuE = document.getElementById('menu');
			const menuIconContainerE = document.getElementById('menuIconContainer');
			const headerE = document.getElementsByClassName(styles.headerWrapper)[0];
			const logoE = document.getElementsByClassName(styles.box)[0];
			// console.log("observer")
			if (entries[0].boundingClientRect.y < 0) {
				// when screen isn't top, that is, screen scrolling down
				remove_class_on_scroll(menuE, styles.menu);
				add_class_on_scroll(menuE, styles.scrollMenu);
				add_class_on_scroll(headerE, styles.scrollHeader);
				remove_class_on_scroll(logoE, styles.boxS);
				remove_class_on_scroll(menuIconContainerE, styles.iconContainer);
				add_class_on_scroll(menuIconContainerE, styles.iconContainerScroll);
			} else {
				// when screen is top
				remove_class_on_scroll(menuE, styles.scrollMenu);
				remove_class_on_scroll(headerE, styles.scrollHeader);
				add_class_on_scroll(menuE, styles.menu);
				add_class_on_scroll(logoE, styles.boxS);
				remove_class_on_scroll(menuIconContainerE, styles.iconContainerScroll);
				add_class_on_scroll(menuIconContainerE, styles.iconContainer);
			}
		}
	});
	if (headRef.current) {
		observer.observe(headRef.current);
	}
	// useEffect(() => {
	// 	window.addEventListener('scroll', function () {
	// 		if (!inBreakPoint) {
	// 			const menuE = document.getElementById('menu');
	// 			const headerE = document.getElementsByClassName(
	// 				styles.headerWrapper
	// 			)[0];
	// 			const logoE = document.getElementsByClassName(styles.box)[0];
	// 			let offsetChangeHeader = 10;
	// 			let scrollpos = window.scrollY;
	// 			add_class_on_scroll(logoE, styles.boxS);
	// 			if (scrollpos > offsetChangeHeader) {
	// 				remove_class_on_scroll(menuE, styles.menu);
	// 				add_class_on_scroll(menuE, styles.scrollMenu);
	// 				add_class_on_scroll(headerE, styles.scrollHeader);
	// 				remove_class_on_scroll(logoE, styles.boxS);
	// 			} else {
	// 				remove_class_on_scroll(menuE, styles.scrollMenu);
	// 				remove_class_on_scroll(headerE, styles.scrollHeader);
	// 				add_class_on_scroll(menuE, styles.menu);
	// 				add_class_on_scroll(logoE, styles.boxS);
	// 			}
	// 		}
	// 	});
	// }, [inBreakPoint]);

	return (
		<>
			<div
				style={{
					position: 'absolute',
					width: '1px',
					height: '1px',
					top: '100px',
				}}
				ref={headRef}
			></div>
			<div className={styles.totalWrapper}>
				<div className={styles.headerWrapper}>
					<div className={styles.box}>
						<Logo />
					</div>

					{inBreakPoint ? (
						<div
							className={styles.iconContainer}
							onClick={() => {
								setSideBarActive(!sideBarActive);
							}}
							style={sideBarActive ? { display: 'none' } : {}}
							id='menuIconContainer'
						>
							<svg
								width='22'
								height='19'
								viewBox='0 0 22 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={styles.menuIcon}
							>
								<path d='M0 0.5H22' stroke='black' />
								<path d='M0 9.5H22' stroke='black' />
								<path d='M0 18.5H22' stroke='black' />
							</svg>
						</div>
					) : (
						<div
							style={{ display: 'flex', alignItems: 'center', height: '100%' }}
						>
							<div className={styles.menuWrapper}>
								<Menu
									selectable={false}
									selectedKeys={'1'}
									multiple={true}
									mode='horizontal'
									items={items}
									disabledOverflow={true}
									className={styles.menu}
									id='menu'
								/>
							</div>
							<div>
								<LoginButton />
							</div>
						</div>
					)}

					<SideBar
						activeSideBar={sideBarActive}
						setSideBarActive={setSideBarActive}
						onClose={onClose}
					></SideBar>
				</div>
			</div>
		</>
	);
};
export default Header;

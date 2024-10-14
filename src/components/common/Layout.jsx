import { useLocation } from 'react-router-dom';
import Mask from './Mask';
import SplitText from './SplitText';
import { useEffect } from 'react';

export default function Layout({ title, children }) {
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');


	useEffect(()=>{
	window.scrollTo({top:0})	
	},[]);


	return (
		<>
			<main className={isDetail ? 'detail' : title.toLowerCase()}>
				<SplitText delay={0.5}>{title}</SplitText>
				<section>{children}</section>
			</main>

			<Mask duration={0.5} delay={0} style={{ position: 'fixed' }} />
		</>
	);
}

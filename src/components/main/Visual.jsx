import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

export default function Visual() {
	const { data } = useFlickrQuery({ type: 'mine' });
	return (
		<figure className='visual'>
			<Swiper
				slidesPerView={3}
				spaceBetween={100}
				loop={true}
>
				{data?.map((pic, idx) => {
					if (idx >= 20) return null;
					return (
						<SwiperSlide key={idx}>
							<Pic src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`} style={{ width: '100%', height: '100%' }} shadow />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</figure>
	);
}
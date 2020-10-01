import React from 'react';

import markdown from './code.md';
import TheCode from '../../the-code';
import AliceCarousel from '../../../lib/react-alice-carousel';
import '../../../lib/scss/alice-carousel.scss';

const FadeoutPage = () => {
	return (
		<section className="p-basic">
			<AliceCarousel infinite mouseTracking animationType="fadeout" animationDuration={800}>
				<div className="item">
					<h1 className="__mod">1</h1>
				</div>
				<div className="item">
					<h1 className="__mod-2">2</h1>
				</div>
				<div className="item">
					<h1>3</h1>
				</div>
				<div className="item">
					<h1>4</h1>
				</div>
				<div className="item">
					<h1>5</h1>
				</div>
			</AliceCarousel>
			<TheCode html={markdown} />
		</section>
	);
};

export default FadeoutPage;

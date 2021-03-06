import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from 'react-icons/ai';


export const CardArrows = ({
	actual,
	previo,
	siguiente,
}) => {
	return (
		<div className='arrows'>
			<div
				className='arrow-left'
				hidden={actual === 0}
				onClick={previo}
			>
				<AiOutlineArrowLeft />
			</div>

			<div
				className='arrow-right'
				onClick={siguiente}
			>
				<AiOutlineArrowRight />
			</div>
		</div>
	);
};
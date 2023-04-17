import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PagerBar } from './Lab07';
import { type NoOpFunction } from '../common/common-types';

describe('Lab 07', () => {
	let handlePreviousClick: NoOpFunction, handleNextClick: NoOpFunction;

	beforeEach(() => {
		handlePreviousClick = jest.fn();
		handleNextClick = jest.fn();
	});

	test('Smoke test', async () => {
		const user = userEvent.setup();
		render(
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
			/>
		);
		let previousButton = screen.getByRole('button', { name: /Previous/i });
		let nextButton = screen.getByRole('button', { name: /Next/i });

		await user.click(previousButton);
		await user.click(nextButton);
	});

	test('Previous button', async () => {
		const user = userEvent.setup();
		render(
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
			/>
		);
		let previousButton = screen.getByRole('button', { name: /Previous/i });

		await user.click(previousButton);
		expect(handlePreviousClick)
			.toHaveBeenCalled();
		expect(handlePreviousClick)
			.toHaveBeenCalledTimes(1);
	});

	test('Next button', async () => {
		const user = userEvent.setup();
		render(
			<PagerBar
				clickPreviousButton={handlePreviousClick}
				clickNextButton={handleNextClick}
			/>
		);
		let nextButton = screen.getByRole('button', { name: /Next/i });

		await user.click(nextButton);
		expect(handleNextClick)
			.toHaveBeenCalled();
		expect(handleNextClick)
			.toHaveBeenCalledTimes(1);
	});
});

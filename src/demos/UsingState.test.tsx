import UsingState, { ColorPicker, ColorBox } from './UsingState';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('picking a color leads to a change', async () => {
	// Set up your user BEFORE calling render()
	let user = userEvent.setup();
	render(<UsingState />);
	let colorPicker = screen.getByLabelText('Pick a color', { exact: false });
	let colorBox = screen.getByTestId('color-box');
	let actualColor = getComputedStyle(colorBox)
		.getPropertyValue('background-color');
	expect(actualColor)
		.toEqual('red');

	// Wait until all updates provoked by selecting 'yellow' are complete
	await user.selectOptions(colorPicker, 'yellow');

	let updatedColor = getComputedStyle(colorBox)
		.getPropertyValue('background-color');
	expect(updatedColor)
		.toEqual('yellow');
});

test('Invoking an event handler', async () => {
	let user = userEvent.setup();
	let mockedEventHandler = jest.fn();
	render(<ColorPicker pickColor={mockedEventHandler} />);
	let colorPicker = screen.getByLabelText('Pick a color', { exact: false });
	expect(mockedEventHandler).not.toHaveBeenCalled();
	let nextColor = 'orange';

	await user.selectOptions(colorPicker, nextColor);
	expect(mockedEventHandler)
		.toHaveBeenCalled();
	expect(mockedEventHandler)
		.toHaveBeenCalledTimes(1);
	expect(mockedEventHandler)
		.toHaveBeenCalledWith(nextColor);
});

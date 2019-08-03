import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
// React 16 Enzyme adapter
window.scrollTo = () => {};
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.window = window;

const localStorageMock = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
	clear: jest.fn()
};
global.localStorage = localStorageMock;

Enzyme.configure({ adapter: new Adapter() });

localStorage.setItem('&uData', '');

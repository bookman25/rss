declare module 'enzyme-to-json' {
	import { ShallowWrapper } from 'enzyme';
	function shallowToJson(view: ShallowWrapper<any, any>): Object;
}
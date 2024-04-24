/* eslint-disable no-shadow */
import { City } from '../index';
import { ICity } from '../interface';

const executeAllTests = (City: any) => {
	describe('Check for City Module', () => {
		test('Check Cities for undefined State', () => {
			let countryCode;
			const stateCode = 'DL';
			const cities: any = City.getCitiesOfState(countryCode, stateCode);

			expect(cities.length).toEqual(0);
		});

		test('Check Cities for undefined State', () => {
			const countryCode = 'IN';
			let stateCode;
			const cities: any = City.getCitiesOfState(countryCode, stateCode);
			expect(cities.length).toEqual(0);
		});
	});
};
export default executeAllTests;
executeAllTests(City);

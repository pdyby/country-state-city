/* eslint-disable no-shadow */
import { Country } from '../index';
import { ICountry } from '../interface';

const executeAllTests = (Country: any) => {
	describe('Check for Country Module', () => {
		test('Check for Country By undefined Code ', () => {
			let code;
			const country: ICountry = Country.getCountryByCode(code);
			expect(country).toEqual(code);
		});
	});
};

export default executeAllTests;
executeAllTests(Country);

/* eslint-disable no-shadow */
import { Country, State } from '../index';
import { IState } from '../interface';

const executeAllTests = (State: any) => {
	describe('Check for State Module', () => {
		test('Check All States for United States Of America', () => {
			const code = 'US';
			const country: any = Country.getCountryByCode(code);
			const states: IState[] = State.getStatesOfCountry(country.isoCode);
			const names: String[] = states.map(
				(state: IState): String => {
					return state.name;
				},
			);
			expect(names).toEqual([
				'Alabama',
				'Alaska',
				'American Samoa',
				'Arizona',
				'Arkansas',
				'Baker Island',
				'California',
				'Colorado',
				'Connecticut',
				'Delaware',
				'District of Columbia',
				'Florida',
				'Georgia',
				'Guam',
				'Hawaii',
				'Howland Island',
				'Idaho',
				'Illinois',
				'Indiana',
				'Iowa',
				'Jarvis Island',
				'Johnston Atoll',
				'Kansas',
				'Kentucky',
				'Kingman Reef',
				'Louisiana',
				'Maine',
				'Maryland',
				'Massachusetts',
				'Michigan',
				'Midway Atoll',
				'Minnesota',
				'Mississippi',
				'Missouri',
				'Montana',
				'Navassa Island',
				'Nebraska',
				'Nevada',
				'New Hampshire',
				'New Jersey',
				'New Mexico',
				'New York',
				'North Carolina',
				'North Dakota',
				'Northern Mariana Islands',
				'Ohio',
				'Oklahoma',
				'Oregon',
				'Palmyra Atoll',
				'Pennsylvania',
				'Puerto Rico',
				'Rhode Island',
				'South Carolina',
				'South Dakota',
				'Tennessee',
				'Texas',
				'United States Minor Outlying Islands',
				'United States Virgin Islands',
				'Utah',
				'Vermont',
				'Virginia',
				'Wake Island',
				'Washington',
				'West Virginia',
				'Wisconsin',
				'Wyoming',
			]);
		});

		test('Check States for undefined code', () => {
			let code;
			const states: IState[] = State.getStatesOfCountry(code);
			expect(states.length).toEqual(0);
		});
	});
};

export default executeAllTests;
executeAllTests(State);

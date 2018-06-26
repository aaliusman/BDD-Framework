Feature: Statefarm insurance quote

Scenario Outline: Get insurance quote
	Given user click on Agents tab
	When user enter "<zipcode>"
	When user click on Find Agent
	Then user select distance "<distance>"
	And user select product "<productType>"
	Then user click search button
	
Examples:
	|zipcode|distance|productType|
	|19020  | Within 70 miles | Auto |
	|19047  | Within 80 miles | Home |
	|19120  | Within 90 miles | Life |
	|19020  | Within 70 miles | Auto |
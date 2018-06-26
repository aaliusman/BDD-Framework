package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/bravo1516/eclipse-workspace/StateFarmBDDPageObject/src/main/java/feature/statefarm.feature", //the path of the feature files
		glue = {"stepDefinition"}, //path of your stepDefinition
		format = {"pretty","html:test-output"},     // "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"} // to report different type of reporitng
		monochrome = true,      // display the console output in a proper readable format.
		strict = true,        // it will strictly follow the mapping between feature file and stepdefinition file
		dryRun = false       // to check the mapping is right between feature file and step definition file
//		tags = {"@RegressionTest", "@SmokeTest"}
	)

public class ScrumRunner {

}

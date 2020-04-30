package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions 
	(
	features = "C:\\Users\\rites\\git\\SeleniumTest\\AutomationBDD\\src\\main\\java\\Features\\CRMlogin.feature",  //The path of feature file
	glue= {"StepDefinition"},  //The path of step definition file
	format = {"pretty", "html:test-output","json:json_output/report.json","junit:junit_output/report.xml"}, //To generate different types of reporting
	dryRun = false,
	monochrome = true, //Display the console output in proper readable format
	strict = true
	
	)

public class TestRunner {
	
	

}

package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions 
	(
	features = "C:\\Users\\rites\\git\\SeleniumTest\\AutomationBDD\\src\\main\\java\\Features\\CRMCreateNewContact.feature",  //The path of feature file
	glue= {"StepDefinition"},  //The path of step definition file
	format = {"pretty", "html:test-output","json:json_output/report.json","junit:junit_output/report.xml"}, //To generate different types of reporting
	dryRun = true, //to check mapping is proper between feature file and step definition file.
	monochrome = true, //Display the console output in proper readable format
	strict = true, //it will check if any step is not defined in step definition file
	tags = {"@RegressionTest, @SmokeTest"} 
	
	)

public class TestRunner {
	
	}


//OR: tags = {"@RegressionTest, @SmokeTest"} --execute all test tagged as only @SmokeTest OR @RegressionTest
//AND: tags = {"@RegressionTest", "@SmokeTest"} --execute all test that have tagged as both @SmokeTest AND @RegressionTest
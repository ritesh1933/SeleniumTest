package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class CRMlogin {
	
	WebDriver driver;
	
	
	
	@Given("^user is already on Login Page$")
	public void user_alderady_on_login_page()
	
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\rites\\Desktop\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/home");
	}
	
	
	@When("^user enter username and password$")
	public void enter_username_password()
	{
		
	}
	
	
	
	@Then("^user clicks on login button$")
	public void click_login_button()
	{
		
		
	}
	
	
	@And("^user is on home page$")
	public void user_home_page()
	{
		
	}

}
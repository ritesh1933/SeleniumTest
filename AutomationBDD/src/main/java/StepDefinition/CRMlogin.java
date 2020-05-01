package StepDefinition;

import org.openqa.selenium.By;
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
		driver.findElement(By.name("email")).sendKeys("ritesh_mohit007@hotmail.com");
		//'driver.findElement(By.name("password")).sendKeys("Tomtom$9987");
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("Tomtom$9987");
				
	}
	
	
	@Then("^user clicks on login button$")
	public void click_login_button()
	{
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();
		
		
	}
	
	
	@And("^user is on home page$")
	public void user_home_page()
	{
		
	}

}
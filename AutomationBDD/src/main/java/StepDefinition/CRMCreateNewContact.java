package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CRMCreateNewContact {
	

	WebDriver driver;
	
	
	@Given("^user is already on Login Page$")
	public void user_alderady_on_login_page()
	
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\rites\\Desktop\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/home");
	}
	
	
	@When("^user enter \"(.*)\" and \"(.*)\"$")
	public void enter_username_password(String username, String password)
	{
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);				
	}
	
	
	@Then("^user clicks on login button$")
	public void click_login_button()
	{
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();

	}
	
	
	
	
	@Then("^user is on home page$")
	public void user_home_page()
	{
		//get the title of the page
		String title = driver.getTitle();
		System.out.println("Home page title ::" + title);
		Assert.assertEquals("Cogmento CRM", title);	
		
	}
	
	
	
	@Then("^user moves to new contact page$")
	public void click_on_contact()
	{
		
	}
	
	
	@Then("user enters \"(.*)\" and \"(.*)\"  and \"(.*)\"$")
	public void enter_contact_info()
	{
		
	}
	

}
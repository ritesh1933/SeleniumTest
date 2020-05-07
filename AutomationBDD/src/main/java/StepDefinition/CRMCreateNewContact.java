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
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/home");
	}
	
	
	@When("^user enter username and password$")
	public void enter_username_password()
	{
		driver.findElement(By.name("email")).sendKeys("ritesh_mohit007@hotmail.com");
		driver.findElement(By.name("password")).sendKeys("Tomtom$9987");				
	}
	
	
	@Then("^user clicks on login button$")
	public void click_login_button()
	{
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();

	}
	
	
	@Then("^user is on home page$")
	public void user_home_page() throws InterruptedException
	{
		//get the title of the page
		String title = driver.getTitle();
		System.out.println("Home page title ::" + title);
		Assert.assertEquals("Cogmento CRM", title);	
		Thread.sleep(2000);
	}
	
	
	
	@Then("^user moves to new contact page$")
	public void click_on_contact() throws InterruptedException
	{
		driver.findElement(By.xpath("//span[@class='item-text'][contains(text(),'Contacts')]")).click();
		Thread.sleep(2000);
	}
	
	
	@Then("^user clicks on New button$")
	public void click_on_new_button() throws InterruptedException
	{
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		Thread.sleep(2000);
	}
	
	

	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void enter_contact_details(String firstname, String lastname, String position) throws InterruptedException
	{
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.name("position")).sendKeys(position);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
		
	}
	
	
	@Then("^close the browser$")
	public void close_browser()
	{
		driver.quit();
	}


}

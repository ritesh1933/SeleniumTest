package StepDefinition;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
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
	
	

	@Then("^user enters contact details$")
	public void enter_contact_details(DataTable contactInfo) throws InterruptedException
	{
		for (Map<String, String> data : contactInfo.asMaps(String.class, String.class))
			
		{	
		
		//Enter data 
		driver.findElement(By.name("first_name")).sendKeys(data.get("firstname"));
		driver.findElement(By.name("last_name")).sendKeys(data.get("lastname"));
		driver.findElement(By.name("position")).sendKeys(data.get("position"));
		
		//Click on Save button
		driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
		Thread.sleep(2000);
		
		//Click on Contact button
		driver.findElement(By.xpath("//span[@class='item-text'][contains(text(),'Contacts')]")).click();
		Thread.sleep(2000);
		
		//Click on New button
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		Thread.sleep(2000);
		
		}	
		
	}
	
	
	@Then("^user delete all contacts$")
	public void delete_all_contacts()
	{
		//Select all name by clicking on checkbox
		driver.findElement(By.xpath("//input[@type='checkbox']")).click();
		//click on dropdown
		driver.findElement(By.name("action")).click();
		//select Delete
		driver.findElement(By.xpath("//div[@role='option' and @class='item' ]")).click();
		//Click on checkmark button
		driver.findElement(By.xpath("//div[@role='button']")).click();	
		//click on "Delete" button
		driver.findElement(By.xpath("//button[@class='ui primary button']")).click();
		
		
	}
	
	
	@Then("^close the browser$")
	public void close_browser()
	{
		
		driver.quit();
	}


}

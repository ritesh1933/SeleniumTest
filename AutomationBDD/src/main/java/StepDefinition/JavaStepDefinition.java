//package StepDefinition;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class JavaStepDefinition {
//	
//	WebDriver driver;
//
//	@Given("^the user is on login page \"(.*)\"$")
//	public void user_on_login_page(String website)
//	{	
//		System.setProperty("webdriver.chrome.driver","C:\\Users\\rites\\Desktop\\ChromeDriver\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get(website);
//		
//	}
//	
//	
//
//	@Then("^User enters emailid \"(.*)\" and enters password \"(.*)\"$")
//	public void enter_emailid(String username, String password)
//	{
//		driver.findElement(By.id("email")).sendKeys(username);
//		driver.findElement(By.id("pass")).sendKeys(password);	
//	}
//	
//	
//	
//	
//	@When("^the user clicks on Bureau Dashboard button$")
//	public void user_clicks_on_BureauDashboartd()
//	{
//		driver.findElement(By.xpath("//img[@title='Bureau Dashboard']")).click();
//			
//	}
//	
//
//	
//	@When("^the user clicks on “New Package” button$")
//	public void user_clicks_on_NewPackage_button()
//	{
//		
//	}
//	
//	
//	
//	@And("^the user fills all required details on the new package screen$")
//	public void fill_data() throws InterruptedException 
//	{
//		 //select Category drop drown
//		driver.findElement(By.xpath("/select[@id='Package_Category_Value']")).click();        
//		//select value from drop down
//		driver.findElement(By.xpath("/select[@id='Package_Category_Value/option[2]']")).click();  
//		//wait 
//		Thread.sleep(2000); 
//		
//		//Select Package Type
//		driver.findElement(By.id("PTypeFiltered")).click();
//		//Select value from drop down
//		driver.findElement(By.id("PTypeFiltered/option[2]")).click();
//		Thread.sleep(2000);
//		
//		//Select Priority 
//		driver.findElement(By.xpath("/select[@id='Package_PriorityTag_Value']")).click();  
//		//select value from drop down
//		driver.findElement(By.xpath("/select[@id='Package_PriorityTag_Value/option[2]']")).click(); 
//		Thread.sleep(2000);
//		
//		//Select Captions
//		
//		
//		
//	}
//	
//	
//
//	
//	
//
//	
//	
//
//}

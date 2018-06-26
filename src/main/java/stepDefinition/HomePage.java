package stepDefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.Platform;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class HomePage extends Platform {
	public WebDriver driver;
	
	@Before
	public void initialize() {
		System.setProperty("webdriver.gecko.driver", "/Users/bravo1516/eclipse-workspace/SeleniumProject1/drivers/geckodriver");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://www.statefarm.com");
	}
	
	@After
	public void tearDown() {
		driver.manage().deleteAllCookies();
		driver.close();
	}
	
	@Given("^user click on Agents tab$")
	public void clickAgent() throws IOException {
		clickWebElementById(driver, readProp(driver, "agentTab"));
	}
	
	@When("^user enter \"(.*)\"$")
	public void enterZipCode(String zipcode) throws IOException {
		enterTextById(driver, readProp(driver, "zipCode"), zipcode);
	}
	
	@When("^user click on Find Agent$")
	public void clickFindAgent() throws IOException {
		clickWebElementById(driver, readProp(driver, "findAgent"));
	}
	
	@Then("^user select distance \"(.*)\"$")
	public void selectWithinDistance(String distance) throws IOException, InterruptedException {
		sleep(driver, 2);
		selectItem(driver, readProp(driver, "distance"), distance); 
	}
	
	@And("^user select product \"(.*)\"$")
	public void selectProductType(String product) throws IOException {
		selectItem(driver, readProp(driver, "product"), product);
	}
	@Then("^user click search button")
	public void clickSearchButton() throws IOException, InterruptedException {
		clickWebElementById(driver, readProp(driver, "search"));
		String agent = getText(driver, readProp(driver, "agentName"));
		System.out.println(agent);
		SoftAssert softAssert = new SoftAssert();
		sleep(driver, 2);
	}
}

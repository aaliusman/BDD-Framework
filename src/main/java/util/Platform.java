package util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class Platform {
	
	public void clickWebElementXpath(WebDriver driver, String xpath) {
		driver.findElement(By.xpath(xpath)).click();
		
	}
	
	public void clickWebElementById(WebDriver driver, String id) {
		driver.findElement(By.id(id)).click();
	
	}
	
	public void selectItem(WebDriver driver, String id, String value) {
		Select select = new Select(driver.findElement(By.id(id)));
		select.selectByVisibleText(value);
	}
	
	public void enterTextById(WebDriver driver, String id, String value) {
		driver.findElement(By.id(id)).sendKeys(value);
	}
	
	public void enterTextByXpath(WebDriver driver, String xpath, String value ) {
		driver.findElement(By.xpath(xpath)).sendKeys(value);
	}
	
	
	public static void sleep(WebDriver driver, int sec) throws InterruptedException {
		Thread.sleep(sec*1000);
	}
	
	public static String readProp(WebDriver driver, String key) throws IOException {
		InputStream fis = new FileInputStream("/Users/bravo1516/eclipse-workspace/StateFarmBDDPageObject/locator.properties");
		Properties pro = new Properties();
		pro.load(fis);
		String value= pro.getProperty(key);
		return value;
	}
	
	public static String readExcel(WebDriver driver, int row, int col) throws IOException {
		FileInputStream fis = new FileInputStream("/Users/bravo1516/eclipse-workspace/StateFarmBDDPageObject/readExcel.xls");
		Workbook wb = new XSSFWorkbook(fis);
		Sheet sheet = wb.getSheetAt(0);
		Row rw=sheet.getRow(row);
		Cell cell = rw.getCell(col);
		String value = cell.getStringCellValue();
		return value;
		
	}
	
	public String getText(WebDriver driver, String id) {
		String text= driver.findElement(By.id(id)).getText();
		return text;
	}
}

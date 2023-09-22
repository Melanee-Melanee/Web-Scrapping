#!/bin/python
import time
from beepy import beep

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

def check_alert_message(alert):
    if alert == "هیچ تاریخ قابل دسترسی موجود نمی باشد .":
        return False
    else:
        return True


def reserve_meeting():
    service = Service(executable_path=ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service)
    alert_error = True
    
    while alert_error:
        print("=" * 50)
        LOGIN_PAGE = "https://ir-appointment.visametric.com/ir"
        driver.get(LOGIN_PAGE)
        time.sleep(5)
        print(f"Open {LOGIN_PAGE} in chrome")
        driver.find_element(By.NAME, "nationalBtn").click()
        time.sleep(5)
        driver.find_element(By.ID, "result1").click()
        time.sleep(1)
        driver.find_element(By.ID, "result3").click()
        time.sleep(1)
        driver.find_element(By.ID, "btnSubmit").click()
        time.sleep(5)
        driver.find_element(By.XPATH, "//select[@name='city']//option[@value='3']").click()
        time.sleep(1)
        driver.find_element(By.XPATH, "//select[@name='office']//option[@value='1']").click()
        time.sleep(1)
        driver.find_element(By.XPATH, "//select[@name='officetype']//option[@value='1']").click()
        time.sleep(1)
        driver.find_element(By.XPATH, "//select[@name='totalPerson']//option[@value='1']").click()
        time.sleep(1)
        alert = driver.find_element(By.ID, "availableDayInfo").text
        if check_alert_message(alert):
            print("find free time")
            alert_error = False
    
    return check_alert_message(alert)


if __name__ == "__main__":
    reserve_meeting()
    for i in range(1000):
        beep(sound = "siren")
        time.sleep(0.1)
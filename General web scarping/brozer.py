# import webbrowser
# import time
# import os 
# #webbrowser.open('https://ir-appointment.visametric.com/ir')
# url = 'http://www.google.com/'
# webbrowser.get('firefox').open_new_tab(url)

# time.sleep(10)
# browserExe = "firefox" 
# os.system("pkill "+browserExe) 



#webbrowser.get('firefox').open_new_tab('https://ir-appointment.visametric.com/ir')
#webbrowser.open("http://www.google.com/")

#-----------------------------------------

import webbrowser

url = 'http://docs.python.org/'

# Linux
chrome_path = '/usr/bin/google-chrome %s'

webbrowser.get(chrome_path).open(url)



#----------------------------------------------------------
# import time
# import subprocess
# import sys
# import os

#p = subprocess.Popen(["firefox", "http://www.google.com"])
#time.sleep(10)
#p.kill()
#sys.exit()

#---------------------------------------------------------

#importing webdriver from selenium 
# from selenium import webdriver 
# from time import sleep

# #Here Chrome will be used 
# driver = webdriver.Chrome() 

# #URL of website 
# url = "https://ir-appointment.visametric.com/ir"
# #Opening the website 
# driver.get(url) 
# sleep(20)


# Closes the current window 
#driver.close() 
#-------------------------------------------------------
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support import ui

# driver = webdriver.Firefox()
# driver.get('https://www.google.com/')
# page_url=driver.find_elements_by_xpath("//a[@class='content']")
# all_title = driver.find_elements_by_class_name("title")
# title = [title.text for title in all_title]
# print(title)
#------------------------------------------------------
# from selenium import webdriver
# from selenium.webdriver import FirefoxOptions

# opts = FirefoxOptions()
# opts.add_argument("--headless")
# browser = webdriver.Firefox(options=opts)

# browser.get('https://www.geeksforgeeks.org')
#-------------------------------------------------------------

# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from time import sleep
# browser = webdriver.Firefox()
# browser.set_window_size(900,900)

#--------------------------------------


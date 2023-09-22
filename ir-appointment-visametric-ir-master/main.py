from beepy import beep
import time # Build-in function

# Telegram API-key
import telebot # pip install pytelegrambotapi

from visametri import reserve_meeting

# TOKEN TELEGRAM BOT API KEY (https://telegram.me/BotFather)
TOKEN = "YOUR-TELEGRAM-BOT-API-KEY"

# Telegram bot instance creation and initialization
bot = telebot.TeleBot(TOKEN)

# start command handler function (start bot)
@bot.message_handler(commands=['start'])
def start(message):
    print(message.text)
    bot.send_message(message.chat.id, "Hello, " + message.from_user.first_name)
    bot.send_message(message.chat.id, "please type `/run` for check free reservation")

# hello command handler function (hello bot)
@bot.message_handler(commands=['hello', 'hi'])
def hello(message):
    bot.send_message(message.chat.id, "Hello, " + message.from_user.first_name)

@bot.message_handler(commands=['run', 'r'])
def check_reserve_meeting(message):
    reserve_meeting()
    bot.send_message(message.chat.id, "find free time")
    for i in range(1000):
        beep(sound = "siren")
        time.sleep(0.1)


while True:
    try:
        bot.polling()
    except:
        time.sleep(5)

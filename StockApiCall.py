import time
import datetime
import pandas as pd
import json

ticker = 'DOLE'
period1 = int(time.mktime(datetime.datetime(2023, 2, 9, 23, 59).timetuple()))
period2 = int(time.mktime(datetime.datetime(2024, 2, 9, 23, 59).timetuple()))
interval = '1d' # 1d, 1m
print(f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={period1}&period2={period2}&interval={interval}&events=history&includeAdjustedClose=true')
query_string = f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={period1}&period2={period2}&interval={interval}&events=history&includeAdjustedClose=true'

df = pd.read_csv(query_string)
print(type(df))
print(df['Date'])
print(df['Adj Close'])
df.to_csv('DOLE.csv')

#query_string = f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={period1}&period2={period2}&interval={interval}&events=history&includeAdjustedClose=true'

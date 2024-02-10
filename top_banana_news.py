from requests_html import HTMLSession

# creating a 'session' with the provided url
session = HTMLSession()
url = 'https://news.google.com/search?q=banana&hl=en-US&gl=US&ceid=US%3Aen'
r = session.get(url)

r.html.render(sleep=1, scrolldown=2)

articles = r.html.find('article')

newslist = []

for item in articles:
    try:
        newsitem = item.find('a', first=True)
        newsarticle = {
        'title' : newsitem.text,
        'link' : newsitem.absolute_links
        }
        newslist.append(newsarticle)
    except:
        pass
print(newslist[0])


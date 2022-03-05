import React from 'react'
import Card from './Card'
 const articles = [
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "The puzzle of America's record Covid hospital rate",
      "description": "Europe has fewer Covid patients in hospital now. Why are the US and Canada bucking the Omicron trend?",
      "url": "http://www.bbc.co.uk/news/world--canada-59960949",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14416/production/_122666928_coviddoctor.jpg",
      "publishedAt": "2022-01-13T15:52:19.6074693Z",
      "content": "By Bernd Debusmann Jr &amp; Holly HonderichBBC News, Washington\r\nImage source, Getty Images\r\nImage caption, A medical worker about to enter a negative pressure room at a US hospital.\r\nEven as the Omi… [+10535 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Chinese agent infiltrating Parliament, MI5 warns",
      "description": "The rare alert sent to MPs comes after a long-running investigation into Christine Ching Kui Lee.",
      "url": "http://www.bbc.co.uk/news/uk-politics-59984380",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/53FC/production/_122700512_266075c8-bd79-473c-89d5-f5cd60d61012.jpg",
      "publishedAt": "2022-01-13T15:37:26.4725759Z",
      "content": "MI5 has issued a rare warning to MPs that a Chinese agent has infiltrated Parliament to interfere in UK politics.\r\nAn alert from the security service said Christine Ching Kui Lee \"established links\" … [+2583 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Prince Andrew accuser unlikely to accept money settlement alone, says lawyer",
      "description": "Virginia Giuffre has accused Prince Andrew of sexual assault - claims he has consistently denied.",
      "url": "http://www.bbc.co.uk/news/uk-59977517",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A8DB/production/_122572234_mediaitem122568623.jpg",
      "publishedAt": "2022-01-13T15:37:22.692268Z",
      "content": "By Lauren TurnerBBC News\r\nImage source, Virginia Roberts\r\nImage caption, Prince Andrew, Virginia Roberts (now Giuffre) and Ghislaine Maxwell in 2001\r\nA lawyer for the woman accusing the Duke of York … [+3686 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Novak Djokovic: Unanswered questions over Covid saga",
      "description": "Novak Djokovic is facing a number of questions over his activities after testing positive for Covid.",
      "url": "http://www.bbc.co.uk/news/world-australia-59977198",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1253D/production/_122696057_mediaitem122696056.jpg",
      "publishedAt": "2022-01-13T15:22:22.7043767Z",
      "content": "Image caption, Australia is yet to decide whether to cancel Djokovic's visa\r\nThe saga over Novak Djokovic's Australian visa has dominated headlines around the world since the tennis star was detained… [+4729 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Canada: Unvaccinated father loses right to see his child",
      "description": "The father is not allowed to see the 12-year-old until next month - unless he gets vaccinated.",
      "url": "http://www.bbc.co.uk/news/world--canada-59979408",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0FE5/production/_122696040_gettyimages-1236772613.jpg",
      "publishedAt": "2022-01-13T12:52:34.0725893Z",
      "content": "Image source, Getty Images\r\nImage caption, Although nearly 90% of Quebec residents are vaccinated, they make up nearly a third of all hospital cases\r\nA Canadian father who has not been vaccinated aga… [+1287 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC Sport",
      "title": "Mali beat Tunisia after controversial ending",
      "description": "Mali and Tunisia's Africa Cup of Nations game ends in chaos after the referee first signals for full-time on 85 minutes, then ends the game when the clock shows 89 minutes and 47 seconds.",
      "url": "http://www.bbc.co.uk/sport/football/59876378",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/841B/production/_122691833_mediaitem122691832.jpg",
      "publishedAt": "2022-01-13T12:52:31.7450434Z",
      "content": "Tunisian backroom staff remonstrated with referee Janny Sikazwe (left) on the pitch after he blew for full-time prematurely\r\nMali and Tunisia's Africa Cup of Nations game finished in chaos after the … [+7189 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Boris Johnson: Ministers rally round PM as he faces calls to quit",
      "description": "Boris Johnson is under pressure to go after admitting attending a drinks party during lockdown.",
      "url": "http://www.bbc.co.uk/news/uk-politics-59981882",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/61E3/production/_122695052_mediaitem122695051.jpg",
      "publishedAt": "2022-01-13T12:22:20.2691019Z",
      "content": "Media caption, Watch Northern Ireland secretary Brandon Lewis give his support to Boris Johnson over his No 10 party apology\r\nCabinet ministers have pledged their support for Boris Johnson, as he fac… [+11004 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "German court finds Syrian bcolonel guilty of crimes against humanity",
      "description": "The German trial of Anwar Raslan is the world's first criminal case over state-led torture in Syria.",
      "url": "http://www.bbc.co.uk/news/world-europe-59949924",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13181/production/_122690287_protest.jpg",
      "publishedAt": "2022-01-13T09:37:21.585431Z",
      "content": "By Jenny HillBBC News Koblenz, Germany\r\nImage source, Getty Images\r\nImage caption, At the start of the trial, pictures of state torture victims in Syria were put on display outside the court\r\nA court… [+4732 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Covid: Ministers back Boris Johnson's call to wait for party inquiry",
      "description": "It follows Boris Johnson's apology for attending an event in the Downing Street garden during lockdown.",
      "url": "http://www.bbc.co.uk/news/live/uk-59977092",
      "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
      "publishedAt": "2022-01-13T08:22:28.4518483Z",
      "content": "Conservative MP Jake Berry says the prime minister's apology was \"very contrite and heartfelt\" and \"to some extent\" allows him to lead the country until the publication of a report into parties in go… [+783 chars]"
  },
  {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hoda Muthana: Alabama IS bride loses appeal for return to US",
      "description": "US-born Hoda Muthana is a citizen and should be allowed to return with her son, the lawsuit argued.",
      "url": "http://www.bbc.co.uk/news/world--canada-59974939",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B5F6/production/_105728564_untitled.png",
      "publishedAt": "2022-01-12T22:52:21.4125182Z",
      "content": "The US Supreme Court has refused to hear the appeal of an American woman who joined the Islamic State (IS) and is seeking re-entry to the US. \r\nHoda Muthana grew up in Alabama and travelled to Syria … [+1805 chars]"
  }
]
const Service = () => {
  return (

  
    <div className='container my-5'>
    <div className='row'>
      <h1 className='text-center'>Our-Services</h1>
      {articles.map((element=>{
        return<div className='col-md-4 d-flex justify-content-center '>
        <Card  title={element.title} description={element.description} urlToImage={element.urlToImage}></Card>
        </div>
      }))}
    </div>
    </div>
  )
}

export default Service

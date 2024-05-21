import React from 'react';
import './newspage.css'; 

const NewsPage = () => {
  const mainArticle = {
    title: "Breaking News: Major Event Unfolds",
    date: "May 18, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Curabitur auctor, nunc vitae scelerisque scelerisque, arcu nunc interdum urna, eget aliquet justo nulla sed lacus. Integer at felis et nisi aliquet suscipit.",
    imageUrl: "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=" // Replace with an actual image URL
  };

  const additionalArticles = [
    {
      title: "Technology: New Innovation in AI",
      date: "May 17, 2024",
      summary: "A groundbreaking development in artificial intelligence is set to revolutionize the industry. Experts say...",
      content: "Artificial intelligence is advancing at a rapid pace, with new innovations emerging that promise to transform various industries. From healthcare to finance, AI is being leveraged to improve efficiency, accuracy, and outcomes. This latest development in AI technology aims to enhance machine learning capabilities, making it more intuitive and human-like in its decision-making processes.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg" 
    },
    {
      title: "Sports: Local Team Wins Championship",
      date: "May 16, 2024",
      summary: "In an exciting finale, the local team clinched the championship title with a last-minute goal...",
      content: "The local sports team achieved a remarkable victory in the championship game, securing their place as the top team in the league. The game was a nail-biter, with both teams playing exceptionally well. The winning goal, scored in the last minute, was a testament to the team's perseverance and skill.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-nqfENm5nYTSiGn86Bkd8_lybyAqF9aorw&s" 
    },
    {
      title: "Health: New Advances in Medicine",
      date: "May 15, 2024",
      summary: "Recent studies have shown promising results in the fight against a variety of diseases...",
      content: "Medical research continues to make significant strides, with recent studies indicating promising results in the treatment of several diseases. Innovations in biotechnology and pharmaceuticals are driving these advancements, offering new hope to patients and healthcare providers. These breakthroughs could potentially lead to more effective treatments and improved quality of life for many individuals.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFslb0pACuoj1Y8UYas6nmUIBGKYM24wo5-w&s" 
    }
  ];

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>News Today</h1>
      </header>
      <main className="main-article">
        <h2>{mainArticle.title}</h2>
        <p><em>{mainArticle.date}</em></p>
        <img src={mainArticle.imageUrl} alt={mainArticle.title} className="news-article-image" />
        <p>{mainArticle.content}</p>
      </main>
      <aside className="additional-articles">
        <h3>More News</h3>
        <ul>
          {additionalArticles.map((article, index) => (
            <li key={index} className="article-summary">
              <h4>{article.title}</h4>
              <p><em>{article.date}</em></p>
              <img src={article.imageUrl} alt={article.title} className="news-article-image" />
              <p>{article.summary}</p>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default NewsPage;

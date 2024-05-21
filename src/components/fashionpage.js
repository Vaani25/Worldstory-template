import React from 'react';
import './fashionpage.css'; 
const FashionPage = () => {
  const fashionArticles = [
    {
      title: "Spring Fashion Trends 2024",
      date: "May 18, 2024",
      summary: "Discover the latest trends in spring fashion for 2024. From vibrant colors to bold patterns, this season has something for everyone...",
      content: "Spring 2024 is all about making bold statements with vibrant colors and unique patterns. This season's fashion highlights include a mix of retro and futuristic styles, with a strong emphasis on sustainability and eco-friendly materials. Designers are focusing on versatile pieces that can be dressed up or down, making them perfect for any occasion.",
      imageUrl: "https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg"
    },
    {
      title: "Sustainable Fashion: Making a Difference",
      date: "May 17, 2024",
      summary: "Explore how sustainable fashion is changing the industry. Learn about eco-friendly materials and ethical production practices...",
      content: "Sustainable fashion is no longer just a trend; it's becoming a fundamental aspect of the industry. Brands are increasingly adopting eco-friendly materials, such as organic cotton and recycled fabrics, and ethical production practices. Consumers are more conscious about the environmental impact of their clothing choices, leading to a shift towards more responsible fashion consumption.",
      imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-jmendezrf-1536619.jpg&fm=jpg" 
    }
  ];

  return (
    <div className="fashion-page">
      <header className="fashion-header">
        <h1>Fashion</h1>
      </header>
      <main className="fashion-articles">
        {fashionArticles.map((article, index) => (
          <article key={index} className="fashion-article">
            <h2>{article.title}</h2>
            <p><em>{article.date}</em></p>
            <img src={article.imageUrl} alt={article.title} className="fashion-article-image" />
            <p>{article.summary}</p>
            <p>{article.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default FashionPage;

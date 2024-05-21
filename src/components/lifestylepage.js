import React from 'react';
import './lifestylepage.css'; 
const LifestylePage = () => {
  const lifestyleArticles = [
    {
      title: "Healthy Living: Tips for a Balanced Diet",
      date: "May 20, 2024",
      summary: "Learn how to maintain a balanced diet with these simple and effective tips. Discover the benefits of healthy eating...",
      content: "Maintaining a balanced diet is essential for overall health and well-being. Incorporate a variety of fruits, vegetables, whole grains, and lean proteins into your meals. Avoid processed foods and sugary drinks. Drinking plenty of water and staying hydrated is also crucial. These simple changes can make a significant difference in your energy levels and overall health.",
      imageUrl: "https://assets-global.website-files.com/5ca5fe687e34be0992df1fbe/611bdef355c6b7d4f6e9b659_balanced-diet-concept-VX8E3ZW-min.jpg" 
    },
    {
      title: "Minimalist Living: How to Declutter Your Home",
      date: "May 19, 2024",
      summary: "Discover the benefits of minimalist living and learn how to declutter your home effectively. Simplify your life...",
      content: "Minimalist living is about focusing on what truly matters by eliminating unnecessary possessions and distractions. Start by decluttering your home room by room. Keep only items that are useful or bring you joy. Organize your space to create a calm and peaceful environment. Adopting a minimalist lifestyle can reduce stress and increase your overall happiness.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPt3Beq0TXS0p_WxMiOOzmrxC7E0Wy3Daa5QAnFDhSg&s" 
    },
    {
      title: "Mindfulness and Meditation: A Path to Inner Peace",
      date: "May 18, 2024",
      summary: "Explore the benefits of mindfulness and meditation. Learn techniques to reduce stress and improve your mental health...",
      content: "Mindfulness and meditation practices can significantly improve your mental and emotional well-being. Start with simple breathing exercises to calm your mind. Gradually incorporate guided meditations into your daily routine. These practices help you stay present and focused, reducing stress and enhancing your overall quality of life. Consistency is key to experiencing the full benefits of mindfulness.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1024/1*tW6VQ9YsJGjLnp25jl9kqg.png" 
    }
  ];

  return (
    <div className="lifestyle-page">
      <header className="lifestyle-header">
        <h1>Lifestyle</h1>
      </header>
      <main className="lifestyle-articles">
        {lifestyleArticles.map((article, index) => (
          <article key={index} className="lifestyle-article">
            <h2>{article.title}</h2>
            <p><em>{article.date}</em></p>
            <img src={article.imageUrl} alt={article.title} className="lifestyle-article-image" />
            <p>{article.summary}</p>
            <p>{article.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default LifestylePage;

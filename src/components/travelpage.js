import React from 'react';
import './travelpage.css'; 

const TravelPage = () => {
  const travelArticles = [
    {
      title: "Exploring the Wonders of Paris",
      date: "May 19, 2024",
      summary: "Experience the magic of Paris, from the iconic Eiffel Tower to the charming streets of Montmartre...",
      content: "Paris, the city of lights, is a destination that captures the hearts of travelers from around the world. Start your journey at the Eiffel Tower, where you can enjoy breathtaking views of the city. Stroll through the historic neighborhoods of Montmartre and the Marais, and don't miss the world-famous Louvre Museum. Paris offers a perfect blend of history, culture, and modern attractions.",
      imageUrl: "https://www.makemytrip.com/travel-guide/media/dg_image/paris/Eiffel-Tower.jpg" 
    },
    {
      title: "Adventures in the Amazon Rainforest",
      date: "May 18, 2024",
      summary: "Discover the diverse wildlife and lush landscapes of the Amazon rainforest. An adventure of a lifetime awaits...",
      content: "The Amazon rainforest, the largest tropical rainforest in the world, is home to an incredible array of wildlife and plant species. Embark on a guided tour to explore the dense jungle, spot exotic animals, and learn about the unique ecosystem. Whether you're trekking through the forest or cruising along the Amazon River, this adventure promises unforgettable experiences.",
      imageUrl: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" 
    },
    {
      title: "A Journey Through the Scenic Swiss Alps",
      date: "May 17, 2024",
      summary: "The Swiss Alps offer stunning vistas, world-class skiing, and charming alpine villages. A destination for all seasons...",
      content: "The Swiss Alps are a paradise for nature lovers and adventure seekers. In winter, enjoy world-class skiing and snowboarding in resorts like Zermatt and St. Moritz. In summer, hike through picturesque trails that offer panoramic views of snow-capped peaks, lush meadows, and pristine lakes. The charming alpine villages provide a perfect base for exploring this breathtaking region.",
      imageUrl: "https://media.istockphoto.com/id/1370346385/photo/amazing-mountain-ridge-view-from-the-mannlichen-station-grindelwald-switzerland.jpg?s=612x612&w=0&k=20&c=GUD6Lf3JeHR_u-2lxlyr665iig91ZsMJOqgAJR6WNn8="
    }
  ];

  return (
    <div className="travel-page">
      <header className="travel-header">
        <h1>Travel</h1>
      </header>
      <main className="travel-articles">
        {travelArticles.map((article, index) => (
          <article key={index} className="travel-article">
            <h2>{article.title}</h2>
            <p><em>{article.date}</em></p>
            <img src={article.imageUrl} alt={article.title} className="travel-article-image" />
            <p>{article.summary}</p>
            <p>{article.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default TravelPage;

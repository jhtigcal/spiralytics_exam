import React from 'react';

const articleList = [
  {
    description: '9 Annoying Things Every Designer Does',
    date: 'April 8, 2014',
  },
  {
    description:
      "10 Free Online Tools That Will Make A Writer's Life Easier (28/30)",
    date: 'February 16, 2015',
  },
  {
    description: '15 Websites Every Designer Must Bookmark This 2015 (18/30)',
    date: 'February 4, 2015',
  },
  {
    description:
      'Going Viral: 8 Easy Ways To Get Maximum Traffic To Your Blogposts (23/30)',
    date: 'February 9, 2015',
  },
];

export default function Articles() {
  return (
    <section id="article-section">
      <div className="container">
        <h1>
          GARGANTUAN NEWS AND MAMMOTH GOODNESS FROM THE TOMES OF THE SPIRALYTICS
          BLOG.
        </h1>
        <div className="article-list">
          {articleList.map((article, index) => {
            return (
              <div key={index} className={`article article-${index + 1}`}>
                <div className="img-place"></div>
                <p>
                  {article.description}
                  <br />
                  <span>{article.date}</span>
                </p>
              </div>
            );
          })}

          <button className="btn">View All Articles</button>
        </div>
      </div>
    </section>
  );
}

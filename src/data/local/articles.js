let articles = [
  {
    id: 'article-1',
    image: '/public/articles/article-1.jpg',
    title: 'Capturing Ideas: Unlocking the Door to Creativity',
    author: 'ekorahy',
    readingTime: '6 Min',
    createdAt: 'May 12, 2024',
    isPopular: true,
    body: `<p className='mb-2'>In every aspect of life, ideas serve as the cornerstone of innovation and development. From scientific discoveries to artistic creations, ideas mark the starting point of every creative journey. However, often, brilliant ideas come to mind only to fade away amidst the hustle and bustle of daily life. This is why it's crucial to capture these ideas.</p>

    <h3 className='font-semibold'>Unlocking Creativity</h3>
    <p className='mb-2'>The importance of capturing ideas lies in its ability to unlock the door to creativity, which sometimes remains hidden within our minds. When we articulate our ideas in writing or sketches, we provide them with room to evolve and grow. Moreover, capturing ideas also helps us to see patterns and connections between various concepts that might be overlooked if merely contemplated without recording.</p>
    
    <h3 className='font-semibold'>Preventing Idea Loss</h3>
    <p className='mb-2'>One of the primary reasons we often lose ideas is because our minds are complex universes where billions of nerve impulses continuously swirl. Without recording, these ideas easily get lost within it, buried by everyday worries and pressing priorities. By capturing ideas, we create a trail that can be revisited when we're ready to further develop them.</p>
    
    <h3 className='font-semibold'>Strengthening Creative Consistency</h3>
    <p className='mb-2'>Creativity doesn't always come consistently. There are times when we feel highly inspired and productive, and there are times when we feel stuck in a creative rut. Capturing ideas helps us build creative consistency by providing us with fuel to burn when we feel less inspired. With a collection of recorded ideas, we can revisit them during challenging times and find new inspiration.</p>
    
    <h3 className='font-semibold'>Encouraging Reflection and Personal Growth</h3>
    <p className='mb-2'>Capturing ideas also serves as a form of self-reflection. When we revisit the ideas we've recorded, we can observe the development of our thoughts over time. This not only helps us appreciate our creative journey but also allows us to track trends in our own way of thinking and interests. Thus, capturing ideas not only aids in creation but also in personal growth.</p>
    
    <h3 className='font-semibold'>Facilitating Collaboration and Sharing</h3>
    <p className='mb-2'>Lastly, capturing ideas opens the door for collaboration and sharing with others. Recorded ideas can easily be shared and debated, fostering rich discussions and providing opportunities for others to contribute to their development. This is an essential aspect of the creative process that is often overlooked: the ability to collaborate and learn from others.</p>
    
    <h3 className='font-semibold'>Conclusion</h3>
    <p className='mb-2'>From simple ideas to revolutionary concepts, capturing ideas is the crucial first step in our creative journey. It unlocks unexpected creativity, prevents the loss of valuable ideas, strengthens creative consistency, encourages reflection and personal growth, and facilitates collaboration and sharing. So, don't hesitate to capture your brilliant ideas—who knows, they might just be the key to creating something extraordinary.</p>`,
  },
];

function getArticles() {
  return articles;
}

function getArticle(id) {
  const article = articles.find((article) => article.id === id);
  return article;
}

function getMostPopularArticle() {
  const popularArticles = articles.filter((article) => article.isPopular);
  popularArticles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return popularArticles.slice(0, 1);
}

export { getArticles, getArticle, getMostPopularArticle };

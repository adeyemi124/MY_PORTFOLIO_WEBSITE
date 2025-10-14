import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const BlogSection = () => (
  <section id="blog" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">From the Blog</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sharing my thoughts on web development, technology, and more.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link to={`/blog/${post.slug}`} key={index} className="bg-white rounded-lg shadow-md overflow-hidden block">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <span className="text-green-600 hover:text-green-500 font-semibold">
                Read More &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;

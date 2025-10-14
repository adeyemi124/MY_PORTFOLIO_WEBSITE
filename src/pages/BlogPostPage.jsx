import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import Footer from '../components/Footer';

const readingTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

const slugify = (str) =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [htmlContent, setHtmlContent] = useState('');
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (!post) return;

    // Parse the raw HTML content, add ids to headings, and build a TOC
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2, h3'));
    const tocItems = headings.map((h) => {
      const text = h.textContent || '';
      const id = slugify(text);
      h.setAttribute('id', id);
      return { id, text, tag: h.tagName.toLowerCase() };
    });

    setToc(tocItems);
    setHtmlContent(doc.body.innerHTML);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Post not found</div>
      </div>
    );
  }

  // Fallback plain-text for reading time calculation
  const tempEl = document.createElement('div');
  tempEl.innerHTML = post.content;
  const plainText = tempEl.textContent || tempEl.innerText || '';

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="mb-12">
          <Link to="/" className="text-sm text-gray-500 hover:underline">← Back to home</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div>By <span className="font-medium text-gray-700">Adebayo Adeyemi</span></div>
            <div>•</div>
            <div>{post.date || 'Sep 30, 2025'}</div>
            <div>•</div>
            <div>{readingTime(plainText)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article */}
          <article className="lg:col-span-3">
            <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
            <div className="prose lg:prose-xl max-w-none">
              <div dangerouslySetInnerHTML={{ __html: htmlContent || post.content }} />
            </div>
            <style>{`
              /* Underline subheadings and add extra vertical spacing */
              .prose h3 {
                text-decoration: underline;
                text-underline-offset: 6px;
                margin-top: 1.75rem;
                margin-bottom: 0.75rem;
                font-size: 1.375rem; /* ~22px */
                line-height: 1.25;
                font-weight: 700;
              }
              .prose h2 { margin-top: 2rem; margin-bottom: 1rem; }
              .prose p { margin-bottom: 1.15rem; line-height: 1.75; }
              .prose ul { margin-bottom: 1rem; }
              .prose table { margin: 1rem 0; }
            `}</style>

            {/* CTA & Sharing */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <a href={`https://wa.link/jjko7t`} target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg mr-3">Message me on WhatsApp</a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`} target="_blank" rel="noreferrer" className="inline-block text-gray-600 hover:text-gray-800">Share on Twitter</a>
              </div>
              <div className="text-sm text-gray-500">Enjoyed this article? Check out more posts below.</div>
            </div>
          </article>

          {/* Sidebar / TOC */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="mb-6 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">On this page</h4>
                {toc.length === 0 ? (
                  <div className="text-sm text-gray-500">No sections</div>
                ) : (
                  <ul className="space-y-2 text-sm">
                    {toc.map((item) => (
                      <li key={item.id} className={item.tag === 'h2' ? 'font-medium' : 'pl-3'}>
                        <a href={`#${item.id}`} className="text-gray-600 hover:text-green-600">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <h5 className="font-semibold mb-2">About the author</h5>
                <p className="text-sm text-gray-600">Adebayo builds thoughtful web applications and writes about frontend best practices, performance, and accessibility.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

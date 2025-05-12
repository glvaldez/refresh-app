import './styles/reset.css';
import './styles/theme.css';
import './styles/layout.css';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import ArticleCard from './components/articles/ArticleCard';
import Footer from './components/layout/Footer';

export function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Hero />
        <section className="articles">
          <ArticleCard 
            title="The Future of AI in Software Development"
            author="Jane Smith"
            date="May 12, 2025"
            readTime="5 min read"
          />
          <ArticleCard 
            title="Understanding TypeScript's Type System"
            author="John Doe"
            date="May 11, 2025"
            readTime="8 min read"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

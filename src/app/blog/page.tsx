import { getAllPosts } from '@/lib/markdown';
import BlogCard from '@/components/BlogCard';
import { Header } from '@/components/Header';
// 1. Adaugă importul pentru Footer aici:
import { Footer } from '@/components/Footer'; // Folosește { Footer } dacă ai export const Footer în loc de export default

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    // Recomand să adaugi "flex flex-col" aici pentru a putea împinge footer-ul jos
    <main className="min-h-screen bg-white flex flex-col">
      
      {/* Meniul tău cu logo-ul și butonul */}
      <Header />
      
      {/* Am adăugat "flex-grow" ca acest container să ocupe tot spațiul disponibil și să împingă footer-ul jos de tot */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Header-ul paginii */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Noutăți și Sfaturi
          </h1>
          <p className="text-lg text-gray-600">
            Ghiduri utile despre traduceri, înmatriculări și acte auto.
          </p>
        </div>
        
        {/* Grila de carduri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard 
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>

      {/* 2. Adaugă componenta Footer aici, la final */}
      <Footer />
      
    </main>
  );
}
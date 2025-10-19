import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";

export default function BlogSectionPage() {
  return (
    <main>
      <AppNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
        <p className="text-center text-gray-600">
          Blog content coming soon...
        </p>
      </div>
      
      <Footer />
    </main>
  );
}

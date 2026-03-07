import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PopupMessage from "./PopUpMessage";
import { Link } from "react-router-dom";


interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  categories: string[];
  status: string;
  description: string;
  image: string | null;
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [popup, setPopup] = useState<string | null>(null);

  useEffect(() => {
    document.title = `Rezultate căutare: ${query}`;

    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));

    fetch(`http://localhost:8080/books/search?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Eroare la căutare:", err);
        setLoading(false);
      });
  }, [query]);

  const addToCart = (book: Book) => {
    const cart: Book[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const exists = cart.some(item => item.id === book.id);
    if (exists) {
      setPopup("Cartea este deja în coș!");
      return;
    }

    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartChanged"));
    setPopup("Carte adăugată în coș!");
  };

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Se caută...</h2>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#5f2669ff",
        marginBottom: "20px"
      }}>
        🔍 Rezultate pentru: "{query}"
      </h1>

      <p style={{
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#666",
        marginBottom: "40px"
      }}>
        {books.length === 0
          ? "Nu am găsit nicio carte care să corespundă căutării tale."
          : `Am găsit ${books.length} ${books.length === 1 ? "carte" : "cărți"}`}
      </p>

      {books.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px",
          backgroundColor: "#f6e8ff",
          borderRadius: "20px",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          <p style={{ fontSize: "1.3rem", marginBottom: "20px" }}>
            💡 Sugestii pentru căutare:
          </p>
          <ul style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.1rem",
            lineHeight: "2"
          }}>
            <li>✓ Verifică ortografia</li>
            <li>✓ Încearcă cuvinte mai generale</li>
            <li>✓ Caută după autor sau titlu</li>
            <li>✓ Explorează categoriile noastre</li>
          </ul>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "25px",
            padding: "20px",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                background: "#f6e8ff",
                padding: "15px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "360px",
                  background: "#d8c2f0",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "10px",
                }}
              >
                {book.image ? (
                  <Link to={`/book/${book.id}`}>
                    <img
                      src={`http://localhost:8080/uploads/${book.image}`}
                      alt="coperta"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                ) : (

                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#7a4fa1",
                    }}
                  >
                    Fără imagine
                  </div>
                )}
              </div>

              <Link
                to={`/book/${book.id}`}
                style={{ textDecoration: "none", color: "#4a0a78" }}
              >
                <h2 style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
                  {book.title}
                </h2>
              </Link>

              <p style={{ margin: 0, fontWeight: "bold" }}>{book.author}</p>
              <p style={{ margin: 0 }}>An: {book.year}</p>

              <div style={{ margin: 0 }}>
                {book.categories.map((cat, index) => (
                  <p
                    key={index}
                    style={{
                      margin: "2px 0",
                      fontWeight: "bold",
                      color: "#5a1e5f"
                    }}
                  >
                    {cat.replaceAll("_", " ")}
                  </p>
                ))}
              </div>

              <p
                style={{
                  marginTop: "10px",
                  color: book.status === "disponibil" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {book.status}
              </p>

              {user && book.status === "disponibil" && (
                <button
                  onClick={() => addToCart(book)}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#7a0fc4",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Adaugă în coș
                </button>
              )}

              {user && book.status !== "disponibil" && (
                <button
                  disabled
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "not-allowed",
                  }}
                >
                  Indisponibilă
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      {popup && (
        <PopupMessage
          text={popup}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
}
import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Termeni și Condiții | MyLibrary";
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#f9f4fc"
    }}>
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto",
        backgroundColor: "white",
        padding: "60px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ 
          textAlign: "center", 
          color: "#5f2669ff",
          fontSize: "3rem",
          marginBottom: "40px"
        }}>
          📋 Termeni și Condiții
        </h1>

        <p style={{ 
          fontSize: "1rem", 
          color: "#666",
          textAlign: "center",
          marginBottom: "40px"
        }}>
          Ultima actualizare: Decembrie 2024
        </p>

        {/* Sectiunea 1 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            1. Introducere
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            Prezentul document („Termenii și Condițiile") stabilește condițiile contractuale aplicabile utilizării platformei MyLibrary, administrată de MyLibrary SRL, cu sediul în Cluj-Napoca, România. Accesarea sau utilizarea Platformei constituie acceptarea completă și necondiționată a acestor Termeni și Condiții.
          </p>
        </section>

        {/* Sectiunea 2 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            2. Crearea și utilizarea contului
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>2.1.</strong> Pentru utilizarea serviciilor este necesară crearea unui Cont, folosind informații reale și complete.</p>
            <p><strong>2.2.</strong> Utilizatorul este responsabil pentru păstrarea confidențialității datelor de autentificare.</p>
            <p><strong>2.3.</strong> MyLibrary poate suspenda sau închide orice cont care încalcă prezentul document sau este folosit abuziv.</p>
          </div>
        </section>

        {/* Sectiunea 3 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            3. Serviciile de împrumut
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>3.1. Durata standard:</strong> 14 zile calendaristice.</p>
            <p><strong>3.2. Prelungirea:</strong> posibilă o singură dată, pentru încă 7 zile, dacă Produsul nu este rezervat de alt Membru.</p>
            <p><strong>3.3. Limită:</strong> maximum 5 cărți împrumutate simultan.</p>
            <p><strong>3.4. Întârzieri:</strong></p>
            <ul style={{ paddingLeft: "30px", marginTop: "10px" }}>
              <li>la peste 3 zile întârziere, contul poate fi suspendat;</li>
              <li>la peste 14 zile, MyLibrary poate solicita returnarea imediată sau achitarea unei taxe compensatorii.</li>
            </ul>
            <p><strong>3.5. Deteriorări sau pierderi:</strong> Utilizatorul este responsabil pentru Produs pe durata împrumutului. Pierderea sau deteriorarea majoră poate atrage:</p>
            <ul style={{ paddingLeft: "30px", marginTop: "10px" }}>
              <li>plata valorii Produsului, sau</li>
              <li>înlocuirea cu un exemplar identic.</li>
            </ul>
          </div>
        </section>

        {/* Sectiunea 4 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            4. Achiziții și politica de retur
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify",
            fontStyle: "italic",
            marginBottom: "15px"
          }}>
            Dacă Platforma oferă și vânzare de cărți fizice:
          </p>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>4.1. Disponibilitatea produselor:</strong> Comenzile sunt procesate în limita stocului disponibil.</p>
            <p><strong>4.2. Prețuri și modalități de plată:</strong> Prețurile includ TVA. MyLibrary își rezervă dreptul de a le actualiza fără notificare prealabilă. Plățile se pot efectua online sau ramburs, în funcție de opțiunile afișate pe Platformă.</p>
            <p><strong>4.3. Dreptul de retragere (14 zile):</strong> Consumatorul poate returna produsele fizice în termen de 14 zile, conform OUG 34/2014.</p>
            <p style={{ marginLeft: "20px" }}>Nu pot fi returnate:</p>
            <ul style={{ paddingLeft: "50px", marginTop: "10px" }}>
              <li>e-book-urile deja descărcate;</li>
              <li>produsele deteriorate sau utilizate în mod vizibil.</li>
            </ul>
            <p><strong>4.4. Rambursarea:</strong> Rambursarea sumelor se face în maximum 14 zile de la primirea produsului returnat.</p>
          </div>
        </section>

        {/* Sectiunea 5 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            5. Drepturi de autor și utilizarea conținutului
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>5.1.</strong> Conținutul Platformei (texte, imagini, descrieri, cărți digitale) este protejat de legislația privind drepturile de autor.</p>
            <p><strong>5.2.</strong> Utilizatorului îi este interzis să copieze, distribuie sau reproducă orice material fără permisiunea titularului drepturilor.</p>
            <p><strong>5.3.</strong> Încălcarea acestor prevederi poate atrage suspendarea contului și eventuală răspundere civilă sau penală.</p>
          </div>
        </section>

        {/* Sectiunea 6 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            6. Limitarea răspunderii
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>6.1.</strong> MyLibrary depune toate eforturile pentru funcționarea corectă a Platformei, însă nu garantează:</p>
            <ul style={{ paddingLeft: "30px", marginTop: "10px" }}>
              <li>disponibilitate neîntreruptă,</li>
              <li>lipsa erorilor tehnice,</li>
              <li>compatibilitatea cu orice dispozitiv.</li>
            </ul>
            <p><strong>6.2.</strong> MyLibrary nu răspunde pentru:</p>
            <ul style={{ paddingLeft: "30px", marginTop: "10px" }}>
              <li>pierderi de date, daune indirecte sau profit nerealizat;</li>
              <li>deteriorări ale produselor cauzate de utilizator;</li>
              <li>conținutul sau calitatea produselor editoriale furnizate de terți.</li>
            </ul>
            <p><strong>6.3.</strong> Utilizatorul are obligația de a folosi Platforma în conformitate cu legislația în vigoare.</p>
          </div>
        </section>

        {/* Sectiunea 7 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            7. Prelucrarea datelor cu caracter personal
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>7.1.</strong> Prelucrarea datelor are loc conform Regulamentului (UE) 679/2016 (GDPR).</p>
            <p><strong>7.2.</strong> Datele colectate sunt utilizate pentru furnizarea serviciilor, realizarea împrumuturilor, gestionarea comenzilor și comunicările necesare.</p>
            <p><strong>7.3.</strong> Utilizatorul are dreptul de acces, rectificare, ștergere, restricționare și opoziție.</p>
            <p><strong>7.4.</strong> Politica detaliată de confidențialitate este disponibilă pe Platformă.</p>
          </div>
        </section>

        {/* Sectiunea 8 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            8. Securitate
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            MyLibrary adoptă măsuri tehnice și organizatorice adecvate pentru protejarea datelor. Totuși, nu poate garanta securitatea absolută a transmisiei de informații prin internet.
          </p>
        </section>

        {/* Sectiunea 9 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            9. Modificarea Termenilor și Condițiilor
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            MyLibrary poate modifica acest document oricând. Continuarea utilizării Platformei constituie acceptarea versiunii actualizate.
          </p>
        </section>

        {/* Sectiunea 10 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            10. Legea aplicabilă și litigii
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            textAlign: "justify"
          }}>
            <p><strong>10.1.</strong> Termenii și Condițiile sunt guvernate de legislația României.</p>
            <p><strong>10.2.</strong> Eventualele litigii se vor soluționa mai întâi pe cale amiabilă, iar dacă acest lucru nu este posibil, de instanțele competente din România.</p>
          </div>
        </section>

        {/* Sectiunea 11 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#7a0fc4",
            fontSize: "1.8rem",
            marginBottom: "20px"
          }}>
            11. Contact
          </h2>
          <div style={{ 
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333"
          }}>
            <p>Pentru suport sau sesizări:</p>
            <p style={{ marginTop: "15px" }}>
              <strong>Email:</strong> contact@mylibrary.ro<br/>
              <strong>Telefon:</strong> +40 264 123 456<br/>
              <strong>Adresă:</strong> Piața Unirii nr. 15, Cluj-Napoca, România
            </p>
          </div>
        </section>

        {/* Acceptare */}
        <div style={{
          backgroundColor: "#f6e8ff",
          padding: "30px",
          borderRadius: "15px",
          marginTop: "40px",
          textAlign: "center"
        }}>
          <p style={{ 
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#5f2669ff",
            marginBottom: "15px"
          }}>
            ✓ Prin utilizarea Platformei confirmați că ați citit și acceptat acești Termeni și Condiții.
          </p>
        </div>
      </div>
    </div>
  );
}
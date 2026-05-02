import React from 'react';

const PoliticaDeConfidentialitate: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh', 
      textAlign: 'center', 
      padding: '2rem',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1.5rem', 
        color: '#1a202c' // O nuanță închisă, potrivită cu designul tău
      }}>
        Politică de confidențialitate
      </h1>
      
      <div style={{ 
        padding: '2.5rem', 
        border: '2px dashed #e2e8f0', 
        borderRadius: '12px', 
        backgroundColor: '#f8fafc',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem', 
          color: '#3b82f6' // Albastrul din logo-ul tău (aprox.)
        }}>
          🚧 Pagină în construcție 🚧
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#475569', 
          lineHeight: '1.6' 
        }}>
          Secțiunea de Politică de confidențialitate este momentan în curs de redactare pentru a ne asigura că respectăm toate normele legale în vigoare.
        </p>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#475569', 
          marginTop: '1rem',
          fontWeight: '500'
        }}>
          Va fi gata și disponibilă aici în cel mai scurt timp. Îți mulțumim pentru înțelegere!
        </p>
      </div>
    </div>
  );
};

export default PoliticaDeConfidentialitate;
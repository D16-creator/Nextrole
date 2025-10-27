export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Nextrole</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center' }}>
        Empowering laid-off and underrepresented professionals with AI-driven resume tools, 
        job proposals, and bilingual (Spanish-English) support to help you land your next high-paying opportunity.
      </p>
    </main>
  );
}

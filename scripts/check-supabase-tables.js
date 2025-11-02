// ============================================
// SCRIPT: Verificar tablas y campos en Supabase
// ============================================

const SUPABASE_URL = 'https://gfnjlmfziczimaohgkct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbmpsbWZ6aWN6aW1hb2hna2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzc0NjgsImV4cCI6MjA2OTcxMzQ2OH0.1hn6Tse7FI58VA90kU2YXiweNesa8Ndrl0w9qKixph0';

async function checkSupabaseTables() {
  console.log('🔍 Verificando tablas en Supabase...\n');
  
  try {
    // Verificar si existe la tabla investment_leads
    const response = await fetch(`${SUPABASE_URL}/rest/v1/investment_leads?limit=1`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('✅ Tabla "investment_leads" EXISTE\n');
      
      // Obtener un registro para ver los campos
      const data = await response.json();
      
      if (data.length > 0) {
        console.log('📋 CAMPOS ACTUALES:');
        console.log('─────────────────────────────────────');
        Object.keys(data[0]).forEach(field => {
          console.log(`  • ${field}`);
        });
        console.log('─────────────────────────────────────\n');
        
        console.log('📊 REGISTROS TOTALES:', data.length > 0 ? 'Al menos 1' : '0');
      } else {
        console.log('⚠️  La tabla existe pero está VACÍA');
        console.log('No se pueden ver los campos sin datos.\n');
      }
      
      // Verificar campos necesarios
      console.log('\n🎯 CAMPOS NECESARIOS PARA LA LANDING:');
      console.log('─────────────────────────────────────');
      const requiredFields = [
        'id',
        'full_name',
        'email',
        'phone',
        'investment_range',
        'investor_profile', // ← Este falta
        'source',
        'message',
        'created_at'
      ];
      
      requiredFields.forEach(field => {
        const exists = data.length > 0 && data[0].hasOwnProperty(field);
        const status = exists ? '✅' : '❌';
        console.log(`  ${status} ${field}`);
      });
      console.log('─────────────────────────────────────\n');
      
    } else if (response.status === 404) {
      console.log('❌ Tabla "investment_leads" NO EXISTE\n');
      console.log('📝 NECESITAS CREAR LA TABLA CON ESTOS CAMPOS:');
      console.log('─────────────────────────────────────');
      console.log('  • id (uuid, primary key, auto)');
      console.log('  • full_name (text, required)');
      console.log('  • email (text, required)');
      console.log('  • phone (text, required)');
      console.log('  • investment_range (text, required)');
      console.log('  • investor_profile (text, nullable)');
      console.log('  • source (text, nullable)');
      console.log('  • message (text, nullable)');
      console.log('  • created_at (timestamp, auto)');
      console.log('─────────────────────────────────────\n');
    } else {
      console.log('⚠️  Error al verificar:', response.status, response.statusText);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Ejecutar
checkSupabaseTables();

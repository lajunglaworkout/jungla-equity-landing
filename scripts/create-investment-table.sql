-- ============================================
-- CREAR TABLA: investment_leads
-- Para guardar leads de la landing de inversión
-- ============================================

-- Crear la tabla si no existe
CREATE TABLE IF NOT EXISTS investment_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  investment_range TEXT NOT NULL,
  investor_profile TEXT,
  source TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Añadir índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_investment_leads_email ON investment_leads(email);
CREATE INDEX IF NOT EXISTS idx_investment_leads_created_at ON investment_leads(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE investment_leads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT a usuarios anónimos (para el formulario)
CREATE POLICY "Allow anonymous insert" ON investment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: Permitir SELECT solo a usuarios autenticados (para el dashboard)
CREATE POLICY "Allow authenticated select" ON investment_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Comentarios para documentación
COMMENT ON TABLE investment_leads IS 'Leads generados desde la landing de inversión Jungla Equity';
COMMENT ON COLUMN investment_leads.full_name IS 'Nombre completo del inversor';
COMMENT ON COLUMN investment_leads.email IS 'Email de contacto';
COMMENT ON COLUMN investment_leads.phone IS 'Teléfono de contacto';
COMMENT ON COLUMN investment_leads.investment_range IS 'Rango de inversión: 20k-50k, 50k-100k, 100k+';
COMMENT ON COLUMN investment_leads.investor_profile IS 'Perfil: Primera vez, Alguna experiencia, Experimentado, Profesional';
COMMENT ON COLUMN investment_leads.source IS 'Fuente de tráfico: Instagram, LinkedIn, Google, etc.';
COMMENT ON COLUMN investment_leads.message IS 'Mensaje opcional del inversor';

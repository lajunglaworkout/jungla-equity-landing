-- Tabla de inversores
CREATE TABLE IF NOT EXISTS investors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  investment_range VARCHAR(50),
  source VARCHAR(100),
  status VARCHAR(50) DEFAULT 'lead',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de inversiones
CREATE TABLE IF NOT EXISTS investments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id) ON DELETE CASCADE,
  investment_type VARCHAR(50),
  amount DECIMAL(12, 2),
  percentage DECIMAL(5, 2),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de formularios
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id) ON DELETE CASCADE,
  form_data JSONB,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de eventos analytics
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id VARCHAR(100),
  event_name VARCHAR(100),
  event_data JSONB,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de reportes
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id) ON DELETE CASCADE,
  report_type VARCHAR(50),
  report_data JSONB,
  generated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para optimización
CREATE INDEX idx_investors_email ON investors(email);
CREATE INDEX idx_investors_created_at ON investors(created_at);
CREATE INDEX idx_investments_investor_id ON investments(investor_id);
CREATE INDEX idx_analytics_session_id ON analytics_events(session_id);
CREATE INDEX idx_analytics_created_at ON analytics_events(created_at);
CREATE INDEX idx_form_submissions_investor_id ON form_submissions(investor_id);

-- RLS (Row Level Security)
ALTER TABLE investors ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
CREATE POLICY "Allow insert on investors" ON investors FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert on form_submissions" ON form_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert on analytics_events" ON analytics_events FOR INSERT WITH CHECK (true);

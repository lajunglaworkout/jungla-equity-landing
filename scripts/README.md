# 📊 Scripts de Supabase

Scripts para gestionar la base de datos de leads de inversión.

---

## 🔍 1. Verificar tablas existentes

### **Opción A: Desde el navegador**

1. Abre tu web: https://junglainvesment.netlify.app
2. Abre la consola (F12)
3. Copia y pega el contenido de `check-supabase-tables.js`
4. Presiona ENTER

### **Opción B: Desde Node.js**

```bash
cd scripts
node check-supabase-tables.js
```

**Salida esperada:**
```
🔍 Verificando tablas en Supabase...

✅ Tabla "investment_leads" EXISTE

📋 CAMPOS ACTUALES:
─────────────────────────────────────
  • id
  • full_name
  • email
  • phone
  • investment_range
  • source
  • message
  • created_at
─────────────────────────────────────

🎯 CAMPOS NECESARIOS PARA LA LANDING:
─────────────────────────────────────
  ✅ id
  ✅ full_name
  ✅ email
  ✅ phone
  ✅ investment_range
  ❌ investor_profile  ← FALTA ESTE
  ✅ source
  ✅ message
  ✅ created_at
─────────────────────────────────────
```

---

## 🏗️ 2. Crear/actualizar tabla

### **Paso 1: Ir a Supabase SQL Editor**

1. Ve a: https://supabase.com/dashboard/project/gfnjlmfziczimaohgkct/sql
2. Click en **"New query"**

### **Paso 2: Ejecutar el SQL**

1. Copia el contenido de `create-investment-table.sql`
2. Pégalo en el editor
3. Click en **"Run"**

### **Paso 3: Verificar**

1. Ve a: https://supabase.com/dashboard/project/gfnjlmfziczimaohgkct/editor
2. Busca la tabla `investment_leads`
3. Verifica que tenga todos los campos

---

## ✅ 3. Añadir campo faltante

Si la tabla ya existe pero falta `investor_profile`:

```sql
ALTER TABLE investment_leads 
ADD COLUMN IF NOT EXISTS investor_profile TEXT;
```

---

## 📋 Estructura de la tabla

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `id` | UUID | ✅ | ID único (auto) |
| `full_name` | TEXT | ✅ | Nombre completo |
| `email` | TEXT | ✅ | Email de contacto |
| `phone` | TEXT | ✅ | Teléfono |
| `investment_range` | TEXT | ✅ | 20k-50k, 50k-100k, 100k+ |
| `investor_profile` | TEXT | ❌ | Primera vez, Experimentado, etc. |
| `source` | TEXT | ❌ | Instagram, LinkedIn, Google... |
| `message` | TEXT | ❌ | Mensaje opcional |
| `created_at` | TIMESTAMP | ✅ | Fecha de creación (auto) |

---

## 🔐 Seguridad (RLS)

La tabla tiene Row Level Security activado:

- **INSERT:** Permitido para usuarios anónimos (formulario web)
- **SELECT:** Solo usuarios autenticados (dashboard admin)
- **UPDATE/DELETE:** Solo usuarios autenticados

---

## 🚀 Después de crear la tabla

1. Ejecuta el script de verificación
2. Actualiza `form-handler.js` para incluir `investor_profile` en Supabase
3. Prueba el formulario

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que estás en el proyecto correcto: `gfnjlmfziczimaohgkct`
2. Comprueba que tienes permisos de administrador
3. Revisa los logs en Supabase Dashboard

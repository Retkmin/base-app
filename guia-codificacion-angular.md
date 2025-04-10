# 🧭 Guía de Codificación Angular — Estándares Profesionales

## 🎯 Objetivo
Establecer un conjunto de buenas prácticas, reglas y principios para mantener una base de código Angular **limpia**, **mantenible**, **performante** y **alineada con los estándares actuales del framework (v16–17)**.

---

## 🏗️ Arquitectura y Diseño

### 🔸 Aplicar arquitectura limpia en Angular
- Separar lógica de presentación, negocio y acceso a datos.
- Definir claramente la estructura de dominios: core, features, y evitar shared como módulo genérico. En su lugar, usar componentes standalone o módulos de feature bien delimitados para compartir recursos.
- Utilizar componentes contenedores y presentacionales (Smart/Dumb).
- Servicios divididos por responsabilidad: `*Service`, `*Facade`, `*Store`.

### 🔸 Encapsular la lógica siguiendo SOLID
- Un componente = una responsabilidad.
- La lógica de negocio debe vivir en servicios, no en componentes.
- Seguir principios de diseño como Inversión de Dependencias y Abierto/Cerrado.

---

## 🧱 Estructura de Código

### 🔸 Complejidad
- Ninguna función debe superar una **complejidad ciclomática de 5**.
- Dividir lógica en funciones auxiliares cuando sea necesario.

### 🔸 Reutilización
- Evitar duplicación de código (principio DRY).
- Reutilizar pipes, helpers, y servicios compartidos.

### 🔸 Legibilidad
- Nombres descriptivos y consistentes (camelCase para variables, PascalCase para clases).
- Comentarios solo donde el código no sea autoexplicativo.
- Evitar comentarios obvios o redundantes.

---

## 🔄 Estructuras de Control

### 🔸 Bucles
- Usar `for` cacheados cuando se itere sobre arrays largos o críticos.
- Evitar `forEach`, `while` o `switch` salvo necesidad real y justificada.
- Usar `trackBy` en `ngFor` para evitar recreación innecesaria de DOM.

### 🔸 Condicionales
- Evitar `switch` cuando pueda sustituirse por mapeos de objetos o funciones.
- No usar valores mágicos ni `undefined`; crear constantes con significado.

---

## 🧠 Tipado y Validación

### 🔸 TypeScript estricto
- Siempre tipar entradas y salidas de funciones.
- Usar tipos concretos (`string`, `number`) o interfaces; evitar `any` y `unknown` salvo controlado.
- Activar `strict` en `tsconfig`.

### 🔸 Null safety
- Evitar `null` o `undefined` como estados por defecto; preferir `null object pattern` o valores por defecto claros.

---

## ⚙️ Angular Específico

### 🔸 Standalone components (Angular 14+)
- Usar componentes standalone por defecto.
- Evitar NgModules salvo casos necesarios (SSR, testing legacy, etc.).

### 🔸 Signals (Angular 16+)
- Preferir signals en la capa de UI sobre `BehaviorSubject` para estado simple.
- Mantener la lógica reactiva declarativa y clara.

### 🔸 Directivas modernas (`@if`, `@for`)
- Usarlas para mejorar claridad en plantillas.
- Separar lógica compleja fuera del HTML.

### 🔸 Routing
- Estructurar rutas por feature.
- Usar `loadComponent` + `standalone` para lazy loading.

---

## 🚀 Optimización de Performance

- Usar `trackBy` en bucles `ngFor`.
- Evitar cambios innecesarios de estado que fuerzan detección de cambios.
- Usar `ChangeDetectionStrategy.OnPush` siempre que sea posible.
- Lazy load de rutas y componentes.
- Optimizar imágenes con `NgOptimizedImage`.

---

## 🧪 Testing

- Usar pruebas unitarias, de integración y e2e según corresponda.
- Evitar mocks complejos si se puede probar de forma directa.
- Usar `inject()` en lugar de `TestBed` en tests simples.
- Evitar probar detalles de implementación (testear comportamiento, no estructura).

---

## 📦 Gestión del Estado

- Evitar `any`, preferir `signal`, `store` o `RxJS` según el caso.
- Estado compartido en `services`, `signals`, o `facades` bien tipados.
- Aislar la lógica de transformación y mantener la UI lo más pura posible.

---

## 📄 Estilo y Consistencia

- Linting obligatorio (`ESLint` con reglas de Angular y TypeScript).
- Prettier para formateo automático.
- Las funciones auxiliares reutilizables (también conocidas como "hooks" en contextos modernos de Angular) deben estar en archivos separados. Estas encapsulan lógica de signals, formularios, estados o flujos reactivos para mejorar la composición y reutilización del código.
- Componentes pequeños (< 200 líneas), con archivos separados para `html`, `scss` y `ts`.

---

## ❌ Antipatrones a evitar

- `any`, `Function`, `Object` sin tipar.
- `switch`, `while`, `forEach` innecesarios.
- Lógica de negocio en componentes.
- Valores mágicos (`0`, `1`, `"activo"`, etc.).
- Imports circulares o dependencias cruzadas entre features.
- Clases "Dios": servicios o componentes con más de una responsabilidad.

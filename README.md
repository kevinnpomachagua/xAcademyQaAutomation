# 🎭 Cypress Learning Journey: QA Automation
### Project for "Technology with Purpose" by Santex

Bienvenido/a a mi repositorio de aprendizaje sobre **QA Automation**. Este espacio está dedicado a documentar mi progreso, desafíos y soluciones utilizando **Cypress** como herramienta principal, bajo el marco de formación de Santex.

El objetivo de este repositorio no es solo automatizar interfaces, sino aplicar el concepto de **Technology with Purpose**: crear software de calidad, robusto y eficiente que genere un impacto positivo en el ciclo de vida del producto y en la experiencia del usuario final.

---

## 🚀 Tecnologías y Herramientas

* **Framework de Testing:** [Cypress](https://www.cypress.io/)
* **Lenguaje de Programación:** JavaScript / TypeScript
* **Patrón de Diseño:** Page Object Model (POM)
* **Reportes:** Mochawesome / Cypress Built-in Reports
* **Entorno de Ejecución:** Node.js

---

## 📋 Roadmap de Aprendizaje

Siguiendo la estructura del programa de capacitación, este repositorio cubre los siguientes hitos esenciales de QA Automation:

1.  **Fundamentos de Automatización:** Configuración del entorno, selectores avanzados (CSS/XPath) y comandos nativos.
2.  **Interacciones y Eventos:** Manejo de formularios, clics, dropdowns, drag & drop y gestión de tiempos asincrónicos.
3.  **Validaciones y Aserciones:** Implementación de aserciones implícitas y explícitas (`should`, `expect`, `assert`) para garantizar la consistencia de los datos.
4.  **Patrones de Diseño:** Estructuración de pruebas escalables y mantenibles mediante el patrón **Page Object Model (POM)**.
5.  **API Testing:** Pruebas de integración y validación de endpoints utilizando `cy.request()`.
6.  **Buenas Prácticas:** Manejo de datos variables con Fixtures, comandos personalizados (`custom commands`) y optimización de selectores.

---

## 🛠️ Instalación y Uso

Para clonar y ejecutar estos tests de manera local en tu máquina, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
Instalar las dependencias de Node.js:

Bash
npm install
Abrir el Launchpad de Cypress (Modo Interactivo / GUI):

Bash
npx cypress open
Ejecutar todos los tests en la consola (Modo Headless):

Bash
npx cypress run
📂 Estructura del Proyecto
Plaintext
├── cypress/
│   ├── e2e/           # Scripts de prueba organizados por módulos (.cy.js)
│   ├── fixtures/      # Archivos de datos estáticos (JSON) para pruebas parametrizadas
│   ├── support/       # Configuraciones globales y comandos personalizados (custom commands)
│   └── page-objects/  # Clases y selectores bajo el patrón Page Object Model
├── cypress.config.js  # Archivo de configuración principal de Cypress
├── package.json       # Configuración de Node.js, dependencias y scripts de ejecución
└── README.md          # Documentación del proyecto

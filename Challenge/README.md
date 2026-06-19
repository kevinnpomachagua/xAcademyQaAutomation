# QA Automation Challenge - Grupo 12

## 📄 Descripción
Este repositorio contiene la solución al desafío de automatización de pruebas (QA Automation) desarrollado por el **Grupo 12**. El proyecto incluye una suite de pruebas automatizadas *End-to-End* (E2E) construidas con **Cypress** para validar de forma integral la plataforma [Automation in Testing](https://automationintesting.online/).

## 🎯 Alcance de las Pruebas (Módulos)
El proyecto está diseñado y estructurado para evaluar la calidad y el correcto funcionamiento de los siguientes bloques principales de la página web:

* **🏨 Rooms (Habitaciones):** Visualización correcta de detalles de las habitaciones, comodidades y accesibilidad.
* **📅 Booking (Reservas):** Proceso de selección de fechas en el calendario, formulario de reserva y confirmación de agendamiento.
* **📍 Location (Ubicación):** Validación de la información de contacto, mapa y direcciones mostradas al usuario.
* **✉️ Contact (Contacto):** Reglas de negocio del formulario, límites de caracteres y validación de mensajes de error al enviar datos inválidos o vacíos.
* **⚙️ Admin (Administración):** Flujo de autenticación (Login), protección de rutas y gestión del panel de administración.

## 📁 Estructura del Proyecto
El proyecto sigue las mejores prácticas de arquitectura de Cypress (Page Object Model mediante Custom Commands y Data-Driven Testing):

- **`cypress/e2e/`**: Contiene los archivos de prueba principales (Specs) separados lógicamente por módulos.
- **`cypress/fixtures/`**: Archivos `.json` (como `datos.json`) que almacenan los datos de prueba estáticos (credenciales, datos de formularios) para desacoplar la información del código fuente.
- **`cypress/support/`**: Comandos personalizados de Cypress (`commandsAdmin.js`, `commandsContact.js`, etc.) que encapsulan la lógica de interacción con la interfaz (botones, inputs, aserciones) para hacer las pruebas más legibles y mantenibles.

## ⚙️ Requisitos Previos
Para ejecutar este proyecto en tu máquina local necesitas tener instalado:
* [Node.js](https://nodejs.org/) (Versión 14 o superior).
* npm (Usualmente se instala junto con Node.js).

## 🚀 Instalación
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/EmiLongo/qa-automation-challenge.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd qa-automation-challenge
   ```
3. Instala las dependencias necesarias de Cypress:
   ```bash
   npm install
   ```

## 🧪 Ejecución de Pruebas

Cypress ofrece dos maneras de correr las pruebas:

**1. Modo Interactivo (Test Runner)**
Ideal para ver cómo se ejecutan las pruebas paso a paso en el navegador.
```bash
npx cypress open
```

**2. Modo Consola (Headless)**
Ideal para integración continua (CI/CD) o ejecuciones rápidas en la terminal.
```bash
npx cypress run
```

## 👥 Autores
* **Grupo 12** - Resolución del Challenge de QA Automation.

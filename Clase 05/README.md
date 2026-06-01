# 🧪 SauceDemo Cypress Automation Suite - Clase 04

[![Cypress](https://img.shields.io/badge/Cypress-170B3B?style=for-the-badge&logo=Cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.dot-js&logoColor=white)](https://nodejs.org/)

Este repositorio alberga la suite de pruebas automatizadas de interfaz de usuario (E2E) para la plataforma e-commerce de pruebas **[SauceDemo](https://www.saucedemo.com/)**, desarrollada utilizando el framework **Cypress** para la academia **xAcademy (Clase 04)**.

El objetivo principal de este proyecto es implementar pruebas automatizadas estables y robustas, cubriendo flujos críticos de negocio como autenticación, gestión del carrito de compras, filtros de inventario y completado del proceso de Checkout.

---

## 🚀 Características Clave

* **Aislamiento de Pruebas:** Cada caso de prueba es independiente y cuenta con flujos limpios de inicialización.
* **Selectores de Alta Robustez:** Priorización en el uso de atributos dedicados de testing (`data-test`) para garantizar estabilidad ante cambios de diseño del frontend.
* **Control de Calidad Integrado:** El proyecto incluye auditorías técnicas periódicas y control de calidad sobre la estructura del código.

---

## 🛠️ Tecnologías y Dependencias

* **Core Framework:** [Cypress v15.15.0+](https://www.cypress.io/)
* **Entorno de Ejecución:** [Node.js](https://nodejs.org/)
* **Estilo de Código y Guías:** JavaScript (ES6) con principios SOLID, DRY y KISS.

---

## 📁 Estructura del Proyecto

La organización del código sigue los estándares modernos de desarrollo con Cypress:

```text
c:\Cypress\xAcademy\Clase 04\
├── auditoria\              # <-- Informes técnicos de arquitectura y calidad de código
│   ├── *auditoria_clase-04.md
│   └── *auditoria_clase-04.docx
├── cypress\
│   ├── e2e\               # <-- Especificaciones de pruebas funcionales (Specs)
│   │   ├── carrito.cy.js    # Flujos de adición y remoción en carrito de compras
│   │   ├── Checkout.cy.js   # Flujos de validación de checkout exitoso y con errores
│   │   ├── inventario.cy.js # Validaciones de ordenamiento y conteo de productos
│   │   └── login.cy.js      # Pruebas de acceso, bloqueos y logout
│   ├── fixtures\          # <-- Datos estáticos de prueba (Mock Data)
│   │   └── example.json
│   └── support\           # <-- Configuraciones globales y comandos personalizados
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js       # <-- Archivo de configuración global de Cypress
├── package.json            # <-- Dependencias y scripts del proyecto
└── README.md               # <-- Documentación principal del proyecto
```

---

## 🚦 Primeros Pasos

### Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:
* [Node.js](https://nodejs.org/) (Versión 18.x o superior recomendada)
* [npm](https://www.npmjs.com/) (Gestor de paquetes de Node)

### 1. Instalación

Clona o navega al directorio del proyecto e instala las dependencias necesarias:

```bash
# Instalar dependencias del proyecto
npm install
```

### 2. Ejecución de Pruebas

El framework cuenta con dos modos principales de ejecución:

#### Modo Interactivo (Cypress Runner)
Permite observar visualmente la ejecución de las pruebas paso a paso:

```bash
npx cypress open
```

#### Modo Consola / Headless (CI/CD)
Ejecuta la suite completa de pruebas en segundo plano (ideal para flujos de integración continua):

```bash
npx cypress run
```

---

## 🔍 Informes de Auditoría de Calidad

Para asegurar la máxima mantenibilidad y robustez de esta suite de pruebas, el repositorio cuenta con un módulo de **Auditoría Técnica** regular, el cual genera reportes ejecutivos en formatos **Word (`.docx`)** y **Markdown (`.md`)** detallando scorecards de calidad, análisis de anti-patrones y planes de refactorización priorizados.

Puedes acceder a las últimas auditorías directamente en la carpeta:
👉 **[Carpeta de Auditorías (auditoria/)](file:///c:/Cypress/xAcademy/Clase%2004/auditoria/)**

---

## 💡 Prácticas de Desarrollo Recomendadas

> [!IMPORTANT]
> **Selectores Estables:** Nunca utilices clases de estilos CSS (`.inventory_item_name`) o rutas XPATH frágiles para realizar clics o interacciones. Haz uso de los atributos de prueba de SauceDemo:
> ```javascript
> // CORRECTO
> cy.get('[data-test="username"]').type('standard_user')
> ```

> [!WARNING]
> **No utilizar `.only` en Commits:** Asegúrate de remover cualquier modificador `it.only` o `describe.only` de tus suites de prueba antes de realizar un push al repositorio para no interrumpir las ejecuciones de los flujos de Integración Continua (CI).

# 🧪 SauceDemo Cypress Automation Suite - Clase 05

Este repositorio alberga la tarea de pruebas automatizadas de interfaz de usuario (E2E) para la plataforma e-commerce de pruebas **[SauceDemo](https://www.saucedemo.com/)**, desarrollada utilizando el framework **Cypress** (Clase 05).

---

## 📁 Estructura del Proyecto

La organización del código sigue los estándares modernos de desarrollo con Cypress:

```text
c:\Cypress\xAcademy\Clase 05\
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

## 🚦 Requisitos Previos

Debes tener instalados los siguientes componentes:
* [Node.js](https://nodejs.org/) (Versión 18.x o superior recomendada)
* [npm](https://www.npmjs.com/) (Gestor de paquetes de Node)

### 1. Instalación

Clona e instala las dependencias necesarias:

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

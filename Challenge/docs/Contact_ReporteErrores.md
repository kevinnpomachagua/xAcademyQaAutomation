# Plantilla para Copiar y Pegar Reportes en Trello

Este archivo contiene los 6 bugs estructurados listos para ser copiados de manera individual y pegados directamente en **Trello**. 

> [!TIP]
> Si estás visualizando este archivo en un visor de Markdown o en tu editor de código (como VS Code), puedes hacer clic en el botón de **Copiar** (ícono de portapapeles) en la esquina derecha de cada bloque de código para copiar el contenido completo del reporte de una sola vez.

---

## 📋 BUG 1 (CP17)

**Título de la Tarjeta:**
`Módulo Contact Form - Nombre con caracteres Unicode / Tildes (CP17)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al enviar el formulario de contacto ingresando caracteres Unicode (letras con tildes) en el campo Name, el sistema procesa el envío con éxito en lugar de aplicar las reglas restrictivas de negocio para caracteres en el nombre.

Precondiciones: Ninguna (acceso público al formulario de contacto).

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse a la sección del formulario de contacto.
3. Ingresar en el campo Name: María José Núñez.
4. Completar los demás campos con datos válidos (Email, Phone, Subject, Message).
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta de error indicando caracteres no válidos.

Resultado Obtenido: Bug: Se procesa como envío exitoso. El sistema acepta las tildes y muestra la confirmación de envío.

Observaciones / Evidencia: Afecta a la consistencia y limpieza de los datos del perfil si se espera un estándar puramente alfanumérico básico en el nombre.
```

---

## 📋 BUG 2 (CP18)

**Título de la Tarjeta:**
`Módulo Contact Form - Teléfono con caracteres especiales y letras (CP18)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al enviar el formulario de contacto ingresando caracteres especiales y letras en el campo de número telefónico (Phone), el sistema procesa el envío como exitoso en lugar de validar y rechazar el formato no numérico.

Precondiciones: Ninguna.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse a la sección del formulario de contacto.
3. Completar campos de Nombre, Email, Asunto y Mensaje con datos válidos.
4. Ingresar en el campo Phone: +51 abcdefghijk.
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta indicando que el número de teléfono es inválido.

Resultado Obtenido: Bug: Se procesa como envío exitoso.

Observaciones / Evidencia: El sistema permite registrar letras y símbolos no permitidos en un campo de teléfono estructurado.
```

---

## 📋 BUG 3 (CP19)

**Título de la Tarjeta:**
`Módulo Contact Form - Email sin dominio de nivel superior - TLD (CP19)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al ingresar un correo electrónico que no posee el dominio de nivel superior (TLD, ej. .com, .net, .org), el formulario permite el envío con éxito, lo que indica una expresión de validación (Regex) permisiva en el campo de correo electrónico (Email).

Precondiciones: Ninguna.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse al formulario de contacto.
3. Completar los campos Name, Phone, Subject y Message con datos válidos.
4. Ingresar en el campo Email: juan@dominio (sin TLD).
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta de error (must be a well-formed email address).

Resultado Obtenido: Bug: Se procesa como envío exitoso.

Observaciones / Evidencia: Esto ensucia la base de datos con correos a los cuales nunca se les podrá dar respuesta automatizada.
```

---

## 📋 BUG 4 (CP20)

**Título de la Tarjeta:**
`Módulo Contact Form - Teléfono con caracteres alfabéticos (CP20)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
El campo de número telefónico (Phone) acepta el ingreso de texto puramente alfabético de manera exitosa sin validar la naturaleza numérica del campo.

Precondiciones: Ninguna.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse al formulario de contacto.
3. Completar los campos Nombre, Email, Asunto y Mensaje con datos válidos.
4. Ingresar en el campo Phone: +51 abcdefghijk (u otra cadena con texto alfabético).
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta requiriendo un formato telefónico numérico válido.

Resultado Obtenido: Bug: Se procesa como envío exitoso.

Observaciones / Evidencia: El sistema procesa la entrada sin forzar que el teléfono contenga únicamente dígitos numéricos o caracteres de formato esenciales.
```

---

## 📋 BUG 5 (CP21)

**Título de la Tarjeta:**
`Módulo Contact Form - Nombre con Emojis (CP21)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
El formulario de contacto permite el envío exitoso de datos cuando el campo Name incluye caracteres especiales del tipo Emoji.

Precondiciones: Ninguna.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse al formulario de contacto.
3. Completar los campos Email, Phone, Subject y Message con datos válidos.
4. Ingresar en el campo Name: Juan Perez 😃.
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta impidiendo el uso de caracteres especiales no alfabéticos (Emojis) en el nombre.

Resultado Obtenido: Bug: Se procesa como envío exitoso.

Observaciones / Evidencia: Esto representa un riesgo para la integridad de almacenamiento en bases de datos que no utilicen codificación de caracteres extendida (utf8mb4).
```

---

## 📋 BUG 6 (CP22)

**Título de la Tarjeta:**
`Módulo Contact Form - Inyección de etiquetas HTML en campos de texto (CP22)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al ingresar etiquetas HTML (como <b> o <u>) en el campo Asunto (Subject), el sistema procesa el envío con éxito y persiste la entrada cruda en la base de datos.

Precondiciones: Ninguna.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/
2. Desplazarse al formulario de contacto.
3. Completar los campos Nombre, Email, Teléfono y Mensaje con datos válidos.
4. Ingresar en el campo Subject: <b>Consulta urgente</b>.
5. Hacer clic en el botón "Submit".

Resultado Esperado: El mensaje no envía el formulario y muestra una alerta impidiendo caracteres especiales de etiquetado HTML, o el sistema sanitiza (elimina) automáticamente las etiquetas HTML antes de procesar el envío.

Resultado Obtenido: Bug: Se procesa como envío exitoso y el backend almacena la etiqueta HTML cruda.

Observaciones / Evidencia: Aunque la pantalla de confirmación escapa los caracteres de manera segura, el backend acepta el payload completo, lo que genera un riesgo de Stored XSS en otras vistas del sistema (ej. el panel de administración).
```

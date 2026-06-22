# Plantilla para Copiar y Pegar Reportes en Trello

Este archivo contiene los 2 bugs del módulo de administración estructurados y listos para ser copiados de manera individual y pegados directamente en **Trello**.

> [!TIP]
> Si estás visualizando este archivo en un visor de Markdown o en tu editor de código (como VS Code), puedes hacer clic en el botón de **Copiar** (ícono de portapapeles) en la esquina derecha de cada bloque de código para copiar el contenido completo del reporte de una sola vez.

---

## 📋 BUG 1 (CP07)

**Título de la Tarjeta:**
`Módulo Room Management - Eliminar habitación sin confirmación de seguridad (CP07)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al hacer clic en el botón de eliminar (cruz roja) de una habitación en la lista de administración, la habitación es borrada instantáneamente de la base de datos sin solicitar ninguna confirmación de seguridad al usuario, lo que representa un riesgo de pérdida accidental de información.

Precondiciones: Haber iniciado sesión como administrador y estar en la vista /admin/rooms.

Pasos para Reproducir:
1. Ir a https://automationintesting.online/admin
2. Iniciar sesión con credenciales válidas (admin/password).
3. En la sección "Rooms", localizar cualquier habitación existente (ej. Habitación 104).
4. Hacer clic en el icono de eliminar (cruz roja / tacho) en la fila correspondiente de la habitación.

Resultado Esperado: El sistema debe mostrar un mensaje modal, popup o alerta de confirmación (ej: "¿Está seguro que desea eliminar la habitación?") antes de proceder con el borrado definitivo.

Resultado Obtenido: Bug: La habitación se elimina al instante sin advertencia o confirmación alguna.

Observaciones / Evidencia: Esto incumple con las mejores prácticas de experiencia de usuario (UX) y seguridad de datos, posibilitando la pérdida accidental de registros críticos de habitaciones en producción.
```

---

## 📋 BUG 2 (CP10)

**Título de la Tarjeta:**
`Módulo Room Details - Cancelar edición de precio de habitación no revierte el cambio en el frontend (CP10)`

**Descripción de la Tarjeta (Copiar contenido de abajo):**
```text
Al intentar modificar el precio de una habitación en el formulario de edición y luego cancelar la operación, el formulario de edición se cierra correctamente, pero la interfaz del frontend continúa mostrando temporalmente el valor modificado (no guardado) en lugar de restablecer el precio original. El valor erróneo solo se corrige al recargar manualmente la página.

Precondiciones: Iniciar sesión como administrador y estar en la vista de detalles de una habitación (/admin/room/{id}).

Pasos para Reproducir:
1. Ir a https://automationintesting.online/admin
2. Iniciar sesión con credenciales válidas (admin/password).
3. Hacer clic en una habitación (ej: 101) para ver sus detalles.
4. Hacer clic en el botón "Edit".
5. Modificar el valor del campo Price a un nuevo valor (ej: 999).
6. Hacer clic en el botón "Cancel".

Resultado Esperado: El formulario se cierra y la etiqueta "Room price" muestra el valor original de la habitación (sin guardar los cambios en el frontend).

Resultado Obtenido: Bug: El formulario se cierra pero el frontend sigue mostrando en pantalla el precio modificado de 999. El precio original de la habitación solo se vuelve a mostrar al recargar la página.

Observaciones / Evidencia: El estado local del frontend (React) no se restablece al presionar cancelar, lo que genera confusión visual en el usuario dando la falsa impresión de que los cambios se guardaron.
```

# PROMPT MAESTRO PARA FIGMA AI

## Prototipo web mobile-first de Patient Journey Intelligence para pacientes hospitalizados dados de alta

Diseña un prototipo web funcional, interactivo y de alta fidelidad para una plataforma digital denominada provisionalmente:

**“Tu Experiencia de Atención”**

La solución forma parte de una plataforma B2B de **Patient Journey Intelligence** dirigida a IPRESS privadas del Perú. Esta interfaz específica estará destinada a pacientes hospitalizados dados de alta, familiares, padres, cuidadores o representantes, y permitirá capturar información estructurada sobre su experiencia asistencial mediante PREMs.

El prototipo debe servir como base para:

* pruebas de usabilidad;
* entrevistas cognitivas;
* validación con pacientes y cuidadores;
* demostraciones a docentes, asesores e inversionistas;
* posterior implementación en HTML, CSS y JavaScript;
* desarrollo en React o JavaScript Vanilla;
* despliegue inicial en GitHub Pages con datos ficticios;
* evolución posterior hacia un producto digital con backend seguro.

No diseñar únicamente una encuesta visualmente atractiva. Diseñar una experiencia digital de salud centrada en la persona que combine:

1. confianza;
2. accesibilidad;
3. baja carga cognitiva;
4. calidad de datos;
5. sensibilidad emocional;
6. accionabilidad para la IPRESS;
7. escalabilidad técnica.

---

# 1. OBJETIVO DEL PRODUCTO

La interfaz debe permitir que una persona dada de alta, o alguien que participó en su cuidado, pueda:

* comprender inmediatamente por qué está siendo invitada;
* identificar claramente quién solicita la información;
* conocer cuánto tiempo tomará responder;
* comprender cómo se utilizarán sus respuestas;
* responder desde un teléfono móvil sin ayuda;
* reconocer preguntas relacionadas con su experiencia real;
* omitir preguntas que no correspondan;
* expresar una experiencia positiva o negativa sin sentirse juzgada;
* solicitar contacto cuando necesite ayuda o seguimiento;
* completar el proceso en aproximadamente 3 a 5 minutos;
* percibir que su participación puede generar mejoras reales.

Para la IPRESS, la interfaz debe producir información que pueda transformarse posteriormente en:

* indicadores de experiencia;
* alertas;
* tendencias;
* análisis por etapa del Patient Journey;
* oportunidades de mejora;
* análisis de comentarios;
* service recovery;
* seguimiento de problemas;
* priorización de iniciativas;
* rediseño de procesos;
* evaluación de continuidad del cuidado.

---

# 2. USUARIOS FINALES

Diseñar para una población diversa, principalmente residente en Perú y especialmente en Lima Metropolitana.

El flujo podrá ser respondido por:

* paciente adulto dado de alta;
* adulto mayor;
* padre o madre de un paciente pediátrico;
* tutor legal;
* familiar de un paciente;
* cuidador de una persona dependiente;
* familiar de un paciente crítico;
* representante de un paciente que no puede responder;
* otra persona autorizada o vinculada al cuidado.

Considerar diferentes niveles de:

* alfabetización digital;
* alfabetización sanitaria;
* experiencia usando formularios;
* capacidad visual;
* capacidad motora;
* atención sostenida;
* comprensión lectora;
* conectividad móvil.

No asumir que todos los usuarios:

* conocen términos médicos;
* utilizan aplicaciones con frecuencia;
* comprenden qué significa PREM;
* distinguen anonimato de confidencialidad;
* tienen alta velocidad de internet;
* pueden realizar gestos táctiles complejos;
* pueden leer textos pequeños.

---

# 3. PRINCIPIOS RECTORES

Aplicar transversalmente:

* Atención Centrada en la Persona;
* Human-Centered Design;
* Inclusive Design;
* Patient Journey;
* Service Design;
* Health Literacy;
* Privacy by Design;
* Accessibility by Default;
* Data Minimization;
* Progressive Disclosure;
* Mobile First;
* Response Burden Reduction;
* Closed-Loop Feedback;
* Safety by Design;
* WCAG 2.2 nivel AA.

Cada decisión visual o funcional debe contribuir simultáneamente a:

1. mejorar la experiencia del paciente;
2. aumentar la calidad y confiabilidad de los datos;
3. facilitar decisiones de mejora por parte de la IPRESS.

---

# 4. ENFOQUE DE EXPERIENCIA

La interacción debe sentirse como una conversación respetuosa y estructurada, no como:

* una encuesta tradicional;
* un formulario administrativo;
* un trámite;
* una auditoría;
* un reclamo obligatorio;
* una evaluación del personal;
* una pantalla burocrática.

La interfaz debe transmitir:

* calma;
* claridad;
* cercanía profesional;
* seguridad;
* acompañamiento;
* respeto;
* transparencia;
* elegancia;
* neutralidad;
* confianza.

Evitar:

* lenguaje emocional exagerado;
* infantilización;
* promesas que la institución no pueda cumplir;
* frases genéricas como “su opinión es muy importante” sin explicar el uso;
* imágenes de médicos excesivamente idealizadas;
* ilustraciones decorativas sin función;
* exceso de iconos;
* gamificación inapropiada;
* colores asociados a alarma salvo en alertas reales;
* apariencia comercial o publicitaria.

---

# 5. ARQUITECTURA GENERAL

Crear una arquitectura adaptativa compuesta por:

## A. Núcleo común

Todo usuario debe completar un núcleo breve de preguntas sobre:

* trato y respeto;
* comunicación;
* participación;
* respuesta a necesidades;
* coordinación;
* seguridad percibida;
* alta hospitalaria;
* continuidad del cuidado;
* experiencia global.

## B. Módulos adaptativos

Mostrar preguntas adicionales únicamente cuando correspondan:

* paciente pediátrico;
* cirugía;
* hospitalización médica;
* UCI;
* unidad de cuidados intermedios;
* cuidador;
* adulto mayor dependiente;
* medicación;
* problemas posteriores al alta;
* necesidad de contacto;
* evento o preocupación de seguridad.

## C. Módulo cualitativo

Permitir registrar:

* qué funcionó bien;
* qué debería mejorar.

## D. Módulo de service recovery

Separar claramente:

* respuesta PREM agregada;
* solicitud de contacto;
* necesidad actual de ayuda;
* emergencia médica.

No afirmar que la encuesta es anónima si se solicita contacto o si existe asociación con el episodio asistencial.

---

# 6. MAPA DE NAVEGACIÓN

Crear un mapa de navegación visual con el siguiente flujo:

1. Invitación o landing.
2. Bienvenida.
3. Propósito y duración.
4. Privacidad resumida.
5. Aceptación para participar.
6. Identificación del respondiente.
7. Relación con el paciente.
8. Contextualización mínima.
9. Núcleo PREM.
10. Rutas adaptativas.
11. Comentarios abiertos.
12. Detección de necesidad de contacto.
13. Datos de contacto, solo cuando corresponda.
14. Confirmación.
15. Cierre.
16. Ruta alternativa de emergencia o ayuda inmediata.
17. Pantallas de error, interrupción y recuperación.

Incluir ramificaciones visuales en el mapa.

---

# 7. PANTALLAS DEL PROTOTIPO

## PANTALLA 1. LANDING O INVITACIÓN

Objetivo:

* generar confianza inmediata;
* confirmar que el enlace pertenece a una institución de salud legítima;
* comunicar el propósito;
* reducir incertidumbre.

Contenido:

* logotipo provisional de la clínica o espacio editable para marca;
* nombre del producto: “Tu Experiencia de Atención”;
* título:

**“Queremos conocer cómo fue su atención”**

* texto breve:

“Sus respuestas nos ayudarán a identificar qué funcionó bien y qué debemos mejorar en la atención de pacientes y familias.”

* duración:

**“Responder toma aproximadamente 4 minutos.”**

* mensaje:

“Participar es voluntario y no afectará su atención.”

* indicador de seguridad visual discreto:

“Información protegida”

* botón primario:

**“Comenzar”**

* enlace secundario:

**“Conocer cómo usamos la información”**

* enlace de accesibilidad:

**“Opciones de lectura”**

No incluir más de 70 a 90 palabras visibles.

---

## PANTALLA 2. PRIVACIDAD EN LENGUAJE CLARO

Diseñar privacidad por capas.

Primera capa visible:

* quién recopila la información;
* finalidad;
* voluntariedad;
* tratamiento confidencial;
* aclaración sobre identificación;
* derecho a no responder;
* acceso a política completa.

Texto conceptual:

“Usaremos sus respuestas para analizar y mejorar la atención. Algunas respuestas podrán relacionarse con información básica de la hospitalización para entender mejor la experiencia. Solo el personal autorizado podrá acceder a información identificable.”

Agregar:

* acordeón “Leer información completa”;
* enlace a política de privacidad;
* botón “Continuar”;
* botón “Volver”.

No utilizar un checkbox genérico con textos legales extensos.

---

## PANTALLA 3. ACEPTACIÓN PARA PARTICIPAR

Pregunta:

**“¿Desea compartir su experiencia?”**

Opciones grandes:

* Sí, deseo continuar.
* Prefiero no participar.

Si selecciona “Prefiero no participar”, mostrar una pantalla de cierre respetuosa sin presión.

No utilizar dark patterns.

---

## PANTALLA 4. IDENTIFICACIÓN DEL RESPONDIENTE

Pregunta:

**“¿Quién está respondiendo?”**

Opciones en tarjetas seleccionables:

* Soy el paciente.
* Soy madre, padre o tutor de un menor.
* Soy familiar.
* Soy cuidador.
* Soy representante del paciente.
* Otra persona.

Cada tarjeta debe tener:

* icono simple;
* etiqueta clara;
* descripción breve solo cuando aporte claridad;
* área táctil completa.

Aplicar lógica condicional.

---

## PANTALLA 5. NIVEL DE PARTICIPACIÓN DEL PROXY

Mostrar solo cuando no responde el paciente.

Pregunta:

**“¿Cuánto pudo acompañar u observar la atención?”**

Opciones:

* Estuve presente durante la mayor parte de la hospitalización.
* Estuve presente en algunos momentos.
* Recibí información frecuente sobre la atención.
* Tuve poca información sobre lo ocurrido.
* Prefiero no responder.

Esta variable debe permitir interpretar posteriormente la validez de la respuesta del proxy.

---

## PANTALLA 6. TIPO DE HOSPITALIZACIÓN

Pregunta:

**“¿Dónde recibió principalmente la atención?”**

Opciones:

* Hospitalización médica.
* Hospitalización quirúrgica.
* Unidad de cuidados intensivos.
* Unidad de cuidados intermedios.
* Hospitalización pediátrica.
* Otra área.
* No estoy seguro.

Utilizar estas respuestas para activar módulos posteriores.

---

## PANTALLA 7. INTRODUCCIÓN AL RECORRIDO

Crear una pantalla de transición emocionalmente neutra.

Título:

**“Ahora queremos conocer su experiencia durante la hospitalización”**

Texto:

“No hay respuestas correctas o incorrectas. Responda según lo que usted vivió u observó.”

Mostrar un mapa simple del recorrido:

* ingreso;
* atención;
* alta;
* cuidado posterior.

No convertirlo en una infografía compleja.

Botón:

**“Continuar”**

---

# 8. PATRÓN DE PREGUNTA CONVERSACIONAL

Diseñar una plantilla reutilizable de pregunta.

Cada pantalla debe incluir:

* categoría pequeña en la parte superior;
* pregunta principal;
* aclaración opcional;
* opciones de respuesta;
* botón continuar;
* progreso;
* acceso para volver;
* botón de ayuda accesible.

Ejemplo:

Categoría:

**COMUNICACIÓN**

Pregunta:

**“Cuando hizo preguntas, ¿recibió respuestas que pudo entender?”**

Opciones:

* Siempre.
* Casi siempre.
* A veces.
* Nunca.
* No correspondía.
* Prefiero no responder.

Reglas:

* una sola idea por pregunta;
* no utilizar preguntas dobles;
* evitar negaciones;
* no usar terminología clínica;
* máximo recomendado de 16 a 24 palabras por pregunta;
* incluir “No correspondía” cuando aplique;
* incluir “Prefiero no responder” para preguntas sensibles;
* no preseleccionar respuestas;
* no usar sliders;
* no usar estrellas;
* no depender únicamente de escalas numéricas.

---

# 9. NÚCLEO PREM PROPUESTO

Crear pantallas de ejemplo para las siguientes dimensiones.

## 9.1. Trato y respeto

Pregunta:

**“¿Lo trataron con respeto durante la hospitalización?”**

Para proxy:

**“¿Trataron al paciente con respeto durante la hospitalización?”**

## 9.2. Comunicación

Pregunta:

**“¿Las explicaciones del equipo de salud fueron fáciles de entender?”**

## 9.3. Participación

Pregunta:

**“¿Pudo participar en las decisiones sobre la atención tanto como deseaba?”**

Adaptar para familiar o cuidador.

## 9.4. Respuesta a necesidades

Pregunta:

**“Cuando necesitó ayuda, ¿la recibió en un tiempo razonable?”**

## 9.5. Coordinación

Pregunta:

**“¿Percibió que los profesionales estaban coordinados entre sí?”**

Agregar aclaración opcional:

“Por ejemplo, que conocían el plan de atención y no daban indicaciones contradictorias.”

## 9.6. Seguridad percibida

Pregunta:

**“¿Se sintió seguro durante la atención recibida?”**

Si la respuesta es negativa, activar una pregunta de seguimiento no acusatoria:

**“¿Qué situación le generó preocupación?”**

Opciones:

* Medicamentos.
* Caída o riesgo de caída.
* Demora en recibir ayuda.
* Información contradictoria.
* Procedimiento o tratamiento.
* Limpieza o prevención de infecciones.
* Otra situación.
* Prefiero no responder.

## 9.7. Medicación

Mostrar solo cuando corresponda:

**“Antes del alta, ¿le explicaron qué medicamentos debía continuar, cambiar o suspender?”**

## 9.8. Preparación para el alta

Pregunta:

**“Antes de salir, ¿se sintió preparado para continuar los cuidados en casa?”**

## 9.9. Signos de alarma

Pregunta:

**“¿Le explicaron qué señales de alarma debía vigilar y qué hacer si aparecían?”**

## 9.10. Continuidad

Pregunta:

**“¿Sabía dónde y cuándo debía continuar su atención después del alta?”**

## 9.11. Experiencia global

Utilizar una escala accesible de 0 a 10 solo si se mantiene una etiqueta clara en los extremos.

Pregunta:

**“En general, ¿cómo calificaría la atención recibida?”**

Escala:

0 = Muy mala
10 = Excelente

Permitir selección con botones grandes, no slider.

Agregar alternativa visual de categorías si la escala numérica resulta demasiado densa en móvil.

---

# 10. MÓDULOS ADAPTATIVOS

## 10.1. Pediatría

Mostrar únicamente a padres, madres o tutores.

Preguntas específicas:

* “¿Le explicaron de manera comprensible lo que ocurría con la salud del niño o adolescente?”
* “¿Pudo participar en las decisiones relacionadas con su cuidado?”
* “¿El niño o adolescente fue incluido en las explicaciones de acuerdo con su edad?”
* “¿Se sintió preparado para continuar los cuidados en casa?”

Diferenciar:

* experiencia del paciente pediátrico;
* experiencia del padre o tutor.

## 10.2. UCI o cuidados intermedios

Preguntas:

* “¿Recibió información clara y consistente sobre el estado del paciente?”
* “¿Supo a quién acudir cuando necesitaba información?”
* “¿Sintió que sus preguntas y preocupaciones fueron escuchadas?”
* “¿Recibió orientación durante el traslado a otra unidad o al alta?”

Mantener lenguaje sensible.

## 10.3. Cirugía

Preguntas:

* “Antes del procedimiento, ¿le explicaron qué se realizaría y qué podía esperar?”
* “Después del procedimiento, ¿recibió información clara sobre el resultado y los cuidados posteriores?”
* “¿Le explicaron cómo manejar el dolor y cuándo solicitar ayuda?”

## 10.4. Cuidador

Preguntas:

* “¿Tomaron en cuenta que usted participaría en el cuidado después del alta?”
* “¿Recibió información suficiente para realizar los cuidados en casa?”
* “¿Pudo expresar si necesitaba apoyo adicional?”

## 10.5. Problema posterior al alta

Pregunta filtro:

**“Después del alta, ¿ha tenido alguna dificultad relacionada con la atención recibida?”**

Opciones:

* Sí.
* No.
* No estoy seguro.

Si responde sí:

* medicamentos;
* dolor o síntomas;
* citas o seguimiento;
* instrucciones poco claras;
* resultados pendientes;
* dificultad para comunicarse;
* otra.

No convertir esta sección en diagnóstico clínico.

---

# 11. ALIMENTACIÓN, LIMPIEZA E INFRAESTRUCTURA

No incluir automáticamente todas estas dimensiones en el núcleo principal.

Crear un módulo opcional de experiencia ambiental que pueda activarse según configuración de la IPRESS.

Preguntas sugeridas:

* “¿La habitación y los espacios utilizados se mantuvieron limpios?”
* “Cuando necesitó descansar, ¿el ambiente se lo permitió?”
* “¿La alimentación entregada fue adecuada para sus necesidades?”

Incluir “No correspondía”.

Evitar que estos ítems desplacen dimensiones clínicas, de seguridad, comunicación o alta.

---

# 12. COMENTARIOS ABIERTOS

Crear una pantalla visualmente tranquila y no intimidante.

Título:

**“Cuéntenos algo más sobre su experiencia”**

Subtexto:

“Puede escribir solo lo que considere importante. Este espacio es opcional.”

Crear dos campos separados:

## Campo 1

**“¿Qué fue lo mejor de la atención?”**

Placeholder:

“Por ejemplo: una explicación clara, el trato recibido o una ayuda que fue importante para usted.”

## Campo 2

**“¿Qué debería mejorar?”**

Placeholder:

“Por ejemplo: demoras, información poco clara, coordinación, limpieza o preparación para el alta.”

Características:

* contador de caracteres no intrusivo;
* máximo sugerido de 1,000 caracteres;
* posibilidad de omitir;
* aviso:

“Evite incluir información que no desee compartir.”

No mostrar ejemplos que induzcan necesariamente una respuesta negativa.

---

# 13. SERVICE RECOVERY

Crear una pantalla independiente.

Pregunta:

**“¿Necesita que la clínica se comunique con usted?”**

Opciones:

* Sí, deseo que se comuniquen conmigo.
* No, solo deseo compartir mi experiencia.

Texto:

“Solicitar contacto es opcional. Si elige esta opción, necesitaremos algunos datos para poder comunicarnos.”

Si responde sí, mostrar:

* nombre;
* teléfono;
* correo opcional;
* canal preferido;
* horario preferido;
* motivo general;
* autorización de contacto.

Separar visual y conceptualmente los datos de contacto de las respuestas PREM.

Agregar mensaje:

“Al solicitar contacto, esta parte de su respuesta dejará de ser anónima.”

Utilizar “confidencial” cuando corresponda.

---

# 14. SEGURIDAD Y EMERGENCIA

Incluir permanentemente, de manera discreta, un acceso:

**“¿Necesita ayuda ahora?”**

Al abrirlo, mostrar:

“Esta encuesta no reemplaza una evaluación médica ni es un canal de emergencia.”

Opciones:

* Ver canales de atención de la clínica.
* Llamar a emergencia.
* Continuar con la encuesta.
* Cerrar.

No crear falsas capacidades de respuesta inmediata.

No afirmar que una alerta será atendida inmediatamente si el sistema no puede garantizarlo.

---

# 15. PANTALLA DE REVISIÓN OPCIONAL

Antes del envío, mostrar una revisión resumida, no todas las respuestas completas.

Texto:

**“Ya casi terminamos”**

Mostrar:

* secciones completadas;
* comentario agregado o no;
* solicitud de contacto seleccionada o no.

Botones:

* Revisar respuestas.
* Enviar mi experiencia.

No obligar a revisar.

---

# 16. CONFIRMACIÓN Y CIERRE

Pantalla de éxito.

Icono de confirmación sobrio.

Título:

**“Gracias por compartir su experiencia”**

Texto:

“Sus respuestas serán analizadas junto con las de otros pacientes y familias para identificar oportunidades de mejora.”

Si solicitó contacto:

“Hemos registrado su solicitud de contacto. El equipo responsable utilizará el canal que indicó.”

Si no solicitó contacto:

“No se realizará contacto individual a partir de esta respuesta.”

Agregar:

* número de referencia solo si existe workflow real;
* botón “Finalizar”;
* enlace a canales de atención;
* mensaje “Usted dijo / nosotros mejoramos” solo con ejemplos institucionales reales.

No utilizar confeti, celebraciones exageradas ni gamificación.

---

# 17. ESTADOS Y CASOS EXCEPCIONALES

Diseñar los siguientes estados:

* carga inicial;
* conexión lenta;
* sin conexión;
* respuesta guardada temporalmente;
* sesión interrumpida;
* recuperación de progreso;
* campo obligatorio pendiente;
* error de validación;
* error de servidor;
* enlace inválido;
* enlace vencido;
* encuesta ya respondida;
* salida voluntaria;
* rechazo de participación;
* confirmación de envío;
* solicitud de contacto registrada;
* modo de prueba con datos ficticios.

Mensajes de error en lenguaje claro.

Ejemplo:

“Hubo un problema al guardar esta respuesta. Revise su conexión e inténtelo nuevamente.”

Nunca eliminar respuestas ya ingresadas debido a un error de validación.

---

# 18. SISTEMA VISUAL

## Estilo general

Crear una identidad:

* healthcare premium;
* minimalista;
* contemporánea;
* serena;
* elegante;
* profesional;
* humana;
* confiable;
* no burocrática.

Inspirarse conceptualmente en:

* Apple Human Interface Guidelines;
* Material Design 3;
* Microsoft Fluent;
* NHS Digital;
* Mayo Clinic;
* Cleveland Clinic.

No copiar componentes, marcas, composiciones, colores ni identidades visuales de estas organizaciones.

## Paleta base propuesta

Crear variables de color y documentar contraste.

### Azul primario

* Primary 900: #123A5A
* Primary 700: #1C5278
* Primary 600: #23658E
* Primary 100: #E7F1F7
* Primary 50: #F4F9FC

### Verde de apoyo

* Success 700: #176B5B
* Success 600: #20806D
* Success 100: #DFF3ED
* Success 50: #F2FAF7

### Neutros

* Neutral 950: #17202A
* Neutral 800: #303942
* Neutral 700: #46515C
* Neutral 500: #697681
* Neutral 300: #C9D0D6
* Neutral 200: #DEE3E7
* Neutral 100: #EFF2F4
* Neutral 50: #F8FAFB
* White: #FFFFFF

### Estados

* Error 700: #A32A2A
* Error 100: #FBE8E8
* Warning 700: #8A5A00
* Warning 100: #FFF2CF
* Info 700: #245A92
* Info 100: #E7F1FB

Verificar que todas las combinaciones relevantes alcancen WCAG 2.2 AA.

No utilizar el verde como único indicador de éxito ni el rojo como único indicador de error.

---

# 19. TIPOGRAFÍA

Utilizar:

* Inter como primera opción;
* SF Pro como referencia si el entorno lo permite;
* alternativa: Source Sans 3.

Crear variables tipográficas.

## Escala sugerida

* Display: 32 px / 40 px / semibold.
* H1 mobile: 28 px / 36 px / semibold.
* H2: 24 px / 32 px / semibold.
* H3: 20 px / 28 px / semibold.
* Question: 20 px / 30 px / semibold.
* Body large: 18 px / 28 px / regular.
* Body: 16 px / 24 px / regular.
* Label: 15 px / 22 px / medium.
* Caption: 14 px / 20 px / regular.

No utilizar texto menor de 14 px.

Para preguntas y textos principales destinados a adultos mayores, priorizar entre 18 y 20 px.

Permitir aumento de texto sin romper la interfaz.

---

# 20. ESPACIADO Y GRID

Utilizar sistema de espaciado basado en múltiplos de 4.

Tokens:

* 4 px;
* 8 px;
* 12 px;
* 16 px;
* 20 px;
* 24 px;
* 32 px;
* 40 px;
* 48 px;
* 64 px.

Mobile:

* margen lateral mínimo: 20 px;
* ancho máximo de contenido: 560 px;
* espacio vertical entre pregunta y opciones: 24 px;
* separación entre opciones: 12 px;
* padding de tarjeta: 16 a 20 px;
* altura mínima recomendada de botón: 52 a 56 px.

Desktop:

* contenido principal centrado;
* ancho máximo del formulario: 640 px;
* fondo neutro;
* panel o card principal sin sombras intensas.

---

# 21. COMPONENTES

Crear una página específica denominada:

**“Design System”**

Incluir componentes reutilizables con Auto Layout.

## Componentes requeridos

* App Header.
* Institutional Logo Placeholder.
* Progress Indicator.
* Step Label.
* Question Header.
* Question Card.
* Radio Option Card.
* Checkbox Option Card.
* Numeric Rating Button.
* Primary Button.
* Secondary Button.
* Tertiary Link Button.
* Back Button.
* Text Input.
* Phone Input.
* Email Input.
* Text Area.
* Select Field.
* Accordion.
* Privacy Notice.
* Alert Banner.
* Info Banner.
* Error Message.
* Success Message.
* Modal.
* Bottom Sheet.
* Accessibility Menu.
* Help Menu.
* Save Status.
* Skeleton Loader.
* Toast Message.
* Confirmation Card.
* Navigation Footer.
* Character Counter.
* Empty State.
* Offline State.
* Review Summary.
* Contact Preference Selector.

Crear variantes y propiedades.

---

# 22. ESTADOS DE COMPONENTES

Diseñar para cada componente, según corresponda:

* default;
* hover;
* focus visible;
* pressed;
* selected;
* unselected;
* disabled;
* loading;
* error;
* success;
* read-only.

El foco debe ser claramente visible.

No eliminar el contorno de foco sin una alternativa equivalente.

Los mensajes de error deben incluir:

* icono;
* texto;
* cambio visual adicional;
* asociación con el campo.

---

# 23. ACCESIBILIDAD

Aplicar WCAG 2.2 AA.

Requisitos:

* contraste mínimo de texto;
* contraste de componentes;
* navegación completa por teclado;
* foco visible;
* orden lógico de foco;
* compatibilidad conceptual con lectores de pantalla;
* labels persistentes;
* jerarquía de encabezados;
* áreas táctiles mínimas de 44 × 44 px recomendadas;
* botones principales de al menos 52 px de altura;
* textos escalables;
* zoom sin pérdida de información;
* no depender del color;
* instrucciones antes de los campos;
* errores descriptivos;
* lenguaje simple;
* ausencia de tiempo límite estricto;
* posibilidad de pausar;
* recuperación de respuestas;
* no exigir memoria innecesaria;
* no repetir información ya ingresada;
* ayuda ubicada de forma consistente.

Crear anotaciones de accesibilidad en Figma:

* nombre accesible;
* rol;
* estado;
* lectura esperada;
* orden de tabulación;
* comportamiento del foco;
* anuncio de errores.

---

# 24. USO CON UNA SOLA MANO

Diseñar móvil considerando el alcance del pulgar.

Requisitos:

* botón primario cerca de la zona inferior;
* controles principales en zona media e inferior;
* no colocar acciones críticas únicamente en la esquina superior;
* evitar botones pequeños;
* mantener “Continuar” en posición constante;
* separar “Continuar” y “Volver”;
* evitar scroll horizontal;
* no utilizar gestos ocultos;
* no exigir arrastrar elementos.

---

# 25. PROGRESO

Utilizar progreso por secciones, no mostrar un número excesivamente preciso si existen rutas adaptativas.

Ejemplos:

* “Paso 2 de 5”.
* “Sobre su experiencia”.
* barra de progreso estimada.

No mostrar:

* “Pregunta 3 de 47”.

El progreso debe ajustarse a la ruta del usuario.

Crear estados:

* inicio;
* progreso parcial;
* casi finalizado;
* completado.

---

# 26. MICROINTERACCIONES

Representar en el prototipo:

* transición suave entre preguntas;
* selección con feedback inmediato;
* progreso animado discretamente;
* guardado temporal;
* confirmación de envío;
* aparición progresiva de campos condicionales;
* error con movimiento mínimo;
* éxito sin animaciones festivas.

Duraciones recomendadas:

* feedback de selección: 100–150 ms;
* transición de pantalla: 200–300 ms;
* aparición condicional: 150–250 ms.

Respetar preferencias de movimiento reducido.

No utilizar parallax, rebotes intensos o animaciones decorativas.

---

# 27. RESPONSIVE DESIGN

Crear frames y variantes para:

## Mobile principal

* 360 × 800 px.
* 390 × 844 px.
* 412 × 915 px.

## Tablet

* 768 × 1024 px.

## Desktop

* 1440 × 1024 px.

La experiencia principal debe optimizarse primero para móvil.

Utilizar:

* Auto Layout;
* min-width;
* max-width;
* fill container;
* hug contents;
* constraints;
* responsive components;
* grids adaptativos.

No convertir la versión móvil en una reducción proporcional de desktop.

---

# 28. DESIGN TOKENS Y VARIABLES

Crear variables organizadas en colecciones.

## Colecciones

* Colors.
* Typography.
* Spacing.
* Radius.
* Shadows.
* Borders.
* Motion.
* Breakpoints.
* Component States.

## Radios

* small: 8 px;
* medium: 12 px;
* large: 16 px;
* extra-large: 24 px;
* pill: 999 px.

## Sombras

Utilizar sombras mínimas.

* Card subtle.
* Floating action.
* Modal.

Evitar sombras profundas o decorativas.

## Bordes

* 1 px para controles;
* 2 px para focus;
* estados seleccionados claramente diferenciados.

---

# 29. ICONOGRAFÍA

Utilizar iconografía:

* lineal;
* simple;
* consistente;
* reconocible;
* de grosor uniforme.

Crear iconos para:

* paciente;
* familiar;
* cuidador;
* padre o madre;
* hospitalización;
* cirugía;
* UCI;
* comunicación;
* seguridad;
* medicamentos;
* alta;
* continuidad;
* privacidad;
* ayuda;
* confirmación;
* advertencia;
* accesibilidad.

No utilizar iconos sin etiqueta cuando su significado pueda ser ambiguo.

---

# 30. ILUSTRACIONES

Utilizar como máximo:

* una ilustración discreta en bienvenida;
* una ilustración discreta en cierre.

Estilo:

* humano;
* inclusivo;
* no infantil;
* sin representación estereotipada;
* sin exceso de detalles;
* adaptable a diferentes instituciones.

No mostrar:

* agujas;
* sangre;
* procedimientos invasivos;
* pacientes angustiados;
* profesionales heroizados;
* escenas clínicas potencialmente traumáticas.

---

# 31. CONTENIDO Y MICROCOPY

Redactar todos los textos en español claro y adecuado para población peruana.

Reglas:

* utilizar “usted”;
* evitar IPRESS en la interfaz del paciente;
* utilizar “clínica” o “institución de salud”;
* evitar “evento adverso”;
* evitar “conciliación de medicamentos”;
* evitar “continuidad asistencial” sin explicación;
* evitar “usuario” cuando pueda decirse paciente, familiar o cuidador;
* no utilizar tecnicismos;
* evitar frases defensivas;
* evitar atribuir culpa;
* evitar afirmaciones absolutas.

Ejemplos preferidos:

* “¿Le explicaron…?”
* “¿Pudo participar…?”
* “¿Se sintió preparado…?”
* “¿Supo qué hacer…?”
* “¿Recibió ayuda…?”

---

# 32. GOBERNANZA DE PREGUNTAS

Crear una sección visual o tabla de documentación denominada:

**“Question Governance”**

Para cada pregunta incluir:

* ID del ítem;
* dominio;
* versión;
* perfil aplicable;
* tipo de hospitalización aplicable;
* texto del paciente;
* texto para proxy;
* opciones;
* lógica condicional;
* obligatoriedad;
* indicador asociado;
* posible alerta;
* responsable institucional;
* finalidad de la pregunta;
* acción de mejora potencial.

Ejemplo:

ID: COM-01
Dominio: Comunicación
Pregunta: “¿Las explicaciones del equipo de salud fueron fáciles de entender?”
Indicador: porcentaje de respuestas “Siempre” y “Casi siempre”
Uso: rediseño de educación y comunicación clínica
Alerta: no individual, análisis agregado
Aplicación: todos los perfiles

---

# 33. EVENTOS PARA ANALÍTICA

Preparar una tabla para handoff con eventos sugeridos, sin incluir información clínica en herramientas de analítica convencionales.

Eventos:

* landing_viewed;
* survey_started;
* privacy_opened;
* consent_accepted;
* respondent_type_selected;
* section_started;
* question_answered;
* section_completed;
* comment_started;
* comment_completed;
* contact_requested;
* survey_abandoned;
* survey_resumed;
* survey_submitted;
* error_displayed.

No registrar en eventos:

* texto libre;
* diagnóstico;
* número de historia;
* teléfono;
* correo;
* contenido de respuestas sensibles.

---

# 34. PREPARACIÓN PARA DESARROLLO

Estructurar el archivo Figma para facilitar implementación.

Páginas del archivo:

1. Cover.
2. Product Principles.
3. Information Architecture.
4. User Flows.
5. Wireframes.
6. High-Fidelity Mobile.
7. Responsive Layouts.
8. Design System.
9. Components.
10. Accessibility.
11. Content Guidelines.
12. Question Governance.
13. Prototype.
14. Developer Handoff.
15. Version History.

Nombrar frames y componentes de manera semántica.

Ejemplos:

* Survey/Welcome/Mobile.
* Survey/Question/Communication.
* Component/Button/Primary/Default.
* Component/OptionCard/Selected.
* Feedback/Error/Inline.
* Modal/UrgentHelp.

Evitar nombres como:

* Frame 145;
* Rectangle 18;
* Group 25.

---

# 35. PROTOTIPO INTERACTIVO

Crear un prototipo clicable con al menos cinco rutas.

## Ruta 1

Paciente adulto con hospitalización médica y experiencia satisfactoria.

## Ruta 2

Familiar de paciente UCI con problema de comunicación.

## Ruta 3

Madre o padre de paciente pediátrico.

## Ruta 4

Cuidador de adulto mayor que solicita contacto.

## Ruta 5

Usuario que reporta una preocupación de seguridad y accede a canales de ayuda.

Incluir:

* navegación hacia adelante;
* volver;
* ramificación;
* selección de respuestas;
* errores;
* guardado;
* salida;
* recuperación;
* envío;
* confirmación.

---

# 36. DEVELOPER HANDOFF

Crear especificaciones claras para desarrollo.

Incluir:

* medidas;
* padding;
* gaps;
* tipografías;
* colores;
* tokens;
* estados;
* breakpoints;
* comportamiento responsive;
* comportamiento del teclado;
* focus management;
* mensajes de error;
* lógica condicional;
* animaciones;
* persistencia;
* estructura de componentes;
* nomenclatura;
* accesibilidad.

Proponer estructura conceptual de componentes:

* AppShell.
* SurveyHeader.
* ProgressIndicator.
* QuestionScreen.
* OptionCard.
* RatingScale.
* TextResponse.
* PrivacyDisclosure.
* ContactRequest.
* ReviewScreen.
* CompletionScreen.
* UrgentHelpModal.

No generar código, pero preparar el diseño para que pueda convertirse posteriormente en componentes HTML o React.

---

# 37. RESTRICCIONES TÉCNICAS

El prototipo inicial podrá publicarse en GitHub Pages únicamente con:

* datos ficticios;
* simulación de respuestas;
* local storage de demostración sin datos sensibles;
* rutas de prueba;
* contenido de demostración.

No diseñar GitHub Pages como solución final para almacenar:

* datos de salud;
* números de historia clínica;
* identificadores;
* información de contacto;
* comentarios reales;
* alertas de seguridad.

Añadir una etiqueta visible en modo demo:

**“Prototipo de demostración: no ingresar información real de pacientes.”**

---

# 38. CRITERIOS DE CALIDAD

El resultado debe cumplir:

* comprensión inicial en menos de 10 segundos;
* propósito visible sin hacer scroll;
* duración estimada visible;
* no más de una decisión principal por pantalla;
* una pregunta por pantalla, salvo grupos simples;
* máximo de 12 a 18 preguntas cerradas visibles por ruta típica;
* una o dos preguntas abiertas opcionales;
* interacción móvil fluida;
* progresión clara;
* ausencia de tecnicismos;
* respuesta con una sola mano;
* contraste AA;
* componentes consistentes;
* flujo adaptativo;
* privacidad comprensible;
* separación entre PREM y service recovery;
* diseño listo para validación.

---

# 39. ENTREGABLES FINALES

Generar:

1. arquitectura de información;
2. sitemap;
3. user flow completo;
4. flujos condicionales;
5. wireframes;
6. mockup high-fidelity;
7. prototipo interactivo;
8. Design System;
9. variables y design tokens;
10. componentes reutilizables;
11. variantes y estados;
12. layouts responsive;
13. documentación de accesibilidad;
14. especificaciones de contenido;
15. tabla de gobernanza de preguntas;
16. anotaciones de lógica;
17. rutas de prueba;
18. Developer Handoff;
19. pantalla de modo demo;
20. página de historial de versiones.

---

# 40. RESULTADO VISUAL ESPERADO

El resultado debe percibirse como un producto digital de salud:

* confiable desde el primer segundo;
* moderno sin ser experimental;
* humano sin ser informal;
* accesible sin parecer simplificado;
* elegante sin ser exclusivo;
* clínicamente serio sin parecer burocrático;
* fácil de responder sin sacrificar calidad de datos.

La idea emocional central es:

**“Mi experiencia fue escuchada, pude responder con facilidad y entiendo cómo esta información puede ayudar a mejorar la atención.”**

La idea estratégica institucional es:

**“Cada respuesta está diseñada para convertirse en información interpretable, priorizable y accionable.”**

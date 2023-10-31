<h1>Portfolio App</h1>

<p>Este es un proyecto de una aplicación de portafolio desarrollado con React Native. La aplicación permite a los usuarios visualizar información de perfiles personales, incluyendo gustos, una breve descripción y un enlace a su GitHub mediante un código QR. Además, cuenta con un modo oscuro.</p>

<h2>Características</h2>

<ul>
  <li><strong>Cambio de Perfil</strong>: Cambia entre diferentes perfiles para mostrar información variada.</li>
  <li><strong>Mostrar/Ocultar Gustos</strong>: Interacción para ver los gustos del perfil seleccionado.</li>
  <li><strong>Modo Oscuro</strong>: Opción para cambiar entre un tema claro y un tema oscuro.</li>
  <li><strong>Código QR</strong>: Muestra un código QR que redirige al perfil de GitHub del usuario.</li>
</ul>

<h2>Estructura del Código</h2>

<h3>Importaciones</h3>

<p>Importa los módulos necesarios de React, React Native y un módulo para generar códigos QR.</p>

<h3>Definición de Tipos</h3>

<ul>
  <li><code>Profile</code>: Define la estructura para los datos del perfil individual.</li>
  <li><code>Profiles</code>: Un objeto que almacena múltiples perfiles.</li>
</ul>

<h3>Datos de los Perfiles</h3>

<p>Inicialización de los datos de los perfiles de muestra (<code>persona1</code> y <code>persona2</code>).</p>

<h3>Componente Principal <code>PortfolioApp</code></h3>

<ul>
  <li><strong>Estados</strong>: Controla el perfil seleccionado, visibilidad de los gustos y modo oscuro.</li>
  <li><strong>Interfaz de Usuario</strong>: Renderiza los elementos de la interfaz como encabezado, imagen, descripción, etc.</li>
  <li><strong>Funcionalidades</strong>: Cambio de perfiles, toggle de gustos y cambio de tema.</li>
</ul>

<h3>Estilos (StyleSheet)</h3>

<p>Definiciones de estilos para los componentes de la UI, como tamaños, colores y disposiciones.</p>

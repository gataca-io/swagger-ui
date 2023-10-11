window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "/docs/studio-swagger.json",
    urls: [
      {url: "./docs/studio-swagger.json", name: "Gataca Studio"},
      {url: "./docs/nucleus-swagger.json", name: "Gataca Nucleus"},
      {url: "./docs/connect-swagger.json", name: "Gataca Connect"},
      {url: "/docs/certify-swagger.json", name: "Gataca Certify"},
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

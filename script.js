async function loadModel() {
    try {
      console.log("Cargando modelo...");
      const modelData = await (await fetch('./model.json')).json();
      this.model = await tf.loadLayersModel(tf.io.fromJSON(modelData));
      console.log("Modelo cargado");
    } catch (error) {
      console.error('Error cargando el modelo:', error);
      throw error;
    }
  }
  
  async function showCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: this.size, height: this.size },
      });
      this.currentStream = stream;
      this.video.srcObject = stream;
      this.processCameraFrame();
      this.predict();
    } catch (err) {
      console.error('Error al acceder a la cámara:', err);
      alert('No se pudo utilizar la cámara :(');
    }
  }
  
  async function processCameraFrame() {
    // El resto del código permanece igual
  }
  
  async function predict() {
    if (this.model) {
      // El resto del código permanece igual
    }
    requestAnimationFrame(this.predict.bind(this));
  }
  
  // Uso de las nuevas funciones
  async function main() {
    try {
      await loadModel();
      await showCamera();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  window.onload = main;
  
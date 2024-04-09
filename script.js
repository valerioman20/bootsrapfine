//effetto di dissolvenza al passaggio del mouse sulle immagini

 // Con il ciclo forEach itero ogni immagine
document.querySelectorAll('.col img').forEach(image => {
    image.addEventListener('mouseenter', () => {    // Quando il mouse entra nell'immagine, viene eseguito il seguente codice
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1.1)';
    });
    
    image.addEventListener('mouseleave', () => { // Quando il mouse esce dalll'immagine, viene eseguito il seguente codice
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1)';
    });
});

// Funzione per gestire l'intersezione con l'observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // La riga è visibile nel viewport
        entry.target.classList.add('row-visible'); // Aggiungo una classe per visualizzare la riga
      }
    });
  }
  
  // Opzioni per l'IntersectionObserver
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger quando almeno il 50% dell'elemento è visibile
  };
  
  // Seleziono tutte le righe delle immagini che devono essere osservate
  const rowsToObserve = document.querySelectorAll('.container-fluid .row');
  
  // Crea un IntersectionObserver per ciascuna riga delle immagini
  const imageRowsObserver = new IntersectionObserver(handleIntersection, options);
  
  // Registro ogni riga delle immagini per l'osservazione
  rowsToObserve.forEach(row => {
    imageRowsObserver.observe(row);
  });
  
const CLOSED_TIMESTAMP = Date.now() - 1;

function checkClosed() {
  if (Date.now() > CLOSED_TIMESTAMP) {
    displayClosedOverlay();
  } else {
    window.setTimeout(checkClosed, 1000);
  }
}
checkClosed();

function displayClosedOverlay() {
  window.localStorage && window.localStorage.clear();

  document.body.innerHTML = `
    <div class="bg-green-900 h-screen v-screen text-white text-center flex flex-col items-center justify-center">
      <img src="logo.jpg" alt="Logo de La Chouette Coop" class="h-40" />

      <p class="text-4xl font-bold mt-6 mb-4">
        Le Lab est fermé pour aujourd'hui.
      </p>

      <p class="text-xl">
        Les commandes via ce site sont possibles :
        <ul class="text-xl">
          <li>de <strong>~13h à 16h</strong> les mercredi, jeudi et vendredi</li>
          <li>de <strong>~10h à 14h</strong> le samedi</li>
        </ul>
      </p>

      <p class="max-w-md mt-6 text-sm">
        Cette limitation permet de s'assurer que les commandes sont passées avec un état des stocks précis <strong>au moment de l'ouverture des commandes</strong>.<br>
        Rappel : Le stock affiché n'est pas un stock en temps réel.
      </p>
    </div>
  `;
}

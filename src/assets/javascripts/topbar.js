// Nous créons les références pour notre menu et l'icône du menu :
const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
// Cette propriété permettra de savoir si le menu est ouvert :
let isMenuOpen = false;
// Cette propriété permettra de savoir si le menu mobile est créé :
let mobileMenuDom;
//Pour fermer le menu il suffit d'enlever la classe open sur le menu :
const closeMenu = () => {
  mobileMenuDom.classList.remove("open");
};

//Nous créons une div et nous ajoutons la calsse mobile-menu.
// Nous empêchons la fermeture du menu sur un clic à l'intérieur.
// Nous y clonons ensuite les liens du menu normal.
const createMobileMenu = () => {
  mobileMenuDom = document.createElement("div");
  mobileMenuDom.classList.add("mobile-menu");
  mobileMenuDom.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  mobileMenuDom.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMenuDom);
};

//Si le menu n'est pas créé, nous le créons.
// Dans tous les cas nous l'ouvrons en ajoutant la classe open :
const openMenu = () => {
  if (!mobileMenuDom) {
    createMobileMenu();
  }
  mobileMenuDom.classList.add("open");
};

// Permet d'ouvrir ou de fermer le menu en fonction de son état :
const toggleMobileMenu = (event) => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

// Un clic sur l'icone va ouvrir ou fermer le menu
// et empêcher la propagation de l'événement à window :
iconMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

// Nous récupérons les clics sur window pour fermer le menu.
window.addEventListener("click", () => {
  if (isMenuOpen) {
    toggleMobileMenu();
  }
});

// Si la fenêtre est agrandie et qu'elle dépasse 480px de largeur
// Alors nous fermons le menu si il ets ouvert :
window.addEventListener("resize", (event) => {
  if (window.innerWidth > 480 && isMenuOpen) {
    toggleMobileMenu();
  }
});

/* ----------------------------------------------
    Exercices JavaScript : animer avec
    la bibliothèque GSAP
   ----------------------------------------------
    Installer GSAP
   ---------------------------------------------- */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/* -----------------------
    Exercice 1
   -----------------------
    Déplacer l'item 1 de 100px vers la gauche
    durant 3 secondes
   ----------------------- */
const jsExercise1 = document.querySelector("#js-exercise-1");
gsap.to(jsExercise1, { x: "100px", duration: 3 });

/* -----------------------
    Exercice 2
   -----------------------
    Effectuer une rotation de l'item 2 de 45 degrés
    durant 2 secondes
    après un délai de 2 secondes
   ----------------------- */
const jsExercise2 = document.querySelector("#js-exercise-2");
gsap.to(jsExercise2, { rotate: 45, duration: 2, delay: 2 });
/* -----------------------
    Exercice 3
   -----------------------
    Changer l'item 3 d'échelle (75%)
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
const jsExercise3 = document.querySelector("#js-exercise-3");
gsap.to(jsExercise3, { scale: 0.75, opacity: 0.5, duration: 2, delay: 1 });
/* -----------------------
    Exercice 4
   -----------------------
    Rétablir l'item 4 DEPUIS une échelle de 75%
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
const jsExercise4 = document.querySelector("#js-exercise-4");
gsap.from(jsExercise4, { scale: 0.75, opacity: 0.5, duration: 2, delay: 1 });
/* -----------------------
    Exercice 5 (timeline)
   -----------------------
    Déplacer l'item 5 de -100px vers la gauche
    durant 3 secondes
    PUIS effectuer une rotation de l'item 5 de 45 degrés
    durant 2 secondes après un délai de 1 seconde
    PUIS déplacer l'item 5 de 100px vers le haut
    durant 2 secondes après un délai de 1 seconde
   ----------------------- */
const jsExercise5 = document.querySelector("#js-exercise-5");
const tl = gsap.timeline();
tl.to(jsExercise5, { x: -100, duration: 2 });
tl.to(jsExercise5, { rotate: 45, duration: 2, delay: 1 });
tl.to(jsExercise5, { y: -100, duration: 2, delay: 1 });
/* -----------------------
    Exercice 6 (timeline)
   -----------------------
    Déplacer l'item 6 de 100px vers le bas
    durant 3 secondes
    ET SIMULTANEMENT changer l'item 6 d'échelle (75%)
    durant 5 secondes
   ----------------------- */
const jsExercise6 = document.querySelector("#js-exercise-6");
tl.to(jsExercise6, { y: 100, duration: 3 }, 0);
tl.to(jsExercise6, { scale: 0.75, duration: 5 }, 0);
/* -----------------------
    Exercice 7 (repeat + yoyo)
   -----------------------
    Effectuer une rotation de l'item 7 de 135 degrés
    durant 2 secondes
    avec un easing elastic.out
    et répéter ce mouvement à l'infini
   ----------------------- */
const jsExercise7 = document.querySelector("#js-exercise-7");
tl.to(
  jsExercise7,
  { rotate: 135, duration: 2, ease: "elastic.out", repeat: -1 },
  0
);
/* -----------------------
    Exercice 8
   -----------------------
    Réaliser une animation libre
    lorsque le bouton est cliqué
   ----------------------- */
const jsExercise8 = document.querySelector("#js-exercise-8");
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const tl = gsap.timeline();
  tl.to(
    jsExercise8,
    { rotate: 135, duration: 2, ease: "elastic.out", yoyo: true },
    0
  );
});

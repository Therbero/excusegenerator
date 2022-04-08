/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excusestart = [
    "Thanos",
    "LeChuck",
    "Kerrigan",
    "Captain Hook",
    "Scar",
    "Trump",
    "Maléfica",
    "Gárgamel",
    "Sephirot",
    "Arthas"
  ];
  let excusemid = [
    " chasqueó los dedos ",
    " hizo vudú ",
    " envió sus tropas ",
    " ensartó como una puerca guarrería ",
    " venció en el concurso de eructos ",
    " consiguió vencer a la maestra de la espada de meleé island ",
    " encontró el big woop ",
    " se comió a los empleados ",
    " vaporizó a los trabajadores ",
    " sus hienas se comieron a todos "
  ];
  let excusefinish = [
    "y por lo tanto no tenemos gente",
    "y por lo tanto estamos probando a monos",
    "entonces esto es un contestador automático, por favor deje su mensaje al escuchar la señal, piiiii",
    "y entonces no podemos hacer más",
    "y por todo esto es por lo que sus padres son hermanos",
    "por lo tanto es por lo que le voy a... Mire detrás de usted, un mono de tres cabezas",
    "y desde entonces hemos dejado a cargo un pájaro y nos hemos ido a la mar",
    "socorro, estoy atrapado aquí, llame a la policía",
    "y colorín colorado este cuento se ha acabado",
    "y como ahora es el soberano nos ha ordenado que no trabajemos"
  ];
  let exs = Math.floor(Math.random() * 10);
  let exm = Math.floor(Math.random() * 10);
  let exf = Math.floor(Math.random() * 10);

  document.write(excusestart[exs] + excusemid[exm] + excusefinish[exf]);
};

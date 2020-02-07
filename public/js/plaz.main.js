/* --------------------------------------------------------------------------------
 *	 Launch NavBar_size function after load event */
onLoad(() => {
  const navBar_container = $a(".nav-bar");
  navBar_container.forEach(navbar_found => {
    if (window.innerWidth >= 767) {
      if (!navbar_found.querySelector(".toggle")) {
        if (!navbar_found.querySelector(".logo a i")) {
          navbar_found.classList.add("padding-navBar");
        } else {
          navbar_found.classList.add("padding-navBar-small");
        }
      } else {
        if (!navbar_found.querySelector(".search-items")) {
          navbar_found.classList.add("padding-navBar-small");
        }
      }
    } else {
      if (!navbar_found.querySelector(".toggle")) {
        if (!navbar_found.querySelector(".logo a i")) {
          navbar_found.classList.add("padding-navBar-m");
        } else {
          navbar_found.classList.add("padding-navBar-small-m");
        }
      }
    }
  });
});


/*
 * =================================================================================
 *
 *	 Disable preventDefault for all 'a' elements with the .a-disabled class
 *
 * --------------------------------------------------------------------------------
 */
onLoad(() => {
  let disabled_items = $a(".a-disabled");
  for (let i = 0; i < disabled_items.length; i++) {
    disabled_items[i].addEventListener("click", e => {
      e.preventDefault();
    });
  }
})
/* ============================================================================= */

// ================================================================================
//                                     JQuery
// ================================================================================
$(document).ready(function() {
  function toggleAction(e) {
    // let navBar = e.target.parentNode.parentNode;
    // Menu icon or close depending on the active class
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .find("a")
        .html('<i class="a-dehaze"></i>');
    } else {
      $(this).addClass("active");
      $(this)
        .find("a")
        .html('<i class="a-clearclose"></i>');
    }
    // Hide and show action Toggle Hide
    $(this)
      .parent()
      .find(".toggle-hide")
      .slideToggle(100);
  }

  $(".toggle").on("click", toggleAction);
});

/*
 * =================================================================================
 *
 *	 Forms Input Line
 *
 * --------------------------------------------------------------------------------
 */
/*=================================================================================
 *	 Controla el comportamiento de las clases que crean las anumaciones de movimiento
 *  en las etiquetas LABEL
 * --------------------------------------------------------------------------------*/
onLoad(() => {
  // Seleccionar todos los elementos tipo INPUTS del DOM con la clase del FORM
  const formItem = $a(".form-item-line input");

  // INPUTS ITEMS
  for (let i = 0; i < formItem.length; i++) {

    // Resetear los input cada que recarge la página
    formItem[i].value = "";

    if (formItem[i].type === 'checkbox') {
      formItem[i].parentNode.classList.add('item-checkbox')
    }

    // Validar si los INPUT son de tipo NUMBER
    if (formItem[i].type === "date" || formItem[i].type === "time") {
      formItem[i].parentNode
        .querySelector("label")
        .classList.add("active-placeholder");
    }
    // Validar si el INPUT contiene un valor PLACEHOLDER
    if (formItem[i].placeholder.trim() != "") {
      formItem[i].parentNode
        .querySelector("label")
        .classList.add("active-placeholder");
    }
    if (formItem[i].type != 'checkbox') {
      // FOCUS en el INPUT
      formItem[i].addEventListener("focus", e => {
        e.target.parentNode.querySelector("label").classList.add("active");
      });
      // Al quitar el foco al input
      formItem[i].addEventListener("blur", e => {
        // Validar si hay un error de restricción INVALID
        if (e.target.type === "number" || e.target.type === "url") {
          if (!e.target.checkValidity()) {
            return null;
          }
        }
        if (e.target.value.trim() === "") {
          e.target.parentNode.querySelector("label").classList.remove("active");
        }
      });
    }
  }
});

/*
 * =================================================================================
 *
 *	 Colocar Icono a etiquetas SELECT una ves carger la página
 *
 * --------------------------------------------------------------------------------
 */
onLoad(() => {
  // Seleccionar todos los elementos tipo SELECT del DOM
  const formItemOption = $a(".form-item-line select");
  // Iterar cada elemento seleccionado
  for (let i = 0; i < formItemOption.length; i++) {
    // Agregar la clase [active-placeholder] a LABEL hermano de los elementos SELECT
    $q1(formItemOption[i].parentNode, "label").classList.add(
      "active-placeholder"
    );

    // Crear elemento SVG en una variable
    let addSVG = document.createElement("svg");
    // Agregar el elemento SVG como hermano de los SELECT
    formItemOption[i].parentNode.appendChild(addSVG);

    // Cuando ya allan cargado los elemeton SVG
    if ($q1(formItemOption[i].parentNode, "svg")) {
      let selectSvgIcon;

      if (!formItemOption[i].disabled) {
        // elemento SVG que incertaremos en el SELECT
        selectSvgIcon =
          '<svg class="arrowDown" height="15" width="15" viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, .7)" d="M23.62,1.18,22.83.39A1.33,1.33,0,0,0,21,.39l-9,9-9-9a1.33,1.33,0,0,0-1.86,0l-.79.79A1.32,1.32,0,0,0,.38,3L11.07,13.75a1.35,1.35,0,0,0,.93.43h0a1.35,1.35,0,0,0,.93-.43L23.62,3.06a1.35,1.35,0,0,0,0-1.88Z"></path></svg>';
      } else {
        // elemento SVG que incertaremos en el SELECT
        selectSvgIcon =
          '<svg class="arrowDown" height="15" width="15" viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, .4)" d="M24,1.3V2.41a1.35,1.35,0,0,1-1.33,1.33H1.3A1.34,1.34,0,0,1,0,2.44V1.33A1.35,1.35,0,0,1,1.33,0H22.7A1.34,1.34,0,0,1,24,1.3Z"></path></svg>';
      }
      // Remplazar el elemento SVG con nuestra estructura del elemento
      $q1(formItemOption[i].parentNode, "svg").outerHTML = selectSvgIcon;
    }
  }
});

/*
 * =================================================================================
 *
 *	 Selectores
 *
 * --------------------------------------------------------------------------------
 */
// =>.querySelector()
function $q1(elemnt, selector) {
  return elemnt.querySelector(selector);
}
// =>.querySelectorAll()
function $qa(elemnt, selector) {
  return elemnt.querySelectorAll(selector);
}
// =>document.querySelector()
function $1(selector) {
  return document.querySelector(selector);
}
// =>document.querySelectorAll()
function $a(selector) {
  return document.querySelectorAll(selector);
}
function onLoad(fun){
  window.addEventListener('load', fun);
};
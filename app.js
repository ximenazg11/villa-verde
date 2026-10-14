    /* ==========================================
    MENÚ HAMBURGUESA
    ========================================== */

    const btnMenu = document.getElementById("btnMenu");
    const cerrarMenu = document.getElementById("cerrarMenu");
    const menuLateral = document.getElementById("menuLateral");
    const overlayMenu = document.getElementById("overlayMenu");


    if (btnMenu) {

        btnMenu.addEventListener("click", () => {

            menuLateral.classList.add("activo");
            overlayMenu.classList.add("activo");

        });

    }


    if (cerrarMenu) {

        cerrarMenu.addEventListener("click", cerrarMenuLateral);

    }


    if (overlayMenu) {

        overlayMenu.addEventListener("click", cerrarMenuLateral);

    }


    function cerrarMenuLateral() {

        menuLateral.classList.remove("activo");
        overlayMenu.classList.remove("activo");

    }
    /* ==========================================
    SUBMENÚ DE BEBIDAS
    ========================================== */

    const botonesSubmenu =
        document.querySelectorAll(".submenu-boton");


    botonesSubmenu.forEach(boton => {

        boton.addEventListener("click", () => {

            const contenedor =
                boton.closest(".menu-item-desplegable");


            contenedor.classList.toggle("abierto");

        });

    });


    /* ==========================================
    CONTADOR DEL CARRITO
    ========================================== */

    function actualizarContadorCarrito() {

        const contador = document.getElementById("contadorCarrito");

        if (!contador) {
            return;
        }


        const carrito =
            JSON.parse(localStorage.getItem("carrito")) || [];


        let cantidadTotal = 0;


        carrito.forEach(item => {

            cantidadTotal += item.cantidad;

        });


        contador.innerText = cantidadTotal;

    }


    actualizarContadorCarrito();
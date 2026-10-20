const productos = [

    /* ==================================================
       BEBIDAS - REFRESCANTES
    ================================================== */

    {
        id: "kombucha",
        nombre: "Kombucha",
        categoria: "bebidas",
        subcategoria: "refrescantes",
        marca: "Villa Verde",
        presentacion: "473 ml",
        precio: 80,
        imagen: "img/kombucha.webp",
        descripcion: "Bebida fermentada refrescante elaborada artesanalmente.",
        ingredientes: "Agua filtrada, té verde, azúcar de caña y cultivo de kombucha.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "Consumir fría.",
        sabores: [
            "Jamaica",
            "Manzana Verde",
            "Guayaba",
            "Jengibre",
            "Frambuesa",
            "Durazno"
        ]
    },

    {
        id: "ginger-birra",
        nombre: "Ginger Birra",
        categoria: "bebidas",
        subcategoria: "refrescantes",
        marca: "Ginger Birra",
        presentacion: "355 ml",
        precio: 70,
        imagen: "img/ginger.webp",
        descripcion: "Bebida artesanal de jengibre elaborada con ingredientes naturales y levaduras salvajes.",
        ingredientes: "Agua, azúcar mascabado, jengibre (6.3%), limón y levaduras salvajes.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "cold-brew-vainilla",
        nombre: "Cold Brew",
        categoria: "bebidas",
        subcategoria: "refrescantes",
        marca: "Olivia Co.",
        presentacion: "355 ml",
        precio: 85,
        imagen: "img/coldbrew.webp",
        descripcion: "Bebida de café de especialidad preparada en frío, con leche deslactosada y sabor vainilla.",
        ingredientes: "Concentrado de café, agua alcalina, café de especialidad de Chiapas, leche de vaca deslactosada, jarabe sabor vainilla sin azúcar, benzoato de potasio y sorbato de potasio.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "Consumir fría.",
        sabores: [
            "Caramel Macchiato",
            "Vainilla"
        ]
    },

    {
        id: "felix-schorle",
        nombre: "Félix Schorle",
        categoria: "bebidas",
        subcategoria: "refrescantes",
        marca: "Félix",
        presentacion: "355 ml",
        precio: 45,
        imagen: "img/felixlata.webp",
        descripcion: "Bebida gasificada elaborada con jugo de fruta y agua mineral.",
        ingredientes: "Jugo de manzana, agua mineral gasificada, pulpa de fruta y fruta fermentada.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: [
            "Mandarina",
            "Maracuyá (No disponible)",
            "Guayaba",
            "Frambuesa",
            "Toronja",
            "Piña",
            "Manzana",
            "Cola"
        ]
    },


    /* ==================================================
       BEBIDAS - HEALTHY
    ================================================== */

    {
        id: "kefir",
        nombre: "Kéfir",
        categoria: "bebidas",
        subcategoria: "healthy",
        marca: "Vida Bebida",
        presentacion: "Presentación no especificada",
        precio: 95,
        imagen: "img/kefir.webp",
        descripcion: "Bebida fermentada elaborada a base de coco y cultivos vivos.",
        ingredientes: "Bebida vegetal de coco, cultivos vivos y goma xantana.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "Consumir frío.",
        sabores: null
    },

    {
        id: "super-shot-immune",
        nombre: "Super Shot Immune",
        categoria: "bebidas",
        subcategoria: "healthy",
        marca: "Vida Bebida",
        presentacion: "60 ml",
        precio: 70,
        imagen: "img/shotinmune.webp",
        descripcion: "Shot concentrado elaborado con kombucha, limón, jengibre y cúrcuma.",
        ingredientes: "Vinagre de kombucha, jugo de limón, jugo de jengibre, jugo de cúrcuma y 0.01% de sorbato de sodio.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "Consumir frío.",
        sabores: null
    },



    /* ==================================================
       BEBIDAS - CERVEZA
    ================================================== */

    {
        id: "lagermaiz",
        nombre: "Lagermaiz",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 70,
        imagen: "img/Lagermaiz.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "republica",
        nombre: "República",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 95,
        imagen: "img/Republica.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "caballo-blanco",
        nombre: "Caballo Blanco",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 95,
        imagen: "img/Caballo Blanco.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "hombre-pajaro",
        nombre: "Hombre Pájaro",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 70,
        imagen: "img/Hombre Pajaro.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "super-lupe",
        nombre: "Super Lupe",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 110,
        imagen: "img/Super Lupe.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "rafaga",
        nombre: "Ráfaga",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 90,
        imagen: "img/Rafaga.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "faro",
        nombre: "Faro",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 85,
        imagen: "img/Faro.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "macanuda",
        nombre: "Macanuda",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 70,
        imagen: "img/Macanuda.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "pueblito",
        nombre: "Pueblito",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "355 ml",
        precio: 95,
        imagen: "img/Pueblito.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },

    {
        id: "goldhute",
        nombre: "Goldhüte",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "473 ml",
        precio: 95,
        imagen: "img/goldhute.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },
     {
        id: "terricola",
        nombre: "Térricola",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "473 ml",
        precio: 85,
        imagen: "img/terricola.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },
    {
        id: "pie-grande",
        nombre: "Pie grande",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "473 ml",
        precio: 110,
        imagen: "img/piegrande.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },
    {
        id: "Mazorca Sónica",
        nombre: "Mazorca Sónica",
        categoria: "bebidas",
        subcategoria: "cerveza",
        marca: "Cervecería Hércules",
        presentacion: "473 ml",
        precio: 100,
        imagen: "img/mazorca.webp",
        descripcion: "Cerveza artesanal de Cervecería Hércules.",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "Consumir fría.",
        sabores: null
    },
    
    



    /* ==================================================
       GOURMET - CACAO
    ================================================== */

    {
    id: "cacao-polvo",
    nombre: "Cacao en polvo",
    categoria: "gourmet",
    subcategoria: "cacao",
    marca: "Pawa",

    // Presentación inicial
    presentacion: "50 gr",
    precio: 75,
    imagen: "img/cacao-polvo.webp",

    // Presentaciones disponibles
    presentaciones: [
        {
            presentacion: "50 gr",
            precio: 60,
            imagen: "img/cacao-polvo.webp"
        },
        {
            presentacion: "200 gr",
            precio: 185,
            imagen: "img/cacao-polvo.webp"
        }
    ],

    ingredientes: "100% cacao en polvo.",
    observaciones: "Conservar en un lugar fresco.",
    modoUso: "No especificado.",
    descripcion: "Cacao agroecológico rico en antioxidantes y fuente de hierro, magnesio y potasio.",
    sabores: null
},
    {
        id: "cacao-nibs-200g",
        nombre: "Cacao Nibs",
        categoria: "gourmet",
        subcategoria: "cacao",
        marca: "Pawa",
        presentacion: "200 gr",
        precio: 165,
        imagen: "img/cacao-nibs.webp",
        ingredientes: "100% cacao.",
        observaciones: "No especificadas.",
        modoUso: "No especificado.",
        descripcion: "Trozos de cacao tostado ricos en antioxidantes y fuente de hierro, magnesio y potasio.",
        sabores: null
    },


    /* ==================================================
       GOURMET - MIEL
    ================================================== */

    {
        id: "golden-milk",
        nombre: "Golden Milk",
        categoria: "gourmet",
        subcategoria: "miel",
        marca: "Pawa",
        presentacion: "500 gr",
        precio: 225,
        imagen: "img/Golden Milk.webp",
        ingredientes: "Miel cruda de abeja, cúrcuma, jengibre, canela, cardamomo, nuez moscada, pimienta y clavo.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "No especificado.",
        descripcion: "Mezcla artesanal elaborada con miel cruda de abeja y especias.",
        sabores: null
    },

    {
        id: "masala-chai",
        nombre: "Masala Chai",
        categoria: "gourmet",
        subcategoria: "miel",
        marca: "Pawa",
        presentacion: "500 gr",
        precio: 225,
        imagen: "img/masalachai.webp",
        ingredientes: "Miel cruda de abeja, canela, cardamomo, jengibre, anís estrella y clavo.",
        observaciones: "Conservar en un lugar fresco.",
        modoUso: "No especificado.",
        descripcion: "Mezcla artesanal de miel cruda de abeja con especias estilo chai.",
        sabores: null
    },

   {
    id: "miel-cruda",
    nombre: "Miel cruda de abeja",
    categoria: "gourmet",
    subcategoria: "miel",
    marca: "Pawa",

    // Presentación inicial
    presentacion: "50 gr",
    precio: 175,
    imagen: "img/mielcruda.webp",

    // Presentaciones disponibles
    presentaciones: [
        {
            presentacion: "150 gr",
            precio: 60  ,
            imagen: "img/mielcruda.webp"
        },
        {
            presentacion: "500 gr",
            precio: 175,
            imagen: "img/mielcruda.webp"
        }
    ],

    ingredientes: "Miel cruda de abeja.",
    observaciones: "No especificadas.",
    modoUso: "No especificado.",
    descripcion: "Miel cruda de abeja de la marca Pawa.",
    sabores: null
},

    {
        id: "miel-grande",
        nombre: "Miel infusionada 150gr",
        categoria: "gourmet",
        subcategoria: "miel",
        marca: "Pantry Clean Food",
        presentacion: "150 gr",
        precio: null,
        imagen: "img/Miel Trufada.webp",
        ingredientes: "Miel cruda de abeja y aceite de trufa blanca.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "Ideal para acompañar quesos y carnes saladas, así como para marinados o aderezos.",
        descripcion: "Producto aromático ideal como aderezo.",
       sabores: [
            "Miel antigripal",
            "Miel jengibre - cúrcuma",
            "Miel Trufada",
            "Miel citricos",
            "Miel ajo negro"
        ]
    },
    {
        id: "miel-ifusionada",
        nombre: "Miel infusionada 2 onzas",
        categoria: "gourmet",
        subcategoria: "miel",
        marca: "Pantry Clean Food",
        presentacion: "56,7 gr",
        precio: null,
        imagen: "img/Miel Citricos.webp",
        ingredientes: "Miel cruda de abeja y aceites esenciales de cáscara de limón, naranja y mandarina.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "Ideal para diluir en agua caliente con limón o utilizar como endulzante en yogurt y recetas.",
        descripcion: "Miel aromatizada con aceites esenciales de cítricos.",
        sabores: [
            "Miel antigripal",
            "Miel jengibre - cúrcuma",
            "Miel Trufada",
            "Miel citricos",
            "Miel ajo negro"
        ]
    },
    

    


    /* ==================================================
       GOURMET - MERMELADAS
    ================================================== */

    {
        id: "mermelada-sin-azucar",
        nombre: "Mermelada sin azúcar",
        categoria: "gourmet",
        subcategoria: "mermelada",
        marca: "Jappi",
        presentacion: "190 gr",
        precio: 145,
        imagen: "img/mermelada1.webp",
        ingredientes: "Frascos de diferentes sabores de mermelada Jäppi sin azúcar. Disfruta del sabor natural.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Sin conservadores ni colorantes. Sin azúcar añadida.",
        sabores: 
        [
               "Manzana",
            "Guayaba",
            "Mango ",
        ]
    },
     {
        id: "mermelada-sin-azucar-higo-frutos-rojos",
        nombre: "Mermelada sin azúcar",
        categoria: "gourmet",
        subcategoria: "mermelada",
        marca: "Jappi",
        presentacion: "190 gr",
        precio: 160,
        imagen: "img/mermelada2.webp",
        ingredientes: "Frascos de diferentes sabores de mermelada Jäppi sin azúcar. Disfruta del sabor natural.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Sin conservadores ni colorantes. Sin azúcar añadida.",
        sabores: 
        [
               "Higo",
            "Frutos rojos"
        ]
    },
    {
        id: "Mermelada gourmet",
        nombre: "Mermelada gourmet",
        categoria: "gourmet",
        subcategoria: "mermelada",
        marca: "Chula maría",
        presentacion: "275 gr",
        precio: 195,
        imagen: "img/mermelada gourmet.webp",
        ingredientes: "Ofrecen combinaciones dulces, picantes y frutales como Mango Kiwi + Guayaba, Jamaica + Vino Tinto, Horchata Dorada, Higo + Vino Blanco, Maracuyá + Habanero, Uchuva, y Fresa chunky, además de opciones saladas como Cebolla + Ajo + Especias.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Ideales para acompañar tablas de quesos, carnes frías, panes y postres.",
        sabores: 
        [
            "Mango kiwi + guayaba",
            "Jamaica vino tinto",
            "Guayaba + Jengibre",
            "Horchata dorada",
            "Mamey coco",
            "Mora azul + limón",
            "Higo + pera vino tinto",
            "Higo + vino blanco"
        ]
    },

    {
        id: "Mermelada Pumpkin Spice",
        nombre: "Mermelada Pumpkin Spice - De temporada",
        categoria: "gourmet",
        subcategoria: "mermelada",
        marca: "Chula maría",
        presentacion: "275 gr",
        precio: 195,
        imagen: "img/mermelada-pumpkin-spice.webp",
        ingredientes: "Ofrecen combinaciones dulces, picantes y frutales como Mango Kiwi + Guayaba, Jamaica + Vino Tinto, Horchata Dorada, Higo + Vino Blanco, Maracuyá + Habanero, Uchuva, y Fresa chunky, además de opciones saladas como Cebolla + Ajo + Especias.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Ideales para acompañar tablas de quesos, carnes frías, panes y postres.",
        sabores: null
    },
{
        id: "Mermelada guayaba",
        nombre: "Guayaba + canela - De temporada",
        categoria: "gourmet",
        subcategoria: "mermelada",
        marca: "Chula maría",
        presentacion: "275 gr",
        precio: 195,
        imagen: "img/guyabacane.webp",
        ingredientes: "Guayaba rosa, canela en trozo, azúcar, jugo de limón y pectina citrica",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Ideales para acompañar tablas de quesos, carnes frías, panes y postres.",
        sabores: null
    },
    /* ==================================================
       GOURMET - SALSAS
    ================================================== */

    {
        id: "salsa",
        nombre: "Salsas chutney",
        categoria: "gourmet",
        subcategoria: "salsas",
        marca: "Silphium",
        presentacion: "260 gr",
        precio: 160,
        imagen: "img/pimientos-chile-guero.webp",
        ingredientes: "Pimientos, chile güero, cebolla blanca, azúcar, agua, vinagre, cacahuate, sal, aceite de oliva, semilla de calabaza, pimienta negra, xantana, pimienta de Jamaica, laurel, tomillo y chile de árbol.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Salsa chutney con frutas, especias y un toque de chile, ideal para complementar, sazonar o botanear.",
         sabores: 
        [
         "Pimientos y chile güero", 
         "Piña a la thai", 
         "Piña habanero", 
         "Mango habanero", 
         "Fresa con chile morita", 
         "Salsa macha original", 
         "Salsa macha con miel de abeja" 
        ]
    },

    {
        id: "mermeladas-picosas",
        nombre: "Mermeladas picosas",
        categoria: "gourmet",
        subcategoria: "salsas",
        marca: "Chula maría",
        presentacion: "260 gr",
        precio: 195,
        imagen: "img/merpicosa.webp",
        ingredientes: "Piña, jícama, agua, azúcar, cacahuate, vinagre, jengibre, sal, aceite de coco, cúrcuma, curry, fenogreco, pimienta negra, chile de árbol, semilla de cilantro, xantana, pimienta de Jamaica, tomillo y clavo.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Salsa chutney con frutas, especias y un toque de chile, ideal para complementar, sazonar o botanear.",
        sabores: 
        [
         "Mango serrano", 
         "Maracuya + habanero", 
         "Jamaica mora-morita", 
         "Cebolla + ajo + especies", 
         "Piña + habanero", 
         "La salssa de mavi"
        ]
    },

    {
        id: "salsas",
        nombre: "Salsa chapumacha",
        categoria: "gourmet",
        subcategoria: "salsas",
        marca: "Chula maría",
        presentacion: "200 gr",
        precio: 150,
        imagen: "img/chapumacha.webp",
        ingredientes: "Mezcla de chiles, cacahuate, chapulines, nuez, semilla de girasol",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "",
        sabores: null 
    },
    {
        id: "salsas",
        nombre: "Salsa mavi",
        categoria: "gourmet",
        subcategoria: "salsas",
        marca: "Chula maría",
        presentacion: "200 gr",
        precio: 150,
        imagen: "img/salsamavi.webp",
        ingredientes: "Ajo,adobo, perejil, orégano, sazón con achiote",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "",
        sabores: null 
    },
{
        id: "salsas",
        nombre: "Salsa Macha",
        categoria: "gourmet",
        subcategoria: "salsas",
        marca: "Chula maría",
        presentacion: "200 gr",
        precio: 150,
        imagen: "img/salsamacha.webp",
        ingredientes: "Chile yahualica, chile de ancho, chile morita, cacahuate, arándano, nuez, semilla de calabaza, ajonjolí, semillas de girasol, ajo, aceite vegetal y sal",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "-",
        sabores: null 
    },
    /* ==================================================
       GOURMET - UNTABLES
    ================================================== */

    {
        id: "ghee",
        nombre: "Ghee",
        categoria: "gourmet",
        subcategoria: "untables",
        marca: "Pócima Vital",
        presentacion: "235 ml",
        precio: null,
        imagen: "img/ghee.webp",
        ingredientes: "100% mantequilla clarificada.",
        observaciones: "Conservar en un lugar fresco, seco y oscuro. Para alargar su vida se recomienda refrigerar.",
        modoUso: "No especificado.",
        descripcion: "Mantequilla clarificada.",
        sabores: null
    },

    {
        id: "tapenade",
        nombre: "Tapenade",
        categoria: "gourmet",
        subcategoria: "untables",
        marca: "Vida Foodie",
        presentacion: "200 gr",
        precio: 225,
        imagen: "img/tapenade-aceituna-negra.webp",
        ingredientes: "Aceitunas negras, alcaparras, aceite de olivo extra virgen, anchoas, ajo y mezcla de condimentos.",
        observaciones: "Sin gluten ni conservadores.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: [
            "Tapenade aceituna negra",
            "Tapenade aceituna verde",
            "Tapenade tomate deshidratado"
        ]
    },

    {
        id: "chimichurri-chile-arbol",
        nombre: "Chimichurri con chile de árbol",
        categoria: "gourmet",
        subcategoria: "untables",
        marca: "Pantry Clean Food",
        presentacion: "215 gr",
        precio: 170,
        imagen: "img/chimichurri-chile-arbol.webp",
        ingredientes: "Perejil, cebolla, chile de árbol, vinagre blanco, aceite vegetal, sal, pimienta y sazonador de pollo.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: null
    },
    
    {
        id: "pesto-de-tomate",
        nombre: "Pesto de tomate",
        categoria: "gourmet",
        subcategoria: "untables",
        marca: "Vida foodie",
        presentacion: "190 gr",
        precio: 210,
        imagen: "img/tapenade-tomate-deshidratado.webp",
        ingredientes: "Perejil, cebolla, chile de árbol, vinagre blanco, aceite vegetal, sal, pimienta y sazonador de pollo.",
        observaciones: "Conservar en refrigeración.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: null
    },
    {
        id: "butter",
        nombre: "Spread",
        categoria: "gourmet",
        subcategoria: "untables",
        marca: "Cacau & mani",
        presentacion: "230 gr",
        precio: null,
        imagen: "img/butter.webp",
        ingredientes: "Hecha con avellanas y almendras tostadas, cacao puro y monk fruit. Sin azúcar, sin aceites añadidos, sin ingredientes artificiales. ",
        observaciones: "Sabor intenso, textura suave y una opción real y consciente para quienes cuidan lo que comen.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: [
            "Crema de pistache",
            "Crema de avellanas con cacao",
            "Crema de almendra con matcha",
            "Crema de almendra con canela y galleta caramelizada",
            "Crema de almendra con mora azul",
            "Crema de almendras"
        ]
    },
    {
    id: "cajeta-sin-azucar",
    nombre: "Cajeta sin azúcar 300gr",
    categoria: "gourmet",
    subcategoria: "untables",
    marca: "No especificada",
    presentacion: "300 gr",
    precio: 115,
    imagen: "img/cajeta300g.webp",
    ingredientes: "Leche de cabra, jarabe de agave, polidextrosa, polioles, bicarbonato de sodio y saborizante artificial.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Cajeta elaborada sin azúcar.",
    sabores: null
},
{
    id: "cajeta-sin-azucar",
    nombre: "Cajeta sin azúcar 150gr",
    categoria: "gourmet",
    subcategoria: "untables",
    marca: "No especificada",
    presentacion: "150 gr",
    precio: 70,
    imagen: "img/cajeta150g.webp",
    ingredientes: "Leche de cabra, jarabe de agave, polidextrosa, polioles, bicarbonato de sodio y saborizante artificial.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Cajeta elaborada sin azúcar.",
    sabores: null
},


    


    /* ==================================================
       GOURMET - PANADERÍA
    ================================================== */

    {
        id: "crackers",
        nombre: "Crackers Breana's toast",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Breana's Toast",
        presentacion: "170 gr",
        precio: 165,
        imagen: "img/crackers.webp",
        ingredientes: "Yogur, harina de trigo, chabacano, pepita de calabaza, azúcar mascabado, ajonjolí, miel de abeja, avellana, linaza, semilla de girasol, jengibre cristalizado y sal de mar.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "Ideal como snack o acompañante de quesos y dips.",
        descripcion: "Pan tostado con semillas y frutos secos, crujiente y 100% natural. Elaborado artesanalmente sin conservadores.",
        sabores: [
            "Crackers Chabacano, avellana y jengibre ",
            "Crackers Romero y pasas",
            "Crackers Flor de sal y Dátil",
            "Crackers almendra y arándano"
        ]
    },
    {
        id: "flat-bread",
        nombre: "Flat bread",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Breana's Toast",
        presentacion: "Presentación no especificada",
        precio: 150,
        imagen: "img/flat.webp",
        ingredientes: "No especificados.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "No especificado.",
        descripcion: "Láminas de pan de masa madre crocantes elaboradas con harina orgánica de grano entero.",
          sabores: [
            "Flat bread aceite de oliva",
            "Flat bread sal de mar y pimienta"
        ]
    },

    {
        id: "galletas-mantequilla",
        nombre: "Galletas de mantequilla",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
      presentaciones: [
        {
            presentacion: "500 gr",
            precio: 90,
            imagen: "img/galletas mantequilla.webp"
        },
        {
            presentacion: "1 kilo",
            precio: 170,
            imagen: "img/galletas mantequilla.webp"
        }
    ],
        precio: 170,
        imagen: "img/galletas mantequilla.webp",
        ingredientes: "Harina de trigo, azúcar, mantequilla, huevo, extracto de vainilla y canela.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: null
    },

    {
        id: "galletas-amaranto",
        nombre: "Galletas de amaranto",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentacion: "5 piezas",
        precio: 60,
        imagen: "img/galletas amaranto.webp",
        ingredientes: "Harina de amaranto, harina de trigo, mantequilla, huevo y azúcar.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "Selecciona el sabor y la cantidad.",
        descripcion: "Galletas de amaranto de Rancho Villa Verde.",
        sabores: [
            "Nuez",
            "Chispas de chocolate",
            "Almendra",
            "Mix de semillas"
        ]
    },

    {
        id: "Crackers-ajonjoli",
        nombre: "Crackers ajonjolí",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentaciones: [
        {
            presentacion: "100 gr palitos",
            precio: 60,
            imagen: "img/ajonjoli.webp"
        },
        {
            presentacion: "100 gr Crackers",
            precio: 60,
            imagen: "img/crackers2.webp"
        }
    ],
        precio: 60,
        imagen: "img/ajonjoli.webp",
        ingredientes: "Ajonjolí, mantequilla, aceite de olivo, harina de trigo y biga.",
        observaciones: "No especificadas.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: null
    },
     {
        id: "Palitos de pan",
        nombre: "Palitos de pan con chimichurri",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentacion: "100 gr",
        precio: 85,
        imagen: "img/palitospan.webp",
        ingredientes: "Harina de trigo, mantequilla, leche de vaca, agua, azúcar, chimichurri, sal, levadura y huevo.",
        observaciones: "No especificadas.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: null
    },
    {
        id: "pan-masa-madre-hogaza",
        nombre: "Pan de hogaza de masa madre",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentacion: "1 kg",
        precio: 160,
        imagen: "img/panhogaza.webp",
        ingredientes: "Harina de trigo, agua, masa madre y sal",
        observaciones: "Mantener en refigeración o congelación",
        modoUso: "No especificado.",
        descripcion: "Sin conservadores",
            sabores: [
            "Natural",
            "Arandano con girasol",
            "Romero",
            "Nuez con pasas"
        ]
    },
     {
        id: "taralli",
        nombre: "Taralli",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentacion: "1 kg",
        precio: 45,
        imagen: "img/taralli.webp",
        ingredientes: "Harina de rigo, aceite de oliva extra virgen, vino blanco y sal.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "Ideales para acompañar quesos, carnes frías, aceitunas, sopas o cremas, cerveza artesanal y vino",
        descripcion: "Pequeños bocaditos crujientes y salados, adicionado con especias y hiervas aromáticas",
        sabores: [
            "Tradicional",
            "Pimineta negra",
            "Cebolla",
            "Paprica",
            "Oregano",
            "Ajo"
        ]
    },
 {
        id: "panque",
        nombre: "Panqué",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Rancho Villa Verde",
        presentacion: "1 pieza",
        precio: 490,
        imagen: "img/panque.webp",
        ingredientes: "Harina de trigo, azúcar, mantequilla, huevo, extracto de vainilla y canela.",
        observaciones: "Conservar en un lugar fresco y seco.",
        modoUso: "No especificado.",
        descripcion: "No especificada.",
        sabores: [
            "Calabaza (de temporada)",
            "Plátano con chocolate",
            "Limón lavanda",
            "Naranja cardamomo"
        ]
    },
 {
        id: "pan-de-caja",
        nombre: "Pan de caja de masa madre",
        categoria: "gourmet",
        subcategoria: "panaderia",
        marca: "Sanasoy",
        presentacion: "pieza",
        precio: 110,
        imagen: "img/pandecaja.webp",
        ingredientes: "Harina de trigo, agua, masa madre y sal",
        observaciones: "Mantener en refigeración o congelación",
        modoUso: "No especificado.",
        descripcion: "Sin conservadores",
        sabores: [
            "Hojuelas de avena",
            "Multigrano",
            "Arándano con chía"
        ]
    },


    /* ==================================================
       GOURMET - TÉ E INFUSIONES PREMIUM
    ================================================== */

    {
        id: "te-e-infusiones",
        nombre: "Té e ifusiones en frasco",
        categoria: "gourmet",
        subcategoria: "te-infusiones",
        marca: "Noviunio",
        presentacion: "150 gr",
        precio: 295,
        imagen: "img/tefrasco.webp",
        ingredientes: "Fresa, arándanos, cereza e hibiscus.",
        observaciones: "Tisana frutal intensa y jugosa, con notas ácidas y dulces balanceadas.",
        modoUso: "No especificado.",
        descripcion: "Tisana premium de frutos rojos.",
          sabores: [
            "Lavanda manzanilla",
            "Frutos rojos",
            "Fresa y menta",
            "Frutos y romero",
            "Frutas",
            "Ponche (De temporada)"
        ]
        
    },

    {
        id: "Té-e-ifusiones-bolsa",
        nombre: "Té e ifusiones 50gr",
        categoria: "gourmet",
        subcategoria: "te-infusiones",
        marca: "Noviunio",
        presentacion: "50 gr",
        precio: 130,
        imagen: "img/te50g.webp",
        ingredientes: "No especificados.",
        observaciones: "No especificadas.",
        modoUso: "No especificado.",
        descripcion: "Tisana premium de frutos rojos.",
          sabores: [
             "Lavanda manzanilla",
            "Frutos rojos",
            "Fresa y menta",
            "Frutos y romero",
            "Frutas",
            "Ponche (De temporada)"
        ]
    },




    /* ==================================================
       NUEVOS PRODUCTOS
    ================================================== */

 {
        id: "Mermelada Pumpkin Spice",
        nombre: "Mermelada Pumpkin Spice - De temporada",
        categoria: "nuevos",
        subcategoria: "mermelada",
        marca: "Chula maría",
        presentacion: "190 gr",
        precio: 180,
        imagen: "img/mermelada-pumpkin-spice.webp",
        ingredientes: "Ofrecen combinaciones dulces, picantes y frutales como Mango Kiwi + Guayaba, Jamaica + Vino Tinto, Horchata Dorada, Higo + Vino Blanco, Maracuyá + Habanero, Uchuva, y Fresa chunky, además de opciones saladas como Cebolla + Ajo + Especias.",
        observaciones: "Refrigerar una vez abierto.",
        modoUso: "No especificado.",
        descripcion: "Ideales para acompañar tablas de quesos, carnes frías, panes y postres.",
        sabores: null
    },

/* ==================================================
   CHARCUTERÍA - QUESOS
================================================== */

{
    id: "provolone",
    nombre: "Provolone",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "No especificada",
    presentacion: "450 gr",
    precio: 125,
    imagen: "img/provolone.webp",
    ingredientes: "Leche de vaca pasteurizada, sal yodada, cloruro de calcio, cuajo y cultivos lácticos.",
    observaciones: "Mantener en refrigeración.",
    modoUso: "No especificado.",
    descripcion: "Queso de pasta hilada de textura cremosa ahumado artesanalmente.",
    sabores: null
},

{
    id: "chihuahua-neole-250g",
    nombre: "Chihuahua",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Neolé",
   presentaciones: [
        {
            presentacion: "250 gr",
            precio: 100,
            imagen: "img/queso chihuahua.webp"
        },
        {
            presentacion: "500 gr",
            precio: 180,
            imagen: "img/queso chihuahua.webp"
        }
    ],
    precio: 100,
    imagen: "img/queso chihuahua.webp",
    ingredientes: "Leche pasteurizada, cultivos lácticos, cloruro de calcio y annatto. Algunas variedades pueden contener hierbas italianas, arándano y nuez.",
    observaciones: "Conservar en refrigeración. Precio por confirmar.",
    modoUso: "Ideal para botana y gratinar.",
    descripcion: "Queso color amarillo marfil, con olor y sabor suave, ligeramente ácido y de textura cremosa.",
    sabores: [
        "Hierbas italianas",
        "Arándano con nuez",
       "Ajo y pimienta",
        "Cebolla y chile",
        "Natural"
    ]
},

{
    id: "provenzano-neole-350g",
    nombre: "Provenzano",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Neolé",
    presentacion: "350 gr",
    precio: 175,
    imagen: "img/provenzano-neole-350g.webp",
    ingredientes: "Leche pasteurizada, cultivos lácticos, calcio, cuajo y sal.",
    observaciones: "Conservar en refrigeración. Precio por confirmar.",
    modoUso: "Ideal para fundir y gratinar en pastas, pizzas y otros platillos.",
    descripcion: "Queso de pasta hilada, textura blanda, color blanco marfil y sabor láctico con notas ahumadas. Maduración de dos meses.",
    sabores: null
},

{
    id: "trapola-neole-350g",
    nombre: "Trápola",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Neolé",
    presentacion: "350 gr",
    precio: 175,
    imagen: "img/trapola.1.webp",
    ingredientes: "No especificados.",
    observaciones: "Conservar en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "No especificada.",
   sabores: [
        "Vino tinto",
        "Mostaza",
       "Hinojo"
    ]
},

{
    id: "manchego-padilla-500g",
    nombre: "Manchego Padilla",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Quesos Padilla",
    presentacion: "500 gr",
    precio: 140,
    imagen: "img/manchego-padilla-500g.webp",
    ingredientes: "Leche de vaca entera pasteurizada, sal yodada, cloruro de calcio, cuajo, cultivos lácticos, extracto de annatto y conservador.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "No especificada.",
    sabores: null
},

{
    id: "queso-campestre-500g",
    nombre: "Queso campestre",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Quesos Padilla",
    presentacion: "500 gr",
    precio: 125,
    imagen: "img/campestre.webp",
    ingredientes: "Leche de vaca entera pasteurizada, sal yodada, cloruro de calcio, cuajo y cultivos lácticos. Algunas variedades pueden contener chile serrano, epazote o chile chipotle.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "No especificada.",
    sabores: [
        "Chile serrano",
        "Epazote",
        "Chile chipotle"
    ]
},

{
    id: "queso-panela-500g",
    nombre: "Queso panela",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Quesos Padilla",
    presentacion: "500 gr",
    precio: 110,
    imagen: "img/panela.webp",
    ingredientes: "Leche de vaca entera pasteurizada, cuajo, cloruro de calcio, cultivo láctico y sal yodada.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "No especificada.",
    sabores: null
},

{
    id: "queso-cabra-200g",
    nombre: "Queso de cabra",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "La Grand Chèvre",
    presentacion: "200 gr",
    precio: 80,
    imagen: "img/quesocabra.webp",
    ingredientes: "Leche pasteurizada de cabra, cultivos lácticos, cuajo y sal. Algunas variedades pueden contener chipotle, arándano, nuez, finas hierbas o semillas de sésamo.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "Ideal para ensaladas, tablas de quesos, pan o como complemento de otras preparaciones.",
    descripcion: "Queso elaborado con leche pasteurizada de cabra.",
    sabores: [
        "Natural",
        "Ceniza",
        "Finas hierbas",
        "Nuez",
        "Arándano con miel",
        "Chipotle"
    ]
},

{
    id: "mix-queso-cabra-240g",
    nombre: "Mix queso de cabra",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "La Grand Chèvre",
    presentacion: "240 gr",
    precio: 85,
    imagen: "img/mixqueso.webp",
    ingredientes: "Leche pasteurizada de cabra, cultivos lácticos, cuajo y sal. Puede contener chipotle, arándano, nuez, finas hierbas o semillas de sésamo.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "Ideal para ensaladas, tablas de quesos, pan o como complemento de otras preparaciones.",
    descripcion: "Selección de queso de cabra en diferentes sabores.",
    sabores: null
},

{
    id: "queso-brie-carol-260g",
    nombre: "Queso Brie",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Carol",
    presentacion: "260 gr",
    precio: 165,
    imagen: "img/queso-brie-carol-260g.webp",
    ingredientes: "Leche entera de vaca pasteurizada, sal yodada, cloruro de calcio, cuajo, cultivos lácticos y mohos de maduración.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "Ideal como entremés o postre acompañado de frutas, pan y vino.",
    descripcion: "Queso Brie elaborado con leche entera de vaca.",
    sabores: null
},

{
    id: "nata-quesos-alonso-250g",
    nombre: "Nata",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Delicias de la cuenca",
    presentacion: "250 gr",
    precio: 80,
    imagen: "img/nata.webp",
    ingredientes: "No especificados.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "Producto lácteo artesanal y perecedero.",
    sabores: null
},
{
    id: "queso-oaxaca",
    nombre: "Oaxaca",
    categoria: "charcuteria",
    subcategoria: "quesos",
    marca: "Padilla",
    presentacion: "500 gr",
    precio: 110,
    imagen: "img/oaxaca.1.webp",
    ingredientes: "Leche entera pasteurizada de cabra, sal yodada, cloruro de calcio, cultivos lácticos y cuajo.",
    observaciones: "Mantener en refrigeración. Precio por confirmar.",
    modoUso: "No especificado.",
    descripcion: "No especificada.",
    sabores: null
},



/* ==================================================
   CHARCUTERÍA - CARNES FRÍAS
================================================== */

/* ==================================================
   SNACKS - HORNEADOS
================================================== */

{
    id: "pepino-horneado-120g",
    nombre: "Chips de pepino horneado",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "120 gr",
    precio: 95,
    imagen: "img/pepino-horneado-120g.webp",
    ingredientes: "Camote blanco, extracto de pepino, aceite de canola y condimento.",
    observaciones: "Sabores: Sal y limón, adobado, salsas negras.",
    modoUso: "Listo para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Sal y limón",
        "Adobado",
        "Salsas negras"
    ]
},

{
    id: "jicama-horneada-120g",
    nombre: "Chips jícama horneada",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "120 gr",
    precio: 95,
    imagen: "img/jiacama-horneado-85g.webp",
    ingredientes: "Jícama, aceite de canola y condimento.",
    observaciones: "Sabores: Sal y limón, adobadas.",
    modoUso: "Lista para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Sal y limón",
        "Adobado",
        "Salsas negras"
    ]
},

{
    id: "papas-horneadas-100g",
    nombre: "Papas horneadas",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "100 gr",
    precio: 65,
    imagen: "img/papas.webp",
    ingredientes: "Papa, aceite de canola y condimento.",
    observaciones: "Sabores: Adobadas, chipotle, toreadas.",
    modoUso: "Listas para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Adobadas",
    
    ]
},

{
    id: "malanga-horneada-100g",
    nombre: "Malanga horneada",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "100 gr",
    precio: 65,
    imagen: "img/malanga-horneada-100g.webp",
    ingredientes: "Malanga, aceite de aguacate y condimento.",
    observaciones: "Sabores: Natural, fuego, hot nuts, chipotle.",
    modoUso: "Lista para consumir.",
    descripcion: "Producto vegano, gluten free.",
    sabores: [
        "Natural",
        "Fuego",
        "Hot Nuts",
    ]
},

{
    id: "platano-horneado-120g",
    nombre: "Plátano horneado",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "120 gr",
    precio: 75,
    imagen: "img/platano-horneado-120g.webp",
    ingredientes: "Plátano y aceite vegetal.",
    observaciones: "Natural.",
    modoUso: "Listo para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Natural"
    ]
},

{
    id: "camote-horneado-85g",
    nombre: "Camote horneado",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "85 gr",
    precio: 70,
    imagen: "img/camote..webp",
    ingredientes: "Camote y aceite de canola.",
    observaciones: "Natural.",
    modoUso: "Listo para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Natural"
    ]
},

{
    id: "betabel-horneado-85g",
    nombre: "Betabel horneado",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "85 gr",
    precio: 70,
    imagen: "img/betabel.webp",
    ingredientes: "Betabel y aceite de canola.",
    observaciones: "Natural.",
    modoUso: "Listo para consumir.",
    descripcion: "Botana horneada de betabel.",
    sabores: [
        "Natural"
    ]
},

{
    id: "mix-camote-betabel",
    nombre: "Mix camote y betabel",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Rancho Villa Verde",
    presentacion: "85 gr",
    precio: 70,
    imagen: "img/mixcamote.webp",
    ingredientes: "Betabel y camote",
    observaciones: "Natural.",
    modoUso: "Listo para consumir.",
    descripcion: "Botana horneada de betabel y camote.",
    sabores: [
        "Natural"
    ]
},
{
    id: "takis",
    nombre: "Takis",
    categoria: "snacks",
    subcategoria: "horneados",
    marca: "Villa Verde",
    presentacion: "100 gr",
    precio: 75,
    imagen: "img/takis.webp",
    ingredientes: "No especificados.",
    observaciones: "No especificadas.",
    modoUso: "Listos para consumir.",
    descripcion: "No especificada.",
    sabores: [
        "Coliflor fuego",
        "Brocolí salsas negras"
    ]
},


/* ==================================================
   SNACKS - ENCHILADOS
================================================== */

{
    id: "fresa-enchilada-250g",
    nombre: "Fresa enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 100,
    imagen: "img/fresaenchilada.webp",
    ingredientes: "Fresa deshidratada y mezcla de chiles en polvo.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Fresa deshidratada con chile.",
    sabores: null
},
{
    id: "skittles",
    nombre: "Skittles enchilados",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 80,
    imagen: "img/skittles.webp",
    ingredientes: "-",
    observaciones: "Consérvese en un lugar fresco y seco",
    modoUso: "Listo para consumir.",
    descripcion: "Dulces Skittles enchilados",
    sabores: null
},

{
    id: "pina-enchilada-250g",
    nombre: "Piña enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 100,
    imagen: "img/piñaenchilada.webp",
    ingredientes: "Piña deshidratada y mezcla de chiles en polvo.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Piña deshidratada con chile.",
    sabores: null
},
{
    id: "mango-enchilado-chocolate-250g",
    nombre: "Mango enchilado con chocolate",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: null,
    presentacion: "100 gr",
    precio: 65,
    imagen: "img/mango con chocolate.webp",
    ingredientes: null,
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: null,
    descripcion: null,
    sabores: null
},

{
    id: "jamaica-enchilada-200g",
    nombre: "Jamaica Enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: null,
    presentacion: "200 gr",
    precio: 100,
    imagen: "img/jamaica.webp",
    ingredientes: null,
    observaciones: null,
    modoUso: null,
    descripcion: null,
    sabores: null
},

{
    id: "tejocote-enchilado-250g",
    nombre: "Tejocote enchilado",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: null,
    presentacion: "250 gr",
    precio: 85,
    imagen: "img/tejocote.webp",
    ingredientes: "Pulpa de tejocote, azúcares añadidos (azúcar morena), tamarindo, ácido cítrico, sal yodada, chile molido, uva pasa, sazonador y benzonato de sodio como conservador.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: null,
    descripcion: null,
    sabores: null
},

{
    id: "mango-enchilado-250g",
    nombre: "Mango enchilado",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: null,
    presentacion: "250 gr",
    precio: 85,
    imagen: "img/mango-enchilado-250g.webp",
    ingredientes: "Mango deshidrtatado, (azúcar añadido (azúcar), ácido cítrico (dióxido de azufre), sémola de trigo, goma arábica, sal, chile en polvo (azúcar añadido), sabor mango, ácido cítrico, rojo 40, amarillo 6 y benzonato de sodio. Contiene sulfitos y gluten (sémola de trigo). Puede contener: cacahuate y nueces de arbol.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: null,
    descripcion: null,
    sabores: null
},
{
    id: "maiz-enchilado",
    nombre: "Maíz enchilado",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "—",
    presentacion: "200 gr",
    precio: 50,
    imagen: "img/maiz.webp",
    ingredientes: "Maíz, mezcla de chiles secos, sal de mar.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "—",
    descripcion: "—"
},
{
    id: "guayaba-enchilada",
    nombre: "Guayaba enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "Villa verde",
    presentacion: "—",
    precio: 85,
    imagen: "img/guayaba.webp",
    ingredientes: "—",
    observaciones: "—",
    modoUso: "—",
    descripcion: "—"
},
{
    id: "gomita-pepino-enchilado",
    nombre: "Gomita de pepino enchilado",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "—",
    presentacion: "250 gr",
    precio: 55,
    imagen: "img/pepino enchilado.webp",
    ingredientes: "—",
    observaciones: "—",
    modoUso: "—",
    descripcion: "—"
},
{
    id: "gomita-manzana-verde-enchilada",
    nombre: "Gomita  de manzana verde enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "—",
    presentacion: "250 gr",
    precio: 55,
    imagen: "img/gomita manzana enchilada.webp",
    ingredientes: "—",
    observaciones: "—",
    modoUso: "—",
    descripcion: "—"
},
{
    id: "gomita-aros-fresa-enchilada",
    nombre: "Gomita aro de fresa enchilada",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "—",
    presentacion: "250 gr",
    precio: 55,
    imagen: "img/gomita aro fresa.webp",
    ingredientes: "—",
    observaciones: "—",
    modoUso: "—",
    descripcion: "—"
},
{
    id: "gomita-chamoy",
    nombre: "Gomita chamoy",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "—",
    presentacion: "250 gr",
    precio: 55,
    imagen: "img/gomita chamoy.webp",
    ingredientes: "—",
    observaciones: "—",
    modoUso: "—",
    descripcion: "—"
},

{
    id: "gomita-sandia-250g",
    nombre: "Gomita sandía",
    categoria: "snacks",
    subcategoria: "enchilados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 55,
    imagen: "img/sandia.webp",
    ingredientes: "No especificados.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Gomitas sabor sandía.",
    sabores: null
},
/* ==================================================
   SNACKS - DESHIDRATADOS
================================================== */

{
    id: "mango-deshidratado",
    nombre: "Mango deshidratado",
    categoria: "snacks",
    subcategoria: "deshidratados",
    marca: "No especificada",
    presentacion: "Presentación no especificada",
    precio: 60,
    imagen: "img/mangodesh.webp",
    ingredientes: "No especificados.",
    observaciones: "No especificadas.",
    modoUso: "Listo para consumir.",
    descripcion: "No especificada.",
    sabores: null
},

{
    id: "manzana-deshidratada-45g",
    nombre: "Manzana deshidratada",
    categoria: "snacks",
    subcategoria: "deshidratados",
    marca: "Rancho Villa Verde",
    presentacion: "45 gr",
    precio: 60,
    imagen: "img/manzanadesh.webp",
    ingredientes: "Manzana.",
    observaciones: "No especificadas.",
    modoUso: "Lista para consumir.",
    descripcion: "Manzana deshidratada.",
    sabores: null
},

{
    id: "pina-deshidratada",
    nombre: "Piña deshidratada",
    categoria: "snacks",
    subcategoria: "deshidratados",
    marca: "No especificada",
    presentacion: "Presentación no especificada",
    precio: null,
    imagen: "img/piñades.webp",
    ingredientes: "No especificados.",
    observaciones: "No especificadas.",
    modoUso: "Lista para consumir.",
    descripcion: "No especificada.",
    sabores: null
},

{
    id: "mix-frutas-deshidratadas",
    nombre: "Mix de frutas deshidratadas",
    categoria: "snacks",
    subcategoria: "deshidratados",
    marca: "No especificada",
    presentacion: "Presentación no especificada",
    precio: 75,
    imagen: "img/mixdefruta.webp",
    ingredientes: "No especificados.",
    observaciones: "No especificadas.",
    modoUso: "Listo para consumir.",
    descripcion: "Mezcla de frutas deshidratadas.",
    sabores: null
},


/* ==================================================
   SNACKS - SALADOS
================================================== */

{
    id: "churrito-amaranto-100g",
    nombre: "Churrito de amaranto",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "Rancho Villa Verde",
    presentacion: "100 gr",
    precio: 45,
    imagen: "img/churrito-amaranto-100g.webp",
    ingredientes: "Harina de amaranto, harina de maíz, agua, aceite vegetal, sal y ácido cítrico.",
    observaciones: "Sabores: Sal y limón, chipotle, chile piquín.",
    modoUso: "Listo para consumir.",
    descripcion: "Producto vegano, gluten free. Elaborado sin conservadores, azúcar añadida y colorantes.",
    sabores: [
        "Sal y limón",
        "Chipotle",
        "Chile piquín"
    ]
},
{

id: "pretzel-100g",
    nombre: "Pretzel",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "—",
    presentacion: "100 gr",
    precio: 40,
    imagen: "img/pretzel-100g.webp",
    ingredientes: "Harina de trigo enriquecida sin blanquear (harina de trigo, niacida, hierro reducido, vitamina B1, acido fólico), extracto de malta, sal, aceite vegetal de soya.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Botana salada de pretzel."
},
{
    id: "mix-nueces-250g",
    nombre: "Mix de nueces",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 95,
    imagen: "img/mix-nueces-250g.webp",
    ingredientes: "Nuez de la India, almendra ahumada, nuez pecana y sal de mar.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Mezcla de nueces con sal de mar.",
    sabores: null
},

{
    id: "pistache-250g",
    nombre: "Pistache",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 100,
    imagen: "img/pistache-250g.webp",
    ingredientes: "Pistache y sal de mar.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Pistaches con sal de mar.",
    sabores: null
},

{
    id: "nuez-india-250g",
    nombre: "Nuez de la India con sal",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 110,
    imagen: "img/nuez-india-250g.webp",
    ingredientes: "Nuez de la India y sal de mar.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Nuez de la India con sal de mar.",
    sabores: null
},
{
    id: "nuez-india-250g",
    nombre: "Nuez de la India sin sal",
    categoria: "snacks",
    subcategoria: "salados",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 90,
    imagen: "img/nuez-india-250g.webp",
    ingredientes: "Nuez de la India.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Nuez de la India.",
    sabores: null
},

/* ==================================================
   SNACKS - DULCES
================================================== */

{
    id: "almendra-chocolate-250g",
    nombre: "Almendra con chocolate",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 140,
    imagen: "img/almendra con leche.webp",
    ingredientes: "Chocolate con leche/semiamargo, sacarosa, manteca de cacao, leche entera en polvo, licor de cacao, cacahuate, lecitina de soya, sal, vainilla natural, almendras, abrillantadores y selladores.",
    observaciones: "Sabores: Chocolate con leche, chocolate semiamargo.",
    modoUso: "Lista para consumir.",
    descripcion: "Almendras cubiertas con chocolate.",
    sabores: [
        "Chocolate con leche",
        "Chocolate semiamargo 55% de cacao"
    ]
},

{
    id: "pretzel-chocolate-250g",
    nombre: "Pretzel con chocolate",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 120,
    imagen: "img/pretzel-chocolate-250g.webp",
    ingredientes: "Chocolate con leche, sacarosa, manteca de cacao, leche entera en polvo, licor de cacao, cacahuate, lecitina de soya, sal, vainilla natural, pretzels, abrillantadores y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Pretzels cubiertos con chocolate.",
    sabores: null
},
{
    id: "domo",
    nombre: "Domo de chocolates",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "Pieza",
    precio: 350,
    imagen: "img/domo_de_chocolates.webp",
    ingredientes: "-",
    observaciones: "Almendra con chocolate blanco y matcha, almendra con chocolate semiamargo, pasita con chocolate con leche, nuez con chocolate con leche, nuez con chocolate con leche y cocoa",
    modoUso: "Listo para consumir.",
    descripcion: "770 gr",
    sabores: null
},


{
    id: "mini-enjambres-3pzas",
    nombre: "Mini enjambres",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "3 piezas",
    precio: 35,
    imagen: "img/mini-enjambres-3pzas.webp",
    ingredientes: "No especificados.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listos para consumir.",
    descripcion: "No especificada.",
    sabores: null
},

{
    id: "almendra-chococafe-matcha-250g",
    nombre: "Almendra chococafé",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 170,
    imagen: "img/chococafe.webp",
    ingredientes: "Chocolate semiamargo, sacarosa, licor de cacao, leche entera en polvo, manteca de cacao, cacahuate, lecitina de soya, cocoa en polvo, sal, vainilla natural, almendras, abrillantadores y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Almendras cubiertas con chocolate.",
    sabores: null
},
{
    id: "almendra-chococafe-matcha-250g",
    nombre: "Almendra matcha",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 170,
    imagen: "img/almendra chocolate matcha.webp",
    ingredientes: "Chocolate semiamargo, sacarosa, licor de cacao, leche entera en polvo, manteca de cacao, cacahuate, lecitina de soya, cocoa en polvo, sal, vainilla natural, almendras, abrillantadores y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Almendras cubiertas con chocolate.",
    sabores: null
},

{
    id: "pasita-chocolate-250g",
    nombre: "Pasita con chocolate y leche",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 125,
    imagen: "img/pasitaconchoclate.webp",
    ingredientes: "Chocolate con leche, sacarosa, manteca de cacao, leche entera en polvo, licor de cacao, cacahuate, lecitina de soya, sal, vainilla natural, pasita, abrillantadores y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Pasitas cubiertas con chocolate.",
    sabores: null
},

{
    id: "nuez-chocolate-250g",
    nombre: "Nuez con chocolate y leche",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 150,
    imagen: "img/nuez-chocolate-250g.webp",
    ingredientes: "Chocolate con leche/semiamargo, sacarosa, manteca de cacao, leche entera en polvo, licor de cacao, cacahuate, lecitina de soya, sal, vainilla natural, nueces, abrillantadores y selladores.",
    observaciones: "Sabores: Chocolate con leche, chocolate semiamargo, con cocoa.",
    modoUso: "Lista para consumir.",
    descripcion: "Nueces cubiertas con chocolate.",
    sabores: [
        "Chocolate con leche",
        "Chocolate semiamargo",
        "Con cocoa"
    ]
},



{
    id: "obleas-cajeta-140g",
    nombre: "Obleas rellenas",
    categoria: "snacks",
    subcategoria: "dulces",
    marca: "Dulces de Bernal",
    presentacion: "140 gr",
    precio: 50,
    imagen: "img/obleas-cajeta-140g.webp",
    ingredientes: "Leche entera de cabra, azúcar, jarabe de maíz, vainilla y bicarbonato de sodio. Oblea elaborada con harina de trigo, aceite de maíz, sal y agua.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listas para consumir.",
    descripcion: "Obleas rellenas con cajeta.",
    sabores: [
        "Nuez",
        "Café",
        "Arandano",
        "Chocolate",
        "Choco-menta",
        "Choco-nuez"
    ]
},


/* ==================================================
   SNACKS - SIN AZÚCAR
================================================== */

{
    id: "almendra-chocolate-sin-azucar-250g",
    nombre: "Almendra con chocolate sin azúcar",
    categoria: "snacks",
    subcategoria: "sin-azucar",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 140,
    imagen: "img/almendra con chocolate sin azucar.webp",
    ingredientes: "Chocolate oscuro sin azúcar, pasta de cacao, eritritol, inulina de achicoria, manteca de cacao, polidextrosa, lecitina de soya, almendra, goma arábiga y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Almendras cubiertas con chocolate oscuro sin azúcar.",
    sabores: null
},

{
    id: "nuez-chocolate-sin-azucar-250g",
    nombre: "Nuez con chocolate sin azúcar",
    categoria: "snacks",
    subcategoria: "sin-azucar",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 160,
    imagen: "img/nuez sin azuca y semiamargo.webp",
    ingredientes: "Chocolate oscuro sin azúcar, pasta de cacao, eritritol, inulina de achicoria, manteca de cacao, polidextrosa, lecitina de soya, nuez, goma arábiga y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Nueces cubiertas con chocolate oscuro sin azúcar.",
    sabores: null
},

{
    id: "pasita-chocolate-sin-azucar-250g",
    nombre: "Pasita con chocolate sin azúcar",
    categoria: "snacks",
    subcategoria: "sin-azucar",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 125,
    imagen: "img/pasita con chocolate.webp",
    ingredientes: "Chocolate oscuro sin azúcar, pasta de cacao, eritritol, inulina de achicoria, manteca de cacao, polidextrosa, lecitina de soya, pasita, goma arábiga y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Lista para consumir.",
    descripcion: "Pasitas cubiertas con chocolate oscuro sin azúcar.",
    sabores: null
},

{
    id: "arandano-chocolate-sin-azucar-250g",
    nombre: "Arándano con chocolate sin azúcar",
    categoria: "snacks",
    subcategoria: "sin-azucar",
    marca: "No especificada",
    presentacion: "250 gr",
    precio: 125,
    imagen: "img/arandano.webp",
    ingredientes: "Chocolate oscuro sin azúcar, pasta de cacao, eritritol, inulina de achicoria, manteca de cacao, polidextrosa, lecitina de soya, arándano, goma arábiga y selladores.",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "Listo para consumir.",
    descripcion: "Arándanos cubiertos con chocolate oscuro sin azúcar.",
    sabores: null
},




/* ==================================================
   HOGAR - AROMAS
================================================== */

{
    id: "ambientador-bou-250ml",
    nombre: "Ambientador",
    categoria: "hogar",
    subcategoria: "aromas",
    marca: "Bou",
    presentacion: "250 ml",
    precio: 320,
    imagen: "img/ambientador-bou-250ml.webp",
    ingredientes: "Alcohol potable, agua destilada, resina natural como fijador y fragancias libres de ftalatos con porcentaje de aceites esenciales.",
    observaciones: "Aromas: Piélago, toronja fresca, romero + verbena, sándalo + vainilla, bosque, lavanda y brisa boreal.",
    modoUso: "No especificado.",
    descripcion: "Ambientador elaborado con fragancias naturales y aceites esenciales.",
    sabores: [
        "Piélago",
        "Romero + verbena",
        "Sándalo + vainilla",
        "Toronja fresca",
        "Bosque",
        "Lavanda",
        "Brisa boreal"
    ]
},





/* ==================================================
   CUIDADO PERSONAL - JABONES
================================================== */

{
    id: "jabon-corporal-bou-112g",
    nombre: "Jabón corporal",
    categoria: "cuidado-personal",
    subcategoria: "jabones",
    marca: "Bou",
    presentacion: "112 gr",
    precio: 95,
    imagen: "img/jabon-corporal-bou-112g.webp",
    ingredientes: "Aceites saponificados de coco, oliva, ricino, manteca saponificada de cacao, spirulina y fragancia libre de ftalatos. Puede contener pulpa de aguacate, molienda de café, esencia de canela, pulpa de zanahoria, manteca de karité y extracto de rosa de castilla.",
    observaciones: "Aromas: Aguacate, café, rosas, terrazo, lavanda y zanahoria.",
    modoUso: "Producto artesanal de origen natural, no probado en animales.",
    descripcion: "Jabón corporal artesanal elaborado con ingredientes naturales.",
    sabores: [
        "Aguacate",
        "Café",
        "Rosas",
        "Terrazo",
        "Lavanda",
        "Zanahoria"
    ]
},
{
    id: "crema-corporal-bou-250ml",
    nombre: "Crema corporal",
    categoria: "cuidado-personal",
    subcategoria: "jabones",
    marca: "Bou",
    presentacion: "250 ml",
    precio: 280,
    imagen: "img/cremacorporal.webp",
    ingredientes: "Aceites saponificados de coco, oliva, ricino, manteca saponificada de cacao, spirulina y fragancia libre de ftalatos. Puede contener pulpa de aguacate, molienda de café, esencia de canela, pulpa de zanahoria, manteca de karité y extracto de rosa de castilla.",
    observaciones: "Aromas: Aguacate, café, rosas, terrazo, lavanda y zanahoria.",
    modoUso: "Producto artesanal de origen natural, no probado en animales.",
    descripcion: "Jabón corporal artesanal elaborado con ingredientes naturales.",
    sabores: null
},


/* ==================================================
   CUIDADO PERSONAL - SHAMPOO
================================================== */

{
    id: "shampoo-solido-bou-100g",
    nombre: "Shampoo sólido",
    categoria: "cuidado-personal",
    subcategoria: "shampoo",
    marca: "Bou",
    presentacion: "100 gr",
    precio: 185,
    imagen: "img/shampoo-solido-bou-100g.webp",
    ingredientes: "Isotionato de coco, manteca de karité, aceite de jojoba, aceite de argán, ácido esteárico, almidón de arroz, extractos naturales, proteínas, glicerina, aceites esenciales y fragancia sin ftalatos.",
    observaciones: "Variedades: Rizo de la tierra, cabello seco, cabello graso y fortaleza capilar.",
    modoUso: "Producto artesanal de origen natural, no probado en animales.",
    descripcion: "Shampoo sólido elaborado con ingredientes naturales para diferentes tipos de cabello.",
    sabores: [
        "Rizo de la tierra",
        "Cabello seco",
        "Cabello graso",
        "Fortaleza capilar"
    ]
},
{
    id: "acondicionador",
    nombre: "Acondicionador sólido",
    categoria: "cuidado-personal",
    subcategoria: "shampoo",
    marca: "Bio Sana",
    presentacion: "150 gr",
    precio: 185,
    imagen: "img/acondicionador.webp",
    ingredientes: "Aceites escenciales importados de árbol del té y eucalipto óxido de zinc, bicarbonato de socio, aceite de almendras dulces, bicarbonato de sodio, almidón de maíz,",
    observaciones: "Conservar en un lugar fresco y seco.",
    modoUso: "-",
    descripcion: "Producto elaborado sin sustancias químicas.",
    sabores: null 
},

/////acietes y vinagres\\\\\\\
{
    id: "vinagre-sidra-manzana-solarina-750ml",
    nombre: "Vinagre de sidra de manzana",
    categoria: "aceites-vinagres",
    subcategoria: "vinagres",
    marca: "Solarina",
    presentacion: "750 ml",
    precio: 115.00,
    imagen: "img/vinagre-sidra-manzana-solarina-750ml.webp",
    ingredientes: "Vinagre de sidra de manzana orgánico.",
    observaciones: "Producto orgánico sin filtrar ni pasteurizar.",
    modoUso: "—",
    descripcion: "—"
},
{
//vino\\\\\
id: "rosé-guaname-750ml",
    nombre: "Rosé",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: 370.00,
     imagen: "img/rose.webp",
    ingredientes: "Mezcla de uvas: 50% merlot, 25% malbec, 25% tempranillo.",
    observaciones: "—",
    modoUso: "Servir a 10º-12ºC.",
    descripcion: "Vino brillante color salmón. En nariz ofrece notas de fresa, cereza, frambuesa y frutas tropicales. En boca es fresco, con suave acidez y mineralidad."
},
{
    id: "blanc-sauvignon-guaname-750ml",
    nombre: "Blanc Sauvignon",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: null,
     imagen: "img/blanc-sauvignon.webp",
    ingredientes: "100% Sauvignon blanc.",
    observaciones: "—",
    modoUso: "Servir entre 8º-10ºC.",
    descripcion: "Vino blanco de color amarillo paja brillante. En nariz presenta notas florales y frutales como piña y pera. En boca muestra acidez media, buen equilibrio y alcohol moderado."
},
{
id: "rompope-guaname-500ml",
    nombre: "Rompope",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentaciones: [
        {
            presentacion: "500 ml",
            precio: 60,
            imagen: "img/rompope.webp"
        },
        {
            presentacion: "1 l",
            precio: 185,
            imagen: "img/rompope.webp"
        }
    ],
    precio: null,
     imagen: "img/rompope.webp",
    ingredientes: "Leche entera pasteurizada de vaca, azúcar, alcohol de caña de calidad, 7.5% de yema de huevo, fécula y extracto de vainilla.10% Alc. Vol.  ",
    observaciones: "Nota de Cata: Aromas a Flan napolitano y vainilla. Suave, ligero y envolvente al paladar. Balance entre dulzura y cremosidad.Disfrútalo derecho o en las rocas como digestivo. con tu café, jugo, smoothie, gelatinas, postres y cocteles. ",
    modoUso: "-",
    descripcion: "-"
},
{
id: "Merlot",
    nombre: "Merlot",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: null,
     imagen: "img/merlot.webp",
    ingredientes: "100% Merlot ",
    observaciones: "-",
    descripcion: "-"
},
{
id: "Syrah ",
    nombre: "Syrah",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: null,
     imagen: "img/syrah.webp",
    ingredientes: "100% Syrah ",
    observaciones: "-",
    descripcion: "-"
},
{
id: "Blend",
    nombre: "Blend",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: null,
     imagen: "img/blend.webp",
    ingredientes: "Mezcla de uvas: 30% tempranillo, 30% merlot, 20% Cabernet Sauvignon, 20% malbec. ",
    observaciones: "-",
    descripcion: "-"
},
{
id: "guaname 50",
    nombre: "GUANAMÉ 50",
    categoria: "bebidas",
    subcategoria: "vino",
    marca: "Guanamé",
    presentacion: "750 ml",
    precio: null,
     imagen: "img/50.webp",
    ingredientes: "Edición limitada de nuestra fiesta de vendimia 2025, conmemorando los 50 años del rancho Pájaro Azul.Es un ensamble de 4 varietales: 60% Syrah, 14% Tempranillo, 13% Merlot y 13% Malbec.",
    observaciones: "-",
    descripcion: "-"
},
//sazonador///
{
id: "sazonador",
    nombre: "Caldo de verdura",
   categoria: "gourmet",
subcategoria: "sazonadores",
    marca: "Pantry",
    presentacion: "200 gr",
    precio: 200,
     imagen: "img/caldoverduras.webp",
    ingredientes: "Queso parmesano, mezcla de verduras, hierbas de olor, especias, sal de grano, vino blanco, aceite de oliva",
    observaciones: "Mantener en un lugar seco y con el empaque cerrado",
    descripcion: "Hecho en méxico"
},
{
id: "sazonador",
    nombre: "Consomé de pollo",
    categoria: "gourmet",
subcategoria: "sazonadores",
    marca: "Pantry",
    presentacion: "200 gr",
    precio: 200,
     imagen: "img/consomepollo.webp",
    ingredientes: "pollo, mezcla de verduras, hierbas de olor, sal de grano, especias, vino blanco",
    observaciones: "Mantener en un lugar seco y con el empaque cerrado",
    descripcion: "Hecho en méxico"
},
//Encurtidos///
{
id: "conservas",
    nombre: "Pepinillos",
   categoria: "gourmet",
subcategoria: "conservas-encurtidos",
    marca: "Campoamor",
    presentacion: "345 gr",
    precio: 65,
     imagen: "img/pepinillos.webp",
    ingredientes: "vinagre, cebollita, especias como la mostaza, sal y aromas.",
    observaciones: "Muy al gusto centroeuropeo este pepinillo también denominado «sabor alemán», es perfecto como refrigerio acompañado por una cerveza. Degustado a temperatura fría (de frigorífico), realza todo el aroma y sabor de sus singulares.",
    descripcion: "Hecho en méxico"
},
{
id: "conservas-encurtidos",
    nombre: "Aceitunas",
  categoria: "gourmet",
subcategoria: "conservas-encurtidos",
    marca: "Jolca",
    presentacion: "230 gr",
    precio: 80,
     imagen: "img/aceitunas.webp",
    ingredientes: "Aceituna verde, agua, sal",
    observaciones: "Conocidas internacionalmente, las aceitunas verdes son el aperitivo saludable por excelencia, además de ser alimento de gran valor nutricional. Sus diferentes formatos y variedades se adaptan a ti en cada momento.",
    descripcion: "Hecho en méxico"
},
{
id: "chiles",
    nombre: "Chile güero cascabela",
  categoria: "gourmet",
subcategoria: "conservas-encurtidos",
    marca: "Villa verde gourmet",
    presentacion: "-",
    precio: 60,
     imagen: "img/chiles.webp",
    ingredientes: "Chile güero cascabela",
    observaciones: "-",
    descripcion: "Hecho en méxico"
},
]; 


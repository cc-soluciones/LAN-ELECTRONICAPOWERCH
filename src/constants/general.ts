export const name = "Electronicapower";
export const phone = "+56 9 7214 2601";
export const email = "contacto@electronicapower.cl";
export const whatsappUrl = `https://wa.me/${phone.replaceAll(" ", "").replaceAll("+", "")}?text=${encodeURIComponent(
    "Hola, me gustaría solicitar una cotización para un sistema solar."
)}`;
export const navigations = [
    {
        href : "/",
        label : "Inicio"
    },
    {
        href : "/nosotros",
        label : "Nosotros"
    },
    {
        href : "/productos",
        label : "Productos"
    },
    {
        href : "/servicios",
        label : "Servicios"
    },
    {
        href : "/contacto",
        label : "Contacto"
    },
];
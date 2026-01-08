import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    region: z.string().min(1, "La región es obligatoria"),
    email: z.string().email("Email inválido"),
    request: z.string().min(1, "El requerimiento es obligatorio"),
});

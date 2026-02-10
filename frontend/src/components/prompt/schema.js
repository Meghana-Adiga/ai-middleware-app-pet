/*
Define Prompt Form validation using zod
@author: Meghana Adiga
*/

import { z } from "zod";

export const promptFormSchema = z.object({
    prompt: z
        .string()
        .min(5, "Prompt must be atleast 5 characters. Please enter 5 or more characters to submit."),
    targetLanguage: z
        .string()
        .min(1, "Please select a valid target language from the dropdown options"),
});
/*
Handles user input and form validations
@author: Meghana Adiga
*/

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

import { promptFormSchema } from "./schema";
import { setRequest } from "../../app/requestSlice";

export default function PromptForm() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(promptFormSchema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Submitting ...")
        dispatch(
            setRequest({
                prompt: data.prompt,
                targetLanguage: data.targetLanguage,
            })
        );
    };
 
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 20}}>
            <div style={{ marginBottom: 10 }}>
                <label>
                    Prompt:
                    <textarea
                        rows={5}
                        placeholder="Enter your prompt"
                        {...register("prompt")} 
                        style={{ display: "block", width: "100%", marginTop: 4 }}
                />
                </label>
                
                {errors.prompt &&  (
                    <p style={{ color: "red", marginTop: 4 }}>{errors.prompt.message}</p>
                )}
            </div>

            <div style={{ marginBottom: 10 }}>
                <label>
                    Target Language:<select 
                    {...register("targetLanguage")}
                    style={{ display: "block", width: "50%", marginTop: 4  }}>
                        <option value="">Select Language</option>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </label>
                {errors.targetLanguage && (
                    <p style={{ color: "red", marginTop: 4 }}>{errors.targetLanguage.message}</p>
                )}
            </div>

            <button 
            type="submit" 
            disabled={!isValid}
            style={{ padding: "6px 12px", cursor: isValid? "pointer" : "not-allowed" }}
            >
                Submit
            </button>
        </form>
    );
}
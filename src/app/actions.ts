/**
 * @fileoverview This file contains server actions for the application.
 * Server actions are asynchronous functions that run on the server and can be called directly
 * from client-side components, simplifying data mutations and backend communication.
 * This file must start with the 'use server' directive.
 */

"use server";

import { generatePersonalizedBlessing, type GeneratePersonalizedBlessingInput } from "@/ai/flows/generate-personalized-blessing";

/**
 * A server action that calls the Genkit flow to generate a personalized blessing.
 * This function acts as a secure bridge between the client-side form and the server-side AI logic.
 *
 * @param {GeneratePersonalizedBlessingInput} input - The data from the blessing generator form,
 * including murtiName, userName, and userIntention.
 * @returns {Promise<{ blessing?: string; error?: string }>} An object containing either the
 * generated blessing message or an error message if the process fails.
 */
export async function getBlessingAction(input: GeneratePersonalizedBlessingInput): Promise<{ blessing?: string; error?: string }> {
  try {
    // Invoke the AI flow with the user's input.
    const result = await generatePersonalizedBlessing(input);
    // If successful, return the blessing message.
    return { blessing: result.blessingMessage };
  } catch (error) {
    // Log the error for debugging purposes.
    console.error(error);
    // Return a generic error message to the user for security.
    return { error: "An error occurred while generating your blessing. Please try again." };
  }
}

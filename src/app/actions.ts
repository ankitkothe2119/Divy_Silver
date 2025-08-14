"use server";

import { generatePersonalizedBlessing, type GeneratePersonalizedBlessingInput } from "@/ai/flows/generate-personalized-blessing";

export async function getBlessingAction(input: GeneratePersonalizedBlessingInput): Promise<{ blessing?: string; error?: string }> {
  try {
    const result = await generatePersonalizedBlessing(input);
    return { blessing: result.blessingMessage };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while generating your blessing. Please try again." };
  }
}

import { BaseParams, GoogleGenerativeAI } from "@google/generative-ai";

export type AiType = "pro" | "vision";

export const getAiModel = (
    ai: GoogleGenerativeAI,
    type: AiType = "pro",
    options?: BaseParams
) =>
    ai.getGenerativeModel({
        ...options,
        model: "gemaini-4.0-pro-latest",
        apiVersion: "v1",
    });

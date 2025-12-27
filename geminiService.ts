
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWaterRecommendation = async (
  usageType: string,
  peopleCount: number,
  preferences: string[]
) => {
  const prompt = `
    Eres un experto asesor de AquaMaria, una empresa de alquiler de sistemas de purificación de agua de alta gama.
    Basado en estos datos del cliente, recomienda el mejor equipo de nuestro catálogo (Dispensador Frío/Calor sin bidón, Filtro de Ósmosis Inversa bajo mesada, o Purificador sobre mesada).
    
    Datos del cliente:
    - Tipo de uso: ${usageType}
    - Cantidad de personas: ${peopleCount}
    - Preferencias: ${preferences.join(', ')}

    Proporciona una respuesta en formato JSON con la siguiente estructura:
    {
      "productName": "Nombre del producto recomendado",
      "reason": "Explicación de por qué es la mejor opción para ellos",
      "benefits": ["Beneficio 1", "Beneficio 2", "Beneficio 3"],
      "estimatedMonthlyPrice": "Precio estimado mensual"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            productName: { type: Type.STRING },
            reason: { type: Type.STRING },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedMonthlyPrice: { type: Type.STRING }
          },
          required: ["productName", "reason", "benefits", "estimatedMonthlyPrice"]
        }
      }
    });

    // Directly access the text property as it is a getter, not a function.
    const text = response.text;
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    return null;
  }
};
